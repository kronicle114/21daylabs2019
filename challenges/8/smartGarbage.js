'use strict';

const _bins = {
  waste: 4,
  recycling: 2,
  compost: 5
};

const _trash = 'recycling';

const output = {
  waste: 4,
  recycling: 3,
  compost: 5
};
const smartGarbage = (trash, bins) => {
  /* 
        bins is an object that holds the type of garbage properties
        can only increase bins one at a time (trash is a string) 
    */

  // check if trash is a string & has length, normalize it too
  let normalizeTrashString = '';
  if(trash && trash.length){
    normalizeTrashString = trash.toString().toLowerCase().trim();
  }
  // check if there is a trash value is in the obj as a key, if it finds it then increment the value

  let newBins = {};
  if (bins && typeof bins === 'object') { // this checks that the bin is an object and returns a new copy of the bin
    Object.assign(newBins, bins);
  }

  if(normalizeTrashString in bins){
    newBins[normalizeTrashString] ++;
  }
  return newBins;
};

console.log(smartGarbage(_trash, _bins));