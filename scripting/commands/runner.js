'use strict';
(function(){
	const program = require('commander');
 
	// program
	// 	.version('0.1.0')
	// 	.option('-C, --chdir <path>', 'change the working directory')
	// 	.option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
	// 	.option('-T, --no-tests', 'ignore test hook');
	 
// 	program
//   .version('0.1.0')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);
 
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

// program
//   .command('setup [env]')
//   .description('run setup commands for all envs')
//   .option("-s, --setup_mode [mode]", "Which setup mode to use")
//   .action(function(env, options){
//     var mode = options.setup_mode || "normal";
//     env = env || 'all';
//     console.log('setup for %s env(s) with %s mode', env, mode);
//   });


	program
		.command('getdrops [pathID]')
		.description('Get drop data for a bus path')
		// .option('-p, --pathid [pathID]', 'Bus Path ID')
		.option('-n', '--count', 'Total number of responses found')
		.option('-l, --limit [limit]', 'Limit number of responses')
		.action(function(pathID, options){
			const pathID = options.pathID;
			const limit = options.limit || 10;
			const count = options.count || false;
			// const mode = options.setup_mode || "normal";
			pathID = pathID || 'all_paths';
			console.log('limit:',limit)
			console.log('count:',count)
			console.log('setup for %s env(s) with %s mode', pathID, mode);
		});
	 
	// program
	// 	.command('exec <cmd>')
	// 	.alias('ex')
	// 	.description('execute the given remote cmd')
	// 	.option("-e, --exec_mode <mode>", "Which exec mode to use")
	// 	.action(function(cmd, options){
	// 		console.log('exec "%s" using %s mode', cmd, options.exec_mode);
	// 	}).on('--help', function() {
	// 		console.log('');
	// 		console.log('Examples:');
	// 		console.log('');
	// 		console.log('  $ deploy exec sequential');
	// 		console.log('  $ deploy exec async');
	// 	});
	 
	// program
	// 	.command('*')
	// 	.action(function(env){
	// 		console.log('deploying "%s"', env);
	// 	});
	 
	program.parse(process.argv);
})();