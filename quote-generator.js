var quoteArray = []
    var quoteObj = {
        text: "We are what we repeatedly do; excellence, then is not ac act but a habit",
        author: "-Aristotle"
}

function generateQuote (text, author) {
    var newQuote = {};
    newQuote.text = text;
    newQuote.author = author;
    quoteArray.push(newQuote);
    };

generateQuote("random string", "authortest");

console.log(quoteArray);

