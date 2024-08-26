
let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
    
];

let app = {

    start: function () {

        this.currPosition = 0;
        this.score = 0;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
  
        alts.forEach((element, index) => {
            
            
            element.addEventListener('click', () => {
                // check the answer
                this.checkAnswer(index);
                
            });
        });

        // update the stats
        this.updateStats();

        // show first question
        this.showQuestion(questions[this.currPosition]);
    },

    showQuestion: function (q) {


        // Show the question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function (element, i) {
            element.textContent = q.alternatives[i];
        });

    },

    checkAnswer: function (userSelected) {

        let currQuestion = questions[this.currPosition];

        if (currQuestion.correctAnswer == userSelected) {
            // correct
            console.log('correct');
            this.score++;
        }
        else {
            // incorrect
            console.log('incorrect');
        }
        // update the stats
        this.updateStats();

        // increase position
        this.increasePosition();
        // show next question
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        this.currPosition++;
        if (this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');

        scoreDiv.textContent = `Your score: ${this.score}`;
    }
};



app.start();

