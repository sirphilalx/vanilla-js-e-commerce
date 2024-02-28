// Function to change dropdown button text
function changeDropdown(text) {
  var dropdownButton = document.getElementById("myDropdown");
  dropdownButton.textContent = text;
}

// Get the dropdown button and dropdown content

var dropdownButton = document.getElementById("myDropdown");
var dropdownContent = document.getElementById("myDropdownContent");

// Toggle the dropdown content when the button is clicked
dropdownButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown content if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
