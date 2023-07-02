import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryWrapper = document.querySelector('.gallery');

const galleryList = createGallery (galleryItems);

function createGallery (arr) {
 return arr.map(
    ({preview, original, description }) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
).join(' ')

}
console.log(galleryItems);

galleryWrapper.insertAdjacentHTML('beforeend', galleryList)

galleryWrapper.addEventListener('click', onImgClick)

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

function onImgClick (evt) {
    evt.preventDefault()
    
    
    if(!evt.target.classList.contains('gallery__image')) {
        return
    } else {
lightbox.open();
}}