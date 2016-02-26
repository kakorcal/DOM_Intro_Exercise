window.addEventListener('load', function(e) {
  // Declare dom variables
  var greet = document.getElementById('greeting');
  var li = document.getElementsByTagName('li');
  var img = document.createElement('img');
  var ghost = document.getElementById('ghosting');
  var resize = document.getElementById('resize');
  var resizeWidth = resize.offsetWidth;
  var button = document.getElementById('reset');
  var updateImg = document.getElementsByTagName('img');

  // Change the greeting from "Hello, There!" to "Hello, World!".
  greet.innerHTML = 'Hello, World!';

  for(var i = 0; i < li.length; i++){
    // Set the background color of each <li> to yellow
    li[i].style.backgroundColor = 'yellow';

    // Add the class of selected to an <li> when it is clicked.
    // Remove it from any other lis as well.
    li[i].addEventListener('click', function(e){
        for(var j = 0; j < li.length; j++){
          if(li[j].classList.contains('selected')){
            li[j].classList.remove('selected');
          }
        }
        this.classList.add('selected');

        // Change the image to be the most recently clicked food item.
        updateImg[1].src = "./images/"  + this.innerHTML + ".jpeg";
    }, false);
  }

  // Create an image tag, set its src attribute to 
  //http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, 
  //and append the to the #greeting div.
  img.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
  img.addEventListener('load', function(e){
    greet.appendChild(img);
  }, false);

  // When the gray div is moused over, it's removed from the DOM.
  ghost.addEventListener('mouseover', function(e){
    this.parentNode.removeChild(this);
  }, false);

  // When the orange div is moused over, its width doubles. 
  //When the mouse moves out of the div, it returns to its original size.
  resize.addEventListener('mouseover', function(e){
    this.style.width = resizeWidth * 2 + "px";
  }, false);
  resize.addEventListener('mouseleave', function(e){
    this.style.width = resizeWidth + "px";
  }, false);

  // When the reset button is clicked - 
  //remove the selected class from each <li> and change the image to panic.jpeg.
  button.addEventListener('click', function(e){
    for(var j = 0; j < li.length; j++){
      if(li[j].classList.contains('selected')){
        li[j].classList.remove('selected');
      }
    }    
    updateImg[1].src = "./images/panic.jpeg";
  }, false);
}, false);

// Declare key arrays
var keyMatch = [];
var keyCombo = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
window.addEventListener('keydown', function(e){
  // When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, 
  //the page alerts the message "I HATE NUMBERZZZ!"
  // Number codes: 48 - 57
  var key = e.keyCode;
  for(var i = 48; i <= 57; i++){
    if(key === i){
      alert('I HATE NUMBERZZZ!');
    }
  }

  // BONUS: If someone types the Konami Code, 
  //the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
  // Up: 38 Down: 40 Left: 37 Right: 39 B: 66 A: 65
  if(key === 38 || key === 40 ||
     key === 37 || key === 39 ||
     key === 66 || key === 65){
    keyMatch.push(key);
  }else{
    keyMatch = [];
  }

  for(var i = 0; i < keyMatch.length; i++){
    if(keyMatch[2] === 38){
      keyMatch = [key, key];
      break;
    }
    if(keyMatch[i] !== keyCombo[i]){
      keyMatch = [key];
      break;
    }
  }

  if(keyMatch.length === keyCombo.length){
    alert('"YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"');
    keyMatch = [];
  }
  console.log(keyMatch);
}, false);