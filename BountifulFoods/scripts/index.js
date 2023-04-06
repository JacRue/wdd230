function updateIndexDrinkCount() {
  var totalSpecialtyDrinks = getTotalSpecialtyDrinks();
  document.getElementById("totalSpecialtyDrinks").innerText =
    "Total specialty drinks submitted: " + totalSpecialtyDrinks.toString();
}

document.addEventListener("DOMContentLoaded", updateIndexDrinkCount);
window.addEventListener("pageshow", updateIndexDrinkCount);
