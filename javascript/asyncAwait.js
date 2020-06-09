function callback(){
	console.log(message);
}

function err(message){
	console.log(message);
}

function getData(callback ,err) {
	const connection  = true;

	return new promise( function (resolve, reject) )  {
	setTimeout( () -> {
	if connection === false) {
	return reject("error");
	}else {
	return resolve("success");
	}, 1000);
	});

	}

	getData.then(function(m) {
	console.log(m);
	}).catch(function(err){
	console.log(m);
	}).catch(function (err) {
	console.logg(err);
	});

	promise.all([getData(), getData(), getData()])
	.then( function(message) {
	  message.forEach(m -> {
	  console.log(m);
	});

	}).catch(function(error){
	console.log(error);

	};

