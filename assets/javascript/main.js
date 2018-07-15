/* Array of countries
===============================================*/

var countries = [
    "mexico",
    "france",
    "egypt",
    "croatia",
    "somalia",
    "canada",
    "thailand",
    "nepal"
];

/*function to display data
=================================================*/

function displayButtons() {
    $('#globalMap').empty();
    for(var c = 0; c < countries.length; c++) {
        var j = $("<button>");
        j.addClass("nation");
        j.attr("data-name", countries[c]);
        j.text(countries[c]);
        $("#globalMap").append(j);
    }
}

$(document).on("click", "#add-country", function(event) {
    event.preventDefault();
    var country = $("#countryInput").val().trim();
    countries.push(country);
    displayButtons()
    
});


displayButtons();

/*Calling the GIFS
=====================================================*/

$(document).on("click", "button", function() {
    $("#gifDiv").empty()
    
      var country = $(this).attr("data-name");
      console.log(country);
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + country + "&api_key=Bk4CfLzmqcAx5WzJFYxfLlgC5TiyDZuO&limit=10";
      $.ajax ({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
          console.log(response);
          for (var i = 0; i <= 10; i++) {
          var imageUrl = response.data[i].images.original.url;
          var countryGifs = $("<img>");
          countryGifs.attr("src", imageUrl);
          countryGifs.attr("alt", "country gif");
          console.log(imageUrl);
          $("#gifDiv").append(countryGifs);
          }

      });
});

