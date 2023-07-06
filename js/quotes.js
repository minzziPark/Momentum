const quotes = [
	{
		quote: "They must often change who would be constant in happiness or wisdom.",
		author: "Confucius",
	},
	{
		quote: "Age is no guarantee of maturity.",
		author: "Lawana Blackwell",
	},
	{
		quote: "You will face many defeats in life, but never let yourself be defeated.",
		author: "Maya Angelou",
	},
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote: "Life is either a daring adventure or nothing at all.",
		author: "Helen Keller",
	},
	{
		quote: "The goal of life is living in agreement with nature.",
		author: "Zeno",
	},
	{
		quote: "This too shall pass.",
		author: "Et hoc transibit",
	},
	{
		quote: "The die is cast.",
		author: "Julius caesar",
	},
	{
		quote: "Only I can change me life, no one can do it for me.",
		author: "Carol Burnett",
	},
	{
		quote: "Life is unfair, get used to it.",
		author: "Bill Gates",
	}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.classList.add("qouted");
author.classList.add("author");
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const Username = localStorage.getItem(USERNAME_KEY);

if(savedUsername !== null){
	quote.classList.add("hidden");
	author.classList.add("hidden");
}

