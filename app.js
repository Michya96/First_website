const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls'); //Selects the group of all buttons
const sectionBtn = document.querySelectorAll('.control'); //Selects each button in the header
const allSections = document.querySelector('.main-content');

function ChangingPage(){
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            RemovingActiveTag();
            this.className += ' active-btn'
        })
    }

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        console.log(id);
        sections.forEach((section) => {
            section.classList.remove('active')
            if(section.id === id){
                section.classList.add('active')
            }
        })
    })
}

function RemovingActiveTag(){
    let currentBtn = document.querySelector('.active-btn');
    currentBtn.className = currentBtn.className.replace('active-btn', '');
}

ChangingPage();