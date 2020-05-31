module.exports = class {
	exec(client, guild) {
		client.logger.log(`Leaved: ${guild.name}`);
	}
};