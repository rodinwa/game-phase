let scores = [10, 20, 10];

let i = 0;

while (i < scores.length) {
    scores[i]++;
    i++;
}

console.log(scores);

for (let index = 0; index < scores.length; index++) {
    const element = scores[index]++;
    
}

console.log(scores);

scores.forEach(function(entry, index){
    console.log(entry, index);
    scores[index]++;
});

console.log(scores);


let catalog = [
    {
    title: 'JS for Beginnners',
    author: 'Zenva',
    copies: 1
    },
    {
        title: 'HTML for Beginnners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'CSS for Beginnners',
        author: 'XYZ',
        copies: 1
    }
];

catalog.forEach(function (entry, index) {
    if (entry.author == 'Zenva') {
        entry.copies++;
    }
});

console.log(catalog);