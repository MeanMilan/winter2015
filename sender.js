var fs = require('fs');
var request = require('request');

const USERNAME_FILE = './dudee.username.txt';
module.exports.USERNAME_FILE = USERNAME_FILE;

const SERVER = 'http://mean.link-me.it:3000';

module.exports.send = function(name) {

  try {
    var username = fs.readFileSync(USERNAME_FILE, 'utf8');
  } catch(e) {
    console.log('\n\n\n----------------------------------------------------------');
    console.log('ATTENTION: YOU SHOULD PASS THE EXCERCISE 0 BEFORE CONTINUE\n\n\n');
    process.exit();
  }

  var postData = {
    username: username,
    name: name
  };

  request.post({
    url: SERVER+'/api/exercise',
    method: 'post',
    body: postData,
    json: true
  }, function(e, n) {
    if(e) console.log(e);
    else if(n) console.log(n.body)
  });

}
