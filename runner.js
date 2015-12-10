#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('example-adventure');

var problems = [ '0_myname', '1_allzero', '2_countsundays', '3_uppercase', '4_mobydick' ];
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});



shop.execute(process.argv.slice(2));
