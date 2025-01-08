// Function to open the lightbox
function openLightbox(element) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = element.src;
  lightbox.style.display = "flex";
}

// Function to close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = "none";
}
