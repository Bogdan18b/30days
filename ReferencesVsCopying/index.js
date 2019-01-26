// start with strings, numbers and booleans
let x = 5;
let y = x;
console.log(x, y);
x = 2;
console.log(x, y);

let name = 'bob';
let name2 = name;
console.log(name, name2);
name = 'ion';
console.log(name, name2);

// Let's say we have an array
const players = ['Bogdan', 'Cristi', 'Mariella', 'Claudiu'];
const team = players;
console.log(players, team);

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
let team2 = players.slice();

// or create a new array and concat the old one in
let team3 = [].concat(team);
// or use the new ES6 Spread
let team4 = [...team];
// now when we update it, the original one isn't changed
let team5 = Array.from(players);
team[3] = 'Ion';
console.log(players, team);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Bogdan B',
  age: 20
};

// and think we make a copy:
const captain = person;
captain.number = 18;
console.log(person, captain);
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { age: 30 });
console.log(cap2);
// We also have the object spread
const cap3 = { ...person, age: 23 };
console.log(cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const PoorMansDeepClone = JSON.parse(JSON.stringify(person));
