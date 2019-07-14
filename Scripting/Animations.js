//Animations.js
var CurrentSlides = [0,0,0,0,0];

function triggers(){

var prgrss = scrollprogTrig();

    switch (pageheight = Math.round(prgrss)) {
        case 0:
            SlideOne(1);
            SlideTwo(0);
            SlideThree(0);
            SlideFour(0);
            SlideFive(0);
            break;
        case 1:
            SlideTwo(1);
            SlideOne(0);
            SlideThree(0);
            SlideFour(0);
            SlideFive(0);
            break;
        case 2:
            SlideThree(1);
            SlideOne(0);
            SlideTwo(0);
            SlideFour(0);
            SlideFive(0);
            break;
        case 3:
            SlideFour(1, prgrss);
            SlideFive(0);
            SlideOne(0);
            SlideTwo(0);
            SlideThree(0);
            break;
        case 4:
            SlideFive(1);
            SlideFour(0);
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
            SlideFive(1);
    }
}

var slide = document.getElementsByClassName("panel");
var S1Title1 = slide[0].getElementsByTagName("H1")[0];
var S1Title2 = slide[0].getElementsByTagName("H1")[1];
var S1SubTitle = slide[0].getElementsByTagName("H4")[0];

function SlideOne(toggle){
    if(CurrentSlides[0] != toggle){
        if(toggle == 1){
            console.log('Open Slide One');
            S1Title1.id = "title-fade-in";
            setTimeout(function(){
                S1Title2.id = "title-fade-in";
            }, 200);
            setTimeout(function(){
                S1SubTitle.id = "title-fade-in";
            }, 400);
            CurrentSlides[0] = 1;
        }
        else {
            console.log('Close Slide One');
            S1Title1.id = "title-fade-out";
            S1Title2.id = "title-fade-out";
            S1SubTitle.id = "title-fade-out";
            CurrentSlides[0] = 0;
        }
    }
}
var S2Header = slide[1].getElementsByTagName("H2")[0];
var S2Quote = slide[1].getElementsByTagName("H3")[0];

function SlideTwo(toggle){
    if(CurrentSlides[1] != toggle){
        if(toggle == 1){
            console.log('Open Slide Two');
            S2Header.id = "header-fade-in";
            setTimeout(function(){
                S2Quote.id = "quote-fade-in";
            }, 400);
            CurrentSlides[1] = 1;
        }
        else {
            console.log('Close Slide Two');
            S2Header.id = "header-fade-out";
            S2Quote.id = "header-fade-out";
            CurrentSlides[1] = 0;
        }
    }
}
var S3Header = slide[2].getElementsByTagName("H2")[0];
var S3Slideshow = slide[2].getElementsByClassName("wrapper")[0];

function SlideThree(toggle){
    if(toggle == 0){
        slides(0);//avoids glitch of slides runnig while out of view
    }
    if(CurrentSlides[2] != toggle){
        if(toggle == 1){
            console.log('Open Slide Three');
            S3Header.id = "header-fade-in";
            S3Slideshow.id = "slide-fade-in";
            setTimeout(slides(1), 1500);
            CurrentSlides[2] = 1;
        }
        else {
            console.log('Close Slide Three');
            S3Header.id = "header-fade-out";
            S3Slideshow.id = "slide-fade-out";
            CurrentSlides[2] = 0;
        }
    }
}
var S4Header = slide[3].getElementsByTagName("H2")[0];

function SlideFour(toggle, prgrss){
    if(toggle == 1){
        console.log(prgrss);
    }
    if(CurrentSlides[3] != toggle){
        if(toggle == 1){
            console.log('Open Slide Four');
            S4Header.id = "header-fade-in";
            CurrentSlides[3] = 1;
        }
        else {
            console.log('Close Slide Four');
            S4Header.id = "header-fade-out";
            CurrentSlides[3] = 0;
        }
    }
}

var S5Header = slide[4].getElementsByTagName("H2")[0];

function SlideFive(toggle){
    if(CurrentSlides[4] != toggle){
        if(toggle == 1){
            console.log('Open Slide Five');
            S5Header.id = "header-fade-in";
            CurrentSlides[4] = 1;
        }
        else {
            console.log('Close Slide Five');
            S5Header.id = "header-fade-out";
            CurrentSlides[4] = 0;
        }
    }
}

var interval;
var activeslide = 1;
var slide = document.getElementsByName("trifold");
var isRunning = 0;
var elem;
elem = document.getElementById("bar");

function slides(x){
    slide[activeslide - 1].id = "activetri";
    if(x === 1 && isRunning === 0){
    isRunning = 1;

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

    if (x == 0) {
        clearInterval(interval);
        isRunning = 0;
        percent = 1;
        elem.style.width = percent + '%';
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

function closeLoad(){
    document.getElementById("load-left").id = "closepanel";
    document.getElementById("load-right").id = "closepanel";
    document.getElementById("loader").style = "animation: hideload .8s; opacity: 0; visibility: hidden;";
    setTimeout(function(){
        document.getElementById("load-wrapper").style = "visibility: hidden;";
        document.getElementsByTagName("body")[0].className = "";
    }, 1000);
;
    //console.log("test");
}

function scrollprogTrig(){
    var marker = document.getElementById("tml");
    //console.log(ml.scrollTop / window.innerHeight);
    var pageheight = Number(marker.scrollTop / window.innerHeight).toFixed(2);
    return(pageheight);
}
