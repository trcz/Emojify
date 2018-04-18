# Emojify
Web browser extension adding twitch-style emojis to forums  
  
Script replaces names with images in the same way twitch chat does  
Extension (options mainly) works only with Firefox at the moment  
Icon source is Mozilla's manual for WebAPI  
  
**Assumptions:**  
-it replaces text with <img> in html body  
-emojis are stored on accessible server  

**To get this working user has to:**  
-prepare emojis and direct links for them  
-find appropiate place in html body to suit emoji window and its button  
-find a way (the smoother the better) to grab that place and insert new contents there  
  
  
**To do list:**  
-make options window look nice and original  
-add Chrome support
