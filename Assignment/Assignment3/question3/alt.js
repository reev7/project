//Default Paramters 
let pname=prompt("Enter your name:");
function greet(name,greeting="Hello")
{
    console.log(`${greeting}, ${pname}`);
}
greet(pname);
greet(pname,"Namaste");
