var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var omdbAPIKey= "3e9920ff";
var omdbQueryURL="https://www.omdbapi.com/?s=";
//var omdbIMGQueryURL: "http://img.omdbapi.com/?s="


//https://www.omdbapi.com/?s=thor&apikey=3e9920ff
//"https://superheroapi.com/api/10206952649931006/search/thor"

function userInput (characterName) {

$.ajax({
  url: baseUrl + apiKey + "/search/" + characterName,
  method: "GET"
}).then(function(searchResponse) {
  //checking to see if the API call is working
  console.log(searchResponse);
  //Dynamically creating a div to house the search results title
    $("#body").empty();
    var searchResultsOutputText = $("<h2>").text("Halt mortal, select the character you meant:");
    $("#body").append(searchResultsOutputText);
    var row = $("<div>").attr("class", "row");
    $("#body").append(row);

      for (var i = 0; i < searchResponse.results.length; i++) {
        //create a div for each item in the search array
        var searchResultDiv = $("<div>").attr("class", "searchResult col s4");
        //Creating a tilte for reach result in the search arry
        var charNameSearchResult = $("<h3>").text(searchResponse.results[i].name);
        //adding the title to the search array div
        searchResultDiv.append(charNameSearchResult);
        //creating an img for each character in the earch array with a data, alt, and src tag
        var imgURL = searchResponse.results[i].image.url; 
        var searchResultImg = $("<img>").attr("src", imgURL).attr("class", "click").attr("style", "width: 100%").attr("data-name", searchResponse.results[i].name).attr("data-id", searchResponse.results[i].id).attr("alt" , searchResponse.results[i].name + " image");
        //adding the img to the search array div
        searchResultDiv.append(searchResultImg);
        $("#body>.row"). append(searchResultDiv);
//test console log to CYA
        //console.log(searchResponse.results[i].name);
        //console.log(searchResponse.results[i].id);
      }

      $("img").click(function (event) {
        event.preventDefault ();
        //console.log($(this).attr("data-id"));
        userChoice($(this).attr("data-name"));
       var id = JSON.stringify ($(this).attr("data-id"));
        
       
       charPowerInformation(id);

        console.log(id + " on click");
      }); 
    
});
}


//https://superheroapi.com/api/access-token/character-id/image

// $("#body").empty();
// var row = $("<div>").attr("class", "row");
//   $("#body").append(row);
// var charInfoDiv = $("<div>").attr("class", "col");
// row.apped(charInfoDiv, charImg,charStats);
function charPowerInformation (id){
  console.log(id+ " ajax pass");
  $.ajax({
    //h//ttps://superheroapi.com/api.php/10206952649931006/620/powerstats
    idurl: baseUrl + apiKey +"/" + id + "/powerstats",
    method: "GET"
  }).then(function(idResponse) {
  //add in a view of the specific character information 
  $("#body").empty();

  var charIdStats = $("<h2>").text("TEST");
  $("#body").append(charIdStats);

  var row = $("<div>").attr("class", "row");
  $("#body").append(row);

  var imgCol = $("<div>").attr("class", "col s4");
  var statCol = $("<div"). attr("class", "col s8");
  
  var idImgURL = baseUrl + apiKey +"/" + id + "/image";
  var charImg = $("<img>").attr("src", idImgURL);

var charInfo = $("<p>").text(idResponse.name)
statCol.append(charInfo);
imgCol.append(charImg);
})};





function userChoice (name) {
// var name = $(this).attr("data-name");
//console.log(name);
  $.ajax({
  url: omdbQueryURL + name + "&apikey="+ omdbAPIKey,
  method: "GET"
}).then(function(clickResponse) {
  //console.log(this);
  
  //$("#body").empty();
  
var row2 = $("<div>").attr("class", "row");
$("#body").append(row2);
  //clickResponse = //will be its own function
  //character picked on previous screen will be search for OMDB, activated by click
   for (var j = 0; j < clickResponse.Search.length; j++) {
        
        console.log(clickResponse.Search[j])
      //set up variables
        var movieImgUrl = clickResponse.Search[j].Poster;
        var movieResultsIMG = $("<img>").attr("src", movieImgUrl);
        
         movieResultsIMG.attr("alt", clickResponse.Search[j].Title);
        
         (row2).append(movieResultsIMG);}
})};
          
   
     // console.log(movieResultsDiv)
  //   //other variables that will be used and appended to movie object
  //   var movieTitle = clickResponse.Search[j].Title

  //   var movieRelease = clickResponse.Search[j].Year
  // }



//userInput();

//This is to retrieve data for the search bar on the index page. 

$("#scour").click(function (event) {
  //prevents the page from refreshikng when a button is clicked  
  event.preventDefault();
  // console.log("click");
  // console.log($("#search"));
  // This line of code will grab the input from the form and sanitize it
    
  var characterName = $("#search").val().trim();
  console.log(characterName);

      //localStorage.setItem("cityArray", JSON.stringify (inputCitiesArray));
  //after the data from the form is transfered into a usable object, the data is passed to the ajax call. 
  userInput(characterName);
  });
