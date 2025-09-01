let vantaEffect;

function initVanta() {
    if (vantaEffect) vantaEffect.destroy();

    const isDark = !document.body.classList.contains("light-mode");

    vantaEffect = VANTA.WAVES({
        el: "#vanta-bg",        
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark? 0x0 : 0x787a7e,
        shininess: 50.00,
        waveSpeed: 1.10,
        zoom: 1.04
    });
}


function toggleDarkLightMode() {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("mode", document.body.classList.contains("light-mode") ? "light" : "dark");
    initVanta();
}

function animateSkills() {
    const skills = document.getElementById('skills');
    if (!skills) return;

    const dots = ['.', '..', '...', ''];
    let i = 0;
    setInterval(() => {
        skills.textContent = 'Enter Skills Here' + dots[i];
        i = (i + 1) % dots.length;
    }, 500);
}

window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "light") document.body.classList.add("light-mode");

    initVanta();
    animateSkills();
});
