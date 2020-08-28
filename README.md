# Discord Class Bot
> Simple class based discord bot.

## First Install Packages
```
npm install

or

yarn
```

### Launching

```
npm start
```

## Usage

Fill out the values (`Rename the '.env_config' file to '.env'.`).

```
# Your bot token
TOKEN="UltrA seCret ßot toqEn"

# Bot's prefix
PREFIX="prefix!"

# Your user ID
AUTHOR_ID=12345678899
```

### Command

> Command Data

* `name`: Command's name.
    * Required
    * type: `string`

* `aliases`: Command's aliases.
    * Optional
    * default: `[]`
    * type: `Array<string>`

* `cooldown`: Command's cooldown.
    * Optional
    * default: `3`
    * type: `number`

* `guildOnly`: If true, it works only in guilds.
    * Optional
    * default: `true`
    * type: `boolean`

* `ownerOnly`: If true, only the bot owner can use this command.
    * Optional
    * default: `false`
    * type: `boolean`

* `description`: Command's description.
    * Optional
    * default: `No description provided.`
    * type: `string`

* `category`: It takes the name of the folder it is in.
    * Auto
    * default: `Other`
    * type: `string`

* `usage`: Command's usage.
    * Optional
    * default: `undefined`
    * type: `string` | `undefined`

#### Example

```js
const Command = require('../../Base/Struct/Command');

module.exports = class extends Command {
	constructor(client) {
		super(client, {
            		name: 'ping',
            		aliases: ['latency']
        	});
	}
    
	exec(message) {
		message.channel.send(`Latency: ${this.client.ws.ping}ms`);
	}
};
```

## Thanks!

[Fork!](https://github.com/DazzGranto/basic-discord-bot/fork)

Star ⭐!

### Me

[DazzGranto (Github)](https://github.com/DazzGranto)

! . 02 . !#9502 (Discord)

If you have any questions, you can contact me on Discord or Github.

made with 💙!
