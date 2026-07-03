const data = [
"Université Marien Ngouabi",
"Université Denis Sassou N'Guesso",
"Médecine",
"Droit",
"Informatique",
"Agronomie",
"Économie"
];

const search = document.getElementById("search");

if(search){
search.addEventListener("input", (e)=>{
let value = e.target.value.toLowerCase();

let results = data.filter(item =>
item.toLowerCase().includes(value)
);

console.log(results);
});
}

function payBac(){
alert("💳 Paiement Mobile Money 250 FCFA (simulation)");
}
