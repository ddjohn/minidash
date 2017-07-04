console.log("Cron...");

import { SyncedCron } from 'meteor/percolate:synced-cron';
import { HTTP       } from 'meteor/http';

function send() {
  HTTP.call('POST', 'http://localhost:3000/measure/alert/name/17/ok', {
    data: { some: 'json', stuff: 1 }
  }, (error, result) => {
    console.log(result);
  });
}

function save() {
  Measures.upsert(
	  {name: name}, 
	  {
		  epoch: Date.now(), 
		  icon: icon, 
		  name: name, 
		  value : value, 
		  status: status
	  }
  );


};

SyncedCron.add({
	name: 'Test cronjob',
	schedule: function(parser) {
		return parser.text('every 1 minutes');
	},
	job: function() {
		console.log("Now");
		return 7;
	}
});


SyncedCron.start();
