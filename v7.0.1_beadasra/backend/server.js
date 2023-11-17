const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('static'));

require('../route/routes')(app);

app.use((err, req, res, next) => {
  res.end('error...');
  console.log(err);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
