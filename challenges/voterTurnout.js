'use strict';

/* Complete the function voterTurnout(), that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return false. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the same names in the same order. If they are, our function should return "All clear, we can count the votes!", if they are not it should return "FRAUD!".

*/

//Input:

const fraud_voter_signatures = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Fake McFakerson',
  'Jane Janesford'
];

const fraud_voter_ids = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];
//Output:
'FRAUD!';

// Input:

const all_clear_voter_signatures = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];

const all_clear_voter_ids = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];

// Output:
'All clear, we can count the votes!';


const voterTurnout = (voter_signatures, voter_ids) => {
  if(voter_signatures && voter_ids && voter_signatures.length === voter_ids.length ) {
    // check each item and make sure they are the same
    let response = 'All clear, we can count the votes!';
    for(let i = 0; i < voter_signatures.length; i++){
      // console.log(i + ' ' + voter_signatures[i] + ' ' + voter_ids[i]);
      if(voter_signatures[i] !== voter_ids[i]){
        response = 'FRAUD!';
        console.log(i + ' ' + voter_signatures[i] + ' ' + voter_ids[i]);
      }
    }
    return response;
  } else {
    return false;
  }
};

console.log(voterTurnout(fraud_voter_signatures, fraud_voter_ids));
console.log(voterTurnout(all_clear_voter_signatures, all_clear_voter_ids));