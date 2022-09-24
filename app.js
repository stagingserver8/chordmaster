

var chord = document.getElementById('chord');
var chords = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'Em', 'G', 'G7', 'E7' ];
var chordsRand = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'E7', 'Em', 'G', 'G7', 'F', 'Bm', 'B'];
var chordsBarre = ['F', 'Bm', 'B']
var slider = document.getElementById('myRange')
var speed

//var SOUND_SUCCESS = new Audio('click.wav');
var audio = document.getElementById('audio');

//const soundEffect = new Audio();
//soundEffect.src = 'click.wav';
//soundEffect.autoplay = true;
//soundEffect.play();




var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.volume=1;
    x.play(); 
} 



//playAudio();





function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



document.getElementById('myRange').addEventListener('click', listenSpeed)

function listenSpeed() {
    if (slider.value == 1) {
        document.getElementById('display').innerText="Speed: Slow";
        speed = 4000;
        
    }

    if (slider.value ==2) {
        document.getElementById('display').innerText="Speed: Medium"
        speed = 2000;  
    }

    if (slider.value ==3) {
        document.getElementById('display').innerText="Speed: Fast"
        speed = 1000;
       
    }

}


//CheckSlider();

function CheckSlider() {
    

    if (slider.value == 1) {
        speed = 4000;
    }

    if (slider.value == 2) {
        speed = 2000;
    }

    }

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)

function stop() {
document.location.reload()
}


function start() {
CheckSlider()

var tenMinutes = 60 * 10,
display = document.querySelector('#start');
startTimer(tenMinutes, display);



// EASY OPTION

if(document.getElementById('1').checked) 

{   
    chord.innerHTML = "Tuning..."
    setInterval(myMethod1, speed);
    function myMethod1() 
    {
    playAudio(); 
    chords = chords.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
    }
}

// MEDIUM OPTION

if (document.getElementById('2').checked) {
chord.innerHTML = "Tuning..."
setInterval(myMethod2, speed);

function myMethod2( )
{
    playAudio();    
    chords = chordsRand.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
    
}
   
}
}
