const renderMW = require('../middleware/renderMW');

const addCreatorMW = require('../middleware/creator/addCreatorMW');
const deleteCreatorMW = require('../middleware/creator/deleteCreatorMW');
const getCreatorByIdMW = require('../middleware/creator/getCreatorByIdMW');
const getCreatorsMW = require('../middleware/creator/getCreatorsMW');
const updateCreatorMW = require('../middleware/creator/updateCreatorMW');

const addPictureMW = require('../middleware/picture/addPictureMW');
const deletePictureMW = require('../middleware/picture/deletePictureMW');
const getPictureByIdMW = require('../middleware/picture/getPictureByIdMW');
const getPicturesMW = require('../middleware/picture/getPicturesMW');
const updatePictureMW = require('../middleware/picture/updatePictureMW');

//models 7.0
const PictureModel = require('../models/picture');
const CreatorModel = require('../models/creator');

//Képekhez 6.2.1.
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

module.exports = function (app) {
    const objectRepository = {
        PictureModel: PictureModel,
        CreatorModel: CreatorModel
    };

    //routeok sorrendjének megváltoztatása a videó alapján

    //---CREATOR---
    //end pointok profil képek kiszolgálására 6.2.1.
    app.use('/creators/profilepicture/:id',
        function (req, res, next) { //middlewarebe betenni, esetleg?
            const path = "C:/Users/papda/OneDrive/Asztali gép/Budapest egyetem/3. félév/JavaScript/workspace_for_js_class/git/Nodejs/v6.2.1_express_temp_yt/uploads/";
            console.log(`C:/Users/papda/OneDrive/Asztali gép/Budapest egyetem/3. félév/JavaScript/workspace_for_js_class/git/Nodejs/v6.2.1_express_temp_yt/uploads/${req.params.id}`);
            res.sendFile(`${path}${req.params.id}`, {
                headers: {
                    'content-type': 'image/jpeg'
                }
            });
        });

    //Creator update
    app.use(
        '/creators/edit/:creatorid',
        getCreatorByIdMW(objectRepository),
        updateCreatorMW(objectRepository),
        renderMW(objectRepository, 'editCreator')
    );

    //Creator delete
    app.get(
        '/creators/delete/:creatorid',
        getCreatorByIdMW(objectRepository),
        deleteCreatorMW(objectRepository)
    );

    //Creator get (read)
    app.get(
        '/creators',
        getCreatorsMW(objectRepository),
        renderMW(objectRepository, 'creators')
    );

    //Creator add (create)
    app.use(
        '/addcreator',
        upload.single('profile'), //ennek a stringnek meg kell egyeznie a megfelelő ejs fájlban a hozzá tartozó input hoz tartózó name-nak (és/vagy idnak)
        addCreatorMW(objectRepository), //FONTOS!!! return next(); hiányzott middlewareből
        renderMW(objectRepository, 'addCreator')
    );

    //---PICTURE---

    //Fog-e kelleni endpoint ezeknek a képeknek a kiszolgálására?

    //Picture update
    app.use(
        '/gallery/edit/:pictureid',
        getPictureByIdMW(objectRepository),
        updatePictureMW(objectRepository),
        renderMW(objectRepository, 'editPicture')
    );

    //Picture delete
    app.get(
        '/gallery/del/:pictureid',
        getPictureByIdMW(objectRepository),
        deletePictureMW(objectRepository)
    );

    app.get(
        '/gallery/edit',
        getPicturesMW(objectRepository),
        renderMW(objectRepository, 'editGallery')
    );

    //Picture add (create)
    app.use(
        '/addpicture',
        upload.single('picture'),
        addPictureMW(objectRepository),
        renderMW(objectRepository, 'addPicture')
    );

    //Picture get (read)
    app.get(
        '/gallery',
        getPicturesMW(objectRepository),
        renderMW(objectRepository, 'gallery')
    );

    app.get(
        '/',
        renderMW(objectRepository, 'index.ejs')
    );
};