document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
});

// Existing function for linear progress bars
function startProgress(barId, targetWidth) {
    let progressBar = document.getElementById(barId);
    let width = 0;

    // Update the progress bar every 100 milliseconds
    let interval = setInterval(function() {
        if (width >= targetWidth) {
            clearInterval(interval); // Stop when it reaches the target width
        } else {
            width++;
            progressBar.style.width = width + '%'; // Update width
            progressBar.textContent = width + '%'; // Update text
        }
    }, 100);
}

// New function for circular progress bars
function setProgress(circleId, textId, percentage) {
    const circle = document.getElementById(circleId);
    const text = document.getElementById(textId);
    const radius = 16.5; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    
    // Initialize the circle with 0% progress
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    circle.style.transition = 'stroke-dashoffset 1s ease-out'; // Add CSS transition
    text.textContent = '0%'; // Start text at 0%
    
    // Start the animation
    let currentPercentage = 0;
    const intervalTime = 100; // Match linear progress bar timing
    const interval = setInterval(() => {
        if (currentPercentage >= percentage) {
            clearInterval(interval);
            return;
        }
        
        // Update both the circle and text in the same frame
        currentPercentage++;
        const offset = circumference - (currentPercentage / 100 * circumference);
        circle.style.strokeDashoffset = offset;
        text.textContent = `${currentPercentage}%`;
        
        // Force a reflow to ensure updates are applied
        circle.getBoundingClientRect();
    }, intervalTime);
}

// Functions to start animations
function startSkillsAnimation() {
    startProgress('progress-bar-1', 85);
    startProgress('progress-bar-2', 75);
    startProgress('progress-bar-3', 35);
    startProgress('progress-bar-4', 40);
    startProgress('progress-bar-5', 50);
    setProgress('circle-1', 'text-1', 75);
    setProgress('circle-2', 'text-2', 73);
    setProgress('circle-3', 'text-3', 78);
    setProgress('circle-4', 'text-4', 70);
    setProgress('circle-5', 'text-5', 79);
    setProgress('circle-6', 'text-6', 70);
    setProgress('circle-7', 'text-7', 85);
    setProgress('circle-8', 'text-8', 80);
}

function startTypingAnimation() {
    const typingText = document.getElementById('text');
    if (typingText) {
        typingText.style.animation = 'typing 3s steps(10) forwards, blink-caret 0.75s step-end infinite';
    }
}

function startImageSliderAnimation() {
    // Animate the image
    const image = document.querySelector('.about-image');
    if (image) {
        image.style.animation = 'slidesIn 1s ease-out forwards';
    }
    
    // Animate the text section
    const aboutText = document.querySelector('.about');
    if (aboutText) {
        aboutText.style.animation = 'slideIn 1s ease-out forwards';
    }
}

// Observe skills section
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startSkillsAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    skillsObserver.observe(skillsSection);
}

// Observe typing effect
const typingSection = document.querySelector('.first-display');
if (typingSection) {
    const typingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTypingAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    typingObserver.observe(typingSection);
}

// Observe second section (image slider and info)
const secondSection = document.querySelector('.second-section');
if (secondSection) {
    const secondSectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to the image
                const image = document.querySelector('.about-image');
                if (image) {
                    image.classList.add('animate-slide-in');
                }
                
                // Add animation class to the About Me section
                const aboutSection = document.querySelector('.about');
                if (aboutSection) {
                    aboutSection.classList.add('animate-slide-in');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    secondSectionObserver.observe(secondSection);
}

// Observe about me section
const aboutMeSection = document.querySelector('.about');
if (aboutMeSection) {
    const aboutMeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to trigger the slide-in effect
                aboutMeSection.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    aboutMeObserver.observe(aboutMeSection);
}

// Animate project cards on scroll with staggered effect
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Stagger effect using setTimeout
                setTimeout(() => {
                    entry.target.classList.add('animate-card-in');
                }, idx * 120);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    projectCards.forEach(card => cardObserver.observe(card));
}

document.addEventListener("DOMContentLoaded", function () {
    const projects = {

        "summer-hut": {
            title: "A Summer hut",
            image: "images/hut.png",
            description: "A representation of a summher hut, table and chairs,cups and plates,a tin of Milo and a tin of Milk. ",
            tech: "HTML, JavaScript",
            github: "https://4102010423.ceiscy.com/"
        },

        "solar-sytem": {
            title: "Solar System",
            image: "images/solar-system.png",
            description: "A virtual representation of the solar system. It includes the sun, the planets and their orbit and the erath's moon.",
            tech: "HTML, JavaScript",
            github: "https://4102010423.ceiscy.com/solar-system/"
        },
        "shopping-app": {
            
            title: "Shopping App",
            image: "images/shopping Cart.jpg",
            description: "A minor app that let's you add, store and delete items.",
            tech: "HTML, CSS , MySQL, JavaScript",
            github: "https://add-to-cart-ransfordd.netlify.app/"
        },
        "qr-code": {
            title: "QR-Code Generator",
            image: "images/Qr-code.png",
            description: "This program let's you input a link then it's create a Qr-code image. ",
            tech: "HTML, JavaScript and CSS",
            github: "https://github.com/ransfordd/Qr-Code-Generater"
        },

        "digital-clock": {
            title: "Digital Clock",
            image: "images/Digital-clock.png",
            description: "It displays a colourful digital running clock.",
            tech: "HTML, JavaScript and CSS",
            github: "https://github.com/ransfordd/Digital-clock"
        },
        "calculator": {
            title: "Calculator",
            image: "images/calculator.png",
            description: "A calculator that help's users solve some simple calculations.",
            tech: "HTML and CSS",
            github: "https://github.com/ransfordd/caculator-2"
        },
        "password-protected-door-system": {
            title: "Password-protected door system",
            image: "images/password-protected door system.png",
            description: "This project simulates a security system where a user must enter a predefined password using a keypad. The entered input is shown on an LCD display, and the system reacts.",
            tech: "Arduino and C++",
            github: "https://github.com/ransfordd/Password-protected-door-system"
        },
        "pedestrian-traffic-light-system": {
            title: "Pedestrian Traffic Light System",
            image: "images/Pedestrian Traffic Light System.png",
            description: "The system operates in a repeating loop that mimics the functioning of real-world traffic lights.",
            tech: "Arduino and C++",
            github: "https://github.com/ransfordd/Pedestrian-Traffic-Light-System"
        }
    };

    
    window.openModal = function (projectKey) {
        const modal = document.getElementById("projectModal");

        if (projects[projectKey]) {
            document.getElementById("modalTitle").innerText = projects[projectKey].title;
            document.getElementById("modalImage").src = projects[projectKey].image;
            document.getElementById("modalDescription").innerText = projects[projectKey].description;
            document.getElementById("modalTech").innerText = projects[projectKey].tech;
            document.getElementById("githubLink").href = projects[projectKey].github;

            modal.style.display = "flex"; 
        }
    };
    

  
    window.closeModal = function () {
        document.getElementById("projectModal").style.display = "none";
    };

   
    window.onclick = function (event) {
        const modal = document.getElementById("projectModal");
        if (event.target === modal) {
            closeModal();
        }
    };
});




window.onload = type; // Start typing on page load
