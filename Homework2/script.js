const N = prompt('Enter the N:', '10');
const M = prompt('Enter the M:', '100');
const isChecked = confirm('Пропускати парні?');

const N_int = Number(N);
const M_int = Number(M);

if (isNaN(N_int)){
    console.warn(`N дорівнює ${N_int}.`);
    throw new Error(`Введіть число`);
}
if (isNaN(M_int)){
    console.warn(`M дорівнює ${M_int}.`);
    throw new Error(`Введіть число`);
}

let sum = 0;
if (M_int > N_int){
    for (let i = N_int; i <= M_int; i++){
        if (isChecked === true && i % 2 === 0){
            continue;
        }
        sum += i;
    }
    console.log(`Сума від N (${N_int}) до M (${M_int}) = ${sum}`);
}
else{
    for (let i = M_int; i <= N_int; i++){
        if (isChecked === true && i % 2 === 0){
            continue;
        }
        sum += i;
    }
    console.log(`Сума від M (${M_int}) до N (${N_int}) = ${sum}`);
}