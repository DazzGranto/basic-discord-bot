const Command = require('../../Base/Struct/Command');

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: ['speech'],
			description: 'Say anything!',
			usage: '[text]'

		});
	}
    
	exec(message, args) {
		message.channel.send(args.join(' '));
	}
};