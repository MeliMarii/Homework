//Discount form area

function checkButton() {  
    let responses = []
    
    if(document.querySelector('input[name=airline]:checked') != null){
    
    
        let airlineValue = document.querySelector('input[name=airline]:checked').value;
        
        if(airlineValue.toLowerCase() == "yes") { 
         
             responses.push("You qualify for a discount! Contact us with your airline crew employee number"); 
            } 
    
        }
        if(document.querySelector('input[name=military]:checked') != null){
            if(document.querySelector('input[name=military]:checked').value.toLowerCase() == "yes") { 
        
                responses.push("You qualify for a discount! Contact us with your military credentials"); 
            } 
        }
     
        if(document.querySelector('input[name=senior]:checked') != null){
       if(document.querySelector('input[name=senior]:checked').value.toLowerCase() == "yes") { 
         
        responses.push("You qualify for a discount! Email us with a copy of your license or I.D"); 
            } 
        }
       
    
       if(responses.length == 0) { 
        responses.push(" Sorry, no discount available at this time");   
       }
    
       let display = ""
       for(i=0; i < responses.length; i++){
        display = display + "<li>"+responses[i]+"</li>"
       }
    
       document.getElementById("disp").innerHTML = display
    } 

// Newletter Form Area 

 function submitForm() {
    let userFirstName = document.getElementById('fname').value;
    let userLastName = document.getElementById('lname').value;
    alert("Thank you" + " " + userFirstName + "! We added you to our mailing list!")
}