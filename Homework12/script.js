const BASE_URL = "https://swapi.dev/api";

const btnFilmChar = document.getElementById("get-filmsChar");
const btnFilmChatText = btnFilmChar.textContent;

const inputFilmId = document.getElementById("filmId");
const inputFilmIdPlaceholder = inputFilmId.placeholder;

const btnAllPlanets = document.getElementById("get-planets");
const btnAllPlanetsText = btnAllPlanets.textContent;

btnAllPlanetsNext = document.getElementById("get-planets-next");
btnAllPlanetsNextText = btnAllPlanetsNext.textContent;
btnAllPlanetsPrevious = document.getElementById("get-planets-previous");
btnAllPlanetsPreviousText = btnAllPlanetsPrevious.textContent;

const btnTranslate = document.getElementById("translate");

const contentContainer = document.getElementById("content");
const contentContainerPlanets = document.getElementById("content-planets");

let previousPageURL = "";
let nextPageURL = "";
let wookieLanguage = false;
let abortController = null;
let AllPlanetsPer10Text = "Всі планети по 10";

const wookieeTranslations = new Map([
    [btnFilmChatText, 'Shruti ney chataa'],
    [inputFilmIdPlaceholder, 'Kay toopa a faama 1 to 6'],
    [btnAllPlanetsText, 'Nyay num nub'],
    [btnAllPlanetsPreviousText, 'Pakkaa'],
    [btnAllPlanetsNextText, 'Vong'],
    // [AllPlanetsPer10Text, 'RArh nyay num prarh 10'],
]);

const translateToWookiee = (text) => wookieeTranslations.has(text) ? wookieeTranslations.get(text) : text;
const translateButtonsToWookiee = () => {
    btnFilmChar.textContent = wookieLanguage ? translateToWookiee(btnFilmChatText) : btnFilmChatText;
    inputFilmId.placeholder = wookieLanguage ? translateToWookiee(inputFilmIdPlaceholder) : inputFilmIdPlaceholder;
    btnAllPlanets.textContent = wookieLanguage ? translateToWookiee(btnAllPlanetsText) : btnAllPlanetsText;
    btnAllPlanetsPrevious.textContent = wookieLanguage ? translateToWookiee(btnAllPlanetsPreviousText) : btnAllPlanetsPreviousText;
    btnAllPlanetsNext.textContent = wookieLanguage ? translateToWookiee(btnAllPlanetsNextText) : btnAllPlanetsNextText;
    // AllPlanetsPer10Text = wookieLanguage ? translateToWookiee(AllPlanetsPer10Text) : AllPlanetsPer10Text;
};

btnTranslate.addEventListener("change", () => {
    wookieLanguage = btnTranslate.checked;
    translateButtonsToWookiee();
});

const getCharacters = () => {
    contentContainer.innerHTML = "";
    abortController && abortController.abort();
    abortController = new AbortController();
    const id = Number(inputFilmId.value);

    if (isNaN(id) || id < 1 || id > 6) {
        console.warn("Невірний формат ID фільму!");
        alert("Невірний формат ID фільму!");
        return;
    }
    fetch(`${BASE_URL}/films/${id}/`, {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        signal: abortController.signal,
    }).then((response) => {
            if (!response.ok) {
                console.warn("Failed to fetch film info");
            }
            return response.json();
        }).then(async (data) => {
            await visualizingData(data.characters);
        })
};

const getCharacterImage = (characterUrl) => {
    const elements = characterUrl.split("/");
    const id = elements[elements.length - 2];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
};

const visualizingData = async (characters) => {
    for (const character of characters) {
        const characterResponse = await fetch(`${character}/${wookieLanguage ? "?format=wookiee" : ""}`, {
            signal: abortController.signal,
        });
        const characterData = await characterResponse.json();
        const characterImage = getCharacterImage(character);
        console.log(characterData);

        const contentElement = document.createElement("div");
        contentElement.classList.add("contentElement");

        const properties = Object.keys(characterData);
        // const infoList = properties.map((property) => {
        //     return `<p>${property}: ${characterData[property]}</p>`;
        // }).join("");
        contentElement.innerHTML = `
        <img src="${characterImage}" alt="${characterData.name}"/>
        <h2>${properties[0].replace("_", " ").replace(properties[0].charAt(0),properties[0].charAt(0).toUpperCase())}: ${characterData[properties[0]]}</h2>
        <h2>${properties[6].replace("_", " ").replace(properties[6].charAt(0),properties[6].charAt(0).toUpperCase())}: ${characterData[properties[6]]}</h2>
        <h2>${properties[7].replace("_", " ").replace(properties[7].charAt(0),properties[7].charAt(0).toUpperCase())}: ${characterData[properties[7]]}</h2>
        `;
        contentContainer.appendChild(contentElement);
    }
}

const getPlanets = async (url) => {
    contentContainerPlanets.innerHTML = `<h1 style='filter: drop-shadow(0px 0px 12px #ffe500); transform: translate(0%, -150%);'>${AllPlanetsPer10Text}</h1>`;
    abortController && abortController.abort();
    abortController = new AbortController();

    const planetsResponse = await fetch(url ? url : `${BASE_URL}/planets/`, {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        signal: abortController.signal,
    });
    const planetsData = await planetsResponse.json();
    console.log(planetsData);

    previousPageURL = planetsData.previous || "";
    nextPageURL = planetsData.next || "";

    for (const planetData of planetsData.results) {
        const contentElementPlanet = document.createElement('div');
        contentElementPlanet.classList.add('contentElementPlanet');
        const properties = Object.keys(planetData);
        /*${properties[0].replace("_", " ").replace(properties[0].charAt(0),properties[0].charAt(0).toUpperCase())}:*/
        contentElementPlanet.innerHTML = `
        <h2>${planetData[properties[0]]}</h2>
        `;
        contentContainerPlanets.appendChild(contentElementPlanet);
    }
    btnAllPlanetsNext.style.display = nextPageURL ? "block" : "none";
    btnAllPlanetsPrevious.style.display = previousPageURL ? "block" : "none";
};

btnFilmChar.addEventListener("click", getCharacters);
btnAllPlanets.addEventListener("click", async () => {
    await getPlanets("");
});

btnAllPlanetsPrevious.addEventListener("click", async () => {
    if (previousPageURL) {
        await getPlanets(previousPageURL);
    }
});

btnAllPlanetsNext.addEventListener("click", async () => {
    if (nextPageURL) {
        await getPlanets(nextPageURL);
    }
});