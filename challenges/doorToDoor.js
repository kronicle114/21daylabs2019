'use strict';

const volunteers = [
  'Sally',
  'Jake',
  'Brian',
  'Hamid'
];

const neighbourhoods = [
  'Central Valley',
  'Big Mountain',
  'Little Bridge',
  'Bricktown',
  'Brownsville',
  'Paul\'s Boutique',
  'Clay Park',
  'Fox Nest'
];

// const countTotal = list => {
//   let total = 0;
//   if(list && list.length) { // check if input is an array 
//     for(let i=0; i < list.length; i++){
//       total++;
//     }
//   }
//   return total;
// };

// const doorToDoor = (volunteers, neighbourhoods, counter) => {
      
//   let volunteerToNeighbuorhoodRatio = 0;
      
//   if(volunteers && volunteers.length && neighbourhoods && neighbourhoods.length){
//     const totalVolunteers = counter(volunteers);
//     const totalNeighbourhoods = counter(neighbourhoods);

//     volunteerToNeighbuorhoodRatio = Math.ceil(totalNeighbourhoods / totalVolunteers);
//   }
//   return volunteerToNeighbuorhoodRatio;
//   // return num of neighborhoods each volunteer should visit 
// };

const doorToDoor = (volunteers, neighbourhoods) => {
  let volunteerToNeighbuorhoodRatio = 0;
  if(volunteers && volunteers.length && neighbourhoods && neighbourhoods.length){
    volunteerToNeighbuorhoodRatio = Math.ceil(neighbourhoods.length / volunteers.length);
  }
  return volunteerToNeighbuorhoodRatio;
};

console.log(doorToDoor(volunteers, neighbourhoods));