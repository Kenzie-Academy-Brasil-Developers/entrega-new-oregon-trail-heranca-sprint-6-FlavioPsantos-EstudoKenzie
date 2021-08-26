const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
        this.isHealthy = true;
    }

    /** @override */
    hunt() {
        this.food = this.food + 5;
    }

    /** @override */
    eat() {
        if (this.food > 2) {
            this.food -= 2
        } else {
            this.food -= 1
            this.isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
    }
}
module.exports = Hunter