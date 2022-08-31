const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls'); //Selects the group of all buttons
const sectionBtn = document.querySelectorAll('.control'); //Selects each button in the header
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.logo')

function ChangingPage(){
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', (e) => {
            RemovingActiveTag();
            e.target.className += ' active-btn'
            
            const id = e.target.dataset.id;
            sections.forEach((section) => {
                section.classList.remove('active')
                if(section.id === id){
                    section.classList.add('active');
                }
            })
        })
    }

    

}

function ChangingTheme(){
    themeBtn.addEventListener('click', () =>{
        console.log('heh')
        let element = document.body;
        console.log(element);
        element.classList.toggle('light-mode');
    })
}
function RemovingActiveTag(){
    let currentBtn = document.querySelector('.active-btn');
    currentBtn.className = currentBtn.className.replace('active-btn', '');
}

ChangingPage();
ChangingTheme();