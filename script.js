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
  if (searchResponse.response === "success") {
  
  console.log(searchResponse.response);
  //Dynamically creating a div to house the search results title
    $("#body").empty();
    var searchResultsOutputText = $("<h3>").text("Select a character");
    $("#body").append(searchResultsOutputText);
    var row = $("<div>").attr("class", "row");
    $("#body").append(row);

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
        //test console log to CYA
        //console.log(searchResponse.results[i].name);
        //console.log(searchResponse.results[i].id);
      }}
      else{
        $("#body>.row").empty();

        var stopImg = $("<img>").attr("src", "./assets/Stop.png").attr("class", "searchFailImg");
        $("#body>.row").append(stopImg);
      };

      $("img").click(function (event) {
        event.preventDefault ();
        //passes the attr to the omdb call
        userChoice($(this).attr("data-name"));
        var aV = $(this).attr("data-arrayValue")
        //var id = $(this).attr("data-id");
        //console.log($(this).attr("data-id"));
        //console.log(searchResponse);
        
        
        $("#body>.row").empty();
        //var row = $("<div>").attr("class", "row");      
        var imgCol = $("<div>").attr("class", "col s4");
        var statCol = $("<div>"). attr("class", "col s8");
        var charIdName = $("<h2>").text(searchResponse.results[aV].name);      
        $("#body>.row").append(charIdName, imgCol, statCol);
        //var idImgURL = baseUrl + apiKey +"/" + id + "/image";
          var charImg = $("<img>").attr("src", searchResponse.results[aV].image.url).attr("style", "width: 100%");
        
          //Need to finish character Bio. Check on bracket notation
          var pA = $("<p>").attr("id", "styling").text("Full Name: " + searchResponse.results[aV].powerstats.biography);


        //   <div class="progress blue lighten-4 tooltipped" data-position="top" data-tooltip="Progress was at 50% when tested">
				// 	<span>Progress</span>
				// 	<div class="determinate blue" style="width: 50%; animation: grow 2s;">50%</div>
				// </div>
          var p1 = $("<p>").text("Intelligence: "); 
          var intNum = searchResponse.results[aV].powerstats.intelligence +"%";
          var d1 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top");
          var d1a = $("<div>").attr("class", "determinate blue").css("width", intNum).text(searchResponse.results[aV].powerstats.intelligence+"%");
          d1.append(d1a);
          
          var p2 = $("<p>").text("Strength: "); 
          var strNum = searchResponse.results[aV].powerstats.strength +"%";
          var d2 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d2a = $("<div>").attr("class", "determinate blue").css("width", strNum).text(searchResponse.results[aV].powerstats.strength+"%");
          d2.append(d2a);

          var p3 = $("<p>").text("Speed: "); 
          var speNum = searchResponse.results[aV].powerstats.speed +"%";
          var d3 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d3a = $("<div>").attr("class", "determinate blue").css("width", speNum).text(searchResponse.results[aV].powerstats.speed+"%");
          d3.append(d3a);

          var p4 = $("<p>").text("Durability: "); 
          var durNum = searchResponse.results[aV].powerstats.durability +"%";
          var d4 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d4a = $("<div>").attr("class", "determinate blue").css("width", durNum).text(searchResponse.results[aV].powerstats.durability+"%");
          d4.append(d4a);

          var p5 = $("<p>").text("Power: "); 
          var powNum = searchResponse.results[aV].powerstats.power +"%";
          var d5 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d5a = $("<div>").attr("class", "determinate blue").css("width", powNum).text(searchResponse.results[aV].powerstats.power+"%");
          d5.append(d5a);

          var p6 = $("<p>").text("Combat: "); 
          var comNum = searchResponse.results[aV].powerstats.combat +"%";
          var d6 = $("<div>").attr("class", "progress blue lighten-4 tooltipped").attr("data-position", "top")
          var d6a = $("<div>").attr("class", "determinate blue").css("width", comNum).text(searchResponse.results[aV].powerstats.combat+"%");
          d6.append(d6a);
          //var p2 = $("<p>").attr("id", "slider2").text("Strength: " + searchResponse.results[aV].powerstats.strength);
          //var p3 = $("<p>").attr("id", "slider3").text("Speed: " + searchResponse.results[aV].powerstats.speed);
          //var p4 = $("<p>").attr("id", "slider4").text("Durability: " + searchResponse.results[aV].powerstats.durability);
          //var p5 = $("<p>").attr("id", "slider5").text("Power: " + searchResponse.results[aV].powerstats.power);
          //var p6 = $("<p>").attr("id", "slider6").text("Combat: " + searchResponse.results[aV].powerstats.combat);
          //Need to finish character Bio. Check on bracket notation
          var p7 = $("<p>").text("First Apperence: " + searchResponse.results[aV].powerstats.biography);
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
  var other = $("<h3>").text("Other places you can find this character:");
        $("#body").append(other);
var row2 = $("<div>").attr("class", "row");
$("#body").append(row2);
  //clickResponse = //will be its own function
  //character picked on previous screen will be search for OMDB, activated by click
   for (var j = 0; j < clickResponse.Search.length; j++) {
        
        console.log(clickResponse.Search[j])
      //set up variables
        var movieImgUrl = clickResponse.Search[j].Poster;
        var movieResultsIMG = $("<img>").attr("src", movieImgUrl).attr("alt", clickResponse.Search[j].Title).attr("style", "width: 25%");
        
         row2.append(movieResultsIMG);
        }})};
          
   
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
  // This line of code will grab the input from the form and sanitize it
    
  var characterName = $("#search").val().trim();
  console.log(characterName);
  userInput(characterName);
  });

  $(document).ready(function(){
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
  });