var quoteOutput = document.getElementById('quoteOutput');
var authorOutput = document.getElementById('authorOutput');

var quotesArr = [
    {
        auther: "― Oscar Wilde",
        quote: "“Be yourself; everyone else is already taken.”"
    },
    {
        author: '― Frank Zappa',
        quote: '“So many books, so little time.”'
    },
    {
        author: 'Frank Sinatra',
        quote: 'The best revenge is massive success.'
    },
    {
        author: '― Marcus Tullius Cicero',
        quote: '“A room without books is like a body without a soul.”'
    },
    {
        author: '― Mae West',
        quote: '“You only live once, but if you do it right, once is enough.”'
    },
    {
        author: '― Elbert Hubbard',
        quote: '“A friend is someone who knows all about you and still loves you.”'
    },
]

function generalQuote() {
    var random = Number.parseInt(Math.random()*quotesArr.length + 1);
    document.querySelector('#quoteOutput').textContent = quotesArr[random].quote;
    document.querySelector('#authorOutput').textContent = quotesArr[random].author;
}