

require("dotenv").config();
var keys = require("./keys.js");

var axios = require("axios");
var moment = require('moment');
var Spotify = require("node-spotify-api");
var fs = require("fs");
var divider = "\n------------------------------------------------------------\n\n";

// Grab the movieName 
var actArg = process.argv[2];
var valueArg = process.argv[3];
mainCall(actArg,valueArg);

// main call for Do what it says
function mainCall(action,value){
switch (action){

  case "concert-this" :artist(value);
  break;

  case "spotify-this-song": spotifySong(value);
  break;

  case "movie-this": movie(value);
  break;
  
  case "do-what-it-says": doWhatItSays();
  break;

  default:
  return console.log("No Command Provided")

  }
}
//--------------------------------------------------------------------------------

function artist(artistEvents) {

  if(artistEvents === undefined ){
    artistEvents = "Drake";
  }

    
  var queryUrl = "https://rest.bandsintown.com/artists/" + artistEvents + "/events?app_id=89edd9fd-9632-4b49-b6bf-d77e59aee2fd";
  
  
  console.log(queryUrl);
  
  axios.get(queryUrl).then(
    function(response) {

      var apiresponse = response.data;
      
                 
      console.log("Venue Name: " + apiresponse[0].venue.name);
      console.log("Location Country: " + apiresponse[0].venue.country);
      console.log("Location City: " + apiresponse[0].venue.city);

      // time conversion (MM/DD/YYY) using moment 
      var dateTime = moment(apiresponse[0].datetime).format("MM, DD, YYYY, h:mm a");
      console.log("Event Date: " + dateTime);
  
      // log artist all search data to log.txt file

      var artistData = [
        "Venue Name: " + apiresponse[0].venue.name,
        "Location Country: " + apiresponse[0].venue.country,
        "Location City: " + apiresponse[0].venue.city,
        "Event Date: " + dateTime,
        
      ].join("\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", artistData + divider, function(err) {
        if (err) throw err;
       
      });
                    
    });
  
  };
//--------------------------------------------------------------------------------

function spotifySong(songName){
  var spotify = new Spotify(keys.spotify);

  if(songName === undefined){
    songName = "The Sign by Ace of Base";
  }

  spotify
  .search({ type: 'track', query: songName, limit: 1 })
  .then(function(response) {
    
    console.log(" Artist: " + response.tracks.items[0].album.artists[0].name);
    console.log("The song's name: " + response.tracks.items[0].name);
    console.log("A preview link of the song from Spotify: " + response.tracks.items[0].preview_url);
    console.log("The album that the song is from: " + response.tracks.items[0].album.name);

  // log spotify all search data to log.txt file

  var spotifyData = [
    "Artist: " + response.tracks.items[0].album.artists[0].name,
    "The song's name: " + response.tracks.items[0].name,
    "A preview link of the song from Spotify: " + response.tracks.items[0].preview_url,
    "The album that the song is from: " + response.tracks.items[0].album.name,
    
    ].join("\n");
  
    fs.appendFile("log.txt", spotifyData + divider, function(err) {
    if (err) throw err;
   
  });

           
  })
  .catch(function(err) {
    console.log(err);
  });


   
  }

//-------------------------------------------------------------------------------

function movie(movieName) {

// Default input movie 
if(movieName === undefined){
  movieName = "Mr.Nobody";
}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    
    console.log("Movie Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("ImdbRating: " + response.data.imdbRating);

    var rottenRating = response.data.Ratings;

    if (rottenRating && rottenRating.length >= 2){

      console.log("Rotten Tomatoes Rating: " + rottenRating[1].Value);     
     
    }
    else  {
      console.log("Rotten Tomatoes Rating is not available");
    }
    
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    
  // log movie all search data to log.txt file

  var movieData = [
    "Movie Title: " + response.data.Title,
    "Release Year: " + response.data.Year,
    "ImdbRating: " + response.data.imdbRating,
    "Rotten Tomatoes Rating: " + rottenRating[1].Value,
    "Country: " + response.data.Country,
    "Language: " + response.data.Language,
    "Plot: " + response.data.Plot,
    "Actors: " + response.data.Actors,
   
    ].join("\n");
  
  // Append showData and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", movieData + divider, function(err) {
    if (err) throw err;
   
  }); 
 
  });

};
//------------------------------------------------------

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		} else {
      var dataArr = data.split(",");   
     
			var randVal = dataArr[1];
			var randAct = dataArr[0];

			mainCall(randAct , randVal);
			
		}

		
	});
}