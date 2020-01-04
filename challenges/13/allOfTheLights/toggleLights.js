'use strict';

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

// for toggleLights() function
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
  
const lightsAreOnInput = true;

const toggleLights = function(lights, lightsAreOn, switchOn, switchOff) {
  return lightsAreOn ? switchOff(lights) : switchOn(lights);
};

console.log(toggleLights(input, lightsAreOnInput, lightsOn, lightsOff));
