let population = 100;
let years = 1;


while (years <=10) {
    population *= 1.05;
    
    console.log(population);
    years++;
}
console.log(population);
population = 100;
for (let i = 0; i < 10; i++) {
    population *= 1.05;   
}

console.log(population);