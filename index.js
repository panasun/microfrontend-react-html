let express = require('express');
let cors = require('cors');
let path = require('path');
const fs = require('fs');

let app = express();

app.use(express.json());

app.use(cors({ origin: true }));

app.use(express.static(path.resolve(path.join(__dirname, './child-app/build'))));

app.get('/getfiles', (req, res, next) => {
  const jsFolder = './child-app/build/static/js';
  const cssFolder = './child-app/build/static/css';
  const mediaFolder = './child-app/build/static/media';

  jsFiles = [];
  cssFiles = [];
  mediaFiles = [];

  fs.readdirSync(jsFolder).forEach((eachFile) => {
    jsFiles.push(eachFile);
  });

  fs.readdirSync(cssFolder).forEach((eachFile) => {
    cssFiles.push(eachFile)
  });

  fs.readdirSync(mediaFolder).forEach((eachFile) => {
    mediaFiles.push(eachFile)
  });

  res.send({ jsFiles, cssFiles, mediaFiles });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('server is running on: ', PORT);
});
