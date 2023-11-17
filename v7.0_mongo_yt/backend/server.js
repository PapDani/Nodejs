
const Creator = require('../models/creator');

//CRUD ide
//Create
//const Creator = new Creator

//R
//Creator.find().then()

//U


//D

const express = require('express'); 
const bodyParser = require('body-parser'); //req.body-ból lehessen adatot kiolvasni
const app = express();
const port = 3000;

//6.2
app.set('view engine', 'ejs'); //res.render-t hozza létre, minden egyes objecten

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));

require('../route/routes')(app); //kódszervezés miatt, kell a "module.exports = function(app)", pictures, cerators szét lehet szervezni, 2 külön route feliratkoztatás

//hibakezelés 7.0
app.use((err, req, res, next) => {
  res.end('hiba...');
  console.log(err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
