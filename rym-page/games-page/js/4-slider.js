// SLIDER 
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

function myFunction() {
    let input = document.getElementById('myInput').value;
    input = input.toLowerCase();
    //console.log(input);
    let s = document.getElementsByClassName('slide');
    let x = document.getElementsByClassName('card-char-base');
    //  console.log(x);
    //  console.log(s);
    for (i = 0; i < x.length; i++) {
  
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        //console.log(x[i].innerHTML.toLowerCase().includes(input) + ' = falso');
        // x[i].style.display = "none";
        //   x[i].style.display = "none";
        s[i].style.display = "none";
      //  console.log(s[i]);
      }
      else {
        // console.log(s[i]);
        s[i].style.display = "list-item";
      //  console.log(x[i].innerHTML.toLowerCase().includes(input) + ' = verdadero');
        //   let idSlide = document.querySelector('#slide-'+i);
        //   console.log(idSlide);
      }
    }
  }









function next() {
  const slideWidth = slide.clientWidth;
//  console.log(slideWidth);
  slidesContainer.scrollLeft += 340;
}
function back() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= 340;
}

nextButton.addEventListener("click", () => {
  next();
});
prevButton.addEventListener("click", () => {
  back();
});


setInterval(next, 6000);