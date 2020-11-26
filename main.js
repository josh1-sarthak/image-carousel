
const slides = document.querySelectorAll('.slides');
const navDots = document.querySelectorAll('.navDot');

const rightBtn = document.querySelector('.rightBtn');
const leftBtn = document.querySelector('.leftBtn');

let def = document.querySelector('.def'); // by default, right click works

rightBtn.addEventListener('click', (e) => {
    const current = Array.from(slides).find((slide) => slide.classList.contains('active')); // converting it into array to loop over it and find slide with classlist active
    const idx = Array.from(slides).indexOf(current); // this idx should connect both slide and navDots
    slides[idx].classList.remove('active');
    navDots[idx].classList.remove('filledDot');
    // two statements within 1 condition in ternary operator- one is for slide, other is for dot
    idx===((Array.from(slides)).length-1) ? (slides[0].classList.add('active'), navDots[0].classList.add('filledDot')) : (slides[idx+1].classList.add('active'), navDots[idx+1].classList.add('filledDot')); // if last index, idx+1-> starts from 1st slide
})

leftBtn.addEventListener('click', (e) => {
    const current = Array.from(slides).find((slide) => slide.classList.contains('active')); 
    const idx = Array.from(slides).indexOf(current);
    slides[idx].classList.remove('active');
    navDots[idx].classList.remove('filledDot');
    idx===0 ? (slides[(Array.from(slides)).length-1].classList.add('active'), navDots[(Array.from(slides)).length-1].classList.add('filledDot')) : (slides[idx-1].classList.add('active'), navDots[idx-1].classList.add('filledDot')); // if first index, idx-1-> starts from last slide (reverses)
})

// to map dot to the slide
navDots.forEach((dot)=>{
    dot.addEventListener('click', (e)=>{
        navDots.forEach((item) => { // on click of dot, loop through each dots to find which one was filled, grab its index, also map its index to slide- thus, removing both the dot and slide
            if (item.classList.contains('filledDot')){
                    const oldId = Array.from(navDots).indexOf(item);
                    navDots[oldId].classList.remove('filledDot');
                    slides[oldId].classList.remove('active');
                }
        })
        dot.classList.add('filledDot'); // fill the clicked dot
        const dotToSlide =Array.from(navDots).indexOf(dot); // loop through all dots to find which is clicked, map its index to slide to fill the slide
        slides[dotToSlide].classList.add('active');
    });
})

// automatically move the slideshow every 5 seconds
setInterval(function() {
    def.click();
}, 5000);