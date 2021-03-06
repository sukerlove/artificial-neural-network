/*

Takes one input.
Input is either 0 or 1.
It performs an NOT operation through the network.
The result is either 0 or 1.
1 if input is 0, otherwise 0

NOT 0 = 1
NOT 1 = 0

*/
const lib = require('../lib');

let not = lib.create(1, 1);

not[0].weights = [
  [-1]
];
not[1].biases = [0.5];
not[1].activate = 'heaviside';

for (let x = 0; x < 2; x++) {

    not[0].values = [x];
    let result = lib.runner(not)[0];
    console.log(`NOT ${x} = ${result}`);

}
