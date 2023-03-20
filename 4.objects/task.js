function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  // if (Student.hasOwnProperty('marks')) {
  //   this.marks.push(...marksToAdd);
  // }
  this.marks.push(...marksToAdd);
}  

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}
