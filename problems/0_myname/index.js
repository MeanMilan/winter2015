var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');
var sender = require('../../sender');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
  var f = require(path.resolve(args[0]));

  t.equal(typeof f, 'object', 'does not export a JSON object' );
  t.equal(f.hasOwnProperty('username'), true, 'does not export a JSON with name ' );
  t.equal(typeof f.username, 'string', 'does not export string name ' );

  fs.writeFileSync(sender.USERNAME_FILE, f.username);

  sender.send('ex-0');

  t.end();
});
