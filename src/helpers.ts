export const getAvailableSymbols = (): Array<string> => {
    const symbolsAvailable = [];
    const unavailableSymbols = [67, 80, 83, 88];
    const numbers = Array.from({ length: 10 }, (_, i) =>
        String.fromCharCode(i + 48)
    );

    const upperCaseLetters = Array.from({ length: 26 }, (_, i) => {
        if (!unavailableSymbols.includes(i + 65))
            return String.fromCharCode(i + 65);
    });

    const lowerCaseLetters = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(i + 97)
    );

    symbolsAvailable.push(
        ...numbers,
        ...upperCaseLetters.filter((item) => item),
        ...lowerCaseLetters
    );

    symbolsAvailable.push(String.fromCharCode(36));
    symbolsAvailable.push(String.fromCharCode(43));
    symbolsAvailable.push(String.fromCharCode(45));
    symbolsAvailable.push(String.fromCharCode(95));
    symbolsAvailable.push(String.fromCharCode(126));
    return symbolsAvailable;
};

export const generateRandomString = (
    availableSymbols: Array<string>,
    length: string
): string => {
    const generatedString: Array<string> = [];
    for (let index = 0; index < +length; index++) {
        generatedString.push(availableSymbols[getRandomInt(63)]);
    }
    return generatedString.join("");
};

const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * Math.floor(max));
};
