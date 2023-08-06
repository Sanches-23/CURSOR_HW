const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary){
    return this.tax * salary;
}
const task1_1 = getMyTaxes.call(ukraine, 5000)
const task1_2 = getMyTaxes.call(latvia, 5000)
const task1_3 = getMyTaxes.call(litva, 5000)
console.log(`1: Ukraine: ${task1_1}, Latvia: ${task1_2}, Litva: ${task1_3}.`)


function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}
const task2_1 = getMiddleTaxes.call(ukraine)
const task2_2 = getMiddleTaxes.call(latvia)
const task2_3 = getMiddleTaxes.call(litva)
console.log(`2: Ukraine: ${task2_1}, Latvia: ${task2_2}, Litva: ${task2_3}.`)


function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies;
}
const task3_1 = getTotalTaxes.call(ukraine)
const task3_2 = getTotalTaxes.call(latvia)
const task3_3 = getTotalTaxes.call(litva)
console.log(`3: Ukraine: ${task3_1}, Latvia: ${task3_2}, Litva: ${task3_3}.`)


function getMySalary(){
    let i = 0;
    const min = 1500;
    const max = 2000;
    setInterval( () => {
        i++
        const rdSalary = Math.round((max - min) * Math.random() + min);
        const taxes = this.tax * rdSalary;
        const profit = rdSalary - taxes;
        if(i<=5){
            console.log({"salary": rdSalary, "taxes": this.tax, "profit": profit});
        }
    }, 10000)
}
console.log(`4:`)
getMySalary.call(ukraine)
getMySalary.call(latvia)
getMySalary.call(litva)
