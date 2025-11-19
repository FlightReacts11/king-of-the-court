gsap.registerPlugin(ScrollTrigger)



//Opening Movie Animation Part 1//

let count = 10;
let timer = document.querySelector('.countdown p');

const evenColor = "#8d8d8d";
const oddColor = "#d4d4d4";
const colorChange = document.querySelector('.sweeping-gradient')

function countdown() {
    let newCount = count - 1;
    if (newCount >= 0) {
        timer.innerHTML = count--;

    } else {
        clearInterval(timeDecrease);
    }

    if (newCount % 2 === 0) {
        colorChange.style.setProperty("--loader-color", evenColor);

    } else {
        colorChange.style.setProperty("--loader-color", oddColor);
    }

    return newCount;
}


gsap.to('.sweeping-gradient', {
    "--angle": "360deg",
    duration: 1,
    repeat: 10,
    ease: CustomEase.create("custom", "M0,0 C0.129,0.382 0.166,0.667 0.329,0.815 0.526,0.995 0.811,1.023 1,1.022 "),
onRepeat: countdown,

})


//End of opening movie animation//









const homescreenColorChange = []

function movieHover(movie, indexColor) {
    movie.addEventListener('mouseenter', () => {
        
    })
}