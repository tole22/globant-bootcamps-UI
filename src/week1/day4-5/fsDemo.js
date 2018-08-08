const fs = require('fs');
var fileName = "test.txt",
    content = "Hey There!Maximiliano";

fs.writeFile(__dirname + "/" + fileName, content, function(err) {
    if(err) {
        return console.log(err)
    }

    console.log("The file was saved!");
});

//Add/Create newtxt file if doesn't exists
    fileName = "newTxt.txt";
    content = "Hello world!!!!!";

fs.appendFile(fileName, content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//Open and write buffer content to newtxt file

// specify the path to the file, and create a buffer with characters we want to write
let path = 'newTxt.txt';  
let buffer = new Buffer('All file system APIs except fs.FSWatcher() and those that are explicitly synchronous use libuv s threadpool, which can have surprising and negative performance implications for some applications.');


// open the file in writing mode, adding a callback function where we do the actual writing
fs.open(path, 'w', function(err, fd) {  
    if (err) {
        throw 'could not open file: ' + err;
    }

    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
    });
});

// This is a node app, this code saves a file on the current path with
// the content on the variable with that name.

// Let's make more interesting, here's the API for the 'fs' module
// https://nodejs.org/api/fs.html
// Make the app check for a current file with that name, if it's there,
// log some message on the console, if not, save the file like on the example

// *****BONUS POINTS*****
// Make it with a buffer
