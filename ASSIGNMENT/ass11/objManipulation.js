/*
Question 1: Object Manipulation
1.You are given an object representing a student's information. Your task is to write a JavaScript function that takes this object as input and performs the following tasks:

2.Add a new property called "averageGrade" to the object. Calculate the average grade by summing all the grades (located in the "grades" array) and dividing by the number of grades.

3.Create a copy of the student object without modifying the original object. The copy should include all properties except the "grades" property.

4.Finally, return the modified original object and the copy as a pair of objects in an array.
*/

function manipulateStudentInfo(student){
    let totalMarks = 0;
    for (let i = 0; i < student.grades.length ; i++) {
        totalMarks += student.grades[i];
    };
    student.averageGrade = totalMarks / student.grades.length;
    let studentcopy = JSON.parse(JSON.stringify(student));
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

/*
Question 2: Pizza Order

You are planning to throw a party and want to order Pizzas for the guests. Assuming each person gets 3 slices of Pizza and that each Pizza has 8 slices, you want to find out how many Pizzas should be ordered for this party. Write a JavaScript function that takes the number of people invited to the party as an input and returns the total number of Pizzas required.
Your function should:

Take the number of guests as input.
Use the assumption that each Pizza has 8 slices and each person gets 3 slices.
Round the result to the nearest whole number using `Math.ceil()`.
Return the count of Pizzas you should order as an integer.
Example: if the input is 12 (12 guests), the function should return 5 (5 Pizzas)
*/