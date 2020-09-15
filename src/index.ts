import "./styles/style.scss";
import { generateRandomString, getAvailableSymbols } from "./helpers";

const N = prompt("Введите число N", "101");

// GET AVAILABLE SYMBOLS
const availableSymbols = getAvailableSymbols();

// GENERATE RANDOM STRING
const randomString = generateRandomString(availableSymbols, N);

alert(randomString);

// REPLACE LETTERS BY FIRST SYMBOL
const firstSymbol = prompt(
    "Введите символ, на который изменятся все буквы",
    "z"
);

const replacedString = randomString.replace(/[a-zA-Z]/gi, firstSymbol);

alert(replacedString);

// REPLACE STRING BY SECOND LETTER
const secondSymbol = prompt(
    "Введите второй символ, на который изменятся все цифры",
    "B"
);

const replacedString2 = replacedString.replace(/[0-9]/gi, secondSymbol);

alert(replacedString2);

// COUNT REPEATS

const regExp = new RegExp(firstSymbol, "gi");
const regExp2 = new RegExp(secondSymbol, "gi");

const firstSymbolsCount = replacedString2.match(regExp).length;

const secondSymbolsCount = replacedString2.match(regExp2).length;

alert(`Количество повторов первого символа ${firstSymbolsCount}`);
alert(`Количество повторов второго символа ${secondSymbolsCount}`);
alert(
    `Количество символов которые остались не изменены ${
        101 - firstSymbolsCount - secondSymbolsCount
    }`
);
