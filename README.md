# minidash

## install

Install meteor:
> $ curl https://install.meteor.com/ | sh

Clone the repo:
> $ git clone http://github.com/ddjohn/minidash

Build 'minidash':
> $ cd minidash
> $ meteor update
> $ meteor npm install


## run

Run 'mini dash':
> $ meteor


## populate data

Send data with:
http://host:port/measure/:icon/:name/:value/:status

where:
- icon - is the name of an ionic icon (see http://ionicons.com/)
- name - the name of the measure
- value - a value 
- status - one of ['ok', 'warning', 'error'] 


## advanced
...

## todo
- [x] Two way databinding of a minidash
- [x] Web request to populate data
- [x] Add a healt check measure (random)
- [ ] Show details
- [ ] Support for Jenkins
- [ ] Support for Jira

