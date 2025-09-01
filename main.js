//A studetn management system
// Initialize an empty array to hold student names
let students = [];

// Function to validate the student email format
function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function createStudent(id, name, grade, email){
    if(students.some(student => student.id === id)){
        console.log(`Student with this ID ${id} already exists.`);
        return;
    }

    if(!isEmail(email)){
        console.log(`Error Invalid email format for ${email}`);
        return;
    }
    const student = {id, name, grade, email};
    students.push(student);
    console.log(`Student ${name} added successfully.`);
}

// Function to read and display all students
function getAllStudents(){
    if(students.length === 0){
        console.log("No students found.");
        return;
    }
    console.log("List of Students:");
    console.table(students);
}

//Read a student by ID
function getStudentById(id){
    const student = students.find(student => student.id === id);
    if(student){
        console.log("Student found:");
        console.table(student);
    }
    else{
        console.log(`Student with ID ${id} not found.`);
    }
}

//Update a student by ID
function updateStudent(id, updatedData){
    const student = students.find(student=> student.id === id);
    if(!student){
        console.log(`Student with ID ${id} not found.`);
        return;
    }
    if(updatedData.email && !isEmail(updatedData.email)){
        console.log(`Error Invalid email format for ${updatedData.email}`);
        return;
    }
    Object.assign(student, updatedData);
    console.log(`Student with ID ${id} updated successfully.`);
}

//Delete a student by ID
function deleteStudent(id){
    const index = students.findIndex(student => student.id === id);
    if(index === -1){
        console.log(`Student with ID ${id} was not found.`);
        return;
    }
    const removed = students.splice(index, 1);
    console.log(`Student with ID ${removed[0].name} (ID:${id}) was deleted successfully.`);
}
// Example usage
createStudent(1, "Matanda", "A", "matandae@example.com");
createStudent(2, "Biamungu", "B+", "biamungu@example.com");

getAllStudents();
getStudentById(1);
updateStudent(2, { grade: "A+", email: "nestory@example.com" });
deleteStudent(1);
getAllStudents();
