function selectPet(petType){

    // Get the specific pet data set
    let thePet = petData[petType];

    console.log(thePet);

    // Set the title
    document.querySelector('.petDisplayName').innerText = thePet['displayName'];

    let petSpecs = "";
    // Add the space required, size, weight
        petSpecs += "<dt>Size</dt><dd>";
        petSpecs += thePet.size;
        petSpecs += "</dd>";

        petSpecs += "<dt>Weight</dt><dd>"+ thePet.weight  +"</dd>";

        petSpecs += "<dt>Space Required</dt><dd>"+ thePet.spaceRequired  +"</dd>";

    // Add logic to add the trainability and lap size images

    petSpecs += "<dt>Trainable</dt><dd>";
    if(thePet.trainability == true){
        petSpecs += "<img src='img/200px-Gnome-emblem-default.svg.png' alt='Trainable' class='checkmark'>";
    }else{
        petSpecs += "<img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Not Trainable' class='checkmark'>";
    }
    petSpecs += "</dd>";

    petSpecs += "<dt>Fits on Lap</dt><dd>";
    if(thePet.fitsOnLap == true){
        petSpecs += "<img src='img/200px-Gnome-emblem-default.svg.png' alt='Lap friendly' class='checkmark'>";
    }else{
        petSpecs += "<img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Does not fit' class='checkmark'>";
    }
    
    petSpecs += "</dd>";

    // Add the foods (may require loop)
    petSpecs += "<dt>Foods</dt><dd><ul>"

        // for(let oneFood of thePet.foods){
        //     petSpecs += "<li>" + oneFood + "</li>";
        // }

        for(let i=0; i<thePet.foods.length; i++){
            petSpecs += "<li>" + thePet.foods[i] + "</li>";
        }

    petSpecs += "</ul></dd>";

    document.querySelector('.petsDataSpecs').innerHTML = petSpecs;


    // Update the images
        let thumbs = "";

        for(let i=0; i < thePet.images.length; i++) {
            thumbs += ''
        }
  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)



    // Insert the ideal for
        let ideal = "";

        for(let i=0; i < thePet.idealOwner.length; i++){
            ideal += "<li>"+thePet.idealOwner[i]+"</li>";
        }


        document.querySelector('.idealFor').innerHTML = ideal;


    // Add the adoption groups
        let adoption = "";
        let sampleVar = "MORE Text";
        let anotherVar = "Glorious Text";

        for(let i=0; i < thePet.adoption.length; i++){
            console.log(thePet.adoption[i])
            // adoption += '<li><a href="' + thePet.adoption[i].url + '">' + thePet.adoption[i].name + '</a></li>';

            adoption += '<li><a href="' + thePet.adoption[i].url  +'">' + thePet.adoption[i].name + '</a></li>';

        }

        document.querySelector('.adoptionGroups').innerHTML = adoption;


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        let selectedPet = document.querySelector('#petType').value;

        //let selectedPet = this.value;

        selectPet(selectedPet)
    });
});