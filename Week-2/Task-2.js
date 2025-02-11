const students = [
    { name: 'jeel', age: 21 },
    { name: 'franklin', age: 25 },
    { name: 'vivek', age: 26 },
    { name: 'hardik', age: 23 }
];

// Using filter 
const filteredStudents = students.filter(student => student.age > 18);

// Using map 
const studentNames = filteredStudents.map(student => student.name);

console.log(studentNames); 
