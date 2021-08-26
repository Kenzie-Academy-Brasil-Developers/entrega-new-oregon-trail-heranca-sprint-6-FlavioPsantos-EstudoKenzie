class Traveler {
    constructor(name) {
        this._name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name
    }


    hunt() {
        this.food += 2;
        return this.food
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
        return this.food
    }
}



module.exports = Traveler;