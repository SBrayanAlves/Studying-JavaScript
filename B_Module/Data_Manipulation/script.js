const name = window.prompt("What's your name? ")
window.alert("Hello " + name)

const n1 = Number.parseFloat(window.prompt('Type a number: ')) //str
const n2 = Number.parseFloat(window.prompt('Type a other number: ')) //str
const s = n1 + n2
window.alert('The sum is ' + s) 
// + for sum or concatenation
// number + numebr = sum
// str + str = concatenation
// Number.parseInt = 1, 2, 3...
// Number.parseFloat = 1.2, 2.1, 3.7...
// Number(n) = 1, 2, 4, 5.2, 8.1, 9.7...
// Number -> STR = String(n) or n.ToString()

const student = window.prompt('Your name: ')
const age = window.prompt('Your age: ')
const note = window.prompt('Your note: ')

window.alert(`The student ${student} at age ${age} got the grade ${note}`)

// s.length -> how many characters have a string
// s.toUpperCase() -> All for CAPITAL LETTERS
// s.toLowerCase() -> All for lower case

const name2 = window.prompt("Your name: ")
document.writeln(`Your name has ${name2.length} letters`)

var number1 = 1545.5
number1.toFixed(2).replace('.', ',')

// number1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL})
// R$ 1,545.50