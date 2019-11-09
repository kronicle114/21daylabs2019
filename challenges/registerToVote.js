'use strict';

const _name = 'Bradley';
const _unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

const output = ['Jake', 'Alanna', 'Stephanie'];

const registerToVote = (name, unregisteredVoters) => {
  // given a name, take it out of the array
  if (name && unregisteredVoters && unregisteredVoters.length) {
    return unregisteredVoters.filter( voter => voter !== name);
  } else {
    console.log('there was an error');
  }
};

console.log(registerToVote(_name, _unregisteredVoters));