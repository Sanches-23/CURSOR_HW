class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismissed = false;
    }
    getInfo() {
        console.log(`${this.course}, ${this.university}, ${this.fullName}.`)
    }
    get getMarks() {
        if(this.isDismissed === false) {
            return this.marks;
        }
        else{
            return "Is dismissed";
        }
    }
    set setMarks(val) {
        if(this.isDismissed === false) {
            this.marks.push(val);
        }
        else{
            return "Is dismissed";
        }
    }
    getAverageMark() {
        return this.marks.reduce((accum, currVal) => accum + currVal, 0) / this.marks.length;
    }
    dismiss() {
        return this.isDismissed = true;
    }
    recover() {
        return this.isDismissed = false;
    }
}

const ostap = new Student(
    "Вища Школа Психотерапії м.Одеса",
    "Студент 1го курсу",
    "Остап Родоманський Бендер",
    [5, 4, 4, 5]);
ostap.getInfo();
console.log(`${ostap.fullName}:`, ostap);
console.log(`${ostap.fullName}:`, ostap.getMarks);
ostap.setMarks = 5;
console.log(`${ostap.fullName}:`, ostap.getMarks);
console.log(`${ostap.fullName}:`, ostap.getAverageMark());
ostap.dismiss();
console.log(`${ostap.fullName}:`, ostap.getMarks);
ostap.recover();
console.log(`${ostap.fullName}:`, ostap.getMarks);
console.log("\n");


class BudgetStudent extends Student{
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks);
        this.getScholarship();
    }
    getScholarship(){
        setInterval(() => {
            if(this.getAverageMark() >= 4 && this.isDismissed === false) {
                console.log(`${this.fullName} отримав 1400 грн. стипендії.`)
            }
            else {
                console.log(`${this.fullName} має середній бал нижче 4-х, або виключений з навч. закладу.`)
            }
        }, 30000);
    }
}
const oleksandr = new BudgetStudent("ХНУ", "ФІТ", "Олександр Батькович Фамілій", [5]);
oleksandr.getInfo();
console.log(`${oleksandr.fullName}:`, oleksandr);
oleksandr.dismiss();
// oleksandr.getScholarship()
oleksandr.recover();
// oleksandr.getScholarship()