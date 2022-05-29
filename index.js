

var numberOfButtons = document.querySelectorAll(".drum").length; //getting the number of buttons and adding to a variable


for (i = 0; i < numberOfButtons; i++) {

    //adding an eventListener on each element that have the class "button" and after will call the function PlaySound when some button be clicked

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {    //creatig an anonymous function
        var buttonInnerHTML = this.innerHTML;
        PlaySound(buttonInnerHTML);
        changeButtonApparence(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function (event) {    //creatig an anonymous function

    //adding an eventListener on all the document that will call the function PlaySound when any key be pressed down

    var keyPressed = event.key;    //getting the key pressed from the "event"
    PlaySound(keyPressed);
    changeButtonApparence(keyPressed);
});



document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
    console.log("Some key pressed");
}


function PlaySound(key) {

    switch (key) {
        case "w":
            var song = new Audio('sounds/crash.mp3');
            break;
        case "a":
            var song = new Audio('sounds/kick-bass.mp3');
            break;
        case "s":
            var song = new Audio('sounds/snare.mp3');
            break;
        case "d":
            var song = new Audio('sounds/tom-1.mp3');
            break;
        case "j":
            var song = new Audio('sounds/tom-2.mp3');
            break;
        case "k":
            var song = new Audio('sounds/tom-3.mp3');
            break;
        case "l":
            var song = new Audio('sounds/tom-4.mp3');
            break;
        default:
            break;
    }
    song.play();
}

function changeButtonApparence (buttonPressed){
    var classOfButton = document.querySelector("." + buttonPressed);
    classOfButton.classList.add("pressed");

    setTimeout( function(){     //creatig an anonymous function
        classOfButton.classList.remove("pressed");
    }, 100);  //time before execute the previously informed anonymous function like parameter
}

