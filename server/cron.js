console.log("Cron...");

import { SyncedCron } from 'meteor/percolate:synced-cron';

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
