let p1 = window.document.getElementsByTagName('p')[1]
p1.style.color = 'black'
// const d = window.document.getElementById('msg')
// d.style.backgroundColor = 'green'
var d = window.document.querySelector('div#msg')
d.style.color = 'violet'

// DOM Events

var a = window.document.getElementById('area')
a.addEventListener('click', _click)
a.addEventListener('mouseenter', _enter)


function _click() {
    a.innerText = 'Clicked'
    a.style.color = 'red'
    a.style.backgroundColor = 'Blue'
}
function _enter() {
    a.innerText = 'Hello!'
}

function _sum() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}