/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const Allure = require('allure-js-commons');
let poligon = require('./poligon');
var assert = require('chai').assert;
var expect = require('chai').expect;
//var allure = require('mocha-allure-reporter');
//var report = new Allure();
function step1(arg) {
    allure.addArgument("arg", arg)
//    report.createAttachement("step1","addstep1")
}

describe("Проверка тестового набора", function () {

    beforeEach(() => console.log("beforeEach"))
    afterEach(() => console.log("afterEach"))
    before(() => console.log("before "))
    after(() => console.log("after "))

    it('empty suite test', function () {
        allure.addEnvironment("lockalhost", "127.0.0.1")

        allure.severity("normal")
        allure.feature("simple example")
        allure.story("learn js")
        allure.description('descriptionempty suite test')
    })
    it('brocken  suite test', function () {

        allure.severity("normal")
        allure.feature("simple example")
        allure.story("learn js")
        allure.description('description brocken  suite test')
        step1(1)
        step1(123)
        
        assert.equal(1, "2", "brocken  suite test")
    })
    it('expect  suite test', function () {
        step1('expect  suite test')
        expect(1).to.equal(1)
    })
})