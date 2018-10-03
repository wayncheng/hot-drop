'use strict';
(function(){
	const chalk = require('chalk');
	const cl = console.log;

	const color = {
		red: chalk.hex('#e74c3c'),
		orange: chalk.hex('#ff9f43'),
		yellow: chalk.hex('#feca57'),
		green: chalk.hex('#1dd1a1'),
		blue: chalk.hex('#2e86de'),
		purple: chalk.hex('#9b59b6'),

		black: chalk.hex('#000'),
		white: chalk.hex('#fff'),
	}

	const log =  {
		success  : text => cl(chalk.hex('#1dd1a1')(text)),
		error    : text => cl(chalk.hex('#e74c3c')(text)),
		err      : text => cl(chalk.hex('#ff9f43')(text)),
		info     : text => cl(chalk.hex('#2e86de')(text)),
		warn     : text => cl(chalk.hex('#feca57')(text)),
		highlight: text => cl(chalk.hex('#000000').bold.bgHex('#feca57')(` ${text} `)),
		blackonwhite: text => cl(chalk.hex('#000000').bold.bgWhite(` ${text} `)),
		redonwhite: text => cl(chalk.hex('#fff').bgRed(` ${text} `)),
		
		faded: text => cl(chalk.hex('#576574')(text)),
		
		white: text => cl(color.white(text)),
	}

	module.exports = { color, log };
})();