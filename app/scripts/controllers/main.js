'use strict';

/**
 * @ngdoc function
 * @name todoManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoManagerApp
 */
angular.module('todoManagerApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
angular.module('todoManagerApp')
  .directive('todos', function() {
    return {
      templateUrl: 'views/index.html',
      controller: 'TodosCtrl',
      controllerAs: 'ctrl',
      restrict: 'EA'
    };
  });
angular.module('todoManagerApp')
  .constant('todoStates', {
    pending: 0,
    done: 1
  });


