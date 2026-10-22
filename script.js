/* ================= LOADER ================= */

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 500);

});



/* ================= TYPING EFFECT ================= */

const typingEl =
    document.getElementById("typing");


const roles = [

    "Salesforce & SOQL Support",

    "Application Support Professional",

    "Data Analytics Enthusiast",

    "SQL & Reporting Professional",

    "ERP & Software Support",

    "Software Support Specialist"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeRole() {

    const word =
        roles[roleIndex];


    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }


    typingEl.textContent =
        word.slice(0, charIndex);


    let delay =
        deleting ? 35 : 70;


    if (
        !deleting &&
        charIndex === word.length
    ) {

        delay = 1500;

        deleting = true;

    }


    else if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;

        roleIndex =
            (roleIndex + 1)
            % roles.length;

        delay = 350;

    }


    setTimeout(typeRole, delay);

}


typeRole();



/* ================= HEADER SCROLL ================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    }
);



/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");


const mobileMenu =
    document.getElementById("mobileMenu");


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
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });



/* ================= SCROLL REVEAL ================= */

const reveals =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


reveals.forEach(element => {

    observer.observe(element);

});



/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(
                        link => {

                            link.classList.toggle(

                                "active",

                                link.getAttribute(
                                    "href"
                                ) ===
                                "#" +
                                entry.target.id

                            );

                        }
                    );

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(
        section
    );

});



/* ================= CUSTOM CURSOR ================= */

const cursor =
    document.querySelector(".cursor");


const cursorDot =
    document.querySelector(".cursor-dot");


if (
    cursor &&
    cursorDot
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";


            cursorDot.style.left =
                event.clientX + "px";

            cursorDot.style.top =
                event.clientY + "px";

        }
    );

}