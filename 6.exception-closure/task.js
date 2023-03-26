function parseCount(str){
    if (isNaN(Number.parseFloat(str))) {
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(str);
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch(e) {
        return e;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > b + a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = (this.a + this.b + this.c) / 2;
        let S = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
        S = Number(S);
        return S;
    }   
}
function getTriangle (a,b,c){
    try {
        return new Triangle(a,b,c);
    }
    catch(e) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}