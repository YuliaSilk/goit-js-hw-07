import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const container = document.querySelector('.gallery')
// console.log(container);
function createMarkup(arr) {
return arr.map(({ preview, original, description }) => `
    <li 
        class="gallery__item">
    <a 
        class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="200"
    />
    </a>
    </li>`).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))






// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },