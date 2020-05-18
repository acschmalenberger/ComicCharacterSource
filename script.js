var apiKey = "c67e2837f6363498c7e1e28ebcf18af5";
var pKey = "a84d853b30be60dd520a25733e2558c974f2220d";

function userInput (event) {
var number = event.timestamp;
var characterName = "thor";
$.ajax({
  url: "http://gateway.marvel.com/v1/public/characters?name=" + characterName + "ts=" + number + "&apikey=" + apiKey + "&hash=" + pKey,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
}

userInput();