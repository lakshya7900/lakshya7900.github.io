const style = document.createElement('style');

function openPopup(element) {
    let popup = document.getElementById("popup");
    let popupImg = document.getElementById("popup_img");
    let popupVideo = document.getElementById("popup_vid");

    popup.style.display = "flex";

    style.textContent = `
        * {
            overflow-y: hidden; /* Add this line */
        }
    `;
    document.head.appendChild(style);


    if (element.tagName === "IMG") {
        popupImg.src = element.src;
        popupImg.style.display = "block";
        popupVideo.style.display = "none";
        console.log(popupImg.src);
        
    } else if (element.tagName === "VIDEO") {
        popupVideo.src = element.src;
        popupVideo.style.display = "block";
        popupImg.style.display = "none";
        popupVideo.load();
    }
}

function closePopup() {
    let popup = document.getElementById("popup");
    let popupVideo = document.getElementById("popup_vid");

    popup.style.display = "none";
    popupVideo.pause();
    popupVideo.src = "";


    if (style) {
        document.head.removeChild(style);
    }
}
