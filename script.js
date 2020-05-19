var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var characterName = "thor";
var omdbAPIKey= "3e9920ff";
var omdbQueryURL="https://www.omdbapi.com/?s=";
var omdbIMGQueryURL: "http://img.omdbapi.com/?s="

//http://img.omdbapi.com/?s=thor&apikey=3e9920ff
//"https://superheroapi.com/api/10206952649931006/search/thor"

console.log(omdbQueryURL + characterName + "&apikey="+ apiKey);
function userInput () {

  $.ajax({
    url: baseUrl + apiKey + "/search/" + characterName,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: omdbQueryURL + characterName + "&apikey="+ omdbAPIKey,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}
userInput();






