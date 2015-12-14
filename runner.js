#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('example-adventure');

var fs = require('fs'),
    path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var problems = getDirectories(path.join(__dirname, 'problems') );

problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
