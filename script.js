// Join Now buttons
const joinButtons = document.querySelectorAll(".join-btn, .price-card button");

joinButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// Contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting FitZone Gym!");

    form.reset();

});
/* PROGRAM DETAILS */

const programData = {

    strength: {

        title: "Strength Training",

        text: "Our Strength Training program helps you build muscle, increase strength and improve your physical performance. Workouts include weight training, compound exercises and progressive training with proper form.",

        video: "https://www.youtube.com/embed/U0bhE67HuDY"

    },

    cardio: {

        title: "Cardio Training",

        text: "Our Cardio Training program improves stamina, endurance and heart health. Sessions include running, cycling, HIIT and calorie-burning workouts.",

        video: "https://www.youtube.com/embed/ml6cT4AZdqI"

    },

    fitness: {

        title: "Fitness Training",

        text: "Our Fitness Training program combines strength, cardio, flexibility and functional exercises to help you become fitter, stronger and healthier.",

        video: "https://www.youtube.com/embed/UBMk30rjy0o"

    }

};


/* OPEN PROGRAM */

function openProgram(program) {

    const data = programData[program];

    document.getElementById("modalTitle").innerText =
        data.title;

    document.getElementById("modalText").innerText =
        data.text;

    document.getElementById("trainingVideo").src =
        data.video;

    document.getElementById("programModal")
        .classList.add("show");
}


/* CLOSE PROGRAM */

function closeProgram() {

    document.getElementById("programModal")
        .classList.remove("show");

    document.getElementById("trainingVideo").src = "";

}


/* OUTSIDE CLICK */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("programModal");

    if (event.target === modal) {

        closeProgram();

    }

});
/* =========================
   HERO PHOTO SLIDER
========================= */

const heroImages = [

    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",

    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",

    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80"

];


let currentSlide = 0;


/* PHOTO CHANGE FUNCTION */

function changeSlide(index) {

    currentSlide = index;

    updateHero();

}


/* UPDATE PHOTO */

function updateHero() {

    const hero = document.querySelector(".hero");

    hero.style.backgroundImage =
        `url("${heroImages[currentSlide]}")`;


    /* DOT UPDATE */

    const dots =
        document.querySelectorAll(".dot");

    dots.forEach(function(dot, index) {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}


/* AUTOMATIC PHOTO CHANGE */

setInterval(function() {

    currentSlide++;

    if (currentSlide >= heroImages.length) {

        currentSlide = 0;

    }

    updateHero();

}, 5000);


/* FIRST PHOTO */

updateHero();
/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}