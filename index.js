/* This JS file contains all the opening animations and landing page.
The documentary parts have their own file. */

// Opening Movie Animation Part 1 //


let count = 10;
let timer = document.querySelector('.countdown');

const evenColor = "#8d8d8d";
const oddColor = "#d4d4d4";
const colorChange = document.querySelector('.sweeping-gradient')



function countdown() {
    let newCount = count - 1;
    if (newCount >= 0) {
        count--;
        timer.innerHTML = count;
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

onComplete() {
    countdown();

    gsap.to('.translate-left', {
        x: "-100%",
        duration: 1.5,
        ease: "power2.inOut"
    })

    gsap.to('.translate-right', {
        x: "100%",
        duration: 1.5,
        ease: "power2.inOut",
    })

    gsap.to('.sweeping-gradient, .countdown, .inner-circle, .outer-circle, .crosshair1, .crosshair2', {
        autoAlpha: 0,
        duration: 1,
    });

    gsap.set('.loader', { 
        display: "none",
        delay: 1.6,
    })

    gsap.set('.hide-loader2', {
        display: "block",
        delay: 0.1,
    })

    gsap.delayedCall(1.4, imageSetOne);
}
})







// End Of Opening Part 1 //



//Opening Part 2//

let arrOfColors = [
    "linear-gradient(180deg,rgba(255, 186, 36, 1) 6%, rgba(166, 20, 20, 1) 67%, rgba(219, 4, 4, 1) 100%)",
    "linear-gradient(180deg, rgba(207, 39, 39, 1) 0%, rgba(77, 24, 24, 1) 50%, rgba(0, 0, 0, 1) 100%)",
    "linear-gradient(180deg,rgba(255, 186, 36, 1) 6%, rgba(166, 20, 20, 1) 67%, rgba(219, 4, 4, 1) 100%)",
    "linear-gradient(180deg,rgba(142, 27, 171, 1) 0%, rgba(137, 25, 189, 1) 23%, rgba(217, 182, 28, 1) 100%)",
    "linear-gradient(0deg, black, black)",
]


gsap.set(".holder-mask", {
    rotation: 0.1,
})

// imageSetOne / Cleveland //

function imageSetOne() {
    let tl = gsap.timeline();
      
    tl.set(".bg-swapper", {
        backgroundImage: arrOfColors[0],
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        scale: 1,
      
    })

    .fromTo(".bg-swapper", {
        backgroundSize: "0% 100%"
    }, {
        backgroundSize: "100% 100%",     
        duration: 0.8,
        ease: "power2.inOut"
    })

    tl.from(".h2-hider1", {
        opacity: 0,
        ease: "power2.out",
        duration: 0.4
    })

    tl.from(".holder1 .image-effect", {
        scale: 2,
        duration: 0.4,
    })
  
    .to(".holder1 .holder-mask", {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75
    }, 0)

        .to(".holder1 .holder-mask", {
            scale: 0.95,
            duration: 1,
        })

        .from(".holder1 .bg-effect", {
            opacity: 0,
            duration: 0,
            ease: "power2.out",
        }, )

        .to(".holder1, .h2-hider1", {
            opacity: 0,
            duration: 0.5,
            onComplete() {
                gsap.set(".holder1", { display: "none" });
                gsap.set(".h2-hider1", { display: "none"});
                imageSetTwo();
            }
        }, "+=0.4" )
}

//Remove function call later after start is uncommented//




// imageSetTwo / Miami //

function imageSetTwo() {
    let tl = gsap.timeline();

    gsap.set(".holder2", {
        display: "grid",
        opacity: 1,
        visibility: "visible",
        zIndex: 2,
    })

    gsap.set(".h2-hider2", { 
        opacity: 0,
        display: "block"
     });

    tl.set(".bg-swapper", {
        backgroundImage: arrOfColors[1] + ", " + arrOfColors[0],
        backgroundSize: "0% 100%, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
    })

    .to(".bg-swapper", {
        backgroundSize: "100% 100%, 100% 100%",
        duration: 0.8,
        ease: "power2.inOut"
    })

    .to(".h2-hider2", {
        opacity: 1,
        ease: "power2.out",
        duration: 0.4,
    }, "-=0.6")

    .set(".bg-swapper", {
        backgroundImage: arrOfColors[1],
        backgroundSize: "100% 100%",
    })

    .from(".holder2 .image-effect", {
        scale: 2,
        duration: 0.7,
    })
  
    .to(".holder2 .holder-mask", {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75
    }, 0)

        .to(".holder2 .holder-mask", {
            scale: 0.95,
            duration: 1,
        })

        .from(".holder2 .bg-effect", {
            opacity: 0,
            duration: 0,
            ease: "power2.out",
        }, "<")

        .to(".holder2, .h2-hider2", {
            opacity: 0,
            duration: 0.5,
            onComplete() {
                gsap.set(".holder2", { display: "none" });
                gsap.set(".h2-hider2", { display: "none"});
                imageSetThree();
            }
        }, "+=0.4" )

}

// imageSetThree / Cleveland 2nd Stint //

function imageSetThree() {
    let tl = gsap.timeline();

    gsap.set(".holder3", {
        display: "grid",
        opacity: 1,
        visibility: "visible",
        zIndex: 2,
    })

    gsap.set(".h2-hider3", { 
        opacity: 0,
        display: "block"
     });

    tl.set(".bg-swapper", {
        backgroundImage: arrOfColors[2] + ", " + arrOfColors[1],
        backgroundSize: "0% 100%, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
    })

    .to(".bg-swapper", {
        backgroundSize: "100% 100%, 100% 100%",
        duration: 0.8,
        ease: "power2.inOut"
    })

    .to(".h2-hider3", {
        opacity: 1,
        ease: "power2.out",
        duration: 0.4,
    }, "-=0.6")

    .set(".bg-swapper", {
        backgroundImage: arrOfColors[2],
        backgroundSize: "100% 100%",
    })

    .from(".holder3 .image-effect", {
        scale: 2,
        duration: 0.7,
    })
  
    .to(".holder3 .holder-mask", {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75
    }, 0)

        .to(".holder3 .holder-mask", {
            scale: 0.95,
            duration: 1,
        })

        .from(".holder3 .bg-effect", {
            opacity: 0,
            duration: 0,
            ease: "power2.out",
        }, "<")

        .to(".holder3, .h2-hider3", {
            opacity: 0,
            duration: 0.5,
            onComplete() {
                gsap.set(".holder3", { display: "none" });
                gsap.set(".h2-hider3", { display: "none"});
                imageSetFour();
            }
        }, "+=0.4" )
}

// ImageSetFour / Los Angeles //

function imageSetFour() {
    let tl = gsap.timeline();

     gsap.set(".holder4", {
        display: "grid",
        opacity: 1,
        visibility: "visible",
        zIndex: 2,
    })

    gsap.set(".h2-hider4", { 
        opacity: 0,
        display: "block"
     });

    tl.set(".bg-swapper", {
        backgroundImage: arrOfColors[3] + ", " + arrOfColors[2],
        backgroundSize: "0% 100%, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
    })

    .to(".bg-swapper", {
        backgroundSize: "100% 100%, 100% 100%",
        duration: 0.8,
        ease: "power2.inOut"
    })

    .to(".h2-hider4", {
        opacity: 1,
        ease: "power2.out",
        duration: 0.4,
    }, "-=0.6")

    .set(".bg-swapper", {
        backgroundImage: arrOfColors[3],
        backgroundSize: "100% 100%",
    })

    .from(".holder4 .image-effect", {
        scale: 2,
        duration: 0.7,
    })
  
    .to(".holder4 .holder-mask", {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75
    }, 0)

        .to(".holder4 .holder-mask", {
            scale: 0.95,
            duration: 1,
        })

        .from(".holder4 .bg-effect", {
            opacity: 0,
            duration: 0,
            ease: "power2.out",
        }, "<")

        .to(".holder4, .h2-hider4", {
            opacity: 0,
            duration: 0.5,
            onComplete() {
                gsap.set(".holder4", { display: "none" });
                gsap.set(".h2-hider4", { display: "none"});

                gsap.to(".bg-swapper", {
                    backgroundImage: arrOfColors[4],
                    duration: 1,
                })

                gsap.delayedCall(1.5, letterTransition)
            }
        }, "+=0.4" )
}
        






// Opening Part 3 //



function letterTransition() {

    gsap.set(".letter-mask", { display: "flex" });
    let tl = gsap.timeline();

    tl.from(".letter-splitter.top .letter", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: {
            amount: 2.5,
            each: 0.5,
        }
    }, "sameTime")

    tl.from(".letter-splitter.bottom .letter", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: {
            amount: 2.5,
            each: 0.5,
        }
    }, "sameTime")

    tl.to(".strikethrough", {
        width: "100%",
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0.046,0.091 0.58,0.133 0.715,0.154 0.808,0.168 0.72,1 1,1 "),

        onComplete() {
            gsap.set(".strikethrough", { display: "none", })
        }

}, "-=0.1");

tl.set("#landing-page", { display: "flex", })

tl.to(".letter-splitter.top", {
    y: -1000,
    duration: 2.2,
    ease: "expo.in",
})

tl.to(".letter-splitter.bottom", {
    y: 1000,
    duration: 2.2,
    ease: "expo.in",

    onComplete() {
        gsap.set(".movie-part-3", { display: "none" })
    }
}, "<")

}






// Homescreen Section //

function landingPageLoad() {
    gsap.set("#landing-page", {
        display: "flex",
    })
}

// remove function call later after testing //
/*
landingPageLoad();
*/




// Javascript for Changing Videos and Cards //

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let current = 0;
const cardCycle = document.querySelectorAll(".cards");


let videos = [
    "videos/LebronCleveland1(1).mp4",
    "videos/LebronMiami1(1).mp4",
    "videos/Lebron2ndStint(1).mp4",
    "videos/LebronLakers(1).mp4",
]

let cardNames = [
    "first-stint", 
    "miami", 
    "second-stint", 
    "lakers"];

let backgroundChange = [
    "url('assets/cavaliers (1).jpg')",
    "url('assets/miami.jpg')",
    "url('assets/cavaliers (1).jpg')",
    "url('assets/lakers.jpg')",
]

let bottomHalfColors = [
    "#FD0101",
    "#333333ff",
    "#FD0101",
    "#9c0f85ff",
]


const videoChange = document.getElementById("video");

// Logic to change the cards //
function changeCard() {
   cardCycle.forEach(card => {

    card.classList.remove("js-top-card");

    if (card === cardCycle[current]) {
        card.classList.add("js-top-card");
        
    }

    if (card !== cardCycle[current]) {
        card.classList.remove("js-top-card");
    }
   })
}

    // Right arrow event listener //
    rightArrow.addEventListener('click', () => {
    current ++;

    if (current > videos.length - 1) {
        current = 0;
    }

    // Function for layering cards on click and background change //
    function cardLayeringRight() {
        
        cardCycle.forEach((card, index) => {

            let cardFinder = current - index;
           
            // Logic for layering cards //
             if (cardFinder < 0) {
                cardFinder = cardCycle.length + cardFinder;
                cardFinder = cardFinder % cardCycle.length;
                card.querySelector(".h3").style.display = "block";

             } 

             // Logic for hiding h3 that isnt the top card //

             if (cardFinder === 0) {
                card.querySelector(".h3").style.display = "block";
                card.querySelector(".card-button-div").style.display = "block";

             } else {
                card.querySelector(".h3").style.display = "none";
                card.querySelector(".card-button-div").style.display = "none";
             }

             // Logic for layering cards correctly and changing bottom half colors //

             card.classList.remove("first-stint", "miami", "second-stint", "lakers");
             card.classList.add(cardNames[cardFinder]);
             card.querySelector(".bottom-half").style.backgroundColor = bottomHalfColors[current];  
      })

            // Background change logic //
            for (let i = 0; i < backgroundChange.length; i++) {
                
                if (current === i) {
                    document.getElementById("landing-page").style.backgroundImage = backgroundChange[i];
                    document.getElementById("landing-page").style.transition = "background-image 0.5s ease-in-out";

                } 
        }  
    }
        
    videoChange.src = videos[current];
    videoChange.load()
    videoChange.play()
    changeCard()
    cardLayeringRight() 
    videoHandler()    
    })
   

    // Left Arrow event listener //
leftArrow.addEventListener('click', () => {
    current --;

    if (current < 0) {
        current = videos.length - 1;
    }

    

    // Logic for layering cards //

    function cardLayeringLeft() {
        
        cardCycle.forEach((card, index) => {

            let cardFinder = current - index;
           
            // Logic for layering cards //
             if (cardFinder < 0) {
                cardFinder = cardCycle.length + cardFinder;
                cardFinder = cardFinder % cardCycle.length;
                
             } 

             if (cardFinder === 0) {
                card.querySelector(".h3").style.display = "block";
                card.querySelector(".card-button-div").style.display = "block";
             } else {
                card.querySelector(".h3").style.display = "none";
                card.querySelector(".card-button-div").style.display = "none";
             }

             card.classList.remove("first-stint", "miami", "second-stint", "lakers");
             card.classList.add(cardNames[cardFinder]);
             card.querySelector(".bottom-half").style.backgroundColor = bottomHalfColors[current];  
      })

        for (let i = backgroundChange.length - 1; i >= 0; i--) {
            if (current === i) {
                document.getElementById("landing-page").style.backgroundImage = backgroundChange[i];
            }
        }
    }

    videoChange.src = videos[current];
    videoChange.load()
    videoChange.play()
    changeCard()
    cardLayeringLeft()
    videoHandler()
})


// Logic for videos on media query // 

function videoHandler() {

    cardCycle.forEach((card, index) => {

        let mobileVideos = card.querySelector(".lebron-videos");
        let mobileImages = card.querySelector(".lebron-images");

        if (current === index && window.innerWidth <= 880) {
            mobileVideos.play();
            mobileImages.style.display = "none";

        } else {
            mobileVideos.pause();
            mobileImages.style.display = "block";
        }

        if (current === index && window.innerWidth > 880) {
            mobileVideos.style.display = "none";

        } else {
            mobileVideos.style.display = "block";
        }
    }) 
}

window.addEventListener("resize", () => {
    videoHandler()
})
videoHandler()