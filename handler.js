const { Car } = require("./models");
const cloudinary = require("./cloudinary");


async function handleCreateCar(req, res) {
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, async function (err, result) {
        if (!!err) {
            console.log(err);
            return res.status(400).json({
                message: "Gagal upload file!",
            });
        }

        const { name, price, size } = req.body;

        const car = await Car.create({ name, price, size, image: result.url });
        req.flash('create', 'Data Berhasil Dibuat');
        res.redirect("/cars");
    });

}

function handleCreateCarForm(req, res) {
    res.render("create");
}

async function handleUpdateCarForm(req, res) {
    const id = req.params.id;
    const car = await Car.findByPk(id);

    // const car = req.car;
    res.render('update', { car });

}

async function handleListCars(req, res) {
    const cars = await Car.findAll();

    res.render("cars", { cars })
}

function handleGetCar(req, res) {
    const car = req.car;

    res.status(200).json(car);
}

async function handleUpdateCar(req, res) {
    const idCar = req.params.id;
    if (!req.file) {
        await Car.update(req.body, { where: { id: idCar } })
        req.flash('update', 'Data Berhasil Diupdate');
        res.redirect("/cars");
        return;
    }

    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, async function (err, result) {
        if (!!err) {
            console.log(err);
            return res.status(400).json({
                message: "Gagal upload file!",
            });
        }

        const { name, price, size } = req.body;

        await Car.update({ name, price, size, image: result.url }, { where: { id: idCar } });
        req.flash('update', 'Data Berhasil Diupdate');
        res.redirect("/cars");
    });

    // try{
    //   const idBook = req.params.id;

    //   await Book.update(req.body, {where: {id: idBook}})
    //   req.flash('update', 'Book succesfully updated');
    //   res.redirect("/books");
    // } catch(error){
    //   console.log('error', error);
    // }

}

// async function handleUpdateCar(req, res) {
//     const fileBase64 = req.file.buffer.toString("base64");
//     const file = `data:${req.file.mimetype};base64,${fileBase64}`;

//     cloudinary.uploader.upload(file, async function (err, result) {
//         if (!!err) {
//             console.log(err);
//             return res.status(400).json({
//                 message: "Gagal upload file!",
//             });
//         }

//         const idCar = req.params.id;
//         const { name, price, size } = req.body;

//         const car = await Car.upload({ name, price, size, image: result.url }, { where: { id: idCar } });
//         req.flash('create', 'Data Berhasil Diupdate');
//         res.redirect("/cars");
//     });
//     // const id = req.params.id;
//     // await Car.update(req.body, { where: { id } })
//     // req.flash('update', 'Data Berhasil Diupdate');
//     // res.redirect("/cars");
// }

async function handleDeleteCar(req, res) {
    const id = req.params.id
    await Car.destroy({ where: { id } })
    req.flash('delete', 'Data Berhasil Dihapus');
    res.redirect("/cars");
}

module.exports = {
    handleCreateCar,
    handleListCars,
    handleGetCar,
    handleUpdateCar,
    handleDeleteCar,
    handleCreateCarForm,
    handleUpdateCarForm
};
