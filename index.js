
function hide(anch, frames) {
    // Check if the element with ID 'btn' exists, assuming it's the button you want to add the event listener to.
    const btn = document.getElementById(anch);
    
    if (!anch) {
      console.error("Button with ID 'btn' not found.");
      return; // Exit the function if the button is not found.
    }
  
    btn.addEventListener('click', () => {
      const frame = document.getElementById(frames);
  
      if (!frame) {
        console.error(`Element with ID '${frames}' not found.`);
        return; // Exit the function if the element with the specified ID is not found.
      }
  
      if (frame.style.visibility === 'hidden') {
        frame.style.visibility = 'visible';
      } else {
        frame.style.visibility = 'hidden';
      }
    });
  }
  

// function hide(anch,frame){
//     const a = document.getElementById(anch);

// btn.addEventListener('click', () => {
//   const form = document.getElementById(frame);

//   if (form.style.visibility === 'hidden') {
//     form.style.visibility = 'visible';
//   } else {
//     form.style.visibility = 'hidden';
//   }
// });
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

