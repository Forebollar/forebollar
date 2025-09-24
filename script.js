const texts = [
    "100% återvunna golfbollar",
    "Spara upp till 80% mot nypris!"
    ];
    let currentTextIndex = 0;

    setInterval(() => {
    const textElement = document.getElementById("rotating-text");
    textElement.style.opacity = 0;
    setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        textElement.textContent = texts[currentTextIndex];
        textElement.style.opacity = 1;
    }, 500);
    }, 4000);