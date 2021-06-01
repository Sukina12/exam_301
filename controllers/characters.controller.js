'use strict';

const charactersModel = require('../models/characters.model');
const superagent = require('superagent');

const getAPIData = async (req,res) => {
  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`;
  
  superagent.get(url).then(data => {
    const responseData = data.body.map(character => {
      return new charactersModel(character);
    })
    res.send (responseData)
  })
}

module.exports = getAPIData;
