// Get the last visit time from localStorage
const lastVisitTime = localStorage.getItem("lastVisitTime");

// Calculate the time difference in days between the current visit and the last visit
const now = new Date();
const daysSinceLastVisit = Math.round(
  (now - new Date(lastVisitTime)) / (1000 * 60 * 60 * 24)
);

// Display the result on the page
const lastVisitEl = document.getElementById("last-visit");
if (lastVisitTime) {
  lastVisitEl.textContent = daysSinceLastVisit;
} else {
  lastVisitEl.textContent = "never";
}

// Store the current visit time in localStorage for next time
localStorage.setItem("lastVisitTime", now.toISOString());
