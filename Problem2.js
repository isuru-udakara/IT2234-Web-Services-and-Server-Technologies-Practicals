const students = require('./Data.js').students;

function getUniqueLang(students){
    const uniqueLanguages = new Set();

    students.forEach(student => {
        student.Pro_languages.forEach(language => {
            uniqueLanguages.add(language);
        });
    });

    return Array.from(uniqueLanguages).sort();
}

console.log(getUniqueLang(students));