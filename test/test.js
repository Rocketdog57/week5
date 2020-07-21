// test triangle.js
var assert = require("assert")
var area = require('../triangle.js');

describe('area Function', function (){
    it('should return 20 when the values 5,8,2 are passed in', function(){
        assert.equal(area(5,8,2),20);
    });
})