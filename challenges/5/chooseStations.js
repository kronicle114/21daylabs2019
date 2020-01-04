'use strict';
const _stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const output = ['Bright Lights Elementary', 'Moose Mountain Community Centre'];

const chooseStations = (stations) => {
  if(stations && stations.length) {
    // get the filtered stations 
    return stations
      .filter( station => {
        const [ stationName, capacity, type ] = station; // array destructuring
        if (capacity >= 20 && (type === 'school' || type === 'community centre')) {
          return station;
        } 
      })
      .map( s => s[0]);
  }
};
  
console.log(chooseStations(_stations));