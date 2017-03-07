// inherent in node is http package
var http = require("http");
var randNum = 0;
var portOne = 7000; // good person
var portTwo = 7500; // bad person

var niceThings = ["You are amazing", "You are so talented", "People love you", "You are attractive inside and out"];
var badThings = ["You are lame", "You are so NOT talented", "People loathe you", "You look like you have been beaten with an ugly stick"];

function getRandom() {
    randNum = Math.floor(Math.random() * 4);
    return randNum;
}

function handleRequestOne(request, response) {
    response.end(niceThings[getRandom()]);
}

function handleRequestTwo(request, response) {

    response.end(badThings[getRandom()]);
}


// createServer is part of http package with the handleRequest callback
// every request is going to run through the callback
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);



serverOne.listen(portOne, function() {
    console.log("Server listening on: http://localhost:%s", portOne);
});

serverTwo.listen(portTwo, function() {
    console.log("Server listening on: http://localhost:%s", portTwo);
});
