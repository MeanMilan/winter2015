var fs = require('fs');
var path = require('path');
var verify = require('adventure-verify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

var input = [
  {"title":"Batman","genre":"Action"},
  {"title":"Indiana Jones","genre":"Action"},
  {"title":"Inside out","genre":"Animation"}
];

var output = [
  {"genre":"Action","titles":["Batman","Indiana Jones"]},
  {"genre":"Animation","titles":["Inside out"]}
];

exports.verify = verify({ modeReset: true, name:'ex-5' }, function (args, t) {
  var f = require(path.resolve(args[0]));

  t.equal(typeof f, 'function', 'does not export a function' );
  t.deepEqual(f(input), output, 'does not behave like expected' );

  t.end();
});
