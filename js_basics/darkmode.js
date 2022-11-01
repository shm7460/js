const darkMode = document.querySelector("button");
const body = document.querySelector("body");
function handleTitleClick() {
  if (body.className === "dark") {
    body.className = "white";
    darkMode.innerText = "darkmode";
  } else {
    body.className = "dark";
    darkMode.innerText = "whitemode";
  }
}

darkMode.addEventListener("click", handleTitleClick);
