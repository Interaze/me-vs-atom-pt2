//Animations.js
var CurrentSlides = [0,0,0,0];

function triggers(){
    var ml = document.getElementById("tml");
    //console.log(ml.scrollTop / window.innerHeight);
    var pageheight = ml.scrollTop / window.innerHeight;

    switch (pageheight = Math.round(pageheight)) {
        case 0:
            SlideOne(1);
            SlideTwo(0);
            SlideThree(0);
            SlideFour(0);
            break;
        case 1:
            SlideTwo(1);
            SlideOne(0);
            SlideThree(0);
            SlideFour(0);
            break;
        case 2:
            SlideThree(1);
            SlideOne(0);
            SlideTwo(0);
            SlideFour(0);
            break;
        case 3:
            SlideFour(1);
            SlideOne(0);
            SlideTwo(0);
            SlideThree(0);
            break;

            default:
            console.log('ERROR');
            SlideOne(1);
            SlideTwo(1);
            SlideThree(1);
            SlideFour(1);
    }
}

function SlideOne(toggle){
    if(CurrentSlides[0] != toggle){
        if(toggle == 1){
            console.log('Open Slide One');
            CurrentSlides[0] = 1;
        }
        else {
            console.log('Close Slide One');
            CurrentSlides[0] = 0;
        }
    }
}

function SlideTwo(toggle){
    if(CurrentSlides[1] != toggle){
        if(toggle == 1){
            console.log('Open Slide Two');
            CurrentSlides[1] = 1;
        }
        else {
            console.log('Close Slide Two');
            CurrentSlides[1] = 0;
        }
    }
}

function SlideThree(toggle){
    if(CurrentSlides[2] != toggle){
        if(toggle == 1){
            console.log('Open Slide Three');
            slides(1);
            CurrentSlides[2] = 1;
        }
        else {
            console.log('Close Slide Three');
            slides(0);
            CurrentSlides[2] = 0;
        }
    }
}

function SlideFour(toggle){
    if(CurrentSlides[3] != toggle){
        if(toggle == 1){
            console.log('Open Slide Four');
            CurrentSlides[3] = 1;
        }
        else {
            console.log('Close Slide Four');
            CurrentSlides[3] = 0;
        }
    }
}

var interval;
var activeslide = 1;
var slide = document.getElementsByName("trifold");
var isRunning = 0;

function slides(x){
    slide[activeslide - 1].id = "activetri";
    var elem;
    if(x === 1 && isRunning === 0){
    isRunning = 1;
    elem = document.getElementById("bar");
    var percent = 1;
    interval = setInterval(function timer() {
        if(percent >= 100){
            if(activeslide == 3){
                document.getElementById("activetri").id = "";
                activeslide = 1;
                slide[activeslide - 1].id = "activetri";
            }
            else {
                document.getElementById("activetri").id = "";
                activeslide++;
                slide[activeslide - 1].id = "activetri";

            }
            percent = 1;
        }

        else {
            percent++;
            elem.style.width = percent + '%';
        }
    }, 60);
    }

    if (x === 0) {
        clearInterval(interval);
        isRunning = 0;
        percent = 1;
        document.getElementById('activetri').id = "";
    }
}

function changeslide(y){
    if (document.getElementById("activetri")) {
        document.getElementById("activetri").id = "";
    }
    activeslide = y;
    slide[activeslide - 1].id = "activetri";
}
