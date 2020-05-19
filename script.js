var apiKey = "10206952649931006";
var baseUrl = "https://superheroapi.com/api.php/";
var characterName = "thor";

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
        var searchResultDiv = $("<div>").attr("id", "searchResult");
        //Creating a tilte for reach result in the search arry
        var charNameSearchResult = $("<h3>").text(searchResponse.results[i].name);
        //adding the title to the search array div
        searchResultDiv.append(charNameSearchResult);
        //creating an img for each character in the earch array with a data, alt, and src tag
        var imgURL = searchResponse.results[i].image.url; 
        var searchResultImg = $("<img>").attr("src", imgURL);
        searchResultImg.attr("data-name", searchResponse.results[i].name);
        searchResultImg.attr("alt" , searchResponse.results[i].name + " image");
        //adding the img to the search array div
        searchResultDiv.append(searchResultImg);
        $("#body"). append(searchResultDiv);
//test console log to CYA
        console.log(searchResponse.results[i].name);
      }

});
}

userInput();

//This is to retrieve data for the search bar on the index page. 

// $("#city-submitdata").on("click", function (event) {
//   //prevents the page from refreshikng when a button is clicked  
//   event.preventDefault();
  
//   // This line of code will grab the input from the textbox and sanitize it
//       var cityInput = $("#cityInput").val().trim();
//   //This takes the input from the form and addes it to an array that will be displayed
//       inputCitiesArray.push(cityInput);
//       localStorage.setItem("cityArray", JSON.stringify (inputCitiesArray));
//   //after the data from the form is transfered into a usable object, the data is passed to the ajax call. 
//       sanitizeCityInput(cityInput);  
//   //calling the function that wil create the aside elements
//       renderCityInfo(cityInput);
  
//     // Calling renderButtons which handles the processing of our movie array
//     //renderButtons();
//   });

