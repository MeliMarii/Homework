function checkButton() {  
     if(document.getElementById('yes').checked) { 
         document.getElementById("disp").innerHTML 
            = 
             " You qualify for a discount!"; 
     } 

    if(document.getElementById('yes2').checked) { 
        document.getElementById("disp").innerHTML 
            = 
             " You qualify for a discount!"; 
    } 

    if(document.getElementById('yes3').checked) { 
        document.getElementById("disp").innerHTML 
            = 
             " You qualify for a discount!"; 
    } 

    else if(document.getElementById('no').checked) { 
        document.getElementById("disp").innerHTML 
            = 
             " Sorry, no discount available at this time";   
    }
} 