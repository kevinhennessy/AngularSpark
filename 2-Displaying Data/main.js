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
    var DisplayComponent = (function () {
        function DisplayComponent() {
            this.myName = "Alice";
            this.names = ["Alice", "Harry", "Martin", "Shannon", "Ariana", "Kai"];
        }
        DisplayComponent.prototype.addTodo = function (name) {
            this.names.push(name);
        };
        DisplayComponent = __decorate([
            angular2_1.Component({
                selector: 'display'
            }),
            angular2_1.View({
                template: '<p>My name: {{ myName }}</p>' +
                    '<p>Friends:</p>' +
                    '<ul>' +
                    '<li *for="#name of names">' +
                    '{{ name }}' +
                    '</li>' +
                    '</ul>' +
                    '<p *if="names.length > 3">You have many friends!</p>',
                directives: [angular2_1.For, angular2_1.If]
            }), 
            __metadata('design:paramtypes', [])
        ], DisplayComponent);
        return DisplayComponent;
    })();
    angular2_1.bootstrap(DisplayComponent);
});