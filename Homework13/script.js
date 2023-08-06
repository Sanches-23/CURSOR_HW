function* createIdGenerator() {
    let i = 0;
    while (true){
        yield i++;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const someText = document.querySelector("p");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");

function* newFontGenerator(fontSizeValue) {
    while (true) {
        const direction = yield fontSizeValue;
        if (direction === "up"){
            console.log(direction)
            fontSizeValue += 2;
        } else {
            console.log(direction)
            fontSizeValue -= 2;
        }
        console.log(`Шрифт: ${fontSizeValue}px`);
        someText.style.fontSize = `${fontSizeValue}px`;
    }
}

const fontGenerator = newFontGenerator(14);
fontGenerator.next();
btnUp.addEventListener("click", () => fontGenerator.next("up").value);
btnDown.addEventListener("click", () => fontGenerator.next("down").value);

fontGenerator.next("up").value;
fontGenerator.next("up").value;
fontGenerator.next("up").value;
fontGenerator.next().value;
fontGenerator.next("down").value;
fontGenerator.next("down").value;
fontGenerator.next("down").value;
fontGenerator.next().value;
