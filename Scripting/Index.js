//index.js

function tst(){
alert("test");
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

    for (var i = 0, max = Container.length; i < max; i++) {
        Container[i].style.display = "block";
    }

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
var interval;
function slides(x){
    var elem;
    var activeslide = 1;
    if(x === 1){
    document.getElementsByName("trifold")[0].id = "activetri";
    elem = document.getElementById("bar");
    var percent = 1;
    interval = setInterval(function timer() {
        if(percent >= 100){
            if(activeslide == 3){
                document.getElementById("activetri").id = "";
                activeslide = 1;
                document.getElementsByName("trifold")[activeslide - 1].id = "activetri";
            }
            else {
                document.getElementById("activetri").id = "";
                activeslide++;
                document.getElementsByName("trifold")[activeslide - 1].id = "activetri";

            }
            percent = 1;
        }
        else {
            percent++;
            elem.style.width = percent + '%';
        }
    }, 65);
    }
    if (x === 0) {
        console.log("test");
        clearInterval(interval);
        percent = 1;
        document.getElementById('activetri').id = "";
    }
}



function slide(){
    var currentslide = 1;
}
