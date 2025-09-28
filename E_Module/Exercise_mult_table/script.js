function counting() {
    const number_s = document.getElementById('number')
    const number = Number(number_s.value)
    let multi = 1
    const count = document.getElementById('count')
    count.innerHTML = ''

    while (multi <= 10) {
        const result = number * multi
        multi++
        count.innerHTML += `${result} `
    }
}