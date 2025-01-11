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

    // Display the selected quote in the quoteDisplay container
    quoteDisplay.textContent = `"${randomQuote.text}" - [${randomQuote.category}]`;
}

// Function to add a new quote
function addQuote() {
    const newQuoteTextInput = document.getElementById("newQuoteText");
    const newQuoteCategoryInput = document.getElementById("newQuoteCategory");
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Check if requisite DOM elements exist
    if (!newQuoteTextInput || !newQuoteCategoryInput || !quoteDisplay) {
        console.error("Error: Required input fields or quote display container not found.");
        return;
    }

    // Get and trim the input values
    const newQuoteText = newQuoteTextInput.value.trim();
    const newQuoteCategory = newQuoteCategoryInput.value.trim();

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
    newQuoteTextInput.value = "";
    newQuoteCategoryInput.value = "";

    // Update the DOM with a success message
    quoteDisplay.textContent = `"${newQuoteText}" - [${newQuoteCategory}] has been added to the list!`;

    // Notify user about the updated quotes array
    console.log("Updated Quotes Array:", quotes);

    // Reset focus to the quote text input field
    newQuoteTextInput.focus();
}

// Attach event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const newQuoteButton = document.getElementById("newQuote");
    const addQuoteButton = document.getElementById("addQuoteBtn");

    // Check if requisite buttons exist
    if (!newQuoteButton) {
        console.error("Error: 'Show New Quote' button not found.");
    } else {
        // Attach event listener for "Show New Quote" button
        newQuoteButton.addEventListener("click", showRandomQuote);
        console.log("'Show New Quote' button event listener attached.");
    }

    if (!addQuoteButton) {
        console.error("Error: 'Add Quote' button not found.");
    } else {
        // Attach event listener for "Add Quote" button
        if (typeof addQuote === "function") {
            addQuoteButton.addEventListener("click", addQuote);
            console.log("'Add Quote' button event listener attached.");
        } else {
            console.error("Error: 'addQuote' function is not defined.");
        }
    }
});

