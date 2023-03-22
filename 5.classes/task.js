class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state = this.state * 15/10;
    }
    set state (state = Number) {
        if(state < 0) {
            this._state = 0;  
        } else if(state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(PrintEditionItem) {
        if (PrintEditionItem.state > 30) {
            this.books.push(PrintEditionItem);
        }
    }

    findBookBy(type, value) {
        let book = null;
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                book = this.books[i];
            }
        }
        return book;
    }

    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }             
        }
        return null;
    }    
}

class Student {
    constructor(userName) {
        this.userName = userName;
        this.marks = {};
    }
    addMark(mark, subjectName) {
        if (mark < 2 && mark > 5) {
            return
        }
        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
            this.marks[subjectName].push(mark);
        } else {
            this.marks[subjectName].push(mark);
        }
    }
    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined) {
            return;
        } else {
            let sum = this.marks[subjectName].reduce((mark, nextMark) => mark + nextMark);
            return sum / this.marks[subjectName].length;
        }
    }
    getAverage() {
        let averageMark = 0;
        let subject = Object.keys(this.marks);
        for (let i = 0; i < subject.length; i++) {
            averageMark += this.getAverageBySubject(subject[i]);
        }
        return averageMark / subject.length;
    }
}    
