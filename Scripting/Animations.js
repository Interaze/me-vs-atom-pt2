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
            CurrentSlides[2] = 1;
        }
        else {
            console.log('Close Slide Three');
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
