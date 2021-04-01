const line = document.querySelector('.progress__content--line');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const circles = document.querySelectorAll('.progress__content--circle');
const actives = document.querySelectorAll('.active');

let currentActive = 0;
let activeNum;
// let lineWidth = 0;
let lineWidth;



btnNext.addEventListener('click', () => {

    currentActive++;

    // reset idx to 3 if current active is greater then circles.length
    if (currentActive > circles.length - 1) {
        currentActive = circles.length - 1;

    }
    // if current active idx is 3, disable next button
    if (currentActive === 3) {
        btnNext.disabled = true;
    }
    circles[currentActive].classList.add('active');
    // when using fixed % of width
    // lineWidth += 33;
    // line.style.width = `${lineWidth}%`;
    btnPrev.disabled = false;

    const actives = document.querySelectorAll('.active');
    // dynamic % of line width
    let activeNum = actives.length;
    let lineWidth = (activeNum - 1) / (circles.length - 1) * 100;
    line.style.width = `${lineWidth}%`;

})

btnPrev.addEventListener('click', () => {

    btnNext.disabled = false;
    // when using fixed % of width
    // lineWidth -= 33;
    // line.style.width = `${lineWidth}%`;
    circles[currentActive].classList.remove('active');
    currentActive--;

    // if current active idx lower then 1, disable prev button and reset idx to 0
    if (currentActive < 1) {
        currentActive = 0;
        btnPrev.disabled = true;
    }

    const actives = document.querySelectorAll('.active');
    // dynamic % of line width
    let activeNum = actives.length;
    let lineWidth = (activeNum - 1) / (circles.length - 1) * 100;
    line.style.width = `${lineWidth}%`;
})

