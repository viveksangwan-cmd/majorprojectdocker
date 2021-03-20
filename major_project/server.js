const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static('static'))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/static/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);