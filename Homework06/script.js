const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(students){
    const {subjects} = students;
    let subjArr = Object.keys(subjects);
    for(let i = 0; i < subjArr.length; i++){
        subjArr[i] = subjArr[i].replace("_", " ")
            .replace(subjArr[i].charAt(0), subjArr[i].charAt(0).toUpperCase());
    }
    return subjArr;
}
getSubject = getSubjects(students[0]);
console.log("1: ", getSubject);

function getAverageMark(students){
    const marks = [];
    const {subjects} = students;
    for (const keys in subjects){
        for(let i = 0; i < subjects[keys].length; i++){ //можна й через entries + forEach, але це перше в голову прийшло :р
            marks.push(subjects[keys][i])
        }
    }
    let sumOfMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i];
    }
    return Math.round((sumOfMarks / marks.length) * 100) / 100;
}
getAvgMark = getAverageMark(students[0]);
console.log("2: ", getAvgMark);

function getStudentInfo(students){
    const getAvgMark = getAverageMark(students);
    const {name, course} = students;
    return {
        "course": course,
        "name": name,
        "averageMark": getAvgMark
    };
}
getStInfo = getStudentInfo(students[0]);
console.log("3: ", getStInfo);

function getStudentsNames(students){
    return students.map((element) => element.name).sort();
}
getStudentsName = getStudentsNames(students);
console.log("4: ", getStudentsName);

function getBestStudent(students){
    let bestMark = 0;
    let bestStudent = "";
    students.forEach(element => {
        const getAvgMark = getAverageMark(element);
        if (getAvgMark > bestMark) {
            bestMark = getAvgMark;
            bestStudent = element.name;
        }
    })
    return bestStudent;
}
bestStudent = getBestStudent(students);
console.log("5: ", bestStudent);

function calculateWordLetters(...word){
    return word.reduce((prevValue, item) => {
        if (prevValue[item]) {
            prevValue[item]++;
        } else {
            prevValue[item] = 1;
        }
        return prevValue;
    }, {});
}
calcWordLetters = calculateWordLetters(..."test");
console.log("6: ", calcWordLetters);