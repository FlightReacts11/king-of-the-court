gsap.registerPlugin(ScrollTrigger)



//Opening Movie Animation Part 1//

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






//End Of Opening Part 1//



//Opening Part 2//

let arrOfColors = [
    "linear-gradient(180deg,rgba(255, 186, 36, 1) 6%, rgba(166, 20, 20, 1) 67%, rgba(219, 4, 4, 1) 100%)",
    "linear-gradient(180deg, rgba(207, 39, 39, 1) 0%, rgba(77, 24, 24, 1) 50%, rgba(0, 0, 0, 1) 100%)",
    "linear-gradient(180deg,rgba(255, 186, 36, 1) 6%, rgba(166, 20, 20, 1) 67%, rgba(219, 4, 4, 1) 100%)",
    "linear-gradient(180deg,rgba(142, 27, 171, 1) 0%, rgba(137, 25, 189, 1) 23%, rgba(217, 182, 28, 1) 100%)",
    "linear-gradient(0deg, black, black)",,
]


gsap.set(".holder-mask", {
    rotation: 0.1,
})

//imageSetOne / Cleveland//

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




//imageSetTwo / Miami//

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

//imageSetThree / Cleveland 2nd Stint//

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

//ImageSetFour / Los Angeles//

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

    tl.from(".letter", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: {
            amount: 2,
            each: 0.5,
        }
    })

    tl.to(".strikethrough", {
        width: "100%",
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0.046,0.091 0.58,0.133 0.715,0.154 0.808,0.168 0.72,1 1,1 "),

}, "+=0.5");
 

}





//Homescreen Section//
const homescreenColorChange = []

function movieHover(movie, indexColor) {
    movie.addEventListener('mouseenter', () => {
        
    })
}