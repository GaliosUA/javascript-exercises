const findTheOldest = function(people) {
  people.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth);
  people.sort(compare);
  return people[0];
};

function compare(a, b) {
  if (isNaN(a.age)) a.age = 2023 - a.yearOfBirth;
  if (isNaN(b.age)) b.age = 2023 - b.yearOfBirth;
  if (a.age < b.age) return 1; 
  if (a.age == b.age) return 0; 
  if (a.age > b.age) return -1;
};

// Do not edit below this line
module.exports = findTheOldest;
