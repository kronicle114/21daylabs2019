'use strict';

const pie = {
  cost: 5,
  spice: 30
};
  
const latte = {
  cost: 3,
  spice: 15
};
  
const macaron = {
  cost: 1,
  spice: 3
};

const input = 9;
const output = [1, 1, 1, 48];

const pumpkinSpice = money => {
  let result = [0,0,0,0];
  // while money >= 0 then calculate how much it can buy pie, then lattes, then macaron
  let newBalance = money;

  while (newBalance >= macaron.cost) {
    if(newBalance >= pie.cost ){
      newBalance -= pie.cost;
      result[0]++;
      result[3] += pie.spice;
    } else if(newBalance >= latte.cost ){
      newBalance -= latte.cost;
      result[1]++;
      result[3] += latte.spice;
    } else if(newBalance >= macaron.cost ){
      newBalance -= macaron.cost;
      result[2]++;
      result[3] += macaron.spice;
    }
  }
  return result;
};

console.log(pumpkinSpice(input));