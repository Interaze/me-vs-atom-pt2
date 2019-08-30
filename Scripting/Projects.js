//Projects.js

var slidesrendered = 0;

function renderSlide(toRender){
    console.log("test");
}

function showNextSlide() {
  var xhttp;
  var slide = "Slide"+slidesrendered;
  console.log(slide);

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //need new after element
    //document.getElementById(slide).after(this.responseText);
    }
  };
  slidesrendered = slidesrendered + 1;
  xhttp.open("GET", "../Scripting/Render.php?q="+slidesrendered, true);
  xhttp.send();
}
