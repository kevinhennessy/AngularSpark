import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>My name: {{ myName }}</h1>'
})
class DisplayComponent {
  myName: string;

  constructor() {
    this.myName = "Alice";
  }
}

bootstrap(DisplayComponent);