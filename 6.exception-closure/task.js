function parseCount(strToParse){
    let targ = parseFloat(strToParse)
    if (isNaN(targ)){
        throw new Error("Невалидное значение")
    } else {return targ} 
}

function validateCount(strToParse){
    try {
        return parseCount(strToParse)
    } catch (error) {
        return error
    }
}

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || c + a < b || c + b < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter(){
        return this.a+this.b+this.c}

    get area() {
        let semiperimeter = (this.a +this.b + this.c)/2
        return parseFloat (
            Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(3)
            )
        }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
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