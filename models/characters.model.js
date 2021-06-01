'use strict';

// create characters model as a class and gives its properties
class charactersModel {
  constructor(data) {
    this.name = data.name;
    this.gender = data.gender;
    this.image = data.img;
    this.psiPowers = data.psiPowers[0].img;
  }
}

module.exports = charactersModel;
