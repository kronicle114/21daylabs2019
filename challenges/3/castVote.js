'use strict';
const castVote = (name, votes) => {
  if(name && votes && votes.length === 3) {
    const lowercaseName = name.toLowerCase();
    if(lowercaseName === 'tim'){
      votes[0] += 1;
    } else if (lowercaseName === 'sally') {
      votes[1] += 1;
    } else if (lowercaseName === 'beth') {
      votes[2] += 1;
    } else {
      console.log('there is an error');
    }
    return votes;
  }
};