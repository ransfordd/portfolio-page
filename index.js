// Hamburger menu toggle for mobile navigation
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
});

// Animate linear progress bars for skills
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
    }, 20);
}

// Animate circular progress bars for skills
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

// Start all skills animations
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

// Start typing animation for hero section
function startTypingAnimation() {
    const typingText = document.getElementById('text');
    if (typingText) {
        typingText.style.animation = 'typing 3s steps(10) forwards, blink-caret 0.75s step-end infinite';
    }
}

// Animate about image and text on scroll
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

// Intersection Observer for skills section animation (reloads progress and circular bars on scroll)
// const skillsSection = document.querySelector('.skills-section');
// if (skillsSection) {
//     const skillsObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 startSkillsAnimation();
//             }
//         });
//     }, { threshold: 0.5 });
//     skillsObserver.observe(skillsSection);
// }

// Intersection Observer for typing effect
const typingSection = document.querySelector('.first-display');
if (typingSection) {
    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTypingAnimation();
            }
        });
    }, { threshold: 0.5 });
    typingObserver.observe(typingSection);
}

// Intersection Observer for about image and section animation
const secondSection = document.querySelector('.second-section');
if (secondSection) {
    const secondSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to the image
                const image = document.querySelector('.about-image');
                if (image) {
                    image.classList.add('animate-slide-in');
                    // Remove and re-add to retrigger animation
                    setTimeout(() => image.classList.remove('animate-slide-in'), 1000);
                }
                
                // Add animation class to the About Me section
                const aboutSection = document.querySelector('.about');
                if (aboutSection) {
                    aboutSection.classList.add('animate-slide-in');
                    setTimeout(() => aboutSection.classList.remove('animate-slide-in'), 1000);
                }
            }
        });
    }, { threshold: 0.5 });
    secondSectionObserver.observe(secondSection);
}

// Intersection Observer for about me section animation
const aboutMeSection = document.querySelector('.about');
if (aboutMeSection) {
    const aboutMeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMeSection.classList.add('animate-slide-in');
                setTimeout(() => aboutMeSection.classList.remove('animate-slide-in'), 1000);
            }
        });
    }, { threshold: 0.5 });
    aboutMeObserver.observe(aboutMeSection);
}

// Animate project cards on scroll with staggered effect
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-card-in');
                    setTimeout(() => entry.target.classList.remove('animate-card-in'), 1000);
                }, idx * 120);
            }
        });
    }, { threshold: 0.2 });
    projectCards.forEach(card => cardObserver.observe(card));
}

// Project data and modal logic
document.addEventListener("DOMContentLoaded", function () {
    // Project details: some use video, some use image
    const projects = {
        house: {
            title: "House",
            description: "A visual representation of a full house with car, summer hut, pool, bedrooms, kitchen etc",
            tech: "HTML, CSS, JS",
            demo: "https://4102010423.ceiscy.com/home",
            video: "videos/house.mp4" // Video preview
        },
        "summer-hut": {
            title: "A-Frame Summer-Hut",
            description: "A representation of a summer hut, table and chairs, cups and plates, a tin of Milo and a tin of Milk.",
            tech: "HTML, JavaScript",
            demo: "https://4102010423.ceiscy.com/",
            video: "videos/hut.mp4" // Video preview
        },
        "solar-system": {
            title: "Solar System",
            description: "A representation of the solar system. It includes the sun, the planets and their orbit and the earth's moon.",
            tech: "HTML, JavaScript",
            demo: "https://4102010423.ceiscy.com/solar-system/",
            video: "videos/solar-system.mp4"
        },
        "shopping-app": {
            title: "Shopping Cart",
            description: "A minor app that lets you add, store and delete items.",
            tech: "HTML, CSS, MySQL, JavaScript",
            demo: "https://add-to-cart-ransfordd.netlify.app/",
            image: "images/shopping Cart.jpg" // Image preview
        },
        "qr-code": {
            title: "QR-Code Generator",
            description: "This program lets you input a link then it creates a QR-code image.",
            tech: "HTML, JavaScript, CSS",
            github: "https://github.com/ransfordd/Qr-Code-Generater",
            image: "images/Qr-code.png" // Image preview
        },
        "digital-clock": {
            title: "Digital Clock",
            description: "It displays a colourful digital running clock.",
            tech: "HTML, JavaScript, CSS",
            github: "https://github.com/ransfordd/Digital-clock",
            image: "images/Digital-Clock.png" // Image preview
        },
        "calculator": {
            title: "Calculator",
            description: "A calculator that helps users solve some simple calculations.",
            tech: "HTML, CSS",
            github: "https://github.com/ransfordd/caculator-2",
            image: "images/calculator.png" // Image preview
        },
        "password-protected-door-system": {
            title: "Password-protected door system",
            description: "This project simulates a security system where a user must enter a predefined password using a keypad. The entered input is shown on an LCD display, and the system reacts.",
            tech: "Arduino, C++",
            demo: "https://www.tinkercad.com/things/eitdGT4vDcI-password-protected-door-system",
            image: "images/password-protected door system.png" // Image preview
        },
        "pedestrian-traffic-light-system": {
            title: "Pedestrian Traffic Light System",
            description: "The system operates in a repeating loop that mimics the functioning of real-world traffic lights.",
            tech: "Arduino, C++",
            demo: "https://www.tinkercad.com/things/fEfC5dbP11Q-led-and-lcd-display",
            image: "images/Pedestrian Traffic Light System.png" // Image preview
        }
    };

    // Open modal and display project details (video or image)
    window.openModal = function (projectKey) {
        const modal = document.getElementById("projectModal");
        const project = projects[projectKey];

        if (project) {
            document.getElementById("modalTitle").innerText = project.title;
            document.getElementById("modalDescription").innerText = project.description;
            document.getElementById("modalTech").innerText = project.tech;
            document.getElementById("githubLink").href = project.demo || project.github;

            // Show video if available, else show image
            const modalVideo = document.getElementById("modalVideo");
            const modalVideoSource = document.getElementById("modalVideoSource");
            const modalImage = document.getElementById("modalImage");

            if (project.video) {
                modalVideo.style.display = "block";
                modalImage.style.display = "none";
                modalVideoSource.src = project.video;
                modalVideo.muted = true;
                modalVideo.removeAttribute("controls");
                modalVideo.loop = true;
                modalVideo.load();
                modalVideo.play();
            } else if (project.image) {
                modalVideo.style.display = "none";
                modalImage.style.display = "block";
                modalImage.src = project.image;
            } else {
                modalVideo.style.display = "none";
                modalImage.style.display = "none";
            }

            modal.style.display = "flex";
        }
    };

    // Close modal and pause video if open
    window.closeModal = function () {
        document.getElementById("projectModal").style.display = "none";
        // Pause video when closing modal
        const modalVideo = document.getElementById("modalVideo");
        if (modalVideo) {
            modalVideo.pause();
        }
    };

    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
        const modal = document.getElementById("projectModal");
        if (event.target === modal) {
            closeModal();
        }
    };

    // Force skills animation to run (for testing)
    startSkillsAnimation();
});

// (Unused) Start typing animation on window load
window.onload = type; //
