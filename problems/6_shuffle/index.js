var fs = require('fs');
var path = require('path');
var verify = require('../../mmverify');//'adventure-verify');
var parser = require('tap-parser');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = verify({ modeReset: true, name: 'ex-6'}, function (args, t) {


  var f = require(path.resolve(args[0]));

  var l = [1,2,3];

  t.equal(typeof f, 'function', 'does not export a function');
  t.equal(f(l).length, l.length, 'returned array has different size' );
  t.equal(f(l).indexOf(1)>-1, true, 'returned array does not contain same elements' );
  t.equal(f(l).indexOf(2)>-1, true, 'returned array does not contain same elements' );
  t.equal(f(l).indexOf(3)>-1, true, 'returned array does not contain same elements' );

  t.end();

});
