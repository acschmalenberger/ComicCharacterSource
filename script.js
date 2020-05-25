var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var omdbAPIKey= "3e9920ff";
var omdbQueryURL="https://www.omdbapi.com/?s=";
var omdbIDURL = " https://www.omdbapi.com/?i=";

function renderCharCard (attrName, searchResponse, aV){
  var p4 = $("<p>").text(attrName); 
          var durNum = searchResponse.results[aV].powerstats[attrName.toLowerCase()] +"%";
          var d4 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d4a = $("<div>").attr("class", "determinate blue").css("width", durNum).text(searchResponse.results[aV].powerstats[attrName.toLowerCase()]+"%");
          d4.append(d4a);
          return {body: d4, p: p4};
}

function userInput (characterName) {

$.ajax({
  url: baseUrl + apiKey + "/search/" + characterName,
  method: "GET"
}).then(function(searchResponse) {
  if (searchResponse.response === "success") {
  
  //Dynamically creating a div to house the search results title
    $("#body").empty();
    
    var row = $("<div>").attr("class", "row");
    $("#body").append(row);
    var searchResultsOutputText = $("<h2>").text("Select your character:").attr("class", "halt-text");
    row.append(searchResultsOutputText);

      for (var i = 0; i < searchResponse.results.length; i++) {
        //create a div for each item in the search array
        var searchResultDiv = $("<div>").attr("class", "searchResult col s4");
        //Creating a tilte for reach result in the search arry
        var charNameSearchResult = $("<h4>").text(searchResponse.results[i].name);
        //adding the title to the search array div
        searchResultDiv.append(charNameSearchResult);
        //creating an img for each character in the earch array with a data, alt, and src tag
        var imgURL = searchResponse.results[i].image.url;
        var num =  $("img").length;
        var searchResultImg = $("<img>").attr("src", imgURL).attr("class", "click").attr("style", "width: 100%").attr("data-name", searchResponse.results[i].name).attr("data-arrayValue", num).attr("data-id", searchResponse.results[i].id).attr("alt" , searchResponse.results[i].name + " image");
        //adding the img to the search array div
        searchResultDiv.append(searchResultImg);
        $("#body>.row").append(searchResultDiv);
      }}
      else{
        $("#body").empty();

        var stopRow = $("<div>").attr("class", "row");

        var stopImg = $("<img>").attr("src", "./assets/Stop.png").attr("class", "searchFailImg");
        stopRow.append(stopImg);
        $("#body").append(stopRow);
      };

      $("img").click(function (event) {
        event.preventDefault ();
        //passes the attr to the omdb call
        userChoice($(this).attr("data-name"));
        var aV = $(this).attr("data-arrayValue");
        
        $("#body>.row").empty();
        //var row = $("<div>").attr("class", "row");      
        var imgCol = $("<div>").attr("class", "col s4");
        var statCol = $("<div>"). attr("class", "col s8");
        var charIdName = $("<h2>").attr("id", "name").text(searchResponse.results[aV].name);      
        $("#body>.row").append(charIdName, imgCol, statCol);
        //var idImgURL = baseUrl + apiKey +"/" + id + "/image";
          var charImg = $("<img>").attr("src", searchResponse.results[aV].image.url).attr("style", "width: 100%");
        
          //Need to finish character Bio. Check on bracket notation
          var pA = $("<p>").attr("id", "styling").text("Full Name: " + searchResponse.results[aV].biography["full-name"]);
        
          var {body:d1, p:p1} = renderCharCard("Intelligence", searchResponse, aV);
          var {body:d2, p:p2} = renderCharCard("Strength", searchResponse, aV);
          var {body:d3, p:p3} = renderCharCard("Speed", searchResponse, aV);
          var {body:d4, p:p4} = renderCharCard("Durability", searchResponse, aV);
          var {body:d5, p:p5} = renderCharCard("Power", searchResponse, aV);
          var {body:d6, p:p6} = renderCharCard("Combat", searchResponse, aV);

          var p7 = $("<p>").text("First Apperence: " + searchResponse.results[aV].biography["first-appearance"]);
          statCol.append(pA, p1, d1, p2, d2, p3, d3, p4, d4, p5, d5, p6, d6, p7);
          imgCol.append(charImg);

        })})};

function userChoice (name) {
// var name = $(this).attr("data-name");
//console.log(name);
  $.ajax({
  url: omdbQueryURL + name + "&apikey="+ omdbAPIKey,
  method: "GET"
}).then(function(clickResponse) {
  var row2 = $("<div>").attr("class", "row row2");
  $("#body").append(row2);
  
  var h3 = $("<h3>").text("Other places you can find this character:");
    $(".row2").append(h3);
  
  var row3 = $("<div>").attr("class", "row3");
    $(".row2").append(row3);

  var imgCarDiv = $("<div>").attr("class", "carousel");
      row3.append(imgCarDiv);
  //clickResponse = //will be its own function
  //character picked on previous screen will be search for OMDB, activated by click
  
   for (var j = 0; j < clickResponse.Search.length; j++) {
        //var movieImgUrl = clickResponse.Search[j].Poster;
        var imdbID = clickResponse.Search[j].imdbID
          $.ajax({
            url: omdbIDURL + imdbID + "&apikey="+ omdbAPIKey,
            method: "GET"
          }).then(function(idResponse) {
      
            if (idResponse.Genre.includes("Action"))
            {
              var movieImgUrl = idResponse.Poster;

              var movieData = $("<div>").attr("class","movieData carousel-item");
              var movieResultsIMG = $("<img>").attr("src", movieImgUrl).attr("alt", idResponse.Title).attr("class", "movie");
              var movieTitle= $("<h5>").attr("class", "movieContent").text("Title: "+idResponse.Title);
              var movieRelease= $("<h5>").attr("class", "movieContent").text("Year: "+idResponse.Year);
      
              movieData.append(movieResultsIMG, movieTitle, movieRelease);
              // movieData.append(movieTitle);
              // movieData.append(movieRelease);
              imgCarDiv.append(movieData);
            } 
            $(document).ready(function(){
              $('.carousel').carousel();
            });
            // else {console.log("bad")};
    })}
  })     
};
          
     // console.log(movieResultsDiv)
  //   //other variables that will be used and appended to movie object
  //   
  // }



//userInput();

//This is to retrieve data for the search bar on the index page. 

$("#scour").click(function (event) {
  //prevents the page from refreshikng when a button is clicked  
  event.preventDefault();
  // This line of code will grab the input from the form and sanitize it
    
  var characterName = $("#search").val().trim();
  console.log(characterName);
  userInput(characterName);
  });

  