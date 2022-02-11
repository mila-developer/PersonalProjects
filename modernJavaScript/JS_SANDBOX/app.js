const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state
  }
}

let val;

val = person;
//Get specific value
val = person.firstName;
val = person['lastName'];

console.log(val);