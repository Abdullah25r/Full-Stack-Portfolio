var burger = document.getElementsByClassName("burger")[0];
var nav = document.getElementsByClassName("verticalbar")[0];
burger.addEventListener("click", ()=>{
    if (nav.style.display == "none") {
        nav.style.display = "block"
    }else
    nav.style.display = "none"; 
    
});
//text generator
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Full stack developer", "Java developer", "Blockchain developer", "C programmer"];
const typingDelay = 100;
const erasingDelay = 100;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay);
  }
}