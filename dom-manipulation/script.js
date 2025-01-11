// Array to store quotes
const quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Do not take life too seriously. You will never get out of it alive.", category: "Humor" },
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Check if the requisite DOM element exists
    if (!quoteDisplay) {
        console.error("Error: Element with ID 'quoteDisplay' not found.");
        return;
    }

    // Check if there are any quotes to display
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some quotes!";
        return;
    }

    // Pick a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the selected quote
    quoteDisplay.textContent = `"${randomQuote.text}" - [${randomQuote.category}]`;
}

// Function to add a new quote
function addQuote() {
    const newQuoteTextInput = document.getElementById("newQuoteText");
    const newQuoteCategoryInput = document.getElementById("newQuoteCategory");

    // Validate that input fields exist
    if (!newQuoteTextInput || !newQuoteCategoryInput) {
        console.error("Error: Input fields for adding quotes are missing.");
        return;
    }

    const newQuoteText = newQuoteTextInput.value.trim();
    const newQuoteCategory = newQuoteCategoryInput.value.trim();

    // Validate input
    if (newQuoteText === "" || newQuoteCategory === "") {
        alert("Both quote text and category are required!");
        return;
    }

    if (newQuoteText.length < 5) {
        alert("Quote text must be at least 5 characters long.");
        return;
    }

    if (newQuoteCategory.length < 3) {
        alert("Category must be at least 3 characters long.");
        return;
    }

    // Add the new quote to the array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear input fields
    newQuoteTextInput.value = "";
    newQuoteCategoryInput.value = "";

    alert("Quote added successfully!");
}

// Attach event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const newQuoteButton = document.getElementById("newQuote");
    const addQuoteButton = document.getElementById("addQuoteBtn");

    // Validate buttons
    if (!newQuoteButton) {
        console.error("Error: 'Show New Quote' button not found.");
        return;
    }
    if (!addQuoteButton) {
        console.error("Error: 'Add Quote' button not found.");
        return;
    }

    // Attach event listeners
    newQuoteButton.addEventListener("click", showRandomQuote);
    addQuoteButton.addEventListener("click", addQuote);
});
