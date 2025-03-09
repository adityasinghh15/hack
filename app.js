const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input");

let isAnimating = false;

// Function to handle responsive behavior
function handleResponsiveLayout() {
    const windowWidth = window.innerWidth;
    const signinSignup = document.querySelector(".signin-signup");
    
    if (windowWidth <= 870) {
        signinSignup.style.width = "100%";
        forms.forEach(form => {
            form.style.padding = windowWidth <= 570 ? "0 1.5rem" : "0 3rem";
        });
    } else {
        signinSignup.style.width = "50%";
        forms.forEach(form => {
            form.style.padding = "0 5rem";
        });
    }
}

// Function to handle mode switching
function switchMode(mode) {
    if (isAnimating) return;
    isAnimating = true;
    
    const isSignUp = mode === 'signup';
    const currentForm = isSignUp ? document.querySelector(".sign-in-form") : document.querySelector(".sign-up-form");
    const nextForm = isSignUp ? document.querySelector(".sign-up-form") : document.querySelector(".sign-in-form");
    
    // Start transition
    if (isSignUp) {
        container.classList.add("sign-up-mode");
    } else {
        container.classList.remove("sign-up-mode");
    }
    
    // Handle form transitions
    currentForm.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
    nextForm.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
    
    // Reset animation lock after transition
    setTimeout(() => {
        nextForm.querySelector("input").focus();
        isAnimating = false;
    }, 800);
}

// Event Listeners
sign_up_btn.addEventListener("click", (e) => {
    e.preventDefault();
    switchMode('signup');
});

sign_in_btn.addEventListener("click", (e) => {
    e.preventDefault();
    switchMode('signin');
});

// Input focus effects
inputs.forEach(input => {
    const field = input.parentNode;
    
    input.addEventListener("focus", () => {
        if (!isAnimating) {
            field.classList.add("focused");
        }
    });
    
    input.addEventListener("blur", () => {
        if (input.value.length === 0) {
            field.classList.remove("focused");
        }
    });
});

// Handle form submissions
forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!isAnimating) {
            const formType = form.classList.contains("sign-in-form") ? "Login" : "Signup";
            console.log(`${formType} form submitted`);
        }
    });
});

// Initialize layout
window.addEventListener("load", handleResponsiveLayout);
window.addEventListener("resize", handleResponsiveLayout);

// Prevent zoom on double tap (mobile devices)
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });