var searchInput = "spider-man";
var APIKey = "c67e2837f6363498c7e1e28ebcf18af5";
var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + searchInput + "&apikey=" + APIKey;
  
function characterDisplay (searchInput) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);

    });
}

$.ajax({
  url: omdbQueryURL, var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + searchInput + "&apikey=" + APIKey;

  method: "GET"
}).then(function(response) {

  // Printing the entire object to console
  console.log(response);
})
