let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function start() {
 
     // show alternatives
     let alts = document.querySelectorAll('.alternative');
  
     alts.forEach((e,i) =>{
        
 
         e.addEventListener('click', ()=>{
             
                 console.log('Correct');
            
         });
     });

     showQuestion(question);
}
function showQuestion(q) {
    // 1 select the dom element
    let titleDiv = document.getElementById('title');

    // 2 modify it
    titleDiv.textContent = q.title;

    // select by query
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);
    alts.forEach((e,i) =>{
        e.textContent = q.alternatives[i];

      
    });

}
start();

