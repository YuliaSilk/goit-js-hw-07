import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery')
// console.log(container);
function createMarkup(arr) {
return arr.map(({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt=""${description}" />
</a>
</li>`).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

container.addEventListener('click', handlerGalleryClick)
function handlerGalleryClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
const picture = evt.target.dataset.sourse;
const currentItem = evt.target.closest('gallery__item')
// console.log(evt,target);
// console.log(currentItem);




 }


console.log(galleryItems);

var lightbox = new SimpleLigthbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

// console.log(SimpleLigthbox);