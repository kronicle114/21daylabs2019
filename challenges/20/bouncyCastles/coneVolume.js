'use strict';
let pi = require('./constants.js')
// V=(1/3)πr^2h

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const coneVolume = function (radius, height) {
    const V=(1/3) * pi * Math.pow(radius, 2) * height
    return V
}


console.log(coneVolume(cone.radius, cone.height)) // 47.12384999999999

