function action (x) {
    if (x % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = action(7)
console.log(res)

function sum (n1=0, n2=0) {
    return n1 + n2
}

let res_ = sum(4, 3)
console.log(res_)

let f = function(y) {
    return y*2
}   

console.log(f(5))

function fatorial(z) {
    let fat = 1
    for (let c = z; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fatorial_r(a) {
    if (a == 1) {
        return 1
    } else {
        return a * fatorial_r(a-1)
    }
}

console.log(fatorial_r(5))