'use strict';
const input = {
  pickadilly: {
    distance: 10,
    speed: 5
  },
  uptown: {
    distance: 13,
    speed: 10
  }
};
  
const output = {
  pickadilly: 2,
  uptown: 1.3
};

const busTimes = buses => {
  const newObj = {};

  for (const property in buses) {
    let distance = buses[property]['distance'];
    let speed = buses[property]['speed'];
    newObj[property] = distance / speed;
  }

  return newObj;
};

console.log(busTimes(input));