//Projects.js

var slidesrendered = 0;

function renderSlide(toRender){
    showNextSlide(toRender);
}

function showNextSlide(toRender) {
  var xhttp;
  var slide = "Slide"+slidesrendered;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    console.log(this.responseText);

    var temp = document.createElement('div');
    temp.innerHTML = this.responseText;

    console.log(temp.firstChild);

    document.getElementById("bdy").appendChild(temp.firstChild);
    }
  };
  slidesrendered = slidesrendered + 1;
  xhttp.open("GET", "../Scripting/Render.php?q="+slidesrendered+"&j="+toRender, true);
  xhttp.send();
}

function ratioadj() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = w/h;
  console.log(x);
  if (x < .90) {

    if(x<.75){

    }
    else {

    }

}
  else if (x > 2) {

  }
  else {

  }
}

function triggers(){
    var prgrss = scrollprogTrig();

        var pageheight = Math.round(prgrss);
        console.log(pageheight);
}

function scrollprogTrig(){
    var marker = document.getElementById("tml");
    var pageheight = Number(marker.scrollTop / window.innerHeight).toFixed(2);
    return(pageheight);
}
