/**
 * Test using try catch block around assert.
 * This test case will log the error in terminal but test case will pass
 * As the assert is failong but it throws exception
 */
var assert = require('assert');
describe('Basic Mocha test with try', function(){
    it('Should show error message in console', function(){
        try{
            assert.equal(3,4);
        }catch(e){
            console.log(e);
        }
    });
});