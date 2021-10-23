var imageSelectors = document.getElementsByClassName("imageSelector");

var imageOutput = document.getElementById("displayedObjectImage");

for (var i = 0, len = imageSelectors.length; i < len; i++) {
  imageSelectors[i].addEventListener("click", function(e) {
      imageOutput.setAttribute("src", "objects/" + e.target.getAttribute("data-image"));
    });
}