

function capitalizeFirstLetter(string) {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

let string = "Sia nakti stipriai palijo.";
console.log(capitalizeFirstLetter(string));