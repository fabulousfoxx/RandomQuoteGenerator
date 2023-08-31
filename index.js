const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote(){
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL); //it gives response that i need to convert into JSON file
    const data = await response.json();
  
    quoteEl.innerText = data.content;//content and author are set in JSON
    authorEl.innerText = "~" + data.author;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later.";
  }
}

getQuote();
btnEl.addEventListener("click", getQuote);