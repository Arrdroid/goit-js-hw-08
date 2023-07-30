import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const photoParent = document.querySelector("ul.gallery")

const photoCollection = galleryItems.map(({ preview, original, description }) => {
  return  ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `
}).join("");

photoParent.insertAdjacentHTML("beforeend", photoCollection);


const photoPlugin = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});