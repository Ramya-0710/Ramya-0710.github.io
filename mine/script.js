function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("menuBtn");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    btn.innerHTML = "&#9776;"; // ☰
     btn.style.fontSize = "30px";
  } else {
    menu.style.display = "block";
    btn.innerHTML = "&times;"; // ✖
   btn.style.fontSize = "40px";
  }
}

function about(){
    alert("This is the About Me section.");
}