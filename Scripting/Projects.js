//Projects.js

var slidesrendered = 0;

function renderSlide(toRender){
<<<<<<< HEAD
    console.log("test");
=======
    showNextSlide();
>>>>>>> CScully
}

function showNextSlide() {
  var xhttp;
  var slide = "Slide"+slidesrendered;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

<<<<<<< HEAD
    console.log(slide);
=======
>>>>>>> CScully
    console.log(this.responseText);

    var temp = document.createElement('div');
    temp.innerHTML = this.responseText;

<<<<<<< HEAD
    //https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
=======
>>>>>>> CScully
    document.getElementById("bdy").appendChild(temp.firstChild);
    }
  };
  slidesrendered = slidesrendered + 1;
  xhttp.open("GET", "../Scripting/Render.php?q="+slidesrendered, true);
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
  else {

  }
}
