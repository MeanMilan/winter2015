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

  t.equal(typeof f, 'function', 'you need to export a function');

  var input = 'before.before next, this is a very this and you should take it before drink next beer or before the next';
  var higher = f(input);

  t.equal(higher, 'before', 'ok');

  t.end();

});
