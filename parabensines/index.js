const fs = require('fs');
const path = require('path');

// Directory path
const directoryPath = './images'; // Path to your folder containing images

// Read files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Unable to scan directory: ' + err);
    return;
  } 

  // Filter only image files
  const imageFiles = files.filter(file => {
    const fileExtension = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.gif'].includes(fileExtension);
  });

  // Generate HTML divs for each image
  const imagesHTML = imageFiles.map(file => {
    return `<div class="mySlides fade"><img src="./images/${file}"></div>`;
  }).join('\n');

  // Output generated HTML
  console.log(imagesHTML);
});