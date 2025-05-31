const texts = [
    "Juni Sale 10 off på hela sortimentet",
    "100% återvunna golfbollar",
    "Vi har nu släppt ball markers/liners!",
    "Billigare priser än någonsin på andrahanssortering!",
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