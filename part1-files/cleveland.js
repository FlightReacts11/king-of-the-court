gsap.registerPlugin(ScrollTrigger);



document.body.style.overflow = "auto";
document.body.style.touchAction = "auto";

let clevelandCurrent = 0;

/* On click to enter part 1 */



function enterPartOne() {
    let tl = gsap.timeline();

    tl.to("#cleveland-fader", {
        opacity: 1,
        duration: 1,

        
        onComplete() {
            document.body.classList.remove("lock-scroll");
            document.querySelector("#landing-page").style.display = "none",
            document.querySelector("#cleveland-fader").style.display = "none",
            document.querySelector("#cleveland-body").style.display = "flex",

            ScrollTrigger.refresh(true)
        }
    })

    tl.to("#cleveland-body", {
        

    })
    
    
}
    

const partOneButton = document.querySelector(".card-button.one");
partOneButton.addEventListener("click", enterPartOne)


/* On click to go home */

const homeIcon = document.querySelector(".home-button");

homeIcon.addEventListener("click", function() {
    let tl = gsap.timeline();

    tl.to("#cleveland-body", {
        opacity: 0,
        duration: 1,
        onComplete() {
            document.querySelector("#cleveland-body").style.display = "none",
            document.querySelector("#landing-page").style.display = "flex"
        }
    })
})



/* Scroll animations */

const triggerPatternOne = gsap.utils.toArray('#year-one .trigger-row-content');
const triggerPatternTwo = gsap.utils.toArray("#year-two .trigger-row-content");
const triggerPatternThree = gsap.utils.toArray("#year-three .trigger-row-content");
const triggerPatternFour = gsap.utils.toArray("#year-four .trigger-row-content");
const triggerPatternFive = gsap.utils.toArray("#year-five .trigger-row-content");
const triggerPatternSix = gsap.utils.toArray("#year-six .trigger-row-content");
const triggerPatternSeven = gsap.utils.toArray("#year-seven .trigger-row-content");


gsap.to(triggerPatternOne, {
    xPercent: - 100 * (triggerPatternOne.length - 1),
    scrollTrigger: {
        trigger: '#year-one',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternTwo, {
    xPercent: 100 * (triggerPatternTwo.length - 1),
    scrollTrigger: {
        trigger: '#year-two',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternThree, {
    xPercent: - 100 * (triggerPatternThree.length - 1),
    scrollTrigger: {
        trigger: '#year-three',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternFour, {
    xPercent: 100 * (triggerPatternFour.length - 1),
    scrollTrigger: {
        trigger: '#year-four',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternFive, {
    xPercent: - 100 * (triggerPatternFive.length - 1),
    scrollTrigger: {
        trigger: '#year-five',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternSix, {
    xPercent: 100 * (triggerPatternSix.length - 1),
    scrollTrigger: {
        trigger: '#year-six',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

gsap.to(triggerPatternSeven, {
    xPercent: - 100 * (triggerPatternSeven.length - 1),
    scrollTrigger: {
        trigger: '#year-seven',
        pin: true,
        scrub: 1,
        delay: 0,
        end: "+=3000",
    }
})

