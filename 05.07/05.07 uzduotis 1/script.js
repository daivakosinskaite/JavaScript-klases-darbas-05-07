

function longestWord(){
    let ilgiausias= '';
    for (let zodis of sarasas) {
        if(zodis.length>ilgiausias.length){
            ilgiausias=zodis;
        }
    }
    return ilgiausias;
}

let sarasas = ["miskas", "sauletekis", "rytas", "rasa"];
let ilgiausias = longestWord(sarasas);
console.log(ilgiausias);

