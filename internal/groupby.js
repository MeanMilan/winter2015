module.exports = function(input) {

  var dict = {}
  for(var i of input) {
    var g = i.genre;
    if(!dict.hasOwnProperty(g))  {
      dict[g] = [];
    }
    dict[g].push(i.title);
  }

  var output = [];
  for(var i in dict) {
    var o = {
      genre: i,
      titles: dict[i]
    };
    output.push(o);
  }

  return output;
}
