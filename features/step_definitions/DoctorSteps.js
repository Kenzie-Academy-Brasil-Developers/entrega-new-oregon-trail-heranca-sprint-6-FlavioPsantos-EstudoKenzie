const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { doctor, viajante } = require("./../../app");
const Doctor = require("../../models/Doctor");
Given('um Doctor de nome {string}', function(string) {
    doctor.name = string
});
Given('o Doctor tratar o viajante', function() {
    doctor.heal(viajante)
});
When('um viajante estiver doente', function() {
    viajante.isHealthy = false;
});
When('um viajante não estiver doente', function() {
    viajante.isHealthy = true;
});
Then('o viajante devera ficar saudavel', function() {
    assert.strictEqual(viajante.isHealthy, true)
});