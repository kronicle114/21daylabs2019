'use strict';

const spots = [
  // COLUMNS ARE X
  //    0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'R', 'M'], // 1
  ['s', 'M', 's', 'S', 'R', 'm'], // 2
  ['S', 'r', 's', 'm', 'R', 'M'], // 3
  ['S', 'r', 's', 'm', 'R', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S'], // 5
];

const vehicle = 'motorcycle'; // possible options are 'regular', 'small', or 'motorcycle'

const whereCanIPark = (spots, vehicle) => {
  const normalizeVehicleString = vehicle.toString().toLowerCase().trim();

  const availableSpots = [];
  spots.forEach( (spotRow, y) => { // For each spot in the row
    spotRow.forEach( (spotCol, x) => {
      if(normalizeVehicleString === 'regular' && spotCol === 'R'){
        availableSpots.push([x,y]);
      } else if(normalizeVehicleString === 'small' && 
      (spotCol === 'R' || spotCol === 'S')
      ) {
        availableSpots.push([x,y]);
      } else if(normalizeVehicleString === 'motorcycle' && 
      (spotCol === 'R' || spotCol === 'S' || spotCol === 'M')
      ) {
        availableSpots.push([x,y]);
      }
    });
  });

  if (availableSpots.length === 0){
    return false; // No available spots
  } else {
    //returns a list of list
    console.log(`availableSpots: ${availableSpots}`);
    return availableSpots[0]; // why does the question want you to return only the first value of the list of available spots??
  }
};

const result = whereCanIPark(spots, vehicle);
console.log(result);
