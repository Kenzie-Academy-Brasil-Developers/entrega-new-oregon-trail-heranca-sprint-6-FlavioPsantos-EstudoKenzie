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
        return this.food += 2;
    }
    eat() {
        if (this.food <= 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }

    }
}



module.exports = Traveler;