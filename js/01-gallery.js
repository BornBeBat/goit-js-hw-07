import { galleryItems } from "./gallery-items.js";

const lightBox = basicLightbox.create(`<img width="1400" height="900">`, {
  onShow: () => {
    document.addEventListener("keydown", onEscapeClick);
  },
  onClose: () => {
    document.removeEventListener("keydown", onEscapeClick);
  },
});

const marcupConteiner = document.querySelector(".gallery");
marcupConteiner.insertAdjacentHTML("beforeend", createMarcup(galleryItems));
marcupConteiner.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const { target = event.target } = event;
  if (target.nodeName !== "IMG") return;

  lightBox.element().querySelector("img").src = target.dataset.source;
  lightBox.show();
}

function createMarcup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </li>`;
    })
    .join("");
}

function onEscapeClick(event) {
  if (event.key === "Escape") {
    lightBox.close();
  }
}
