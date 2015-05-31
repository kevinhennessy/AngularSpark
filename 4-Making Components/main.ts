import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'child'
})
@View({
  template: `
    <p> {{ message }} </p>
  `
})
class ChildComponent {
  message: string;
  constructor() {
    this.message = "I'm the child";
  }
}

@Component({
    selector: 'parent'
})
@View({
    template: `
    <h1>{{ message }}</h1>
    <child></child>
  `,
    directives: [ChildComponent]
})
class ParentComponent {
    message: string;

    constructor() {
        this.message = "I'm the parent";
    }
}
bootstrap(ParentComponent);