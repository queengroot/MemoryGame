/*Kate Blunt
CGS2829
November 10th, 2020
Exercise 5 - Using cookies */


"use strict";

var setCookie = function( name, value, days ) {
    
    //concatenate cookie name and encoded value
    var cookie = name + "=" + encodeURIComponent(value);
    
    //if value for days, add max-age to the cookie
    if (days !== undefined){
        
        cookie += "; max-age=" + days * 24 * 60 *60;
    }
    
    //add the path and then store the cookie
    cookie += "; path=/";
    document.cookie = cookie; 
    
};

var getCookieByName = function( name ) {
    
    //variable
    var cookies = document.cookie;
    
    //starting index of the cookie name that is followed by "="
    var start = cookies.indexOf(name + "=");
    
    if (start === -1) {return ""; }
    else {
        
        //have to make it so the 
        //name and equals sign is not included in the account
        start = start + (name.length +1)

        //must get index of the semi-colon at the end or length of 
        //of the string in case we are at the end of the cookie
        
        var end = cookies.indexOf(";", start);
        if(end === -1) {end = cookies.length;}
        
        //use start/end to get the cookie value
        var cookieValue = cookies.substring(start,end);
        
         //returns empty string
        
        
    return decodeURIComponent(cookieValue);
    }
    
   
};



var deleteCookie = function( name ) {
    
    //code that deletes the cookie
    document.cookie = name + "=''; max-age=0; path=/";
    
};