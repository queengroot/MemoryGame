/*Kate Blunt
CGS2829
November 14th, 2020
Project 2 - Memory Game*/


"use strict";
$(document).ready(function () {
  //the each method specifies a function to run for each matched element
    //In this case, for each selector that is labeled #image_rollovers 
    //the function will work
    
    var temp = "";
    var tempSource = "";
    var counter = 0;
    var num_cards = 48;

 
    //images array
    var images = [
        "images/blank.png",
        "images/back.png",
        "images/card_1.png",
        "images/card_2.png",
        "images/card_3.png",
        "images/card_4.png",
        "images/card_5.png",
        "images/card_6.png",
        "images/card_7.png",
        "images/card_8.png",
        "images/card_9.png",
        "images/card_10.png",
        "images/card_11.png",
        "images/card_12.png",
        "images/card_13.png",
        "images/card_14.png",
        "images/card_15.png",
        "images/card_16.png",
        "images/card_17.png",
        "images/card_18.png",
        "images/card_19.png",
        "images/card_20.png",
        "images/card_21.png",
        "images/card_22.png",
        "images/card_23.png"       
    ];
    
    var cards = [];
    
    //random images displayed
   // var size = images.length;
    //var i = Math.floor(size*Math.random());
   
    
    num_cards = sessionStorage.getItem("num_cards");
    
    //put onto the html document
    document.getElementById("player").innerHTML = sessionStorage.getItem("player_name");
    document.getElementById("high_score").innerHTML = localStorage.getItem("highScore");
    document.getElementById("correct").innerHTML = localStorage.getItem("correctFlips");
       
    for(var i = 0; i < (num_cards/2); i++){
        
             //random images displayed
            var size = images.length;
            var k = Math.floor(size*Math.random());
            while(k == 1)
                {
                     k = Math.floor(size*Math.random());
                }
            cards.push(images[k]);
            cards.push(images[k]);
            
    }
            
                    
     for(var i = 0; i < num_cards; i++){
            if(i >= 0 && i <= 7)
                {
                    var sizeCards = cards.length;
                    var z = Math.floor(sizeCards*Math.random());
            $("#rowOne").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");
                cards.splice(z,1);
                }
        
            else if (i > 7 && i <= 15)
                {
                     $("#rowTwo").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");}
                
    
                else if (i > 15 && i <= 23)
                {
                     $("#rowThree").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");}
                
                  
                  else if (i > 23 && i <= 31)
                {
                     $("#rowFour").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");}
                
                
                else if (i > 31 && i <= 39)
                {
                     $("#rowFive").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");}
                
                
                else if (i > 39 && i <= 47)
                {
                     $("#rowSix").append("<ahref='#'><img id = '" + cards[z] + "' src='images/back.png' /></a>");}
                
        
    }
    
    //session storage
    $("#save_settings").click(function() {
       
       
        var player_name = $("#player_name").val();
        var num_cards = $("#num_cards").val();
        var highScore = "";
        var correctFlips = "";
        
        sessionStorage.setItem("player_name", player_name);
        sessionStorage.setItem("num_cards", num_cards);
        localStorage.setItem("highScore", highScore);
        localStorage.setItem("correctFlips", correctFlips);
        
    
        
        //reload the page 
        location.reload();
        
    });
    
    
    //cookies for name and card number
    //this is how to use tabs
    $("#tabs").tabs();
    
     
    
    
    //preload the images
    $("#cards a").each(function () {
        
        //this gets the src attribute
        var swappedImage = new Image();
        
       swappedImage.src = $(this).attr("href");

    }); // end each

    
        // set up event handlers
        $("#cards img").click(function() {
            
            if (counter == 2)
                {
                    counter = 0;
                   
                }
        
            //swap image - change the source attribute
            var imageURL = $(this).attr("id");
            var back = $(this).attr("src"); 
        
           
            
            //per specifications, when a user clicks on a card the back fades out half a second
            $(this).fadeOut(500);
            
            //per the specifications the underneath of the card fades in half a second
            $(this).attr("src", imageURL).fadeIn(500);
            //alert(imageURL);
           
             //on the second turn, test to see if the cards are a match
            if(counter == 1){
            if($(this).attr("src") == tempSource)
                {
                    
                    alert("Nice match!");
                    $(this).hide();
                    $(temp).hide();
                    
                
                
                }
                    else {
                        
                       //alert("Fading out " + imageURL);
                        $(this).delay(2000).fadeOut(500);
                        $(temp).delay(2000).fadeOut(500);
                       
                        //fade in back of card
                        
                         $(temp).attr("src", back).fadeIn(500);
                         $(this).attr("src", back).fadeIn(500);
                        
                     
                       
                    }
            
            }

        
           
           // alert(temp);
              tempSource = $(this).attr("src");
              temp = $(this);
         counter++;
        });
            
    
    
        
    
    
}); // end ready

 