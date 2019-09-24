'use strict';
var models  = require('../models');
var classes  = require('./index.js');

module.exports = class Clip {
  #title
  #description
  #duration
  #uid
  #ratings
  constructor(id, callback) {
    var _this = this;
    models.Clip.find({
        where: {
            id: id
        },
        include: [
            { model: models.User},
            { model: models.Rating}
        ]
    }).then(function(clip) {
        _this.#title = clip.title;
        _this.#description = clip.description;
        _this.#duration = clip.duration;
        _this.#uid = clip.uid;
        _this.#ratings = clip.Ratings.map(function (rating) {
          return {
            stars: rating.stars,
            title: rating.title,
            review: rating.review,
            createdAt: rating.createdAt
          }
        });
        callback(_this);
    });
  }

  // getters
  get title() {
      return this.#title;
  }
  get description() {
      return this.#description;
  }
  get duration() {
      let minutes = Math.floor(this.#duration / 60);
      let seconds = this.#duration - minutes * 60;
      return minutes + 'm' + seconds + 's';
  }
  get uid() {
      return this.#uid;
  }
  get rating() {
      let rat = 0;
      this.#ratings.forEach(function(rating) {
          rat += rating.stars
      });
      return rat / this.#ratings.length;
  }
  get reviews() {
    return this.#ratings.map(function (rating) {
      if (rating.review != '') {
          return {
            stars: rating.stars,
            title: rating.title,
            review: rating.review,
            createdAt: rating.createdAt
          }
      }
        });
  }

  rate() {
       console.log(this.uid)
  }
}
