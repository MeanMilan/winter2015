var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true }, function (args, t) {
  var f = require(path.resolve(args[0]));

  t.equal(f.hasOwnProperty('name'), true, 'does not export a JSON with name ' );
  t.equal(typeof f.name, 'string', 'does not export string name ' );

  fs.writeFileSync('./dudee.name.txt', f.name);

  t.end();
});
