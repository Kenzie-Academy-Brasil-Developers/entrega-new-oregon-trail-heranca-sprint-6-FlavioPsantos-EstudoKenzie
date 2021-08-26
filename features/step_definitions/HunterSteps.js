const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler")
const { hunter } = require("./../../app");
Given('um Hunter de nome {string}', function(string) {
    hunter.name = string
});

When('o Hunter sair para caçar {int} vezes', function(int) {
    for (let contador = 0; contador < int; contador++) {
        hunter.hunt()
    }
});
When('o Hunter parar para comer {int} vezes', function(int) {
    for (let contador = 0; contador < int; contador++) {
        hunter.eat()
    }
});

When('o Hunter doar {int} comidas', function(int) {
    hunter.food = hunter.food - int
});
Then('o Hunter não ficará doente', function() {
    assert.strictEqual(hunter.isHealthy, true)
});
Then('o Hunter ficará doente', function() {
    assert.strictEqual(hunter.isHealthy, false)
});