var path = require('path');
var Sassaby = require('sassaby');

describe('mixins', function() {
    var file = path.resolve(__dirname, '../sass/testing_examples.scss');
    var sassaby = new Sassaby(file, {
        dependencies: [
            path.resolve(__dirname, '../sass/_testing_variables.scss')
        ]
    });

    // function
    describe('calculate-percent', function() {
        it('should calculate what percent the first argument is of the second argument', function() {
            sassaby.func('calculate-percent').calledWithArgs('650px', '1000px').equals('65%');
        });
    })

    // standalone mixin
    describe('float', function() {
        it('should create a new float class with the given direction', function() {
            sassaby.standaloneMixin('float').calledWithArgs('left').createsSelector('.float-left');
        });
        it('should set the float property to the given direction', function() {
            sassaby.standaloneMixin('float').calledWithArgs('left').declares('float', 'left');
        });
    })

    // included mixin
    describe('standard_border', function() {
        var output = "border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; border-left: 1px solid #ccc;";
        it('should create a border attribute for each given direction', function() {
            sassaby.includedMixin('standard_border').calledWithArgs('top bottom right left').equals(output);
        });
    });
});