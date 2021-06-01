'use strict';

const mongoose = require('mongoose');

const Characters = mongoose.Schema ({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim:true
  },
  slug :  {
    type: String,
    unique: true,
    lowercase: true,
    trim:true
  },
  gender: String,
  image: String,
  psiPowers: [String]
})

const CharactersModel = mongoose.model ('characters', Characters);

module.exports = CharactersModel;
