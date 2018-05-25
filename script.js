var btn = document.getElementById("quoteButton");
btn.addEventListener("click", function(){
  $(document).ready(function(){
  $.ajax({
    method: "GET",
    url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10",
    headers: {
      "X-Mashape-Key": "UUGAkmTpznmshxCJDbhCbAg5oV2Bp1Lnh9tjsnj5chVbeepWsg",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
      },
    dataType: "json"
  }).done(function(data){
    var randomNumber = Math.floor((Math.random() * 9) + 1);
    $("#quotes").empty();
    $("#authors").empty();
    $("#quotes").append('<p class="quoteStyle">'+'"'+data[randomNumber].quote+'"'+"</p>");
    $("#authors").append('<p class="authorStyle">'+"-"+data[randomNumber].author+"</p>");
    });  
  });  
});
var twitterbtn = document.getElementById("twitterButton");
twitterbtn.addEventListener("click", function(){
  window.open("https://twitter.com/intent/tweet?text=");
});

 
