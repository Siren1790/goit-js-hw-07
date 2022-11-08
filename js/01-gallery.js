import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
const divGalleryRef = document.querySelector(".gallery");
//Створення розмітки Галереї
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
};

const clickOnImg = (evt) => {
   //Не переходимо за посиланням на нову сторінку
   evt.preventDefault();
   //Якщо натискаэмо мишкою не по IMG виходимо з функції.
   if (evt.target.nodeName !== "IMG") {
      return;
   }


   // Створюємо розмітку елемента LightBox Та трішки нижче відображаємо його
   const createWindowImg = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">`, 
      {
         //Створюємо новий обробник подій який перевіряє натискання клавіші Escape
         onShow: () => {
            divGalleryRef.addEventListener("keydown", keydownEscape); 
         },
         // Видаляємо обробник подій який перевіряє натискання клавіші Escape
         onClose: () => {
            divGalleryRef.removeEventListener("keydown", keydownEscape);   
         }
      }
   );

   // Перевірка на натискання клавіші Escape, у випадку натискання закриваємо вікно lightBox. 
   function keydownEscape (evt) {
      if (evt.key === "Escape") {
         createWindowImg.close();
      }
   }

   
   createWindowImg.show();
};

// Відображення створеної розмітки на сторінці HTML
divGalleryRef.innerHTML = createGallary(galleryItems);

//Створюємо обробник подій "натискання мишки на Блок <div class="gallery"></div>"
divGalleryRef.addEventListener("click", clickOnImg);
