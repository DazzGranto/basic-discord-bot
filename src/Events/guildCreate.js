module.exports = class {
	exec(client, guild) {
		client.logger.log(`Joined: ${guild.name}`);
	}
};