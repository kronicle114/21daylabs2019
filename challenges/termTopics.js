'use strict';
// Input:

const input = [
  'smart city', 
  'rebuild the lighthouse', 
  'arts funding', 
  'transportation',
  'arts funding', 
  'rebuild the lighthouse', 
  'sports funding', 
  'tax cuts', 
  'smart city',
  'arts funding', 
  'smart city'
];
  
const output = [
  3, // smart city
  3, // arts funding
  1  // transportation
];

const termTopics = (interviews) => {
  // get index of the response array and increment it if is present for each of the item in the interview array
  let response = [0, 0, 0];
  if(interviews && interviews.length) {
    interviews.forEach( interview => {
      if( interview === 'smart city' ){
        response[0] ++;
      } else if ( interview === 'arts funding' ) {
        response[1] ++;
      } else if ( interview === 'transportation' ) {
        response[2] ++;
      }
    });
    return response;
  } else {
    return 'Input must be an array of strings';
  }
};

console.log(termTopics(input));