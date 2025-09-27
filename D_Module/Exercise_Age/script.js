function age () {
    let date = new Date()
    let date_age = date.getFullYear()
 
    const age = document.getElementById('age')
    const res = document.getElementById('result')

    if (age.value.length == 0 || Number(age.value) > date_age) {
        window.alert('Error')
    } else {
        let sex = document.getElementsByName('radsex')
        let age_ans = date_age - Number(age.value)
        res.innerHTML = `Age: ${age_ans}`
        let gender = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (sex[0].checked) {
            gender = 'Man'
            if (age >= 0 && age < 12) {
                img.setAttribute('src', 'image/photo-child-m.png')
            } else if (age < 18) {
                img.setAttribute('src', 'image/photo-teen-m.png')
            } else if (age < 50) {
                img.setAttribute('src', 'image/photo-adult-m.png')
            } else {
                img.setAttribute('src', 'image/photo-old-m.png')
            }
        } else {
            gender = 'Woman'
            if (age >= 0 && age < 12) {
                img.setAttribute('src', 'image/photo-child-f.png')
            } else if (age < 18) {
                img.setAttribute('src', 'image/photo-teen-f.png')
            } else if (age < 50) {
                img.setAttribute('src', 'image/photo-adult-f.png')
            } else {
                img.setAttribute('src', 'image/photo-old-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gender ${gender} with age ${age_ans}`
        res.appendChild(img)
    } 
}