function Student(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
}

var student1 = new Student('John', 26, 'Cambridge');
var student2 = new Student('Mark', 30, 'Oxford');
var student3 = new Student('Bill', 28, 'Havard');
Student.prototype.coding = function(){
  if (this.age > 28) {
    console.log('coding master');
  } else 
  {
    console.log('learning code');
  }
}

