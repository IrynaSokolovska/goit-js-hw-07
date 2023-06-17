import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
)
  .join('');

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener("click", (onClick));

function onClick (event) {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG'){
   return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `)
  
    instance.show()     
}
  
console.log(galleryItems);
