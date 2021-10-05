var fs = require('fs');
var path = require('path');
const directory = 'Logs'


//Add function
addFunction = function(directory){
    if(!fs.existsSync(directory)){
        fs.mkdirSync(directory)
    }
    for(let i = 0; i < 10; i++){
        fs.appendFile(`./${directory}/log${i}.txt`, `Content for file nr ${i}`, function (err) {
            if (err) throw err;
            console.log(`log${i}.txt`);
          });
    }
}


//Remove function
remFunction = function(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
            console.log(`deleted files..."${file}"`)
            fs.unlinkSync(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
      });
    fs.rmdir(directory, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    }); 
}



addFunction(directory)
remFunction(directory)