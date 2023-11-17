const CreatorModel = require('../models/creator');
const PictureModel = require('../models/picture');

let egyCreator = new CreatorModel();
egyCreator._id = "001";
egyCreator.name = "teszt";
egyCreator.email = "teszt@teszt.com";
egyCreator.number_of_pictures = 112;
egyCreator.profile_picture = "";
egyCreator.save()
  .then(() => {
    console.log("Creator saved successfully");
    //kép összekapcsolása creatorral
    let egyPicture = new PictureModel();
    egyPicture._id = "0001";
    egyPicture.image = "";
    egyPicture.title = "cím";
    egyPicture.description = "leírás";
    egyPicture.uploaded_at = Date();
    egyPicture.modified_at = Date();
    egyPicture._created_by = egyCreator;
    egyPicture.save()
      .then(() => {
        console.log("Picture saved successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });





/*
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
