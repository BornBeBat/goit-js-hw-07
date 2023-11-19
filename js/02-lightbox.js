import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const marcupConteiner = document.querySelector(".gallery");
const cardsMarcup = createMarcup(galleryItems);

marcupConteiner.addEventListener("click", onClick);

marcupConteiner.insertAdjacentHTML("beforeend", cardsMarcup);

const gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = "250";

function onClick(event) {
  const { target = event.target } = event;
  event.preventDefault();
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  // with jQuery nearly the same
  const gallery = $(".gallery a").simpleLightbox();
  gallery.on("show.simplelightbox");
}

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
