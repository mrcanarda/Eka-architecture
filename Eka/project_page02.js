let currentIndex = 0;

/********** HUQQABAZ */

const imageshuqqabaz = [
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz01.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz02.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz03.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz04.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz05.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz07.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz08.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz09.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz10.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz11.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz12.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz13.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz14.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz15.jpg",
  "HUQQABAZ - HİLLTOWN MALTEPE/Huqqabaz16.jpg",
];

function updateGalleryhuqqabaz() {
  const galleryItemshuqqabaz = document.querySelectorAll(
    ".gallery-item-huqqabaz img"
  );
  for (let i = 0; i < galleryItemshuqqabaz.length; i++) {
    galleryItemshuqqabaz[i].src =
      imageshuqqabaz[(currentIndex + i) % imageshuqqabaz.length];
  }
  currentIndex = (currentIndex + 1) % imageshuqqabaz.length;
}

setInterval(updateGalleryhuqqabaz, 5000);

// Modal functionality
const modalhuqqabaz = document.getElementById("myModalhuqqabaz");
const modalImghuqqabaz = document.getElementById("img04");
const galleryItemshuqqabaz = document.querySelectorAll(
  ".gallery-item-huqqabaz img"
);

galleryItemshuqqabaz.forEach((img, index) => {
  img.onclick = function () {
    modalhuqqabaz.style.display = "block";
    modalImghuqqabaz.src = this.src;
  };
});

const closehuqqabaz = document.querySelector(".closehuqqabaz");
closehuqqabaz.onclick = function () {
  modalhuqqabaz.style.display = "none";
};

/********** RIVA263 */

const imagesriva263 = [
  "Riva 263/Riva263-01.jpg",
  "Riva 263/Riva263-02.jpg",
  "Riva 263/Riva263-03.jpg",
  "Riva 263/Riva263-04.jpg",
  "Riva 263/Riva263-05.jpg",
  "Riva 263/Riva263-06.jpg",
  "Riva 263/Riva263-07.jpg",
  "Riva 263/Riva263-08.jpg",
  "Riva 263/Riva263-09.jpg",
  "Riva 263/Riva263-10.jpg",
  "Riva 263/Riva263-12.jpg",
];

function updateGalleryriva263() {
  const galleryItemsriva263 = document.querySelectorAll(
    ".gallery-item-riva263 img"
  );
  for (let i = 0; i < galleryItemsriva263.length; i++) {
    galleryItemsriva263[i].src =
      imagesriva263[(currentIndex + i) % imagesriva263.length];
  }
  currentIndex = (currentIndex + 1) % imagesriva263.length;
}

setInterval(updateGalleryriva263, 5000);

// Modal functionality
const modalriva263 = document.getElementById("myModalriva263");
const modalImgriva263 = document.getElementById("img05");
const galleryItemsriva263 = document.querySelectorAll(
  ".gallery-item-riva263 img"
);

galleryItemsriva263.forEach((img, index) => {
  img.onclick = function () {
    modalriva263.style.display = "block";
    modalImgriva263.src = this.src;
  };
});

const closeriva263 = document.querySelector(".closeriva263");
closeriva263.onclick = function () {
  modalriva263.style.display = "none";
};

/********** RIVA918 */

const imagesriva918 = [
  "Riva 918/riva918-01.jpg",
  "Riva 918/riva918-02.jpg",
  "Riva 918/riva918-03.jpg",
  "Riva 918/riva918-04.jpg",
  "Riva 918/riva918-05.jpg",
  "Riva 918/riva918-06.jpg",
  "Riva 918/riva918-07.jpg",
  "Riva 918/riva918-08.jpg",
  "Riva 918/riva918-09.jpg",
  "Riva 918/riva918-10.jpg",
  "Riva 918/riva918-11.jpg",
];

function updateGalleryriva918() {
  const galleryItemsriva918 = document.querySelectorAll(
    ".gallery-item-riva918 img"
  );
  for (let i = 0; i < galleryItemsriva918.length; i++) {
    galleryItemsriva918[i].src =
      imagesriva918[(currentIndex + i) % imagesriva918.length];
  }
  currentIndex = (currentIndex + 1) % imagesriva918.length;
}

setInterval(updateGalleryriva918, 5000);

// Modal functionality
const modalriva918 = document.getElementById("myModalriva918");
const modalImgriva918 = document.getElementById("img06");
const galleryItemsriva918 = document.querySelectorAll(
  ".gallery-item-riva918 img"
);

galleryItemsriva918.forEach((img, index) => {
  img.onclick = function () {
    modalriva918.style.display = "block";
    modalImgriva918.src = this.src;
  };
});

const closeriva918 = document.querySelector(".closeriva918");
closeriva918.onclick = function () {
  modalriva918.style.display = "none";
};

const infoButton_riva263 = document.querySelector(".infoButton_riva263");
const riva263__info__page = document.getElementById("riva263__info__page");

const infoButton_riva918 = document.querySelector(".infoButton_riva918");
const riva918__info__page = document.querySelector(".riva918__info__page");

const infoButton_huqqabaz = document.querySelector(".infoButton_huqqabaz");
const huqqabaz__info__page = document.getElementById("huqqabaz__info__page");

infoButton_riva263.addEventListener("click", function () {
  riva263__info__page.classList.remove("hidden");
});

riva263__info__page.addEventListener("click", function () {
  riva263__info__page.classList.add("hidden");
});

infoButton_riva918.addEventListener("click", function () {
  riva918__info__page.classList.remove("hidden");
});

riva918__info__page.addEventListener("click", function () {
  riva918__info__page.classList.add("hidden");
});

infoButton_huqqabaz.addEventListener("click", function () {
  huqqabaz__info__page.classList.remove("hidden");
});

huqqabaz__info__page.addEventListener("click", function () {
  huqqabaz__info__page.classList.add("hidden");
});
