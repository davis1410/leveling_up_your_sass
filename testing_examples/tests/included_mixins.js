var path = require('path');
var Sassaby = require('sassaby');

describe('mixins', function() {
    var file = path.resolve(__dirname, '../sass/testing_examples.scss');
    var sassaby = new Sassaby(file, {
        dependencies: [
            path.resolve(__dirname, '../sass/_testing_variables.scss')
        ]
    });

    describe('standard_border', function() {
        var output = "border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; border-left: 1px solid #ccc;";
        it('should create a border attribute for each given direction', function() {
            sassaby.includedMixin('standard_border').calledWithArgs('top bottom right left').equals(output);
        });
    });
});