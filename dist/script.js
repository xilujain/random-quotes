import { api_key, api_host } from "./api_key";

let btnQuote = document.getElementById("another-quote").addEventListener("click", quotes_api)

function quotes_api(){
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': api_key,
            'X-RapidAPI-Host': api_host
        }
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('another-quote').addEventListener('click', response_quote(response))
    })
    .catch (error => {
        console.log(error);
    });
}

function response_quote(response) {
    document.getElementById('quote').innerHTML = response.content
}