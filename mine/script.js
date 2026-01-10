function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("menuBtn");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    btn.innerHTML = "&#9776;"; // ☰ menu icon
  } else {
    menu.style.display = "block";
    btn.innerHTML = "&times;"; // ✖ close icon
  }
}
function about(){
    alert("This is the About Me section.");
}