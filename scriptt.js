const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.textContent = quote.text;
    authorElement.textContent = `- ${quote.author}`;
}

// Load first random quote when page loads
getRandomQuote();

// New quote on button click
newQuoteButton.addEventListener("click", getRandomQuote);
