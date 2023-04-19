const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");
const path = require("path");
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uploadOnMemory = require("./uploadOnMemory");



const port = process.env.PORT || 8000;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());
app.set("view engine", "ejs");
const PUBLIC_DIRECTORY = path.join(__dirname, "public");


// Set format request
app.use(express.urlencoded({ extended: true }));

// Set PUBLIC_DIRECTORY sebagai
// static files di express
app.use(express.static(PUBLIC_DIRECTORY));
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());


// Router
// app.get("/", (req, res) => {
//     res.render("coba update");
// });

app.get("/cars/create", handler.handleCreateCarForm);
app.post("/cars/create", uploadOnMemory.single("image"), handler.handleCreateCar);
app.get("/cars", handler.handleListCars);

app.get("/cars/:id/update", middleware.setCar, handler.handleUpdateCarForm);
app.post("/cars/:id/update", uploadOnMemory.single("image"), handler.handleUpdateCar);

app.get("/cars/:id/delete", middleware.setCar, handler.handleDeleteCar);

app.get("/cars/:id", middleware.setCar, handler.handleGetCar);
app.put("/cars/:id", middleware.setCar, handler.handleUpdateCar);
app.delete("/cars/:id", middleware.setCar, handler.handleDeleteCar);

app.listen(port, () => console.log(`Listening on http://localhost:${port}/cars`));
