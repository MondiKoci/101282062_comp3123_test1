
function resolvedPromise(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve({message:"delayed success!"}), delay);
    });
}


function delayedException(delay){
    return new Promise(function(resolve, reject) {
        setTimeout(reject({error:"delayed exception!"}), delay);
    });
}

//Calling functions
resolvedPromise(500).then((message) => {
    console.log(message);
})
delayedException(500).catch((error) =>{
    console.log(error)
})