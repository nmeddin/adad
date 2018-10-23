//Thanks to The Coding Train on youtube for teaching me how to make this
//https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw


console.log('It\'s alive!!');
var Twit = require('twit');
var config = require('./config');
//console.log(config)
var T = new Twit(config);

var dayInMilliseconds = 1000 * 60 * 60 * 24;

sendIt();
setInterval(sentIt, dayInMilliseconds);

function sendIt(){
	var tweet = {
		status: "Another day another dollar!"
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if (err){
			console.log("Something went wrong.");
		} else {
			console.log("It worked!");
		}
	}
}