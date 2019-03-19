// require("dotenv").config();

//var keys = require("./keys.js");



var axios = require("axios");



// Grab the movieName 
var action = process.argv[2];
var value = process.argv[3];

switch (action){

  case "concert-this" :artist(value);
  break;

  case "spotify-this-song": ff();
  break;

  case "movie-this": movie(value);
  break;
  
  case "do-what-it-says": ff();
  break;

  default:
  return console.log("No Command Provided")

}





function movie(movieName) {

// Default input movie 
if(movieName === undefined){
  movieName = "Mr.Nobody";
}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log(response.data);
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
    
     
  
  });

};
