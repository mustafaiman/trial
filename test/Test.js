const myModule = require('../.');
const assert = require('assert');
describe('test suite', function () {

    it('should return 42', function () {
        assert.equal(42, myModule.aFunc());
    });

    it('should not return 12', function () {
        assert.notEqual(12, myModule.aFunc());
    });
});