'use strict';

const color = 100;
const output = [250, 310];

const festivalColours = color1 => {
  const x = (150 + color1);
  const y = (210 + color1);

  return [x, y];
};

console.log(festivalColours(color));