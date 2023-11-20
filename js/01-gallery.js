import { galleryItems } from "./gallery-items.js";

const marcupConteiner = document.querySelector(".gallery");
const cardsMarcup = createMarcup(galleryItems);

marcupConteiner.insertAdjacentHTML("beforeend", cardsMarcup);
marcupConteiner.addEventListener("click", onClick);

function onClick(event) {
  const { target = event.target } = event;
  event.preventDefault();
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const lightBox = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600">`
  );

  lightBox.show();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightBox.close();
      document.removeEventListener("keydown");
      return;
    }
  });
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
