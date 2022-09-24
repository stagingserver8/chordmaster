

var chord = document.getElementById('chord');
var chords = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'Em', 'G', 'G7', 'E7' ];
var chordsRand = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'E7', 'Em', 'G', 'G7', 'F', 'Bm', 'B'];
var chordsBarre = ['F', 'Bm', 'B']
var slider = document.getElementById('myRange')
var speed

//var SOUND_SUCCESS = new Audio('click.wav');
var audio = document.getElementById('audio');



const button = document.getElementById('start')
let audio1 = null
button.addEventListener('click', () => {
    audio1 = new Audio('click.wav')
    // Works because `audio` itself was created synchronously during user event handler
    setTimeout(() => { audio1.play() }, 1000)
})





//const soundEffect = new Audio();
//soundEffect.src = 'click.wav';
//soundEffect.autoplay = true;
//soundEffect.play();

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();


var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 

} 

playAudio(); 

for (let i = 0; i < 5; i++) {
    playAudio(); 
    console.log("helo")
  }


setInterval(function () {
    //playAudio(); 
}, 1000);



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

    if (slider.value == 3) {
        speed = 1000;
    }

    }

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)

function stop() {
document.location.reload()
}


function start() {
CheckSlider()
//playAudio(); 
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
