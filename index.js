// Selecting all the elements with required classes
var value = document.querySelectorAll(".w, .a, .s, .d, .j, .k, .l");

//Run Event Handler for every keydown event for the specific key-presses
for(var i = 0 ; i<value.length ; i++){
    value[i].addEventListener("keydown", function(event) {
        playSound(event.key);
    });
}

//Function to play the audio specific to the given value
function playSound(value){
    switch(value){
        case 'w':
        case 'W':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
        case 'A':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
        case 'S':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
        case 'D':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
        case 'J':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
        case 'K':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        case 'l':
        case 'L':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(value + " key is not assigned any audio.")
    }

}