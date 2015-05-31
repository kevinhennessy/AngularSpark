import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})
@View({
  template: `
  
    <ul>
      <li *for="#todo of todos">
        {{ todo }}
      </li>
    </ul>
    
    <input #textbox>
    <button (click)="addTodo(textbox.value)">Add Todo</button>
    
  `,
  directives: [For, If]
})
class TodoList {
  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe", "Learn Angular"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

}

bootstrap(TodoList);