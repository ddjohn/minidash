import { Measures } from '../imports/collections';

Meteor.setInterval(function() {

	Measures.upsert(
		{name: "Random"}, 
		{
			epoch: Date.now(), 
			icon: "pulse", 
			name: "Random", 
			value: Math.floor(Math.random()*1000+0.5), 
			status: "ok"
		});
}, 1000);
