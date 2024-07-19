// Consume fuel and move
let fuel = 1000;
let distance = 0;

// execute multiple times

while (fuel > 0) {
    distance++;
    // Don't user fuel if we are in the cosmic storm
    if (distance >= 100 && distance < 200) {
        continue;
    }
    
    fuel--;
    // stop once we reach the planet
    if (distance === 500) {
        break;
    }
}

console.log(distance, fuel);



