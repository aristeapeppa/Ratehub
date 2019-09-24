var classes = require('../classes');
var express = require('express');
var router  = express.Router();

router.get('/clips/:clip_id', function(req, res) {
  new classes.Clip(req.params.clip_id, function(clip){
    console.log(clip.title);
    console.log(clip.description);
    console.log(clip.reviews)
    res.render('index', {
      title: 'Sequelize: Express Example',
      clip: {
        title: clip.title,
        description: clip.description,
        duration: clip.duration,
        uid: clip.uid,
        rating: clip.rating,
        reviews: clip.reviews
      }
    });
  });
});

module.exports = router;
