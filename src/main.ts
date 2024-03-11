// Hello ts
console.log("ts")

import { Book } from "./book.types"

const dune = new Book("Dune", "Frank Herbert", 1965)
console.log(dune.display)

{
    let a = 2
    let b = 10

    a -= b
    b += a
    a = b - a
    console.log(a, b)
}
