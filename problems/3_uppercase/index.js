var fs = require('fs');
var path = require('path');
var verify = require('../../mmverify');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

function lessthen(str, n) {
  return str.length < n;
}

exports.verify = verify({ modeReset: true, name:'ex-3' }, function (args, t) {
  var f = require(path.resolve(args[0]));

  var input = 'dudee a \n\t12345@#^= .:-;';
  var output = input.toUpperCase();

  t.equal(typeof f, 'function', 'you need to export a function');
  t.equal(f(input) === output, true, '');

  var s = require('fs').readFileSync(args[0], 'utf8');
  t.equal(s.indexOf('toUpperCase'), -1, 'cannot use toUpperCase word!' );

  t.end();

});
