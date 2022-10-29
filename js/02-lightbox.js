import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryRef = document.querySelector(".gallery");
//Створення розмітки Галереї
const createGallary = (items) => {
   return items
      .map((item) =>
         `<li><a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
         </a></li>`
      )
      .join("");
};

divGalleryRef.innerHTML = createGallary(galleryItems);

const gallery = new SimpleLightbox('.gallery a', { /* options */captionsData: 'alt', captionDelay: '250'});

