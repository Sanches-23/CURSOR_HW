function Convertor(value){
    const dollar = "$";
    const uah = "UAH";
    const dollar_uahCourse = 25;
    value = value.toString().toUpperCase();

    if (value.includes(dollar)) {
        value = value.replace(dollar, "") * dollar_uahCourse;
        return value + "UAH";
    } else if (value.includes(uah)) {
        value = value.replace(uah, "") / dollar_uahCourse;
        return value + "$";
    } else {
        return Error(`Введіть число із символом $, або UAH`);
    }
}

function getRandomPassword(value = 8){
    const min = 0;
    const max = 9;
    let rdPassword = "";
    let rd = 0;
    for (let i = 0; i < value; i++){
        rd = Math.round((max - min) * Math.random() + min);
        rdPassword += rd;
    }
    return rdPassword;
}

function deleteLetters(letter, word){
    return word.split(letter).join("");
}

function isPalyndrom(word){
    word = word.replace(/ /g, "").toLowerCase();
    const wordReverse = word.replace(/ /g, "").split('').reverse().join("")
    return word === wordReverse
}

function countLetter(letter, word){
    let count = 0;
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            count++
        }
    }
    return count;
}

function getMaxDigit(numbers){
    numbers = numbers.toString().split('');
    return Number(Math.max(...numbers))
}

console.log(`Функція №7: ${Convertor("250UaH")}.
Функція №9: ${getRandomPassword(4)}.
Функція №10: ${deleteLetters("a", "blablabla")}.
Функція №11: ${isPalyndrom("Я несу гусеня")}.
Функція №:6 ${countLetter("а", "Асталавіста")}.
Функція №:1 ${getMaxDigit(14239)}.`)
