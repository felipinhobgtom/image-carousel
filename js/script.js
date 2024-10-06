let cont = 0;   

show_image(cont);

function show_image(i) {

  cont += i;

  let images = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if(cont > images.length - 1){
    cont = 0
  }
    if(cont < 0){
    cont = images.length - 1
  }

  images[cont].style.display = "block";
  dots[cont].className += " active"
}
