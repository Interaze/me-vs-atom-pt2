function tst(){
 alert("test");
}

function ratioadj() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = w/h;
  console.log(x);
  if (x < .90) {
    // document.getElementById("trifold").className = "cardlong";
    //document.getElementsByName("tritle")[0].id = "lh2";

    var Cards = document.getElementsByName("trifold");

    for (var i = 0, max = Cards.length; i < max; i++) {
        Cards[i].className = "cardlong";
    }
    var Titles = document.getElementsByName("tritle");

    for (var i = 0, max = Titles.length; i < max; i++) {
        Titles[i].id = "lh2";
    }
    document.getElementsByName("trihold")[0].style.display = "block";
    document.getElementsByName("tritle")[0].style.position = "relative";

    if (document.getElementById("triL")) {
        document.getElementById("triL").id = "LtriT";
    }
    if (document.getElementById("triM")) {
        document.getElementById("triM").id = "LtriM";
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

        //document.getElementsByName("trihold")[0].style.PaddingTop = "5px";
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
      var Titles = document.getElementsByName("tritle");

      for (var i = 0, max = Titles.length; i < max; i++) {
          Titles[i].id = "h2";
      }
      document.getElementsByName("trihold")[0].style.display = "flex";
      document.getElementsByName("tritle")[0].style.position = "absolute";

      if(document.getElementById("btitle")){
          document.getElementById("btitle").id = "reg";
      }

      //document.getElementsByName("tritle")[0].id = "h2";

      if (document.getElementById("LtriT")) {
          document.getElementById("LtriT").id = "triL";
      }
      if (document.getElementById("LtriM")) {
          document.getElementById("LtriM").id = "triM";
      }
      if(document.getElementById("LtriB")){
          document.getElementById("LtriB").id = "triR";
      }
      if(document.getElementById("longquote")){
          document.getElementById("longquote").id = "quote";
      }
      //document.getElementsByName("tritle")[0].className = "";
  }
}
