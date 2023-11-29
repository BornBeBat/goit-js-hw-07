import { galleryItems } from "./gallery-items.js";

const lightBox = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: (lightBox) => {
    document.addEventListener("keydown", onEscapeClick);
  },
  onClose: (lightBox) => {
    document.removeEventListener("keydown", onEscapeClick);
  },
});
console.log(lightBox);
const marcupConteiner = document.querySelector(".gallery");
const cardsMarcup = createMarcup(galleryItems);

marcupConteiner.insertAdjacentHTML("beforeend", cardsMarcup);
marcupConteiner.addEventListener("click", onClick);

function onClick(event) {
  const { target = event.target } = event;
  event.preventDefault();

  if (target.nodeName !== "IMG") return;

  lightBox.element().querySelector("img").src = target.dataset.source;
  lightBox.show();
}

function createMarcup(images) {
  const marcup = images.map(({ preview, original, description }) => {
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
  });
  return marcup.join("");
}

function onEscapeClick(event) {
  if (event.key === "Escape") {
    lightBox.close();
  }
}
