let student = {
    rollNo: 1,
    name: "Garvit",
    course: "CSE"
};

console.log(student); //represented as key value pair
console.log(`-------------`); 
//dot notation to access objects
console.log(student.rollNo);
console.log(student.name);
console.log(student.course);

//another way - bracket notation to access the object student
console.log(`-------------`);
console.log(student['rollNo']);
console.log(student['name']);
console.log(student['course']);


console.log(`-------------`);
console.log(typeof student);
console.log(typeof student.rollNo);

console.log(`-------------`);
delete student.course;
console.log(student);
student.year = 'second';
console.log(student);