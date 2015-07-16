/// <reference path="typings/angular2/angular2"/>
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2', 'firebase/angularfire'], function (require, exports, angular2_1, angularfire_1) {
    var TodoApp = (function () {
        function TodoApp(sync) {
            this.todoService = sync.asArray();
            this.todoEdit = null;
            this.todoFilter = null;
        }
        TodoApp.prototype.enterTodo = function ($event, newTodo) {
            if ($event.which === 13) {
                var todoText = newTodo.value.trim();
                if (todoText) {
                    this.addTodo(todoText);
                    newTodo.value = '';
                }
            }
        };
        TodoApp.prototype.editTodo = function ($event, todo) {
            this.todoEdit = todo;
        };
        TodoApp.prototype.doneEditing = function ($event, todo) {
            var which = $event.which;
            var target = $event.target;
            if (which === 13) {
                todo.title = target.value;
                this.todoService.save(todo);
                this.todoEdit = null;
            }
            else if (which === 27) {
                this.todoEdit = null;
                target.value = todo.title;
            }
        };
        TodoApp.prototype.addTodo = function (newTitle) {
            this.todoService.add({
                title: newTitle,
                completed: false
            });
        };
        TodoApp.prototype.completeMe = function (todo) {
            todo.completed = !todo.completed;
            this.todoService.save(todo);
        };
        TodoApp.prototype.deleteMe = function (todo) {
            this.todoService.remove(todo);
        };
        TodoApp.prototype.toggleAll = function ($event) {
            var _this = this;
            var isComplete = $event.target.checked;
            this.todoService.list.forEach(function (todo) {
                todo.completed = isComplete;
                _this.todoService.save(todo);
            });
        };
        TodoApp.prototype.clearCompleted = function () {
            var toClear = {};
            this.todoService.list.forEach(function (todo) {
                if (todo.completed) {
                    toClear[todo._key] = null;
                }
            });
            this.todoService.bulkUpdate(toClear);
        };
        TodoApp.prototype.showAll = function () {
            this.todoFilter = null;
        };
        TodoApp.prototype.showActive = function () {
            this.todoFilter = true;
        };
        TodoApp.prototype.showCompleted = function () {
            this.todoFilter = false;
        };
        TodoApp = __decorate([
            angular2_1.Component({
                selector: 'todo-app',
                appInjector: [
                    angularfire_1.AngularFire,
                    angular2_1.bind(Firebase).toValue(new Firebase('https://webapi.firebaseio-demo.com/test'))
                ] }),
            angular2_1.View({
                templateUrl: 'todo.html',
                directives: [angular2_1.NgFor]
            }), 
            __metadata('design:paramtypes', [angularfire_1.AngularFire])
        ], TodoApp);
        return TodoApp;
    })();
    angular2_1.bootstrap(TodoApp);
});
