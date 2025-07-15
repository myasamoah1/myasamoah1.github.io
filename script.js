const text = "Wants to be a Data Analyst";
let index = 0;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    if (index === 0) typewriterElement.innerHTML = ""; // Clear before starting
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);