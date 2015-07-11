import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})
@View({
  template: `
  
    <ul>
      <li *ng-for="#todo of todos">
        {{ todo }}
      </li>
    </ul>
    
    <input #textbox>
    <button (click)="addTodo(textbox.value)">Add Todo</button>
    
  `,
  directives: [NgFor]
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