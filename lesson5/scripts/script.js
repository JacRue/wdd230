const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  // Check if the input is not blank
  if (input.value.trim() !== "") {
    // Create a new list item
    const newItem = document.createElement("li");

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    // Populate the list item with the input
    newItem.textContent = input.value;

    // Append the delete button to the list item
    newItem.appendChild(deleteButton);

    // Append the list item to the list
    list.appendChild(newItem);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", function () {
      list.removeChild(newItem);
    });

    // Send focus back to the input
    input.focus();

    // Clear the input value
    input.value = "";
  }
});
