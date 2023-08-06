const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students){
    const studentsBoys = [];
    const studentsGirls = [];
    for(let i = 0; i < students.length; i++){
        if(/[аеєиіоуяюї]$/i.test(students[i])){
            studentsGirls.push(students[i]);
        }
        else{
            studentsBoys.push(students[i]);
        }
    }
    console.log(`Хлопці: ${studentsBoys}`);
    console.log(`Дівчата: ${studentsGirls}`);

    const studentsPairs = [];
    for(let i = 0; i < studentsBoys.length; i++) {
        studentsPairs.push([studentsBoys[i], studentsGirls[i]]);
    }
    console.log(studentsPairs);
    return studentsPairs;
}
const pairs = getPairs(students);
console.log(`1: ${pairs}`);

function pairToProject(pair){
    const pairsProjects = [];
    for(let i = 0; i < pair.length; i++) {
        const rdIndex = Math.floor(Math.random() * 3);
        const pairsProject = [`${pair[i].join(" і ")}`, themes[rdIndex]];
        pairsProjects.push(pairsProject);
    }
    console.log(pairsProjects);
    return pairsProjects;
}
const pairsProjects = pairToProject(pairs);
console.log(`2: ${pairsProjects}`);

function studentToMark(student, mark){
    const studentsMarks = [];
    for(let i = 0; i < student.length; i++) {
        studentsMarks.push([student[i], mark[i]]);
    }
    console.log(studentsMarks);
    return studentsMarks;
}
const studentsMarks = studentToMark(students, marks);
console.log(`3: ${studentsMarks}`);

function rdMarkForProject(pairProject){
    const rdMarksForProjects = [];
    for(let i = 0; i < pairProject.length; i++) {
        const rdIndex = Math.floor(Math.random() * 5) + 1;
        const pairProjectInner = pairProject[i].concat(rdIndex);
        rdMarksForProjects.push(pairProjectInner);
    }
    console.log(rdMarksForProjects)
    return rdMarksForProjects;
}
const rdMarksForProjects = rdMarkForProject(pairsProjects);
console.log(`4: ${rdMarksForProjects}`);
