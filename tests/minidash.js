#!/usr/bin/env node

var request = require('request');

if(process.argv.length !== 6) {
	console.log('');
	console.log('syntax: ' + process.argv[0] + ' <icon> <name> <value> <status>');
	console.log('');
	process.exit(1);	
}

request.post({url: 'http://localhost:3000//measure/' + process.argv[2] + '/' + process.argv[3] + '/' + process.argv[4] + '/' + process.argv[5], form: {msg: 'message'}}, function (error, response, body) {
	console.log(body);
});
