'use strict';
// Use the value below whenever you need the value of Pi
const PI = 3.14159;

// V=(1/3)πr^2h

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const coneVolume = function (radius, height) {
    const V=(1/3) * PI * Math.pow(radius, 2) * height
    return V
}


console.log(coneVolume(cone.radius, cone.height)) // 47.12384999999999

