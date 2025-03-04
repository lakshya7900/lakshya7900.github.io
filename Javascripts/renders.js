const style = document.createElement('style');
const popupContent = document.querySelector(".popup_content");
const popupImgContainer = document.querySelector(".popup_img_container");
const popupVidConatiner = document.querySelector(".popup_vid_container");

let popupIsOpen = false;
let currentUrl = "";
let index = 0;
let urls = [];

document.addEventListener('keydown', (event) => {
    if (popupIsOpen) {
        switch (event.key) {
            case 'ArrowLeft':
                showNextContent()
                break;
    
            case 'ArrowRight':
                showPreviousContent()
                break;

            case 'Escape':
                closePopup();
                break;
            
            case " ":
                if (urls[index].endsWith('.mp4')) {
                    const popupVideo = document.getElementById("popup_vid");
                    popupVideo.paused ? popupVideo.play() : popupVideo.pause();
                }
                break
        
            default:
                break;
        }
    }
});

document.addEventListener('click', (event) => {
    const leftArrow = document.querySelector(".left_arrow");
    const rightArrow = document.querySelector(".right_arrow");
    const popupImg = document.getElementById("popup_img");
    const popupVid = document.getElementById("popup_vid");

    if (popupIsOpen) {
        if (event.target != leftArrow && event.target != rightArrow && event.target != popupImg && event.target != popupVid)
            closePopup();
    }
})

function openPopup(element) {
    const popupImg = document.getElementById("popup_img");
    const popupVideo = document.getElementById("popup_vid");
    const popup = document.getElementById("popup");

    popup.style.display = "flex";
    setTimeout(() => {
        popupIsOpen = true; // Allow closing after a short delay
    }, 100);

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
        
    } else if (element.tagName === "VIDEO") {
        popupVideo.src = element.src;
        popupVideo.style.display = "block";
        popupImg.style.display = "none";
        popupVideo.load();
    }

    setTimeout(() => {
        getCurrentContentIndex(element.src);
    }, 100);
}

function closePopup() {
    const popup = document.getElementById("popup");
    const popupVideo = document.getElementById("popup_vid");
    const popupImg = document.getElementById("popup_img");

    popup.style.display = "none";
    popupImg.src = "";
    popupVideo.pause();
    popupVideo.src = "";
    popupIsOpen = false;
    currentUrl = "";
    index = 0;


    if (style && document.head.hasChildNodes()) {
        document.head.removeChild(style);
    }
}

function getCurrentContentIndex(url) {
    const renders = document.querySelectorAll(".render");

    renders.forEach(function(render) {
        let content = render.querySelector(".content");
        urls.push(content.src)
    });

    index = urls.indexOf(url);

    return urls;
}

function showNextContent() {
    const popupImg = document.getElementById("popup_img");
    const popupVideo = document.getElementById("popup_vid");

    index++;
    if (index > urls.length - 1)
        index = 0;    
    
    let nextElement = urls[index];
    
    
    if (nextElement.endsWith('.jpg') || nextElement.endsWith('.jpeg') || nextElement.endsWith('.png')) {
        popupImg.src = nextElement;
        popupImg.style.display = "block";
        popupVideo.style.display = "none";
    } else if (nextElement.endsWith('.mp4')) {
        popupVideo.src = nextElement;
        popupVideo.style.display = "block";
        popupImg.style.display = "none";
        popupVideo.load();
    }
}

function showPreviousContent() {
    const popupImg = document.getElementById("popup_img");
    const popupVideo = document.getElementById("popup_vid");

    index--;
    if (index < 0)
        index = urls.length - 1;    
    
    let nextElement = urls[index];
    
    
    if (nextElement.endsWith('.jpg') || nextElement.endsWith('.jpeg') || nextElement.endsWith('.png')) {
        popupImg.src = nextElement;
        popupImg.style.display = "block";
        popupVideo.style.display = "none";
    } else if (nextElement.endsWith('.mp4')) {
        popupVideo.src = nextElement;
        popupVideo.style.display = "block";
        popupImg.style.display = "none";
        popupVideo.load();
    }
}
