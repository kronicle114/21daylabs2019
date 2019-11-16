'use strict';
const badSamples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
const threshold1 = 0.3; // Polluted

const goodSamples = ['clean', 'clean', 'clean', 'clean', 'clean'];
const threshold2 = 0.5; // Clean

const checkAir = function (samples, threshold) {
  let numberOfDirtySamples = 0;
  let pollutionLevel;
  
  samples.forEach( sample => {
    if(sample.toLowerCase() === 'dirty'){
      numberOfDirtySamples++;
    }
  });

  // Avoid a case where numberOfDirtySamples is zero, otherwise pollutionLevel will be undefined
  if(numberOfDirtySamples === 0){
    pollutionLevel = 0;
  } else {
    pollutionLevel = numberOfDirtySamples / samples.length;
  }

  return threshold > pollutionLevel ? 'Clean' : 'Polluted';
};

console.log(checkAir(badSamples, threshold1));
console.log(checkAir(goodSamples, threshold2));



// const badSamples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
// const threshold = 0.3;
// const output1 = 'Polluted';

// const checkAir = function (samples, threshold) {

//   let numberOfDirtySamples = 0;

//   samples.forEach( sample => {
//     if(sample.toLowerCase() === 'dirty'){
//       numberOfDirtySamples++;
//     }
//   });
  

//   const pollutionLevel = numberOfDirtySamples / samples.length

//   if(pollutionLevel > threshold){
//      return 'Polluted';
//   } else {
//     return 'Clean';
//   }
// };

// console.log(checkAir(badSamples, threshold));