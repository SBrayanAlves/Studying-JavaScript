function calculate () {
    const res = window.document.querySelector('div#div')
    const country = window.document.getElementById('txt').value
    if (country == 'Brazil') {
        res.innerHTML = 'You live in Brazil'
    } else {
        res.innerHTML = "You're foreigner"
    }
}