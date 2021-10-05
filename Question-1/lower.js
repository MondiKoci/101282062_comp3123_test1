

function lowerCaseWords(x){
	let p2 = new Promise(function(resolve, reject){
		let newArray = [];
		let counter = 0;
		for(let i = 0; i < x.length; i++){
			if(typeof x[i] == "string"){
				newArray[counter] = x[i].toLowerCase();
				$counter++;
			}
		}
		if(newArray.length > 0){
			resolve(newArray)
		}
		else{
			reject("FAILURE: No string elements found in the array")
		}
	});

	return p2
}

//Re-commited after fixing GitHub Account
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then(success => {
	console.log(success)
}, error => console.log(error))
