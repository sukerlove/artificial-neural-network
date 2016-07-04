
const lib = require('./lib');

// let activation = 'heaviside',
//   inputX = new lib.Neuron(0, 'value', 'X'),
//   inputY = new lib.Neuron(0, 'value', 'Y'),
//   hiddenOr = new lib.Neuron(-0.99999, activation, 'OR'),
//   hiddenAnd = new lib.Neuron(-1.00001, activation, 'AND'),
//   outputXor = new lib.Neuron(-0.5, activation, 'XOR'),
//   links = [
//     new lib.Link(inputX, hiddenOr, 2),
//     new lib.Link(inputY, hiddenOr, 2),
//     new lib.Link(inputX, hiddenAnd, 1),
//     new lib.Link(inputY, hiddenAnd, 1),
//     new lib.Link(hiddenOr, outputXor, 1),
//     new lib.Link(hiddenAnd, outputXor, -1)
// ];

// layers are just sequential batch orders. neurons can appear in multiple layers, and feed forward/backward.
// let definition = {
//   layers: [
//     {
//       name: 'input',
//       neurons: [
//         inputX.id,
//         inputY.id
//       ]
//     },
//     {
//       name: 'hidden',
//       neurons: [
//         hiddenOr.id,
//         hiddenAnd.id
//       ]
//     },
//     {
//       name: 'ourput',
//       neurons: [
//         outputXor.id
//       ]
//     }
//   ]
// }
//
// let network = {
//   layers: [
//     {
//       name:    'input',
//       neurons: [inputX, inputY]
//     },
//     {
//       name:    'hidden',
//       neurons: [hiddenOr, hiddenAnd]
//     },
//     {
//       name:    'output',
//       neurons: [outputXor]
//     }
//   ]
// };
//
// let save = lib.serialize(network);

let save = require('./examples/xor.json');
network = lib.deserialize(save);
//console.log('saved', JSON.stringify(save, null, ' '));

for (let x = 0; x < 2; x++) {

  for (let y = 0; y < 2; y++) {

    console.log('------------------ [ new calculation ] ------------------');

    network.layers[0].neurons[0].value = x;
    network.layers[0].neurons[1].value = y;

    network.layers.forEach(layer => {

      console.log(`${layer.name}:`);

      layer.neurons.forEach(neuron => {

        let output = neuron.process();

        console.log(`\t${neuron.name}: ${output}`);

      });

    });

  }

}
