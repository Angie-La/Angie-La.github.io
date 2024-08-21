function muestra_oculta(id) {
    let div = document.getElementById(id);

    if (div.style.display == "none"){
        div.style.display = "flex";
    }
    else{
        div.style.display = "none";
    }
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}