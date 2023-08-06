function getRandomArray(length, min, max){
    console.log("1: ");
    const rdArray = [];
    for(let i = 0; i < length; i++){
        const rd = Math.round((max - min) * Math.random() + min)
        rdArray.push(rd)
    }
    console.log(rdArray);
    return rdArray;
}

function getModa(...numbers){
    console.log("2: ");
    const result = numbers.reduce((prevValue, item) => {
        if (Number.isInteger(item)){
            if (prevValue[item]){
                prevValue[item]++;
            } else {
                prevValue[item] = 1;
            }
        }
        return prevValue;
    }, {});
    let moda = 0;
    let maxCount = 0;
    for (const key in result) {
        if (result[key] > maxCount) {
            maxCount = result[key];
            moda = key;
        }
    }
    console.log(Number(moda));
    return Number(moda);
}

function getAverage(...numbers){
    console.log("3: ");
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if (Number.isInteger(numbers[i])){
            sum += numbers[i];
        }
    }
    console.log(sum/numbers.length);
    return sum/numbers.length;
}

function getDividedByFive(...numbers){
    console.log("7: ");
    const dividedByFive = [];
    numbers.forEach((element) => {
        if (element % 5 === 0) {
            dividedByFive.push(element);
        }
    });
    console.log(dividedByFive);
    return dividedByFive;
}

function divideByThree(word){
    console.log("9: ");
    word = word.trim().toLowerCase();
    const divided = [];
    for(let i = 0; i < word.length; i+= 3){
        divided.push(word.substring(i, i+3));
    }
    console.log(divided);
    return divided;
}

function generateCombinations(word){
    console.log("10: ");
    const wordArr = word.split("");
    // debugger;
    return wordArr.reduce((prevValue, letter, index) => {
        if (index === 0) {
            return [letter];
        }
        const combinations = [];
        prevValue.forEach(word => {
            for (let i = 0; i <= word.length; i++){
                const newWord = word.slice(0, i) + letter + word.slice(i);
                combinations.push(newWord);
            }
        });
        console.log(combinations);
        return combinations;
    }, []);
}

console.log(`
1: ${getRandomArray(15, 1, 100)}.
2: ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}.
3: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}.
7: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}.
9: ${divideByThree(" Commander")}, ${divideByThree(" Live    ")}.
10: ${generateCombinations("man")}.
`)