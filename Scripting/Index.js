//index.js
function tst(){
alert("test");
}


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

function SlideFour(toggle, prgrss){
    if(toggle == 1){
        moveoptions(prgrss);
    }
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

function scrollprogTrig(){
    var marker = document.getElementById("tml");
    //console.log(ml.scrollTop / window.innerHeight);
    var pageheight = Number(marker.scrollTop / window.innerHeight).toFixed(2);
    return(pageheight);
}

var option1 = document.getElementById("optionone");
var option2 = document.getElementById("optiontwo");
var option3 = document.getElementById("optionthree");
var option4 = document.getElementById("optionfour");

function setmoveop(){
    moveoptions(2.5);
}

function moveoptions(heightdown){
    var opac = -(7/5) * Math.abs(heightdown - 3) + 1;
    optionone.style.opacity = opac;
    optiontwo.style.opacity = opac;
    optionthree.style.opacity = opac;
    optionfour.style.opacity = opac;

    optionone.style.marginLeft = (2 * heightdown - 8) + 'vw';
    optiontwo.style.marginLeft = (12 * heightdown - 26) + 'vw';
    optionthree.style.marginLeft = (16 * heightdown - 33) + 'vw';
    optionfour.style.marginLeft = (6 * heightdown - 11) + 'vw';
}

function ratioadj() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = w/h;
  console.log(x);
  if (x < .90) {

    var Cards = document.getElementsByName("trifold");

    for (var i = 0, max = Cards.length; i < max; i++) {
        Cards[i].className = "cardlong";
    }


    var Container = document.getElementsByName("trihold");


    var Container = document.getElementsByName("trihold");


    for (var i = 0, max = Container.length; i < max; i++) {
        Container[i].style.display = "block";
    }

    document.getElementById("slideprogress").style.visibility = 'hidden';

    if (document.getElementById("triL")) {
        document.getElementById("triL").id = "LtriT";
    }
    if (document.getElementById("triM")) {
        document.getElementById("triM").id = "LtriM";
    }
    if(document.getElementById("triR")){
        document.getElementById("triR").id = "LtriB";
    }
    if(document.getElementById("wdL")){
        document.getElementById("wdL").id = "wdT";
    }
    if(document.getElementById("wdR")){
        document.getElementById("wdR").id = "wdB";
    }
    if(document.getElementById("triR")){
        document.getElementById("triR").id = "LtriB";
    }
    if(document.getElementById("quote")){
        document.getElementById("quote").id = "longquote";
    }
    if(x<.75){
        if(document.getElementById("reg")){
            document.getElementById("reg").id = "btitle";
        }
    }
    else {
        if(document.getElementById("btitle")){
            document.getElementById("btitle").id = "reg";
        }
    }

    }
  else if (x > 2) {
      if(document.getElementById("btitle")){
          document.getElementById("btitle").id = "reg";
      }
  }
  else {

      var Cards = document.getElementsByName("trifold");

      for (var i = 0, max = Cards.length; i < max; i++) {
          Cards[i].className = "card";
      }

      var Container = document.getElementsByName("trihold");

      for (var i = 0, max = Container.length; i < max; i++) {
          Container[i].style.display = "flex";
      }

      document.getElementById("slideprogress").style.visibility = 'visible';

      if(document.getElementById("btitle")){
          document.getElementById("btitle").id = "reg";
      }
      if (document.getElementById("LtriT")) {
          document.getElementById("LtriT").id = "triL";
      }
      if (document.getElementById("LtriM")) {
          document.getElementById("LtriM").id = "triM";
      }
      if(document.getElementById("LtriB")){
          document.getElementById("LtriB").id = "triR";
      }
      if(document.getElementById("wdT")){
          document.getElementById("wdT").id = "wdL";
      }
      if(document.getElementById("wdB")){
          document.getElementById("wdB").id = "wdR";
      }
      if(document.getElementById("longquote")){
          document.getElementById("longquote").id = "quote";
      }
  }
}
