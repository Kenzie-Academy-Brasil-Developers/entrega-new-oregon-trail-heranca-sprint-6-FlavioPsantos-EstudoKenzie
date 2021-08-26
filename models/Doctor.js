const Traveler = require("./Traveler");

class Doctor extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
        this.isHealthy = true;
    }
    heal(traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true
        }
        traveler.isHealthy = true;
    }

}
module.exports = Doctor