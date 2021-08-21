const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    // write your solution here
    let twoCode = expr.split("");
    let twoCodeItems = [];
    let conteiner = "";
    for (let i = 0; i < twoCode.length; i += 10) {
        conteiner = "";
        for (let index = i; index < i + 10; index++) {
            conteiner += twoCode[index];
        }
        twoCodeItems.push(conteiner);
    }

    let conteinerMorze = [];
    let result = "";

    for (let i = 0; i < twoCodeItems.length; i++) {
        if (twoCodeItems[i] === "**********") {
            result += " ";
        } else {
            conteinerMorze = [
                twoCodeItems[i].slice(0, 2),
                twoCodeItems[i].slice(2, 4),
                twoCodeItems[i].slice(4, 6),
                twoCodeItems[i].slice(6, 8),
                twoCodeItems[i].slice(8, 10),
            ];
            conteiner = "";
            for (let i = 0; i < conteinerMorze.length; i++) {
                if (conteinerMorze[i] === "10") conteiner += ".";
                if (conteinerMorze[i] === "11") conteiner += "-";
            }
            result += MORSE_TABLE[conteiner];
        }
    }
    return result;
}

module.exports = {
    decode,
};
