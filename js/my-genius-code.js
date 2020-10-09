import imgArr from "./gallery-items.js";

console.log(...imgArr);

const imagesGridEl = imgArr.map(({ preview, original, description }) => {
  return `<li class="gallery__item>
  <a class="gallety__link> href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}"
data-source="${original}"
  </a>
  </li>
    "`;
}, "");
// +380994807984;

console.log(imagesGridEl);

const galleryEl = document.querySelector(".js-gallery");
galleryEl.insertAdjacentHTML("beforebegin", imagesGridEl);
  // 