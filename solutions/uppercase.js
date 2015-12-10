module.exports = function(string_input) {
  var output = '';
  for (var i=0; i < string_input.length; ++i) {
    var code = string_input.charCodeAt(i);
    if(code >=97 && code <=121) {
      output += String.fromCharCode(code-32);
    } else {
      output += string_input.charAt(i);
    }
  }
  return output;
}
