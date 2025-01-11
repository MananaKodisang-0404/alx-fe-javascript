// Quotes array
let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Do not take life too seriously. You will never get out of it alive.", category: "Humor" },
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Add some quotes!";
        return;
    }
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = `"${randomQuote.text}" - [${randomQuote.category}]`;
}

// Function to add a new quote
function addQuote() {
    const textInput = document.getElementById('newQuoteText').value.trim();
    const categoryInput = document.getElementById('newQuoteCategory').value.trim();

    if (textInput.length < 5 || categoryInput.length < 3) {
        alert("Quote must be at least 5 characters long and category at least 3 characters.");
        return;
    }

    quotes.push({ text: textInput, category: categoryInput });
    localStorage.setItem('quotes', JSON.stringify(quotes));
    populateCategories();
    alert("Quote added successfully!");

    document.getElementById('newQuoteText').value = "";
    document.getElementById('newQuoteCategory').value = "";
}

// Function to populate categories dynamically
function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const uniqueCategories = ["all", ...new Set(quotes.map(quote => quote.category))];
    categoryFilter.innerHTML = uniqueCategories
        .map(category => `<option value="${category}">${category}</option>`)
        .join('');
}

// Function to filter quotes by category
function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const quoteDisplay = document.getElementById('quoteDisplay');
    const filteredQuotes = selectedCategory === "all"
        ? quotes
        : quotes.filter(quote => quote.category === selectedCategory);

    if (filteredQuotes.length === 0) {
        quoteDisplay.textContent = "No quotes found for this category.";
        return;
    }

    const randomFilteredQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    quoteDisplay.textContent = `"${randomFilteredQuote.text}" - [${randomFilteredQuote.category}]`;
}

// Function to export quotes to a JSON file
function exportQuotes() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            quotes.push(...importedQuotes);
            localStorage.setItem('quotes', JSON.stringify(quotes));
            populateCategories();
            alert("Quotes imported successfully!");
        } catch (error) {
            alert("Invalid JSON file.");
        }
    };
    fileReader.readAsText(event.target.files[0]);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('newQuote').addEventListener('click', showRandomQuote);
    document.getElementById('addQuoteBtn').addEventListener('click', addQuote);
    document.getElementById('exportQuotesBtn').addEventListener('click', exportQuotes);
    populateCategories();
});


