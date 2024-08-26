let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let app = {

    start: function () {
             // show alternatives
        let alts = document.querySelectorAll('.alternative');
  
        // alts.forEach(function(e,i) {
            
            
        //     e.addEventListener('click', function () {
                
        //             // check the answer
        //             this.checkAnswer(i);
                
        //     }.bind(this));
        // }.bind(this));

        alts.forEach((e,i) => {
            
            
            e.addEventListener('click', () => {
                
                    // check the answer
                    this.checkAnswer(i);
                
            });
        });

        // show first question
        this.showQuestion(question);
    },

    showQuestion: function (q) {
        // Keep track of current question
        this.currQuestion = q;

        // Show the question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach((e,i) =>{
            e.textContent = q.alternatives[i];

        
        });

    },

    checkAnswer: function (userSelected) {
        if (this.currQuestion.correctAnswer == userSelected) {
            // correct
            console.log('correct');
        }
        else {
            // incorrect
            console.log('incorrect');
        }
    }
};



app.start();

