const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GKUKIB'); //mongodb://localhost/GKUKIB - lehet baj a localhostt-al,
//lehet mást kell megadni, nem tudom, h hogy tesztelem majd, h jó e a connection
//mongoose.connect('mongodb://127.0.0.1:27017/GKUKIB');

module.exports = mongoose;