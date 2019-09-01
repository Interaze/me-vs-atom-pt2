var body = document.getElementById("bdy");

function scrolllock(){
    body.style.height = 100 + 'vh';
    body.style.overflow = 'hidden';
}

function scrollunlock(){
    body.style.height = 'auto';
    body.style.overflow = 'auto';
}
