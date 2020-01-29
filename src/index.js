// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("h2");
text.style.color = colors[0];

const superEventHandler = [
  function changeColor() {
    text.style.color = colors[1];
    text.innerHTML = "The mouse is over!";
  },
  function undoChangeColor() {
    text.style.color = colors[0];
    text.innerHTML = "The mouse is gone!";
  },
  function changeTitle() {
    text.innerHTML = "How are you?";
    text.style.color = colors[4];
  },
  function changeText() {
    text.innerHTML = "I`m all right!";
    text.style.color = colors[3];
  }
];

text.addEventListener("mouseover", superEventHandler[0]);
text.addEventListener("mouseleave", superEventHandler[1]);
window.addEventListener("resize", superEventHandler[2]);
text.addEventListener("contextmenu", superEventHandler[3]);
