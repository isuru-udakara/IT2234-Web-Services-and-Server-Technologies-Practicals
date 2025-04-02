function getUniqueLang(students){
    const uniqueLanguages = new Set();

    students.forEach(student => {
        student.languages.forEach(language => {
            uniqueLanguages.add(language);
        });
    });

    return Array.from(uniqueLanguages).sort();
}


const students = require('./Data.js').students;