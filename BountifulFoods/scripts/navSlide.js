// Use any element to open/show the overlay navigation menu
<span style="font-size:30px;cursor:pointer" onclick="openNav()">
  &#9776; open slide
</span>;

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
