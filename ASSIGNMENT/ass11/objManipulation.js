/*
Question 1: Object Manipulation
1.You are given an object representing a student's information. Your task is to write a JavaScript function that takes this object as input and performs the following tasks:

2.Add a new property called "averageGrade" to the object. Calculate the average grade by summing all the grades (located in the "grades" array) and dividing by the number of grades.

3.Create a copy of the student object without modifying the original object. The copy should include all properties except the "grades" property.

4.Finally, return the modified original object and the copy as a pair of objects in an array.
*/

function manipulateStudentInfo(student){
    let totalMarks = 0;
    for (let i = 0; i < student.grades.legth ; i++) {
        totalMarks += student.grades[i];
    };
    student.averageGrade = totalMarks / student.grades.length;
    return [student, studentcopy];
};

const student = {
    name: "John Doe",
    age: 20,
    grades: [85, 90, 78, 92, 88],
    city: "New York",
};

const [modifiedStudent, studentcopy] = manipulateStudentInfo(student);
console.log(modifiedStudent);
console.log(studentcopy);