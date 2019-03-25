module.exports = angular.module('stf/batch-control', [
  require('stf/socket').name,
  require('stf/transaction').name,
  require('stf/keycodes').name
])
  .factory('ControlService', require('./control-service'))
