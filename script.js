var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var characterName = "thor";
var omdbAPIKey= "3e9920ff";
var omdbQueryURL="https://www.omdbapi.com/?s=";
//var omdbIMGQueryURL: "http://img.omdbapi.com/?s="


//https://www.omdbapi.com/?s=thor&apikey=3e9920ff
//"https://superheroapi.com/api/10206952649931006/search/thor"

function userInput () {

$.ajax({
  url: baseUrl + apiKey + "/search/" + characterName,
  method: "GET"
}).then(function(searchResponse) {
  //checking to see if the API call is working
  console.log(searchResponse);
  //Dynamically creating a div to house the search results title
    $("#body").empty();
    var searchResultsOutputText = $("<h2>").text("Halt mortal, did you mean:");
    $("#body").append(searchResultsOutputText);
    
      for (var i = 0; i < searchResponse.results.length; i++) {
        //create a div for each item in the search array 
        console.log(searchResponse.results[i].name);
      
      
      }

});
}

function userChoice (){
$.ajax({
  url: omdbQueryURL + characterName + "&apikey="+ omdbAPIKey,
  method: "GET"
}).then(function(response) {
  console.log(response);
  clickResponse = //will be its own function
  //character picked on previous screen will be search for OMDB, activated by click
  for (var j = 0; j<clickResponse.Search.length; j++)
    //set up variables
    var movieImgUrl = clickResponse.Search[j].Poster
    var movieResultsDiv= $("<img>".attr("src", movieImgUrl));
    movieResultsDiv.attr("alt", clickResponse.Search[j].Title)
    $("#body").append(movieResultsDiv);
    // console.log(movieResultsDiv)
    //other variables that will be used and appended to movie object
    var movieTitle = clickResponse.Search[j].Title

    var movieRelease = clickResponse.Search[j].Year

});
}
userChoice();

userInput();






