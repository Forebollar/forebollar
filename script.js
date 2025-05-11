const texts = [
    "100% återvunna golfbollar",
    "Snart släpper vi ball markers/liners!",
    "Billigare priser än någonsin på andrahanssortering!"
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