const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls'); //Selects the group of all buttons
const sectionBtn = document.querySelectorAll('.control'); //Selects each button in the header
const allSections = document.querySelector('.main-content');

function changingPage(){
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.className = currentBtn.className.replace('active-btn', '');
            this.className += ' active-btn'
            console.log(currentBtn)
        })
    }
}
changingPage();