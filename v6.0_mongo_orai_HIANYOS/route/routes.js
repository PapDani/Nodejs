var addCreatorMW = require('../middleware/creator/addCreatorMW');
var deleteCreatorMW = require('../middleware/creator/deleteCreatorMW');
var getCreatorMW = require('../middleware/creator/getCreatorMW');
var getCreatorsMW = require('../middleware/creator/getCreatorsMW');
var updateCreatorMW = require('../middleware/creator/updateCreatorMW');

var addPictureMW = require('../middleware/picture/addPictureMW');
var deletePictureMW = require('../middleware/picture/deletePictureMW');
var getPictureMW = require('../middleware/picture/getPictureMW');
var getPicturesMW = require('../middleware/picture/getPicturesMW');
var updatePictureMW = require('../middleware/picture/updatePictureMW');

module.exports = function(app){
    
    app.use("/", (req, res, next) => res.render('../frontend/index', {header2: "teszt"}));
    app.get("/gallery", (req, res, next) => res.render('../frontend/gallery'));
    app.get("/editGallery", (req, res, next) => res.render('../frontend/editGallery'));
    app.get("/editGallery/editPicture", (req, res, next) => res.render('../frontend/editPicture/:pictureId'));
    app.get("/creators", (req, res, next) => res.render('../frontend/creators'));
    app.use("/creators/editCreator", (req, res, next) => res.render('../frontend/editCreator/:cretorId'));
    app.use("/addPicture/addCreator", (req, res, next) => res.render('../frontend/addCreator'));

    app.use("/addPicture", (req, res, next) => (res.render('../frontend/addPicture')));

    /*
    app.use('/creators/addCreator');
    app.use('/creators/deleteCreator/:creatorId');
    app.get('/creators/getCreator/:creatorId');
    app.get('/creators/getCreators'); //vagy csak simán '/creators', amikor a menüben a creators oldalra navigálok, mert akkor az összes creatort lekérdezem és megjelenítem egyszerre, egy helyen
    app.use('/creators/updateCreator/:creatorId');

    app.use('/pictures/addPicture');
    app.use('/pictures/deletePicture/:pictureId');
    app.get('/pictures/getPicture/:pictureId');
    app.get('/pictures/getPictures');
    app.use('/pictures/updatePicture/:pictureId');
    */
}

// error handle MW, npm oldalról

//app.use(errorHandlerMW)
