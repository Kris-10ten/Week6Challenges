// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

function createTower(numFloors) {
    let tower = []
    for (let floor = 1; floor <= numFloors; floor++) {
        let numStars = 2 * floor - 1;
        let numSpaces = numFloors - floor;
        let floorPattern = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces);
        tower.push(floorPattern);
      }
      return tower;
}

console.log(createTower(3));
console.log(createTower(6));
console.log(createTower(7));
console.log(createTower(1));