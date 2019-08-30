//progress.js

function closeLoad(){
    document.getElementById("load-left").id = "closepanel";
    document.getElementById("load-right").id = "closepanel";
    document.getElementById("loader").style = "animation: hideload .8s; opacity: 0; visibility: hidden;";
    setTimeout(function(){
        document.getElementById("load-wrapper").style = "visibility: hidden;";
        document.getElementsByTagName("body")[0].className = "";
    }, 1000);
;
    //console.log("test");
}
