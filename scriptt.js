console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask =(e) ⇒ {
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;

    overlayEl.style = '--opacity : 1; --x: ${x}px; --y:${y}px;';
};

const createOverLayCta = (overlayCard, ctaEL) ⇒ {
    const overlayCta = document.createElement("div");
    overlayCta.classList.add("cta");
    overlayCta.textContent = ctaEL.textContent;
    overlayCta.setAttribute("aria-hidden", true);
    overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((enttries) ⇒ {
    entries.forEach((entry) ⇒ {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;
    if (cardIndex > 0) {
        overlay.children[cardIndex].style.width = '${width}px';
        overlay.children[cardIndex].style.height = '${height}}px';
    }
    });
});

