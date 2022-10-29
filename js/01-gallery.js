import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
const divGalleryRef = document.querySelector(".gallery");

const createGallary = (items) => {
   return items
      .map((item) => 
         `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
               <img
                  class="gallery__image"
                  src="${item.preview}
                  "data-source="${item.original}"
                  alt="${item.description}"
               />
            </a>
         </div>`
      )
      .join("");
}

const clickOnImg = (evt) => {
   evt.preventDefault()

   if (evt.target.nodeName !== "IMG"){
      return;
   }

   const createWindowImg = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}" width="1280" height="1024">
	`);

   createWindowImg.show();

   divGalleryRef.addEventListener("keydown", (evt) => {
      console.log(evt.key);
      if (evt.key === "Escape") {
         createWindowImg.close();
      }
   });
}

divGalleryRef.innerHTML = createGallary(galleryItems);

divGalleryRef.addEventListener("click", clickOnImg);
