

var chord = document.getElementById('chord');
var chords = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'Em', 'G', 'G7', 'E7' ];
var chordsRand = ['C', 'D', 'Dm', 'A', 'Am', 'E', 'E7', 'Em', 'G', 'G7', 'F', 'Bm', 'B'];
var chordsBarre = ['F', 'Bm', 'B']
var slider = document.getElementById('myRange')
var speed1
var speed2
var audio = new Audio('click.wav');



document.getElementById('myRange').addEventListener('click', listenSpeed)

function listenSpeed() {
    if (slider.value == 1) {
        document.getElementById('display').innerText="Speed: Slow";
        speed1 = 4000;
        speed2 = 12000;
    }

    if (slider.value ==2) {
        document.getElementById('display').innerText="Speed: Medium"
        speed1 = 2000;
        speed2 = 6000;
    }

    if (slider.value == 3) {
        document.getElementById('display').innerText="Speed: Fast"
        speed1 = 1000;
        speed2 = 3000;
    }
}


//CheckSlider();

function CheckSlider() {
    
    if (slider.value == 2) {
        speed1 = 2000;
        speed2 = 6000;
    }

    if (slider.value == 1) {
        speed1 = 4000;
        speed2 = 12000;
    }

    if (slider.value == 3) {
        speed1 = 1000;
        speed2 = 3000;
    }

    }

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)

function stop() {
document.location.reload()
}

function start() {
CheckSlider()

// EASY OPTION

if(document.getElementById('1').checked) 

{   
    chord.innerHTML = "Tuning..."
    setInterval(myMethod1, speed1);
    
    function myMethod1() 
    {
    audio.play();
    chords = chords.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
    }
}



// MEDIUM OPTION

if (document.getElementById('2').checked) {
chord.innerHTML = "Tuning..."
setInterval(myMethod2, speed1);

function myMethod2( )
{
    audio.play();
    chords = chords.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
    
}

setInterval(fchord, speed2);

    function fchord() {
    audio.play();
    chord.innerHTML = "F";
   
}

// HARD OPTION

} if (document.getElementById('3').checked) {
    
    chord.innerHTML = "Tuning..."

    setInterval(myMethod3, speed1);
    
    function myMetho3( )
    {
        audio.play();
        chords = chords.sort(() => Math.random() - 0.5);
        chord.innerHTML = chords[1];
    }
    
    setInterval(fchord, speed2);
    
    function fchord() {
        audio.play();
        chordsBarre= chordsBarre.sort(() => Math.random() - 0.5);
        chord.innerHTML = chordsBarre[1];  
    }

// RANDOM OPTION

} if (document.getElementById('4').checked) {

    chord.innerHTML = "Tuning..."
    setInterval(myMethod4, speed1);

function myMethod4()
{
    audio.play();
    chords = chordsRand.sort(() => Math.random() - 0.5);
    chord.innerHTML = chords[1];
   
}
}


}
  


