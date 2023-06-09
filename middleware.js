const { Car } = require("./models");

async function setCar(req, res, next) {
    const id = req.params.id;
    const car = await Car.findByPk(id);

    if (!car) {
        res.status(404).json({
            error: "Car not found!",
        });

        return;
    }

    req.car = car;
    next();
}

module.exports = {
    setCar,
};
