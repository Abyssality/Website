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

// Social Media Button Interaction (Example with Discord)
const socialMediaIcons = {
    discord: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12l9 9-9-9-9 9 9-9z"/></svg>',
        link: "https://discord.gg/a4JVtVkCz5",
    },
    tiktok: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8a4 4 0 008 0V8M8 8a4 4 0 014-4V2a6 6 0 006 6v8a6 6 0 01-6 6M8 8a4 4 0 00-4-4v2a6 6 0 016 6z"/></svg>',
        link: "https://tiktok.com/@kalibyssality",
    },
    youtube: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"/></svg>',
        link: "https://youtube.com/@kalibyss?si=ruZ2ALYI9x1fNlFI",
    }
};

// Dynamically create social media icons and set up click events
document.addEventListener("DOMContentLoaded", () => {
    const socialIconsContainer = document.querySelector('.social-links');
    
    for (const platform in socialMediaIcons) {
        const iconObj = socialMediaIcons[platform];
        
        // Create each social icon
        const iconElement = document.createElement('a');
        iconElement.href = iconObj.link;
        iconElement.target = '_blank';
        iconElement.classList.add('social-icon', platform);

        // Add icon (SVG) to element
        iconElement.innerHTML = iconObj.icon;

        // Hover effect: enlarges the icon and adds a glossy effect on hover
        iconElement.addEventListener('mouseover', () => {
            iconElement.classList.add('hover');
        });

        iconElement.addEventListener('mouseout', () => {
            iconElement.classList.remove('hover');
        });

        // Append icon to social media container
        socialIconsContainer.appendChild(iconElement);
    }
});

// Event listener to open the alert box on clicking a button
const buttons = document.querySelectorAll('.social-icon');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        copyToClipboard(); // Call to copy text and show alert
    });
});
