'use strict';

const tickets1 = [
  'red',
  'red',
  'green',
  'blue',
  'green'
];
  
const raffleEntries = {
  red: 10,
  green: 30,
  blue: 15
};
const output1 = 'You have the best odds of winning the red raffle.';
//Input:
// for countVotes() helper function
   
const output2 = {
  red: 2,
  green: 2,
  blue: 1
};

const countTickets = (tickets) => {
  let raffleEntries = {
    red: 0,
    green: 0,
    blue: 0, 
  };

  tickets.forEach( ticket => {
    if(ticket in raffleEntries){
      raffleEntries[ticket] ++;
    }
  });
  return raffleEntries;
};

const bestOdds = (tickets, raffleEntries) => {
  const totalNumberOfTickets = countTickets(tickets); // { red: 2, green: 2, blue: 1 }

  // for each of the entries, you want to divide that to the value of the raffleEntries
  let odds = {
    red: 0,
    green: 0,
    blue: 0, 
  };
  for (const property in raffleEntries){
    if(property in totalNumberOfTickets){
      odds[property] = (totalNumberOfTickets[property] / raffleEntries[property]) * 100;
    }
  }

  // find max 
  let currentMax = 0;
  let bestColor = '';
  for(const color in odds){
    if(odds[color] >= currentMax){
      currentMax = odds[color];
      bestColor = color;
    }
  }

  return `You have the best odds of winning the ${bestColor} raffle.`;
};

console.log(countTickets(tickets1));
console.log(bestOdds(tickets1, raffleEntries));