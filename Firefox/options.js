// this part of extension was strongly based on Mozilla's manuals
// it is standard approach for adding options window for Firefox extension
function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    state: document.querySelector('input[name="state"]:checked').value
  });

  restoreOptions();
}

function restoreOptions() {

  function setCurrentChoice(result) {
    var y = result.state || "on";
	if (y == "on") {
    document.getElementById("_on").checked = true;
	document.getElementById("isactive").innerHTML="Emojis activated";
    }
	else{
	document.getElementById("_off").checked = true;
	document.getElementById("isactive").innerHTML="Emojis deactivated";
	}
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("state");
  getting.then(setCurrentChoice, onError);


}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);