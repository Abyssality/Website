// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, anim: { enable: true, speed: 1, opacity_min: 0 } },
        size: { value: 3, anim: { enable: true, speed: 2, size_min: 0.1 } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Function to Copy Username & Show Alert
function copyToClipboard() {
    navigator.clipboard.writeText("kalibyss").then(() => {
        document.getElementById("copy-alert").classList.remove("hidden");
        setTimeout(hideAlert, 2000); // Auto-hide alert
    });
}

// Function to Hide Alert
function hideAlert() {
    document.getElementById("copy-alert").classList.add("hidden");
}
