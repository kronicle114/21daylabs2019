'use strict'

// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const sphereVolume = function (radius) {
  const V = (4/3) * PI * Math.pow(radius, 3)
  return V
}

const coneVolume = function (radius, height) {
  const V=(1/3) * PI * Math.pow(radius, 2) * height
  return V
}

const prismVolume = function (height, width, depth) {
  const B = depth * width
  const V= B * height
  return V
};

const duck = [
    largeSphere,
    smallSphere,
    cone
]

const totalVolume = function (solids) {
    let totalVolume = 0
    solids.forEach(element => {
        if(element.type === 'sphere'){
            totalVolume += sphereVolume(element.radius)
        } else if(element.type === 'cone') {
            totalVolume += coneVolume(element.radius, element.height)
        } else if(element.type === 'prism'){
            totalVolume += prismVolume(element.height, element.width, element.depth)
        } else {
            console.error(`solid.type must be "sphere", "cone", or "prism"`)
        }
    });

    return totalVolume
}

console.log(totalVolume(duck)) // 272318.2571833333