'use strict';

const CharactersModel = require('../models/characters.crud.model');

const creatFavourite = async (req, res) => {
  const { name,
    gender,
    image,
    psiPowers } = req.body;
  const slug = name.toLowerCase().split(' ').join('-');
  CharactersModel.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('The Character Is already Exist');
    } else {
      const newFavChar = new CharactersModel({
        name: name,
        slug: slug,
        gender: gender,
        image: image,
        psiPowers: psiPowers
      });
      newFavChar.save();
      res.send('The Character Added To Favourites');
    }
  });
}
const retrieveFavourite = async (req, res) => {
  CharactersModel.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
}

const deleteFavourite = async (req, res) => {
  const slug = req.params.slug;
  CharactersModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      CharactersModel.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
}

const updateFavourite = async (req, res) => {
  const slug = req.params.slug;
  const { name,
    gender } = req.body;

  CharactersModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].name =name;
      data[0].gender =gender;
      data[0].slug = name.toLowerCase().split(' ').join('-');
      data[0].save();
      CharactersModel.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
}




module.exports = {
  creatFavourite,
  retrieveFavourite,
  deleteFavourite,
  updateFavourite
}
