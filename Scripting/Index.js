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

      var Cards = document.getElementsByName("trifold");

      for (var i = 0, max = Cards.length; i < max; i++) {
          Cards[i].className = "cardlong";
      }
  }
  else if (x > 2) {

  }
  else {
      var Cards = document.getElementsByName("trifold");

      for (var i = 0, max = Cards.length; i < max; i++) {
          Cards[i].className = "card";
      }
  }
}
