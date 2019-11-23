'use strict';

const prism = {
    type: 'prism',
    height: 3,
    width: 4,
    depth: 5
}

// V=Bh where B is the base area and h is the height
// The area A of a rectangle with length l and width w is A=lw
const PI = 3.14159;
const prismVolume = function (height, width, depth) {
    const B = depth * width
    const V= B * height
    return V
};

console.log(prismVolume(prism.height, prism.width, prism.depth)) // 60