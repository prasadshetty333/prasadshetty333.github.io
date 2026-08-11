/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .querySelector(".loader")
            .classList.add("hide");

    }, 1000);

});


/* =========================================================
   TYPEWRITER
========================================================= */

const typingElement =
    document.getElementById("typing");

const words = [

    "DATA ANALYST",
    "SQL ENTHUSIAST",
    "POWER BI DEVELOPER",
    "DATA VISUALIZER",
    "PROBLEM SOLVER"

];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(element);

    }
);


/* =========================================================
   NAVIGATION SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 200;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "open"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu
                        .classList
                        .remove(
                            "open"
                        );

                }
            );

        }
    );


/* =========================================================
   ANIMATED STATISTICS
========================================================= */

const statNumbers =
    document.querySelectorAll(
        "[data-target]"
    );


const statObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const element =
                            entry.target;

                        const target =
                            Number(
                                element.dataset
                                    .target
                            );

                        let count = 0;

                        const increment =
                            target / 50;


                        function update() {

                            count +=
                                increment;


                            if (
                                count <
                                target
                            ) {

                                element.textContent =
                                    Math.floor(
                                        count
                                    );

                                requestAnimationFrame(
                                    update
                                );

                            } else {

                                element.textContent =
                                    target;

                            }

                        }


                        update();

                        statObserver
                            .unobserve(
                                element
                            );

                    }

                }
            );

        },

        {
            threshold: .8
        }

    );


statNumbers.forEach(
    number => {

        statObserver.observe(
            number
        );

    }
);


/* =========================================================
   MOUSE CURSOR
========================================================= */

const cursor =
    document.querySelector(
        ".cursor"
    );


const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX = event.clientX;
        mouseY = event.clientY;


        cursorDot.style.left =
            `${mouseX}px`;

        cursorDot.style.top =
            `${mouseY}px`;

    }
);


function animateCursor() {

    cursorX +=
        (mouseX - cursorX) * .15;

    cursorY +=
        (mouseY - cursorY) * .15;


    cursor.style.left =
        `${cursorX}px`;

    cursor.style.top =
        `${cursorY}px`;


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* =========================================================
   CURSOR HOVER
========================================================= */

const hoverElements =
    document.querySelectorAll(
        "a, button, .skill-card, .project-card"
    );


hoverElements.forEach(
    element => {

        element.addEventListener(
            "mouseenter",
            () => {

                document.body
                    .classList
                    .add("hovering");

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                document.body
                    .classList
                    .remove("hovering");

            }
        );

    }
);


/* =========================================================
   PROJECT CARD TILT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 25;


                const rotateY =
                    (centerX - x) / 25;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        anchor => {

            anchor.addEventListener(
                "click",
                function(event) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior:
                                    "smooth"
                            }
                        );

                    }

                }
            );

        }
    );