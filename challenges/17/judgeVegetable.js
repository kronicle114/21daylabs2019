'use strict';

const v = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
  
const m = 'redness';

const judgeVegetable = (vegetables, metric) => {

  let currentMax = vegetables[0][metric];
  let indexOfPerson = 0; 
  vegetables.forEach( (element, index) => {
    if(element[metric] >= currentMax){
      currentMax = element[metric];
      indexOfPerson = index;
    }
  });

  return vegetables[indexOfPerson].submitter;
};

console.log(judgeVegetable(v, m));