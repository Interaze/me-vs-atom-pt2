//Projects.js

var slidesrendered = 0;

function renderSlide(toRender){
    console.log("test");
}

function showNextSlide() {
  var xhttp;
  slidesrendered = slidesrendered + 1;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("topp").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../Scripting/Render.php?q="+slidesrendered, true);
  xhttp.send();
}
