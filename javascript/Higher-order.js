const func1 = function() {

}

function func2(func1){

}

const employees = [
{ id : 1 , name : "employee 1", task: "task 1", experience : 3 },
{ id : 2 , name : "employee 2", task: "task 2", experience : 3 },
{ id : 3 , name : "employee 3", task: "task 3", experience : 2 }

];

const numbers = [1,2,3,4];

console.log("numbers.forEach");
numbers.forEach(function(number){
	console.log(number * 2);
})

console.log();

console.log("number.map");
const example = numbers.map(function(number) {
	return number * 2;
});

console.log(example)


console.log();
console.log("If statement")

const goodExperience = employees.filter(function(employees){
	return employees.experience > 2;
}).map(function(employees) {
	return employees.name;
});

console.log(goodExperience);

