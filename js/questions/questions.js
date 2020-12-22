import {easy, medium, hard} from './questionDB.js';
//  creating DOM elements, setting attributes and adding events
export const question = () => {
    const questionsBtns = document.querySelector('.question-btns');
    const questionForm = document.querySelector('.add-question');
    const questionFormHeader = document.querySelector('.add-question-header');
    const easyBtn = document.querySelector('.btn-easy');
    const mediumBtn = document.querySelector('.btn-medium');
    const hardBtn = document.querySelector('.btn-hard');
    const addQuestionBtn = document.querySelector('.btn-add-question');
    let level = '';

    easyBtn.addEventListener('click', ()=> showForm("easy"));
    mediumBtn.addEventListener('click', ()=> showForm("medium"));
    hardBtn.addEventListener('click', ()=> showForm("hard"));
    addQuestionBtn.addEventListener('click', ()=> addQuestion(level))
// showing form to add questions
    const showForm = (questionType) => {
        questionsBtns.style.display = 'none';
        questionForm.style.display = 'block';
        questionFormHeader.textContent = `${questionType} questions`;
        level = questionType;
    }
    // adding questions
    const addQuestion = (level) => {
        const inputQuestion = document.querySelector('#add-question');
        const inputA = document.querySelector('#input-a'); 
        const inputB = document.querySelector('#input-b'); 
        const inputC = document.querySelector('#input-c'); 
        const inputD = document.querySelector('#input-d');
        const rightAnswer = document.querySelector('#right-answer');

        let item = {
            question: inputQuestion.value,
            a: inputA.value,
            b: inputB.value,
            c: inputC.value,
            d: inputD.value,
            rightAnswer: rightAnswer.value
        }
        // specify questions level
        switch (level) {
            case "easy":
                easy.push(item);
                easy.map((item, id)=> {
                Object.assign(item, {id: id});
                })
                localStorage.setItem('easyStorage', JSON.stringify(easy));
                break;
            case "medium":
                medium.push(item);
                medium.map((item, id)=> {
                Object.assign(item, {id: id});
                })
                localStorage.setItem('mediumStorage', JSON.stringify(medium));
                break;
            case "hard":
                hard.push(item);
                hard.map((item, id)=> {
                Object.assign(item, {id: id});
                })
                localStorage.setItem('hardStorage', JSON.stringify(hard));
                break;        
            default:
                break;
        }
        location.reload();
    }
}
question()