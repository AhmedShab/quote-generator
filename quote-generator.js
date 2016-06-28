var allQuotes = [
        {
        text: "We are what we repeatedly do; Excellence, then is not an act but a habit",
        author: "-Aristotle"
        }, {
        text: "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do",
        author: "—John Ruskin"
        }, {
            text: "You must be the change you wish to see in the world",
            author: "Gandhi"
        },
         {
            text: "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not",
            author: "Virgil Garnett Thomson"
        },
         {
            text: "Even if you’re on the right track, you’ll get run over if you just sit there",
            author:"-Will Rogers"
        },
        {
            text: "The problem with quotes found on the internet is they are often not true",
            author: "Abraham Lincoln"
        },
        {
            text: "Everything should be made as simple as possible, but not simpler",
            author: " -Albert Einstein"
        },
        {
            text: "Be yourself, everybody else is already taken",
            author: "-Oscar Wilde"
        },
         {
            text: "You only live once, but if you do it right, once is enough",
            author: "-Mae West"
        }
    ]


function generateQuote (text, author) {
    var newQuote = {};
    newQuote.text = text;
    newQuote.author = author;
    quoteArray.push(newQuote);
    };


function generateQuote(){
    var random = Math.floor(Math.random() * (allQuotes.length -1 - 0 + 1)) + 0;
    allQuotes[random];
    console.log(allQuotes[random])
    document.getElementById("random-quotes").innerHTML = allQuotes[random].text;
    document.getElementById("random-author").innerHTML = allQuotes[random].author;
};

// generateQuote("random string", "authortest");

console.log(allQuotes);

document.getElementById("random-quotes").innerHTML = allQuotes[0].text;
document.getElementById("random-author").innerHTML = allQuotes[0].author;
