var _ = require('lodash');

module.exports = function histogram(text) {
  var higher = {n:0, k:''};
  var hist = _
    .chain(text.replace(/[^A-Za-z0-9]/g, ' ').split(' '))
    .filter()
    .filter(function(n) {return n.length>=4})
    .reduce(
      function(dict, n){
        if(dict.hasOwnProperty(n)) dict[n]++;
        else dict[n] = 1;
        return dict;
      },
      {})
    .map(function(n, k) {
      if(n>=higher.n) {
        higher.n = n;
        higher.k = k;
      }
    })
    .value();

  return higher.k;
}
