//Projects.js

var slidesrendered = 0;
var indoc = document.getElementById("wrapper");
var triggerlock = 0;

function renderSlide(){
    console.log(projPK[PKnum], PKnum);
    showNextSlide(projPK[PKnum]);
    PKnum++;
}

function showNextSlide(toRender) {
  var xhttp;
  var slide = "Slide"+slidesrendered;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    var range = document.createRange();
    range.selectNodeContents(indoc);
    var frag = range.createContextualFragment(this.responseText);
    indoc.appendChild(frag);
    slidesrendered = slidesrendered + 1;
    }
  };
  xhttp.open("GET", "../Scripting/RenderProjects.php?q="+slidesrendered+"&j="+toRender, true);
  xhttp.send();
}

function ratioadj() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = w/h;
  console.log(x);
  if (x < 1) {

      document.getElementById("wrapper").className = "mobile";

  }
  else {
      document.getElementById("wrapper").className = "desktop";
  }
}

function triggers(){
    var prgrss = scrollprogTrig();
        if(((prgrss) - triggerlock) > 0.3){
            renderSlide();
            triggerlock++;
        }
}

function scrollprogTrig(){
    var marker = document.documentElement.scrollTop || document.body.scrollTop;
    var pageheight = Number(marker.scrollTop / window.innerHeight).toFixed(2);
    return(pageheight);
}
