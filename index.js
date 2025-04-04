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

    // Calculate the offset based on the percentage
    const offset = circumference - (percentage / 100 * circumference);

    // Set the stroke-dasharray to create the progress effect
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;

    // Update the text to show the percentage
    text.textContent = `${percentage}%`;
}

// Start the progress bars automatically when the page loads
window.onload = function() {
    // Start linear progress bars
    startProgress('progress-bar-1', 85); // 65%
    startProgress('progress-bar-2', 75); // 70%
    startProgress('progress-bar-3', 35); // 35%
    startProgress('progress-bar-4', 40); // 70%
    startProgress('progress-bar-5', 50); // 50%

    // Start circular progress bars
    setProgress('circle-1', 'text-1', 75); // 65%
    setProgress('circle-2', 'text-2', 70); // 70%
    setProgress('circle-3', 'text-3', 75); // 35%
    setProgress('circle-4', 'text-4', 70); // 70%
};



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




