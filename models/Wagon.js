class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
        this.empetyPlace = 0;
    }
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get capacity() {
        return this._capacity
    }
    getAvailableSeatCount() {
        this.empetyPlace = this.capacity - this.passageiros.length;
        if (this.empetyPlace < 0) {
            this.empetyPlace = 0;
        }
        return this.empetyPlace;
    }
    join(traver) {
        if (this.getAvailableSeatCount() > 0) {
            this.passageiros.push(traver)
        }

    }

    shouldQuarantine() {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (this.passageiros[i].isHealthy === false) {
                return true
            }
        }
        return false;
    }
    totalFood() {
        let foodAcuracy = 0;
        for (let i = 0; i < this.passageiros.length; i++) {
            foodAcuracy += this.passageiros[i].food
        }
        return foodAcuracy;


    }

}

module.exports = Wagon;