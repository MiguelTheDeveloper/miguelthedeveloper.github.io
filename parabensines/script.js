let slideIndex = 0;
let slideInterval;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
}

// Start the slideshow with a specific interval (e.g., 2000 milliseconds)
function startSlideShow(interval) {
  slideInterval = setInterval(() => {
    showSlides();
  }, interval);
}

// Stop the slideshow
function stopSlideShow() {
  clearInterval(slideInterval);
}

startSlideShow(2000); // Change image every 2 seconds

// Function to move to the previous slide
function plusSlides(n) {
  showSlides();
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
}

// Function to display a specific slide
function currentSlide(n) {
  showSlides();
  slideIndex = n;
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
}