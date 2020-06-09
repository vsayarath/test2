const arr = [];
const obj = {};

arr.push("name");

Array.prototype.push  = function() {
	console.log("hello world")
}

arr.push();
