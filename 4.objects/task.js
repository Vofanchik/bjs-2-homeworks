function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Anton", "M", "19");
let student2 = new Student("Andrey", "M", "20");
let student3 = new Student("Artem", "M", "21");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks){
    for (let mark of marks){
        this.marks.push(mark)
    }
  }
  else {console.log('студент отчислен')}
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0){
        return 0
        }
      
    else {
        return this.marks.reduce((a, b) => a + b, 0)/this.marks.length
    }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
