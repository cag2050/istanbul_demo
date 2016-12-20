/**
 * Created by chenanguo on 16/12/20.
 */
var chai = require('chai');
var expect = chai.expect;
var My = require('./sqrt.js');

describe('sqrt', function () {
    it('4的平方根应该等于2', function () {
        expect(My.sqrt(4)).to.equals(2);
    });
    it('参数为负值时应该报错', function () {
        expect(function () {
            My.sqrt(-1);
        }).to.throw('负值没有平方根');
    });
});

