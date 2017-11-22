#!/usr/bin/env node

var request = require('request');

if(process.argv.length !== 6) {
	console.log('');
	console.log('syntax: ' + process.argv[0] + ' <icon> <name> <value> <status>');
	console.log('');
	process.exit(1);	
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

var total = "";

process.stdin.on('data', function(chunk) {
	    total = total + chunk;
});

process.stdin.on('end', function() {

	request.post({
			url: 'http://localhost:3000//measure/' + process.argv[2] + '/' + process.argv[3] + '/' + process.argv[4] + '/' + process.argv[5], 
			form: {msg: total}}, function (error, response, body) {
				console.log(body);
			}
	);
});

