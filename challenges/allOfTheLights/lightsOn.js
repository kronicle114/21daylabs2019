'use strict';

const input = [
  {
    id: 1,
    on: false
  },
  {
    id: 2,
    on: false
  },
  {
    id: 3,
    on: false
  },
  {
    id: 4,
    on: false
  },
  {
    id: 5,
    on: false
  }
];
const lightsOn = function(lights) {
  for(let i = 0; i < lights.length; i++) {
    for(const prop in lights[i]) {
      console.log(`${prop}: ${lights[i][prop]}`);
      if(!lights[i].on){
        lights[i].on = true;
      }
    }
  }
  return lights;
};

console.log(lightsOn(input));

export { lightsOn }