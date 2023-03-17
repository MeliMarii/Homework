// http://www.omdbapi.com/?i=tt3896198&apikey=c4a563b

let data = null

// Target the results
let results = document.querySelector("#results")

let inputField = document.querySelector("#seachField")

let apiKey = "c4a563b";

function cardRepeat(title, poster, year, type, element, index){

    // There is a sample of the snipped in the html as a comment
    let snippet = '';
    element.innerHTML+= snippet
}




document.querySelector("#searchMovies").addEventListener("click", async function(e){
    
    // Stop the default behavior
    e.preventDefault();

    // Make the results an empty Div
    document.getElementById("results").innerHTML ="";

    // Insert GET function to retrieve a list of movies
    let searchURL = `http://www.omdbapi.com/?apiKey=${apiKey}&s=${inputField.value}`;

    let response = await fetch(searchURL);
    

    // Format the results as JSON
    data = await response.json();


    // Loop through your data and use the cardRepeat() function to add a new movie to the displayed list.
    for(let i=0; i < data.Search.length; i++){
        console.log(i);
        console.log(data.Search[i]);
        cardRepeat(
            data.Search[i].Title, 
            data.Search[i].Poster, 
            data.Search[i].Year, 
            data.Search[i].Type, 
            results, 
            data.Search[i].imdbID
            );
    }

        // Loop through the newly created cards

        
        // Create a click event for each card
        
           
            // insert post function to submit the ID of the card clicked

                // Create request options for a POST method
            
                // Run the post and wait for the answer
            

            // shows what has been clicked on by setting the .hiddenClick item to have a display of block
            
        

})









