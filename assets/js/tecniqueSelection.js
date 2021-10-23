let tecniqueDisplayer = (startDetalization, endDetalization, startPanoramity, endPanoramity) => {
	
	let panoramitySlider = document.getElementById("panoramitySlider");
	let detalizationSlider = document.getElementById("detalizationSlider");

	let differenceBetweenDetalizations = Math.abs(endDetalization - startDetalization);
	let differenceBetweenPaniramities = Math.abs(endPanoramity - startPanoramity);

	let periodDetalization = Math.round(5000 / differenceBetweenDetalizations);
	let periodPanoramity = Math.round(5000 / differenceBetweenPaniramities);

	panoramitySlider.setAttribute('value', startPanoramity);
	detalizationSlider.setAttribute('value', startDetalization);

	let detalizatoinTimer = setInterval(() => {
		let currentDetalization = detalizationSlider.value;

		if (startDetalization > endDetalization) {
			if (currentDetalization > endDetalization) {
				detalizationSlider.setAttribute('value', currentDetalization - 1);
			}
		} else {
			if (currentDetalization < endDetalization) {
				detalizationSlider.setAttribute('value',  currentDetalization + 1);
			}
		}
	}, periodDetalization);

	let panoramityTimer = setInterval(() => {
		let currentPanoramity = panoramitySlider.value;
		
		if (startPanoramity > endPanoramity) {
			if (currentPanoramity > endPanoramity) {
				panoramitySlider.setAttribute('value', currentPanoramity - 1);
			}
		} else {
			if (currentPanoramity < endPanoramity) {
				anoramitySlider.setAttribute('value', currentPanoramity + 1);
			}
		}
	}, periodPanoramity);

	setTimeout(() => { clearInterval(detalizatoinTimer); }, 5000);
	setTimeout(() => { clearInterval(panoramityTimer); }, 5000);
}

var techniqueSelectors = document.getElementsByClassName("technique");

for (var i = 0, len = techniqueSelectors.length; i < len; i++) {
  techniqueSelectors[i].addEventListener("click", function(e) {
	  let startDetalization = e.target.closest('.technique').getAttribute("data-start-detalization");
	  let endDetalization = e.target.closest('.technique').getAttribute("data-end-detalization");
	  let startPanoramity = e.target.closest('.technique').getAttribute("data-start-panoramity");
	  let endPanoramity = e.target.closest('.technique').getAttribute("data-end-panoramity");

	  tecniqueDisplayer(startDetalization, endDetalization, startPanoramity, endPanoramity);
    });
}