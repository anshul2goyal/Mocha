/**
 * Test using try catch block around assert.
 * This test case will log the error in terminal
 * As the assert is failong but it throws exception, add the throw clause
 */
var assert = require('assert');
describe('Basic Mocha test with try', function(){
    it('Should show error message', function(){
        try{
            assert.equal(3,4);
        }catch(e){
            throw({message:'Fail test as assert is failing'});
        }
    });
});