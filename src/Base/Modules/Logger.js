const moment = require('moment');
const chalk = require('chalk');

moment.locale(process.env.REGION || 'en');

class Logger {
	log(content, type = 'LOG') {
		let now = moment().format('LLLL');
		let ltype = type.toLowerCase();
		type = type.toUpperCase();
		switch (ltype) {
		case 'log':     return console.log(`${now} | ${chalk.black.bgBlue   (`<${type}>`)} ${content}`  );
		case 'warn':    return console.log(`${now} | ${chalk.black.bgYellow (`<${type}>`)} ${content}`  );
		case 'error':   return console.log(`${now} | ${chalk.black.bgRed    (`<${type}>`)} ${content}`  );
		case 'debug':   return console.log(`${now} | ${chalk.black.bgMagenta(`<${type}>`)} ${content}`  );
		case 'cmd':     return console.log(`${now} | ${chalk.black.bgWhite  (`<${type}>`)} ${content}`  );
		case 'ready':   return console.log(`${now} | ${chalk.black.bgGreen  (`<${type}>`)} ${content}`  );
		default:        throw new Error('Logger is cannot be empty.');
		}
	}
}

module.exports = Logger;