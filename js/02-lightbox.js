import { galleryItems } from "./gallery-items.js";

const marcupConteiner = document.querySelector(".gallery");
const cardsMarcup = createMarcup(galleryItems);
marcupConteiner.insertAdjacentHTML("beforeend", cardsMarcup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
gallery.on("show.simplelightbox");

function createMarcup(images) {
  const marcup = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  });
  return marcup.join("");
}
