document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
  
    container.addEventListener("scroll", function () {
      createHeart();
    });
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
  
      // Style the heart element
      heart.style.position = "absolute";
      heart.style.width = "20px";
      heart.style.height = "20px";
      heart.style.backgroundColor = "#ff0000"; // Heart color
  
      // Position the heart randomly within the container
      const xPos = Math.random() * container.offsetWidth;
      const yPos = Math.random() * container.offsetHeight;
      heart.style.left = xPos + "px";
      heart.style.top = yPos + "px";
  
      container.appendChild(heart);
  
      setTimeout(() => {
        heart.remove(); // Remove the heart after animation ends
      }, 1500);
    }
  });