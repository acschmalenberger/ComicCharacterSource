
//Marvel API Call
// var searchInput = "spider-man";
// var APIKey = "c67e2837f6363498c7e1e28ebcf18af5";
  
//function characterDisplay (searchInput) {
    //var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + searchInput + "&apikey=" + APIKey;
    //var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=spider-man&apikey=c67e2837f6363498c7e1e28ebcf18af5";

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    $.ajax({
      url: "https://gateway.marvel.com:443/v1/public/characters?name=spider-man&apikey=c67e2837f6363498c7e1e28ebcf18af5",
      
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);

    });
//}
//characterDisplay(searchInput);