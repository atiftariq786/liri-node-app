# liri-node-app

*   This is Node.js app that depends on user input from the command line
Integrate Spotify, Bands In Town API and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file.

## Technologies Used
*   Node.js
*   JavaScript
*   Spotify API (via spotify npm module)
*   OMDb API (via request npm module)
*   Bands In Town API (via request npm module)

## Liri App Videos

** Liri Node App Video Link

[I'm an inline-style link with title](https://drive.google.com/open?id=13a-3xUq5r1ScplIsou3pSELLssAsWnLX "Liri Node App Video")

** Liri Log All Data Video Link

[I'm an inline-style link with title](https://drive.google.com/open?id=1OvCkyQ-5LgoM8vYTg5FM2D1gTpLrhaM9 "Liri Log All Data Video")

## Liri App Images

** Liri-App_Log All Data Image

![alt text](https://github.com/atiftariq786/liri-node-app/blob/master/assets/images/Liri_Log%20Data%20Image.png?raw=true "Liri App Log All Data Image")

** Liri-App_Runtime Data Image1

![alt text](https://github.com/atiftariq786/liri-node-app/blob/master/assets/images/Liri-App_Runtime%20Image.png?raw=true "Liri App Runtime Data Image1")

** Liri-App_Log All Data Image2

![alt text](https://github.com/atiftariq786/liri-node-app/blob/master/assets/images/Liri-App_Runtime%20Image2.png?raw=true "Liri App Log All Data Image2")

## Liri Description

*   What our app does depends on what the user types, and there are 5 main functions: (1)                  MainCall for run the switch case and call from doWhatItSays,(2) artist lookup for a concert            events, (3) spotifySong lookup for a song, (4) movie lookup for a movies, and (5)                      doWhatItSays for read and init the random.txt file
*   The program also makes a request to the Spotify API, and we get back a JSON object that                includes everything we need (artist(s), song, preview link, and album)
    The program also makes a HTTP request to the OMDb API using the request NPM module, and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)
*   The program also reads from a file called "random.text" and executes the command and query             found there using string and array methods

## Bonus Point
*   Liri-App data saving in log.txt file fore more information review image and check the video link.

## Problem Challenges
*   Configuration and getting spotify API response give me hard time.
*   More time consumed in "do-what-it-says" function code.
*   Log all data give me little hard time.