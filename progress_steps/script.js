const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


//this is to create click actions and what will happen to next button
let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


//this is to create click actions and what will happen to prev button
prev.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < 1 ) {
        currentActive = 1
    }

    update()
})

// this is the main function which does the work after clicking, manages active status of the circles
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    } )

    // this is the part which manages the progress line from white to blue
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1)/ (circles.length -1)) * 100 + '%'


    // this is the part which manages the activeness of the next and prev buttons, from gray to blue
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}