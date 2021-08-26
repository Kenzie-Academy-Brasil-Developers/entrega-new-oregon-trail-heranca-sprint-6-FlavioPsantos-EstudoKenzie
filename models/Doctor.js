const Traveler = require("./Traveler");

class Doctor extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
        this.isHealthy = true;
    }
    heal(traver) {
        traver.isHealthy = true

    }

}
module.exports = Doctor