const Creator = require('../models/creator');

//CRUD ide
//Create
//const Creator = new Creator

//R
//Creator.find().then()

//U


//D

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('static'));

require('../route/routes')(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
