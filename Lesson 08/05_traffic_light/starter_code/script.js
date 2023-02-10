// Try making the traffic light work - Think through the problem BEFORE you code!

// You'll use addEventListener and getElementById if you're doing it right...

function turnOff(){
    document.querySelector("#stopLight").classList.remove("on");
}

document.querySelector("#goButton").addEventListener('click', funtion(){
    turnOff();
});

document.querySelector("#slowButton").addEventListener('click', funtion(){
    turnOff();
});

// document.getElementById('stopLight').addEventListener('click',
// function(){

    // document.getElementById('stopLight').classList.add('red');
