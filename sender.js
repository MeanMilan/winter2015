var fs = require('fs');
var request = require('request');

const USERNAME_FILE = './dudee.username.txt';
module.exports.USERNAME_FILE = USERNAME_FILE;

const SERVER = 'http://mean.link-me.it:3000';

module.exports.send = function(name) {

  var username = fs.readFileSync(USERNAME_FILE, 'utf8');

  var postData = {
    username: username,
    name: name
  };

  request.post({
    url: SERVER+'/api/exercise',
    method: 'post',
    body: postData,
    json: true
  });

}
