import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let img = document.querySelector(".gallery");

let galllery = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>`
  )
  .join("");

img.insertAdjacentHTML("afterbegin", galllery);
img.addEventListener("click", (e) => {
  e.preventDefault();

  const urlImg = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${urlImg}" alt="img">`);
  instance.show();

  img.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
});
