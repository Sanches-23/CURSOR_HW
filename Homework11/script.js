function getRandomChinese(length) {
    return new Promise(async (resolve) => {
        let i = 0;
        let result = "";
        while (i < length) {
            const myDate = new Date();
            const sign = myDate.toISOString().slice(-7).replace(/[.Z]/g, "");
            result += String.fromCharCode(Number(sign));
            i++;
            await delay(50);
        }
        resolve(result)
    })
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
getRandomChinese(4)
    .then(response => console.log(response));