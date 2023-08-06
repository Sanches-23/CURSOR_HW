generateBlocks = (width, height) =>{
    const myBody = document.querySelector("body");
    const mainBlockElement = document.createElement("div");
    myBody.appendChild(mainBlockElement);

    const style = document.createElement('style');
    style.innerHTML = `
      .childBlockElementStyle {
        width: 50px;
        height: 50px;
      }
      .mainContainer {
      background-color: white;
      outline: dashed 2px black;
      display: flex;
      justify-content: center;
      align-items: center;
      }
      .centerBlockElementGrid {
      display: grid;
      }
    `;
    document.head.appendChild(style);

    myBody.style.backgroundColor = "LightGray"
    mainBlockElement.classList.add("mainContainer");

    const centerBlockElement = document.createElement("div");
    centerBlockElement.classList.add("centerBlockElementGrid")
    centerBlockElement.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    centerBlockElement.style.gridTemplateRows = `repeat(${height}, 1fr)`
    mainBlockElement.appendChild(centerBlockElement);

    const childBlockElement = document.createElement("div");
    childBlockElement.classList.add("childBlockElementStyle");

    for(let i = 0; i < width * height; i++){
        childBlockElement.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        centerBlockElement.appendChild(childBlockElement.cloneNode(true));
    }
    console.log(myBody)
}
function generateBlocksInterval(width, height){
    generateBlocks(width, height);
    setInterval(() => {
        // перша версія при перевірці наявності вже створеної генерації: true - видалення та перегенерація
        // const mainBlockElement = document.querySelector(".mainContainer");
        // if (mainBlockElement) {
        //     mainBlockElement.remove();
        // }
        // generateBlocks(width, height);

        // друга версія - оптимізована
        const childBlockElements = document.querySelectorAll(".childBlockElementStyle");
        Array.from(childBlockElements).forEach(element => {
            element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        })
    }, 1000);
}
const width = prompt("Введіть ширину", "5")
const height = prompt("Введіть висоту", "5")
generateBlocksInterval(Number(width), Number(height))