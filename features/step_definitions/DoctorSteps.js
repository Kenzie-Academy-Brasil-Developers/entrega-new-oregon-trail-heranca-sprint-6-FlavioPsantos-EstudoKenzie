const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { doctor } = require("./../../app");
const Doctor = require("../../models/Doctor");

/** GIVEN */

Given('um Doctor de nome {string}', function(string) {
    doctor.name = string;
});

/** WHEN */

When('um viajante estiver doente', function(boolean) {
    viajante.isHealthy = boolean
});
When('o Doctor tratar', function(viajante) {
    doctor.heal(viajante)
});



/** THEN */

Then('o viajante devera ficar saudavel', function(traveler) {
    assert.strictEqual(viajante.isHealthy, true)
});
then('o Doctor não ficará doente', function() {
    assert.strictEqual(doctor.isHealthy, true)
});