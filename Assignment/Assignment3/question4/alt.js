//Object Destructing
const person={
    fullName:"Riva Koirala",
    age:19,
    city:"Bardibas",
}
const { fullName, age, city} = person; //object destruct to extract properties 


console.log(`Name: ${fullName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

console.log(person);    //access whole object

console.log(person.fulName);
console.log(person.age);            //access member function
console.log(person.city);
