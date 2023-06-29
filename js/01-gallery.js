import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery');

const galleryList = createGallery (galleryItems);

function createGallery (arr) {
 return arr.map(({preview, original, description }) => 
     `<li class="gallery__item">
     <a class="gallery__link" href="${original}">    <img
           class="gallery__image"
          src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
  </li>` 
).join(' ')

}

galleryWrapper.insertAdjacentHTML('beforeend', galleryList)

galleryWrapper.addEventListener('click', onImgClick)



function onImgClick (evt) {
evt.preventDefault()
document.addEventListener('keydown', onPressEsc)

if(!evt.target.classList.contains('gallery__image')) {
    return
}
const originalImg = evt.target.dataset.source;

const instance = basicLightbox.create(
    `<img src="${originalImg}" width="800" height="600">`)
instance.show()

function onPressEsc(evt){
   if(evt.code === 'Escape'){
    instance.close() 
}}
}






