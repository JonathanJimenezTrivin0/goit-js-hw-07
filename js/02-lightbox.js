import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let galleryImg = document.querySelector(".gallery");

let containerImg = galleryItems
  .map(
    (element) => `<li class="gallery__item">
<a class="gallery__link" href="${element.original}">
   <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>
</li>`
  )
  .join("");

galleryImg.insertAdjacentHTML("beforeend", containerImg);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
