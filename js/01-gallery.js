import { galleryItems } from './gallery-items.js';
const container = document.querySelector('.gallery');
function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
            </a>
        </li>`).join('');
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerGalleryClick);
function handlerGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== 'IMG') {
        return;
    }
    const picture = evt.target.dataset.source;
    const currentItem = evt.target.closest('.gallery__item');
    const instance = basicLightbox.create(`
        <img src='${evt.target.src}' width="800" height="600">
    `);
    instance.show();
    const closeLightboxOnEscape = (event) => {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeLightboxOnEscape);
        }
    };
    document.addEventListener('keydown', closeLightboxOnEscape);
    const closeLightbox = () => {
        instance.close();
        document.removeEventListener('keydown', closeLightboxOnEscape);
    };
    instance.element().querySelector('.basicLightbox__placeholder').addEventListener('click', closeLightbox);
}

console.log(galleryItems);



 

