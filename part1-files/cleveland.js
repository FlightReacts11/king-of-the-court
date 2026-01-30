
let clevelandCurrent = 0;

/* On click to enter part 1 */
function enterPartOne() {
    let tl = gsap.timeline();

    tl.to("#cleveland-fader", {
        opacity: 1,
        duration: 1,

        onComplete() {
            document.querySelector("#landing-page").style.display = "none",
            document.querySelector("#cleveland-fader").style.display = "none",
            document.querySelector("#cleveland-body").style.display = "flex"
        }
    })

    tl.to("#cleveland-body", {
        

    })
    
}

const partOneButton = document.querySelector(".card-button.one");
partOneButton.addEventListener("click", enterPartOne)

/* On click to go home */

const homeIcon = document.getElementByClassName(".home-button");
const nextButton = document.getElementByClassName(".next-button");



