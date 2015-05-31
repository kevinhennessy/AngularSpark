/**
 * Created by Kevin on 4/26/2015.
 */
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'display'
})
@View({
  template:
'<p>My name: {{ myName }}</p>' +
        '<p>Friends:</p>' +
        '<ul>' +
        '<li *for="#name of names">' +
        '{{ name }}' +
        '</li>' +
        '</ul>' +
        '<p *if="names.length > 3">You have many friends!</p>',
  directives: [For, If]
})
class DisplayComponent {
  myName: string;
  names: Array<string>;

  constructor() {
    this.myName = "Alice";
    this.names = ["Alice", "Harry", "Martin", "Shannon", "Ariana", "Kai"];
  }

  addTodo(name: string) {
    this.names.push(name);
  }
}

bootstrap(DisplayComponent);