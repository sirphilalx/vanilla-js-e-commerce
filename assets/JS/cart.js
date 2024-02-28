const change = document.querySelectorAll(".change");
const largeImage = document.getElementById("largeImage");

function displayImage(event) {
  // Get the source attribute of the clicked change
  var src = event.target.getAttribute("data-src");

  // Set the source attribute of the large image
  largeImage.src = src;
}

change.forEach(function (change) {
  change.addEventListener("click", displayImage);
});
