const crYear = document.querySelector("#cr-year");
const now = new Date();
const currentYear = now.getFullYear();

if (currentYear > 2024) crYear.textContent = "2024-";
crYear.textContent += currentYear;