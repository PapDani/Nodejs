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

//models

//
module.exports = function(app){
    const objectRepository = {
        //models
    };

    //Creator add (create)
    app.use(
        '/addcreator',
        addCreatorMW(objectRepository),
        renderMW(objectRepository, 'addCreator')
    );

    //Creator delete
    app.get(
        '/creators/delete/:creatorid',
        getCreatorByIdMW(objectRepository),
        deleteCreatorMW(objectRepository)
    );

    //Creator update
    app.use(
        '/creators/edit/:creatorid',
        getCreatorByIdMW(objectRepository),
        updateCreatorMW(objectRepository),
        renderMW(objectRepository, 'editCreator')
    );

    //Creator get (read)
    app.get(
        '/creators',
        getCreatorsMW(objectRepository),
        renderMW(objectRepository, 'creators')
    );

    //Picture add (create)
    app.use(
        '/addpicture',
        addPictureMW(objectRepository),
        renderMW(objectRepository, 'addPicture')
    );

    //Picture delete
    app.get(
        '/gallery/del/:pictureid',
        getPictureByIdMW(objectRepository),
        deletePictureMW(objectRepository)
    );

    //Picture update
    app.use(
        '/gallery/edit/:pictureid',
        getPictureByIdMW(objectRepository),
        updatePictureMW(objectRepository),
        renderMW(objectRepository, 'editPicture')
    );

    //Picture get (read)
    app.get(
        '/gallery',
        getPicturesMW(objectRepository),
        renderMW(objectRepository, 'gallery')
    );

    app.get(
        '/gallery/edit',
        getPicturesMW(objectRepository),
        renderMW(objectRepository, 'editGallery')
    );
};