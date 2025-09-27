function loading() {
    let time = new Date()
    let now = time.getHours()
    console.log(now)
    const message = document.getElementById('msg')
    const img = document.getElementById('image')
    if ( 0 < now && now <= 12) {
        message.innerText = 'Good morning '
        img.src = 'image/morningphoto.png'
        document.body.style.background = '#e2cd9f'
    } else if ( 12 < now && now <= 18) {
        message.innerText = 'Good afternoon'
        img.src = 'image/afternoonphoto.png'
        document.body.style.background = '#b9846f'
    } else {
        message.innerText = 'Good night'
        img.src = 'image/nightphoto.png'
        document.body.style.background = '#515154'
    }
}
