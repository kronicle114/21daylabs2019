'use strict';

const input = [
  {
    id: 1,
    on: true
  },
  {
    id: 2,
    on: true
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: true
  },
  {
    id: 5,
    on: true
  }
];
  

const lightsOff = function(lights) {
  for(let i = 0; i < lights.length; i++) {
    for(const prop in lights[i]) {
      console.log(`${prop}: ${lights[i][prop]}`);
      if(lights[i].on){
        lights[i].on = false;
      }
    }
  }
  return lights;
};

console.log(lightsOff(input));


export { lightsOff }