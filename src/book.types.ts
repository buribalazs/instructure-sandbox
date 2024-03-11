export class Book {
    title: string
    author: string
    published: number
    get display() {
        return `${this.title} - ${this.author} - ${this.published}`
    }
    constructor(title: string, author: string, published: number) {
        this.title = title
        this.author = author
        this.published = published
    }
}