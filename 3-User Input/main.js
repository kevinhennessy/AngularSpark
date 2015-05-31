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
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var TodoList = (function () {
        function TodoList() {
            this.todos = ["Eat Breakfast", "Walk Dog", "Breathe", "Learn Angular"];
        }
        TodoList.prototype.addTodo = function (todo) {
            this.todos.push(todo);
        };
        TodoList = __decorate([
            angular2_1.Component({
                selector: 'todo-list'
            }),
            angular2_1.View({
                template: "\n  \n    <ul>\n      <li *for=\"#todo of todos\">\n        {{ todo }}\n      </li>\n    </ul>\n    \n    <input #textbox>\n    <button (click)=\"addTodo(textbox.value)\">Add Todo</button>\n    \n  ",
                directives: [angular2_1.For, angular2_1.If]
            }), 
            __metadata('design:paramtypes', [])
        ], TodoList);
        return TodoList;
    })();
    angular2_1.bootstrap(TodoList);
});
