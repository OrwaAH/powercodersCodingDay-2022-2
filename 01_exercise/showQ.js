function showQuestions(){
    for (let i = 0; i< questions.length; i++){
        randomQuestion = Math.floor(Math.random() * questions.length);
        document.write(question[i]);
    }
        
    }
