/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let poligon = require('./poligon');
describe("Проверка тестового набора", function() {
it('empty suite test', function () {})
it('brocken  suite test', function () {
    throw new Error(`ever brocken test`)
})
it(' suite test1', function () {})
it(' suite testAsinc1', function (done) {
    let q = '123'
    let result = poligon.forAsincTest1(q)
    if (result != q) {
        throw new Error(`Expected ${q}, but got ${result}`)
    }
    done()
})
it(' suite testNegativeAsinc1', function ( done) {
    let q = '123'
    let result = poligon.forAsincTest1(q)
    if (result == q) {
        throw new Error(`Expected ${q}, but got ${result}`)
    }
    done()
})
})