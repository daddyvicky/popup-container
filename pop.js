var parent = document.querySelector(".m-p"),
  btn = document.querySelector("button"),
  X = document.querySelector(".x"),
  section = document.querySelector("section");

btn.addEventListener("click", appear);
function appear() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)";
}
X.addEventListener("click", disappearx);
function disappearx() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
}
parent.addEventListener("click", disappearout);
function disappearout(e) {
  if (e.target.className == "m-p") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}
