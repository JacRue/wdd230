// Function to populate the fruit options in the select elements
function populateFruitOptions() {
  // Fetch the JSON file with fruit data
  fetch("fruitData.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through the data and populate the select elemnts
      // with fruit options
      const populateSelect = (selectElement) => {
        selectElement.innerHTML = "";
        data.forEach((fruit) => {
          const option = document.createElement("option");
          option.value = fruit.id;
          option.text = fruit.name;
          selectElement.add(option);
        });
      };

      // Call the populateSelect function for each select element
      populateSelect(document.getElementById("fruit1"));
      populateSelect(document.getElementById("fruit2"));
      populateSelect(document.getElementById("fruit3"));
    })
    .catch((error) => {
      console.error("Error fetching fruit data:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  populateFruitOptions();
});

// // Define the updatedTotalSpecialtyDrinks function
// function updatedTotalSpecialtyDrinks() {
//   totalSpecialtyDrinks++;
//   console.log("Total Specialty Drinks: " + totalSpecialtyDrinks);
// }

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to new page

    // // Call the updateTotalSpecialtyDrinks function to update the count
    // updatedTotalSpecialtyDrinks();

    // Get input values
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const fruit1 = document.getElementById("fruit1").value;
    const fruit2 = document.getElementById("fruit2").value;
    const fruit3 = document.getElementById("fruit3").value;
    const specialInstructions = document.getElementById(
      "specialInstructions"
    ).value;

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // Get fruit data from JSON file
    fetch("fruitData.json")
      .then((response) => response.json())
      .then((data) => {
        // Find selected fruit objects
        const selectedFruit1 = data.find(
          (fruit) => fruit.id === parseInt(fruit1)
        );
        const selectedFruit2 = data.find(
          (fruit) => fruit.id === parseInt(fruit2)
        );
        const selectedFruit3 = data.find(
          (fruit) => fruit.id === parseInt(fruit3)
        );

        // Calculate total nutrition information
        const totalCarbs =
          (selectedFruit1.nutritions.carbohydrates || 0) +
          (selectedFruit2.nutritions.carbohydrates || 0) +
          (selectedFruit3.nutritions.carbohydrates || 0);
        const totalProtein =
          (selectedFruit1.nutritions.protein || 0) +
          (selectedFruit2.nutritions.protein || 0) +
          (selectedFruit3.nutritions.protein || 0);
        const totalFat =
          (selectedFruit1.nutritions.fat || 0) +
          (selectedFruit2.nutritions.fat || 0) +
          (selectedFruit3.nutritions.fat || 0);
        const totalSugar =
          (selectedFruit1.nutritions.sugar || 0) +
          (selectedFruit2.nutritions.sugar || 0) +
          (selectedFruit3.nutritions.sugar || 0);
        const totalCalories =
          (selectedFruit1.nutritions.calories || 0) +
          (selectedFruit2.nutritions.calories || 0) +
          (selectedFruit3.nutritions.calories || 0);

        // Display formatted output on the page
        const output = `
            <h2>Order Summary</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number</strong> ${phoneNumber}</p>
            <p><strong>Fruit 1:</strong> ${selectedFruit1.name}</p>
            <p><strong>Fruit 2:</strong> ${selectedFruit2.name}</p>
            <p><strong>Fruit 3:</strong> ${selectedFruit3.name}</p>
            <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
            <p><strong>Order Date:</strong> ${currentDate}</p>
            <p><strong>Total Nutrition Information:</strong></p>
            <ul>
                <li><strong>Total Carbohydrates:</strong> ${totalCarbs} g</li>
                <li><strong>Total Protein:</strong> ${totalProtein} g</li>
                <li><strong>Total Fat:</strong> ${totalFat} g</li>
                <li><strong>Total Sugar:</strong> ${totalSugar} g</li>
                <li><strong>Total Calories:</strong> ${totalCalories} g</li>
            </ul>
        `;

        // Display output on the page
        const outputContainer = document.getElementById("outputContainer");
        outputContainer.innerHTML = output;
      })
      .catch((error) => {
        console.error("Error fetching fruit data:", error);
      });
  });

let totalSpecialtyDrinks = 0;
// Function to get the total number of specialty drinks submitted by the user
function getTotalSpecialtyDrinks() {
  // Check if localStorage is supported in the browser
  if (typeof Storage !== "undefined") {
    // Get the total number of specialty drinks from localStorage
    var totalSpecialtyDrinks = localStorage.getItem("totalSpecialtyDrinks");

    // If totalSpecialtyDrinks is null, set it to 0
    if (totalSpecialtyDrinks === null) {
      totalSpecialtyDrinks = 0;
    }

    // Return the total number of specialty drinks as an integar
    return parseInt(totalSpecialtyDrinks);
  } else {
    // If localStorage is not supported, display an error message
    console.error("Error: localStorage is not supported in this browser.");
  }
}

// Function to update the total number of specialty drinks submitted by the user
function updatedTotalSpecialtyDrinks() {
  // Check if localStorage is supported in browser
  if (typeof Storage !== "undefined") {
    // Get the current total number of specialty drinks
    var totalSpecialtyDrinks = getTotalSpecialtyDrinks();

    // Increment the total number of specialty drinks by 1
    totalSpecialtyDrinks += 1;

    // Store the updated total number of specialty drinks in localStorage
    localStorage.setItem(
      "totalSpecialtyDrinks",
      totalSpecialtyDrinks.toString()
    );

    // Update the information card on the Fresh page with the updated total
    document.getElementById("totalSpecialtyDrinks").innerText =
      totalSpecialtyDrinks.toString();

    // Update the count on the index.html page
    updateIndexDrinkCount();
  } else {
    // If localStorage is not supported, display an error message
    console.error("Error: localStorage is not supported in this browser.");
  }
}

// Function to update the count of specialty drinks displayed on the index.html page
function updateIndexDrinkCount() {
  var totalSpecialtyDrinks = getTotalSpecialtyDrinks();
  document.getElementById("totalSpecialDrinks").innerText =
    "Total specialty drinks submitted: " + totalSpecialtyDrinks.toString();
}

document.addEventListener("DOMContentLoaded", function () {
  var totalSpecialtyDrinks = getTotalSpecialtyDrinks();
  document.getElementById("totalSpecialtyDrinks").innerText =
    "Total specialty drinks submitted: " + totalSpecialtyDrinks.toString();
});

// Attach the updatedTotalSpecialtyDrinks function to the submit event of the order form
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to new page

    // Call the updatedTotalSpecialtyDrinks function to update the count
    updatedTotalSpecialtyDrinks();
  });
