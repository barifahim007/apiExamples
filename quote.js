const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => kanyeaQuote(data))
}
const kanyeaQuote = (myQuote) => {
    const displayQuote = document.getElementById('kanyee-quote')
    displayQuote.innerText = myQuote.quote

}