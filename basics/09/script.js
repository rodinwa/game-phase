let player = {
    health: 100,
    fun: 0,


    play: function() {
        this.fun += 10;

    },
    eat: function(food) {
        console.log('eat ' + food);
        if (food == 'apple') {
            
            this.health += 10;
            console.log(this.health);
        } else if (food = 'candy') {
            this.health -= 5;
            this.fun += 5;
        }
    }

};
console.log(player);
player.eat('apple');
player.eat('candy');
player.play();
player.eat('apple');
player.eat('apple');
player.play();

console.log(player);

