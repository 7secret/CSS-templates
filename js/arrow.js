let mainForms = document.querySelectorAll('.container')
let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');


for (let mainForm of mainForms) {
    if (mainForm.closest('.active')) {
        let leftX = mainForm.offsetLeft - leftArrow.offsetWidth / 2;
        let rightX = mainForm.offsetLeft + mainForm.offsetWidth - leftArrow.offsetWidth / 2;
        leftArrow.style.left = leftX + 'px';
        rightArrow.style.left = rightX + 'px';
        break;
    }
}
    
let index = 0;
leftArrow.addEventListener('click', function(e) {
    
    if (index > 0 && index < mainForms.length) {
        mainForms[index].classList.remove('active');
        mainForms[--index].classList.add('active');
        mainForms[index].style.animation = "slideLeft .5s ease-in-out 0s 1 alternate backwards";
    }
    else if (index == 0) {
        index = mainForms.length - 1;
        mainForms[0].classList.remove('active');
        mainForms[index].classList.add('active');
        mainForms[index].style.animation = "slideLeft .5s ease-in-out 0s 1 alternate backwards";
    }
})
rightArrow.addEventListener('click', function(e) {
    if (index < mainForms.length - 1) {
        mainForms[index].classList.remove('active');
        mainForms[++index].classList.add('active');
        mainForms[index].style.animation = "slideRight .5s ease-in-out 0s 1 alternate backwards";
    }
    else if (index == mainForms.length - 1) {
        index = 0;
        mainForms[mainForms.length - 1].classList.remove('active');
        mainForms[index].classList.add('active');
        mainForms[index].style.animation = "slideRight .5s ease-in-out 0s 1 alternate backwards";
    }
})
