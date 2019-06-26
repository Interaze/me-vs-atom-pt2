function tst(){
<<<<<<< HEAD
alert("test");
}

=======
 alert("test");
}
>>>>>>> 538b4cf0fc319c53145a5d004569d749ede9388f
function ratioadj() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = w/h;
  console.log(x);
  if (x < .90) {
<<<<<<< HEAD

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

=======
     // document.getElementById("trifold").className = "cardlong";

      var Cards = document.getElementsByName("trifold");

      for (var i = 0, max = Cards.length; i < max; i++) {
          Cards[i].className = "cardlong";
      }
  }
  else if (x > 2) {

  }
  else {
>>>>>>> 538b4cf0fc319c53145a5d004569d749ede9388f
      var Cards = document.getElementsByName("trifold");

      for (var i = 0, max = Cards.length; i < max; i++) {
          Cards[i].className = "card";
      }
<<<<<<< HEAD

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
=======
>>>>>>> 538b4cf0fc319c53145a5d004569d749ede9388f
  }
}
