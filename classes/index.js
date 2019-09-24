'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
var classes   = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var _class = require(path.join(__dirname, file));
    classes[_class.name] = _class;
  });

module.exports = classes;
