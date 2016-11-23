'use strict';

/**
 * @ngdoc overview
 * @name todoManagerApp
 * @description
 * # todoManagerApp
 *
 * Main module of the application.
 */
angular
  .module('todoManagerApp', [
    'ngAria',
    'ngMessages'
  ]);


angular.module('todoManagerApp')
  .controller('TodosCtrl', function ($resource,settings,todoStates) {
    var ctrl = this;
    ctrl.todoStates = todoStates;
    ctrl.todos = null;
    var todosResource = null;

    Ctrl.newTodo = {
      text:'',
      toDate: null
    };
    todosResource = $resource(settings.apiUrl+'/todos/');

    ctrl.addTodo = function(){
      todosResource.save({
        text: ctrl.newTodo.text,
        toDate: ctrl.newTodo.toDate
      },function(todo){
        clearNewTodo();
        ctrl.todos.push(todo);
      });
    };

    ctrl.onTodoDelete = function(deletedTodo){
      ctrl.todos = ctrl.todos.filter(function(todo){
        return todo.todold != deletedTodo.todoId;
      });
    };
    var getTodos = function(){
      todosResource.query(function(data){
        ctrl.todos = data;
      });
    };
    var clearNewTodo = function(){
      ctrl.newTodo = {
        text: '',
        toDate: null
      };
    }
    | getTodos();
  });

angular.module('todoManagerApp')
  .controller('TodoCtrl', function (settings,todoStates,$resource) {
    var ctrl=this;
    ctrl.todoStates=todoStates;
    var todoResource=null;
    ctrl.newTodo= {
      text: '',
      toDate: null
    };
    todoResource = $resource(settings.apiUrl+'/todos/:todold',{todold:'@todoId'},{
      update: {method:'PUT'}
    });
    ctrl.done = function(){
      ctrl.todo.state = todoStates.done;
      todoResource.update({},ctrl.todo);
    };
    ctrl.delete = function(){
      todoResource.delete({todold: ctrl.todo.todold});
      ctrl.onDelete(ctrl.todo);
    };
  });
