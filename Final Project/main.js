//Discount form area

 function checkButton() {  
      if(document.getElementById('yes').checked) { 
          document.getElementById("disp").innerHTML 
             = 
            " You qualify for a discount! Contact us with your airline crew employee number"; 
      } 

     if(document.getElementById('yes2').checked) { 
         document.getElementById("disp").innerHTML 
             = 
              " You qualify for a discount! Contact us with your military credentials"; 
     } 

     if(document.getElementById('yes3').checked) { 
         document.getElementById("disp").innerHTML 
             =               " You qualify for a discount! Email us with a copy of your license or I.D"; 
     } 

     else if(document.getElementById('no').checked) { 
         document.getElementById("disp").innerHTML 
            = 
             " Sorry, no discount available at this time";   
     }
 } 

// Newletter form area 

 function submitForm() {
    let userFirstName = document.getElementById('fname').value;
    let userLastName = document.getElementById('lname').value;
    alert("Thank you" + " " + userFirstName + "! We added you to our mailing list!")
}



  // function checkButton() {
  //   let discountApprove = document.getElementById('yes').checked;
  //   let discountDeny = document.getElementById('no').checked;


  //   if(discountApprove == 'yes'){
  //       document.getElementById("disp").innerHTML 
  //       ="discount";

  //   }

  //   if(discountApprove == "no"){
  //       document.getElementById("disp").innerHTML 
  //       ="sorry";

  //   }
  // }
   

