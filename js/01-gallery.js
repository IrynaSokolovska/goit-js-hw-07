// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);
// ------------------------------------------------------------------
import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");
const markup = galleryItems.map({ preview, original, description });


console.log(galleryItems);
// ---------------------------------------------------

<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>

// import { galleryItems } from "./gallery-items.js";
// const galleryEl = document.querySelector(".gallery");
const galleryList = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

const clickItem = (event) => {
  event.preventDefault();

  const pressEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", pressEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", pressEsc);
      },
    }
  );

  instance.show();
};
galleryEl.innerHTML = galleryList;
galleryEl.addEventListener("click", clickItem);