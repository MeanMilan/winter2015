var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

function lessthen(str, n) {
  return str.length < n;
}

exports.verify = verify({ modeReset: true }, function (args, t) {
  var f = require(path.resolve(args[0]));

  t.equal(typeof f, 'function', 'you exported a function');
  t.equal(f(0,0), true, 'all zero');
  t.equal(f(1,1), false, 'all one');
  t.equal(f(1,0), false, 'mixes');
  t.equal(f(0,1,1,1,1,1100,1,1,1,0,1,1,1,2,1,3,1,1,1,1,1,1,1,1,1,1,1,1), false, 'mixed');
  t.equal(f(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0), true, 'all zero');

  var s = require('fs').readFileSync(args[0], 'utf8');
  t.equal(lessthen(s, 100), true, 'file too long: '+s.length );
  t.equal(s.indexOf('require'), -1, 'cannot load external modules' );

  t.end();
});
