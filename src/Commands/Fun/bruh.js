const Command = require('../../Base/Struct/Command');

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'bruh',
			aliases: ['brah', 'bru']
		});
	}
    
	exec(message) {
		message.channel.send('Bruh');
	}
};