  
  $(document).ready(function() {

  $(window).keydown(function(event){

    if(event.keyCode == 15) {
    
      event.preventDefault();
    
      return false;
    }
  });
});
    
   var gifButtons = ["Destiny's Child", "TLC","R.Kelly","Total", "Toni Braxton", "Lil Kim", "Brandy"];

   var i ="";

     function renderButtons() {
      
        $("#button-view").empty();
      
        for (i = 0; i < gifButtons.length; i++) {
          
          var a = $("<button>");
        
          a.addClass("giphyButton");
    
          a.attr("data-name", gifButtons[i]);

          a.text(gifButtons[i]);
     
          $("#button-view").append(a);
        }
      }


     $("#button").on("click", function(event) {

      var gifInput = $("#gif-input").val().trim();


      gifButtons.push(gifInput);
      renderButtons();
      event.preventDefault();
  
  });

         
    


    $(document).on("click", ".giphy", function() {

      var state = $(this).attr("data-state");

      if (state === 'still') {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

  function displayGifs(){
      var input = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag= " + input + ";" + ""
      console.log(queryURL);
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })

   
      .done(function(response) {

        var myImage = $("<img class='giphy' data-state='still'>");

        myImage.attr("src", response.data.fixed_height_small_still_url);
        myImage.attr("data-still", response.data.fixed_height_small_still_url);
        myImage.attr("data-animate", response.data.fixed_height_small_url);

        $("#images").prepend(myImage);

        console.log(response);


        
      });
    }

$(document).on("click", ".giphyButton", displayGifs);



renderButtons();
