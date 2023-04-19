const cars = require("./fixtures/cars.json");

class Car {
    static records = cars;

    constructor(params) {
        this.id = this._generateId();
        this.name = params.name;
        this.price = params.price;
        this.size = params.size;
        this.image = params.image;
    }

    _generateId() {
        const lastRecordId =
            this.constructor.records[this.constructor.records - 1]?.id || 0;
        return lastRecordId + 1;
    }

    update(params) {
        const idx = this.constructor.records.findIndex((i) => i.id === this.id);

        params.name && (this.name = params.name);
        params.price && (this.price = params.price);
        params.size && (this.size = params.size);
        params.image && (this.image = params.image);

        this.constructor.records[idx] = this;

        return this;
    }

    delete() {
        this.constructor.records = this.constructor.records.filter(
            (i) => i.id !== this.id
        );
    }

    static create(params) {
        const car = new this(params);

        this.records.push(car);

        return car;
    }

    static find(id) {
        const car = this.records.find((i) => i.id === Number(id));
        if (!car) return null;

        return car;
    }

    static list() {
        return this.records;
    }
}

module.exports = Car;
