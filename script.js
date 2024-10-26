// Typing Animation
function typeWriter(element, text, delay) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Initialize typing effect on load
document.addEventListener("DOMContentLoaded", function () {
    const brandElement = document.getElementById("brand-name");
    const subElement = document.getElementById("sub-name");
    
    // Type "TRIOOO"
    typeWriter(brandElement, "TRIOOO", 300);
    
    // Add a delay before typing "STUDIO"
    setTimeout(() => {
        typeWriter(subElement, "STUDIO", 300);
    }, 1800); // Delay before typing the sub-title
});
