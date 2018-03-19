var express = require('express');
var router = express.Router();
var apodService = require('../services/apod');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Fetch a picture from NASA's Astronomy Picture of the Day service */
router.get('/fetchpicture', function(req, res, next){

  console.log('fetch pic route ')
  if (req.query.picturetype === 'random') {
      res.send('todo: get random picture' + JSON.stringify(data));
  }
  else {
    // default is today's picture
    res.send('todo: get today\'s picture');
  }

});

module.exports = router;
