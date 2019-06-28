//Animations.js
var CurrentSlides = [0,0,0,0];

function triggers(){
    var ml = document.getElementById("tml");
    //console.log(ml.scrollTop / window.innerHeight);
    var pageheight = ml.scrollTop / window.innerHeight;

    switch (pageheight = Math.round(pageheight)) {
        case 0:
            console.log('Slide One');
            SlideOne(1);
            SlideTwo(0);
            SlideThree(0);
            SlideFour(0);
            break;
        case 1:
            console.log('Slide Two');
            SlideOne(0);
            SlideTwo(1);
            SlideThree(0);
            SlideFour(0);
            break;
        case 2:
            console.log('Slide Three');
            SlideOne(0);
            SlideTwo(0);
            SlideThree(1);
            SlideFour(0);
            break;
        case 3:
            console.log('Slide Four');
            SlideOne(0);
            SlideTwo(0);
            SlideThree(0);
            SlideFour(1);
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

        }
        else {

        }
    }
}

function SlideTwo(toggle){
    if(CurrentSlides[1] != toggle){
        if(toggle == 1){

        }
        else {

        }
    }
}

function SlideThree(toggle){
    if(CurrentSlides[2] != toggle){
        if(toggle == 1){

        }
        else {

        }
    }
}

function SlideFour(toggle){
    if(CurrentSlides[3] != toggle){
        if(toggle == 1){

        }
        else {
            
        }
    }
}
