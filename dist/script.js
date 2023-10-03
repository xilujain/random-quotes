let btnQuote = document.getElementById("another-quote").addEventListener("click", quotes_api)

function quotes_api(){
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '721731d5b6msh8e07aed407d120cp16e35fjsna437f99b79c6',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
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