// hämtar in express
// När vi går vidare från server js localhost 999
const express = require('express');
// initialiserar express
const app = express();
const cors = require('cors');

const productControler = require('./controlers/productcontroler');

app.use(cors());
app.use(express.urlencoded({extended: false}))
// nedan json så det kan snacka med json
app.use(express.json());

// när vi gått vidare från server.js lhost999 och skriver api/products då vill vi använda productControler
app.use('/api/products', productControler);


module.exports = app;
// när detta är gjort kan vi importera serverfilen och slippa fel förhoppningsvis
