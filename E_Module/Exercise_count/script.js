function counting() {
    const start_s = document.getElementById('start')
    const finish_s = document.getElementById('finish')
    const pass_s = document.getElementById('pass')
    const count = document.getElementById('count')

    if (start_s.value.length == 0 || finish_s.value.length == 0 || pass_s.value.length == 0) {
        window.alert('Error!')
    } else {
        count.innerHTML = 'Counting: '
        const start = Number(start_s.value)
        const finish = Number(finish_s.value)
        const pass = Number(pass_s.value)

        for (c = start; c <= finish; c += pass) {
            count.innerHTML += `${c}`

        }
    }
}