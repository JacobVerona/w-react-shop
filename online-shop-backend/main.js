const express = require("express");
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const sqlQuery = require('./querry');
const cors = require("cors");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

let bd;
open({
    filename: './db/shop.db',
    driver: sqlite3.Database
}).then((rdb) => {
    bd = rdb;
    onDbConnected(rdb);
}).catch((e) => {
    console.error(e);
    process.kill();
});

async function insertProduct(product) {
    return await bd.run(sqlQuery.insertproduct, product.id, product.categoryid, product.imageurl, product.name, product.description, product.cost);
}

async function selectProducts() {
    return await bd.all(sqlQuery.selectproducts);
}

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("<h1>SERVER STARTED</h1>");
});

app.get('/products', async (req, res) => {
    let pr = await selectProducts();
    res.status(200).send(pr);
});

app.get('/createproduct', async (req, res) => {
    await insertProduct({
        id: req.query.id,
        categoryid: req.query.categoryid,
        imageurl: req.query.imageurl,
        name: req.query.name,
        description: req.query.description,
        cost: req.query.cost
    });
    res.status(200).send("<h1>PRODUCT CREATED</h1>");
});

app.get("/products/remove", function (req, res) {

    res.status(200).send(message);
});

async function onDbConnected(db) {
    await db.migrate({
        force: false,
        migrationsPath: "./migrations"
    })
    app.listen(PORT);
}