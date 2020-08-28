const { Client, Collection } = require('discord.js');
const Logger = require('../Modules/Logger');
const Functions = require('../Functions');
const { PREFIX, TOKEN, AUTHOR_ID } = process.env;

class MyClient extends Client {
	constructor(options = {}) {
		super(options);
        
		this.commands = new Collection();
		this.cooldowns = new Collection();
        
		this.logger = new Logger();
		this.function = new Functions(this);
        
		this.prefix = PREFIX;
		this.token = TOKEN;
        
		this.once('ready', this.ready);
		this.on('message', this.handle);
	}
    
	async ready() {
		console.log(`- Tag          >   ${this.user.tag}`);
		console.log(`- Guilds       >   ${this.guilds.cache.size}`);
		console.log(`- Commands     >   ${this.commands.size}`);
		console.log(`- Invite URL   >   ${await this.generateInvite(8)}`);
		this.logger.log('Bot ready!', 'READY');
	}
    
	handle(message) {
		if(message.author.bot || !message.content.startsWith(this.prefix)) return;

		let [command, ...args] = message.content.slice(this.prefix.length).trim().split(/ +/g);
        
		let cmd = this.commands.get(command.toLowerCase()) ||
		this.commands.find(data => data.aliases && data.aliases.includes(command.toLowerCase()));
		
		if(!cmd) return;
<<<<<<< HEAD

=======
		
>>>>>>> 063dd94cf91848f70aa895ac017123f0bf80bd25
		if(cmd.guildOnly && !message.guild) return message.channel.send('I can\'t run this command in DM.');

		if(cmd.usage && !args.length) {
			let reply = 'You haven\'t specified an argument.';
			if(cmd.usage) reply += `\n\`\`\`${this.prefix}${cmd.name} ${cmd.usage}\`\`\``;
			return message.channel.send(reply);
		}

		if(cmd.ownerOnly && message.author.id !== AUTHOR_ID) return message.channel.send('Owner only.');

		if(!this.cooldowns.has(cmd.name)) this.cooldowns.set(cmd.name, new Collection());
		
		// From https://discordjs.guide/command-handling/adding-features.html#cooldowns
		let now = Date.now();
		let timestamps = this.cooldowns.get(cmd.name);
		let cooldownAmount = (cmd.cooldown) * 1000;
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		
		try {
			cmd.exec(message, args);
		} catch(e) {
			this.logger.log(`CommandHandlerError ${cmd.name}: ${e}`, 'ERROR');
			message.reply('an error occurred.');
		}
	}
    
	async launch() {
		Promise.all([
			this.function.load(),
			super.login(this.token)
		]);
	}
    
}

module.exports = MyClient;
