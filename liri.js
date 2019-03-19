// require("dotenv").config();

//var keys = require("./keys.js");



var axios = require("axios");
var moment = require('moment');


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

function artist(artistEvents) {

  if(artistEvents === undefined ){
    artistEvents = "Drake";
  }

  
  
  var queryUrl = "https://rest.bandsintown.com/artists/" + artistEvents + "/events?app_id=89edd9fd-9632-4b49-b6bf-d77e59aee2fd";
  
  
  console.log(queryUrl);
  
  axios.get(queryUrl).then(
    function(response) {

      var apiresponse = response.data;
     // console.log(apiresponse);
           
      console.log("Venue Name: " + apiresponse[0].venue.name);
      console.log("Location Country: " + apiresponse[0].venue.country);
      console.log("Location City: " + apiresponse[0].venue.city);

      // time conversion (MM/DD/YYY) using moment 
      var dateTime = moment(apiresponse[0].datetime).format("MM, DD, YYYY, h:mm a");
      console.log("Event Date: " + dateTime);
  
      
           
    
    });
  
  };
  

function movie(movieName) {

// Default input movie 
if(movieName === undefined){
  movieName = "Mr.Nobody";
}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    //console.log(response.data);
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
