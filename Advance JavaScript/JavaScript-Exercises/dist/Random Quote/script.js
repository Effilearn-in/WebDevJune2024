var heading = document.getElementById("heading");
var paragraph = document.getElementById("paragraph");

function generateQuote() {
    var quotes = {
        "― Santosh Kalwar": "Coding like poetry should be short and concise.",
        "― Anonymous": "It’s not a bug; it’s an undocumented feature.",
        "― John Johnson": "First, solve the problem. Then, write the code.",
        "― Cory House": "Code is like humor. When you have to explain it, it’s bad.",
        "― Kent Beck": "Make it work, make it right, make it fast.",
        "— Robert C. Martin": "Clean code always looks like it was written by someone who cares.",
        "― Felienne Hermans": "Confusion is part of programming.",
        "― Oscar Wilde": "Experience is the name everyone gives to their mistakes.",
        "― Linus Torvalds": "Software is like sex: it’s better when it’s free.",
        "― Yegor Bugayenk": "Quality is a product of a conflict between programmers and testers."
    };

    var authors = Object.keys(quotes);

    var generateAuthors = authors[Math.floor(Math.random() * authors.length)];
    var quoteGenerate = quotes[generateAuthors];

    heading.innerHTML = quoteGenerate
    paragraph.innerHTML = generateAuthors;
}