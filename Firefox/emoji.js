//each subarray is a pair of name and direct link do the image
var emojiArray = [[":placeholdername1:", "placeholder url1"], [":placeholdername2:", "placeholder url2"]];
var emojiArrayLength = emojiArray.length;

//creating array of all existing posts on browsed page
//class name should be change to suit forum
var postbodyArray = document.getElementsByClassName("post class placeholder");
var postbodyArrayLength = postbodyArray.length;

//on-version of function, replacing names with images
function emojiOn(){
	var i,j;
    for (i=0; i<postbodyArrayLength; i++){
		for (j=0; j<emojiArrayLength; j++){
			var replaceText = "<img src="+emojiArray[j][1]+" alt='Image'>"
			var re = new RegExp(emojiArray[j][0], "g")
			postbodyArray[i].innerHTML = postbodyArray[i].innerHTML.replace(re, replaceText)
		}
	}
}
//off-version of function, removing names from posts
function emojiOff(){
	var i,j;
    for (i=0; i<postbodyArrayLength; i++){
		for (j=0; j<emojiArrayLength; j++){
			var re = new RegExp(emojiArray[j][0], "g")
			postbodyArray[i].innerHTML = postbodyArray[i].innerHTML.replace(re, '')
		}
	}
}
//error function
function onError(error) {
  console.log(`Error: ${error}`);
}
//function checking user's option
function onGot(item) {
  var y = item.state;
  if (y == "off") {
    emojiOff();
  }
  else {
  	emojiOn();
  }
  document.body.style.border = "10px solid " + color;
}


if (postbodyArrayLength > 0){
	//
	//apllying choosen options
	//
	var getting = browser.storage.local.get("state");
	getting.then(onGot, onError);



	//CREATING SOCKETS FOR NEW HTML OBJECTS
	//in this part we should create sockets for emoji window and button
	//it depends on forum's source 
	//in next part placeholders for these sockets will be called emojiWindowSocket and emojiButtonSocket
	
	
	
	//WINDOW CREATION
	//in these part I am creating window filled with emoji's example
	//each emoji in this window is in fact button
	//each button will insert emoji's name into text field while writing a post
	var emojiContainer = document.createElement("div");
	emojiContainer.setAttribute("id", "_emojiContainer");
	//inserting window to its designed place
	//emojiWindowSocket.appendChild(emojiContainer);
	emojiContainer.style.maxWidth = "190px";
	emojiContainer.style.maxHeight = "100px";
	emojiContainer.style.border = "3px solid green";
	emojiContainer.style.overflowY = "scroll";
	emojiContainer.setAttribute("align", "left");
	
	//FILLING WINDOW WITH EMOJI-BUTTONS
	var counter;
	for(counter=0; counter<emojiArrayLength; counter++){
		var testImage = document.createElement("IMG")
		testImage.src = emojiArray[counter][1]
		//tempText is html text injecting function to a emoji-button
		//its value should be changed to suit forum's source as best as possible
		//forum I was working in has its own emoji system so I abused their function called insert_text
		var tempText = "insert_text('"+emojiArray[counter][0]+"', true); return false;"
		testImage.setAttribute("onclick", tempText)
		emojiContainer.appendChild(testImage)
	}
	//WINDOW-BUTTON CREATION
	//window-button is supposed to show/hide emoji-window when clicked
	var emojiButton = document.createElement("input");
	emojiButton.setAttribute("type", "button");
	emojiButton.setAttribute("class", "button class placeholder"); //if its possible we should use forum's class for button
	emojiButton.setAttribute("id", "_emojiButton");
	emojiButton.setAttribute("value", "EMOJI");
	//inserting window-button to its designed place
	//emojiButtonSocket.appendChild(emojiButton);
	
	//after inserting emoji window and emoji button into page's body we need to grab it and add show/hide function to window-button
	var link = document.getElementById('_emojiButton');
	link.addEventListener('click', function raDa() {
		var s = document.getElementById("_emojiContainer");
	    if (s.style.visibility == "hidden"){
			s.style.visibility = "visible";
		}
		else{
			s.style.visibility = "hidden";
		}
	});