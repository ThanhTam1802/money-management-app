console.log('Destructuring ES6');

const person = {
  name: 'Thanh Tam',
  age: 21,
  location: {
    city: 'Sai Gon',
    contry: 'Viet Nam'
  }
}

const { name, age } = person;
console.log(`name: ${name}, age ${age}`);
//const { city: ct, contry } = person.location;
//console.log(`live in ${ct}, ${contry}`);

const address = ['Viet Nam', 'Sai Gon', 'Nguyen Tieu La'];
const [contry, city, road] = address;
console.log(`You live in ${contry}, ${city}, ${road}`);