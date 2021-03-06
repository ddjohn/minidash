console.log("Routes...");

import { Router } from 'meteor/iron:router';
import { Measures } from '../imports/collections';

Router.route("/measure/:icon/:name/:value/:status", function() {
	var icon = this.params.icon; 
	var name = this.params.name; 
	var value = this.params.value; 
	var status = this.params.status; 

console.log(this.request.body);
	Measures.upsert({name: name}, {epoch: Date.now(), icon: icon, name: name, value: value, status: status, details: JSON.stringify(this.request.body).replace(/\\n/g, "\r\n")});
	this.response.setHeader("Content-Type", "application/json");
	this.response.statusCode = 200;
	this.response.end(JSON.stringify({status:"ok"}));
}, {where: "server"});

