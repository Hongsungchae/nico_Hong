// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

var bd = document.querySelector("body");
function resize_widndow() {
  const size = window.innerWidth;
  if (size >= 400) {
    bd.style.backgroundColor = "white";
  } else if (size < 700 && size > 400) {
    bd.style.backgroundColor = "orange";
  } else {
    bd.style.backgroundColor = "black";
  }
}

window.addEventListener("resize", resize_widndow());
