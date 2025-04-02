function getUniqueLang(students){
    const uniqueLanguages = new Set();

    students.forEach(student => {
        student.languages.forEach(language => {
            uniqueLanguages.add(language);
        });
    });
}


const students = require('./Data.js').students;