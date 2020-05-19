var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var characterName = "thor";

//"https://superheroapi.com/api/10206952649931006/search/thor"


function userInput () {

$.ajax({
  url: baseUrl + apiKey + "/search/" + characterName,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
}

userInput();