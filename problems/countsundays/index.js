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
  t.equal(typeof f, 'number', 'you exported a Number');
  t.equal(f, 171, 'result');
  t.end();



});
