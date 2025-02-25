export function animateOut() {
    const text = document.querySelector(".text-wrap");
    const blueBG = document.querySelector(".blue");
    const whiteBG = document.querySelector(".white");
    const loader = document.getElementById("loader");

    let textPosition = 50;
    let bluePosition = 0;
    let whitePosition = 0;
    let loaderPosition = 0;

    function frame() {
        if (textPosition <= -10 && bluePosition <= -100 && whitePosition <= -100 && loaderPosition <= -100) return

        textPosition -= 1;
        text.style.top = textPosition + '%';

        bluePosition -= 3;
        blueBG.style.top = bluePosition + '%';

        whitePosition -= 2;
        whiteBG.style.top = whitePosition + '%';

        loaderPosition -= 1;
        loader.style.top = loaderPosition + "%";

        requestAnimationFrame(frame);
    }

    setTimeout(() => {
        requestAnimationFrame(frame);
    }, 400); 
}