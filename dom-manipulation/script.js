// Array to store quotes
const quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Do not take life too seriously. You will never get out of it alive.", category: "Humor" },
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Check if there are any quotes to display
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some quotes!";
        return;
    }

    // Pick a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the selected quote in the quoteDisplay container
    quoteDisplay.textContent = `"${randomQuote.text}" - [${randomQuote.category}]`;
}

// Function to add a new quote
function addQuote() {
    // Get and trim the input values
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Validate input values
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

    // Add the new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Clear the input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Provide user feedback
    alert("Quote added successfully!");

    // Reset focus to the quote text input field
    document.getElementById("newQuoteText").focus();
}

// Attach event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Attach event listener for "Show New Quote" button
    document.getElementById("newQuote").addEventListener("click", showRandomQuote);

    // Attach event listener for "Add Quote" button
    document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
});
