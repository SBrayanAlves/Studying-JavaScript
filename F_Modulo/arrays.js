/*
const a1
const a2
const a3
...
*/

let a = [5, 8, 4]
// 5, 8, 4
// array -> element -> key -> value

a[3] = 6
// 5, 8, 4, 6

a.push(7)
// 5, 8, 4, 6, 7

a.length
// 5

a.sort()
// 4, 5, 6, 7, 8

for (let pos=0; pos < a.length; pos++) {
    console.log(a[pos])
}

for (let i in a) {
    console.log(a[i])
}

a.indexOf(7)