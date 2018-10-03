'use strict';
(function(){
	// const chalk = require('chalk');
	const { log, color } = require('../config/chalk')
	
	console.log('--------')
	const text = 'Lorem Ipsum';

	log.error(text)
	log.err(text)
	log.success(text)
	log.info(text)
	log.warn(text)

	log.highlight(text)
	log.blackonwhite(text)
	log.redonwhite(text)
	log.faded(text)
	log.white(text)
	
	console.log(color.yellow(text))
	
	log.white(`
	UNO
	DOS
	TRES
	`)
})();