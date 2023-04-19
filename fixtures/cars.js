const faker = require("faker");
const fs = require("fs");
const path = require("path");

const outpath = path.join(__dirname, "cars.json");
const cars = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 3; i++) {
  books.push({
    id: i + 1,
    name: faker.lorem.sentence(),
    price: getRandomInt(0, 1000000),
    size: faker.lorem.sentence(),
    image: "https://placeimg.com/384/640/any",
  });
}

fs.writeFileSync(outpath, JSON.stringify(cars, null, 2));
