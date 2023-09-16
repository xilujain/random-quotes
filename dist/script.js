function givingOtherQuote() {
    document.addEventListener('click', () => {
        axios.get('https://quotes15.p.rapidapi.com/quotes/random/', {
        headers: {
            'X-RapidAPI-Key': '721731d5b6msh8e07aed407d120cp16e35fjsna437f99b79c6',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
          }
    })
    .then(function (response) {
        document.getElementById('quote').innerHTML = response.data.content
    })
    .catch(function (error) {
        console.log(error);
    });
    })
}