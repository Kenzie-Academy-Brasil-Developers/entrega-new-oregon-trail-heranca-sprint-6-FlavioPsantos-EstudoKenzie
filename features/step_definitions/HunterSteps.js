const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler")
const { hunter } = require("./../../app");

/** GIVEN */

Given('um Hunter de nome {string}', function(string) {
    hunter.name = string;
});
/** WHEN */

When('o Hunter sair para caçar {int} vezes', function(int) {
    for (let i = 0; i < int; i++) {
        hunter.hunt()
    }
});



// When('o Hunter parar para comer {int} vezes', function(int) {
//     for (let contador = 0; contador < int; contador++) {
//         hunter.eat();
//     }
// });
When('o Hunter para para doar {int} comida para o <name>', function(int, Traveler) {
    console.log(Traveler, int)
    hunter.giveFood(Traveler, int)
});

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function(int) {
    assert.strictEqual(Hunter.food, int);
});

// Then('o Hunter não ficará doente', function() {
//     assert.strictEqual(hunter.isHealthy, true)
// });

// Then('o Hunter ficará doente', function() {
//     assert.strictEqual(hunter.isHealthy, false)
// });
Then('a quantidade de refeições após uma doação deverá ser igual a {float}', function(int) {
    assert.strictEqual(hunter.food, int)
});