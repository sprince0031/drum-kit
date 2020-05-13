// document.querySelectorAll('.instrument-btn').forEach(item => {
  
  
//   let soundFile;
//   let audio;
//   item.addEventListener('click', event => {
    
//     soundFile = soundPicker(item.getAttribute("id"));
//     item.style.color = "white";
//     audio = new Audio(soundFile);
//     audio.play();
//   });

// });

function soundPlayer(id) {

  switch (id) {
    case 'w':
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case 's':
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'd':
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      let kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case 'l':
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(id);
  }

}

let buttonElementList = document.querySelectorAll(".instrument-btn");

for (let i = 0; i < buttonElementList.length; i++) {
  buttonElementList[i].addEventListener('click', function() {
    let keyId = this.getAttribute("id");
    soundPlayer(keyId);
    buttonAnimation(keyId);
    
  });
}

let keyboardShortcutToggle = true;

document.addEventListener('keydown', event => {
  if (event.key === 'h') {
    if (keyboardShortcutToggle) {
      document.querySelector(".hidden").classList.toggle("reveal");
    } else {
      document.querySelector(".reveal").classList.toggle("hidden");
    }
  } else {
    soundPlayer(event.key);
    buttonAnimation(event.key);
  }
});

// document.addEventListener('keyup', event => {
//     colourOff(event.key);
// });

function buttonAnimation(id) {
  let button = document.querySelector("#"+id);
  button.classList.add("instrument-btn-clicked");
  setTimeout(function() {
    button.classList.remove("instrument-btn-clicked");
  }, 100);
}