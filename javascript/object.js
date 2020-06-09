const obj = new Object();

obj.name = "Hoang"
obj.age = 40;
obj.arr = [1,2,3,4];

obj.func = function() {
	return "hello world";

};


const obj1 = {};
obj1.name = "Tom";
obj1["age"] = 12;

let ranName = "age"


const obj2 = {
 name: "Andrew",
 age : 21,
 item : {
   car : "Telsa",
   house : "10 millions $",
},
};

const obj3 = obj2;
obj3.name = "Victor";

console.log(obj2.name);


const obj5 = {...obj2};

console.log(obj5);
