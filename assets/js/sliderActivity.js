// todo: implement http://camanjs.com/ on the image Bootstrap Studio does not support js library importing

var panoramitySlider = document.getElementById("panoramitySlider");
var panoramityOutput = document.getElementById("panoramityPercentage");
panoramityOutput.innerHTML = (panoramitySlider.value) + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
panoramitySlider.oninput = function() {
  panoramityOutput.innerHTML = (this.value) + "%";
}

var detalizationSlider = document.getElementById("detalizationSlider");
var detalizationOutput = document.getElementById("detalizationPercentage");
detalizationOutput.innerHTML = (detalizationSlider.value) + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
detalizationSlider.oninput = function() {
  detalizationOutput.innerHTML = (this.value) + "%";
}

var desireToChangeSlider = document.getElementById("desireToChangeSlider");
var desireToChangeOutput = document.getElementById("desireToChangePercentage");
desireToChangeOutput.innerHTML = (desireToChangeSlider.value) + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
desireToChangeSlider.oninput = function() {
  desireToChangeOutput.innerHTML = (this.value) + "%";
}