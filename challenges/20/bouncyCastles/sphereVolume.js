'use strict';
let pi = require('./constants.js')
// V = ⁴⁄₃πr³

const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}
const sphereVolume = function (radius) {
    const V = (4/3) * pi * Math.pow(radius, 3)
    return V
};

console.log(sphereVolume(largeSphere.radius)) // 268082.3466666666
console.log(sphereVolume(smallSphere.radius)) // 4188.786666666666