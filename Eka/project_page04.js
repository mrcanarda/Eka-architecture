let currentIndex = 0;

/********** LOKAL */

const imagesberfin = [
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 01.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 02.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 03.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 04.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 05.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 06.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 07.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 08.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 09.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 10.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 11.jpg",
  "Berfin Erdoğan Evi - Cihangir/Berfin Erdogann 19.jpg",
];

function updateGalleryberfin() {
  const galleryItemsberfin = document.querySelectorAll(
    ".gallery-item-berfin img"
  );
  for (let i = 0; i < galleryItemsberfin.length; i++) {
    galleryItemsberfin[i].src =
      imagesberfin[(currentIndex + i) % imagesberfin.length];
  }
  currentIndex = (currentIndex + 1) % imagesberfin.length;
}

setInterval(updateGalleryberfin, 5000);

// Modal functionality
const modalberfin = document.getElementById("myModalberfin");
const modalImgberfin = document.getElementById("img10");
const galleryItemsberfin = document.querySelectorAll(
  ".gallery-item-berfin img"
);

galleryItemsberfin.forEach((img, index) => {
  img.onclick = function () {
    modalberfin.style.display = "block";
    modalImgberfin.src = this.src;
  };
});

const closeberfin = document.querySelector(".closeberfin");
closeberfin.onclick = function () {
  modalberfin.style.display = "none";
};

/********** EMREKLINIK */

const imagesemre = [
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 01.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 02.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 03.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 04.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 05.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 06.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 07.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 08.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 09.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 10.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 11.jpg",
  "Emre Özenalp Kliniği - Nişantaşı/Emre Özenalp 12.jpg",
];

function updateGalleryemre() {
  const galleryItemsemre = document.querySelectorAll(".gallery-item-emre img");
  for (let i = 0; i < galleryItemsemre.length; i++) {
    galleryItemsemre[i].src =
      imagesemre[(currentIndex + i) % imagesemre.length];
  }
  currentIndex = (currentIndex + 1) % imagesemre.length;
}

setInterval(updateGalleryemre, 5000);

// Modal functionality
const modalemre = document.getElementById("myModalberfin");
const modalImgemre = document.getElementById("img10");
const galleryItemsemre = document.querySelectorAll(".gallery-item-emre img");

galleryItemsemre.forEach((img, index) => {
  img.onclick = function () {
    modalemre.style.display = "block";
    modalImgemre.src = this.src;
  };
});

const closeemre = document.querySelector(".closeemre");
closeemre.onclick = function () {
  modalemre.style.display = "none";
};

/********** GLORIA */

const imagesemaar = [
  "GLORİA JEANS COFFEE/gloria-01.jpg",
  "GLORİA JEANS COFFEE/gloria-02.jpg",
  "GLORİA JEANS COFFEE/gloria-03.jpg",
  "GLORİA JEANS COFFEE/gloria-04.jpg",
  "GLORİA JEANS COFFEE/gloria-05.jpg",
  "GLORİA JEANS COFFEE/gloria-06.jpg",
  "GLORİA JEANS COFFEE/gloria-07.jpg",
  "GLORİA JEANS COFFEE/gloria-08.jpg",
  "GLORİA JEANS COFFEE/gloria-09.jpg",
  "GLORİA JEANS COFFEE/gloria-10.jpg",
  "GLORİA JEANS COFFEE/gloria-13.jpg",
];

function updateGalleryemaar() {
  const galleryItemsemaar = document.querySelectorAll(
    ".gallery-item-emaar img"
  );
  for (let i = 0; i < galleryItemsemaar.length; i++) {
    galleryItemsemaar[i].src =
      imagesemaar[(currentIndex + i) % imagesemaar.length];
  }
  currentIndex = (currentIndex + 1) % imagesemaar.length;
}

setInterval(updateGalleryemaar, 5000);

// Modal functionality
const modalemaar = document.getElementById("myModalemaar");
const modalImgemaar = document.getElementById("img12");
const galleryItemsemaar = document.querySelectorAll(".gallery-item-emaar img");

galleryItemsemaar.forEach((img, index) => {
  img.onclick = function () {
    modalemaar.style.display = "block";
    modalImgemaar.src = this.src;
  };
});

const closemaar = document.querySelector(".closeemaar");
closemaar.onclick = function () {
  modalemaar.style.display = "none";
};

const infoButton_berfin = document.querySelector(".infoButton_berfin");
const berfin__info__page = document.getElementById("berfin__info__page");

infoButton_berfin.addEventListener("click", function () {
  berfin__info__page.classList.remove("hidden");
});

berfin__info__page.addEventListener("click", function () {
  berfin__info__page.classList.add("hidden");
});

const infoButton_emre = document.querySelector(".infoButton_emre");
const emre__info__page = document.getElementById("emre__info__page");

infoButton_emre.addEventListener("click", function () {
  emre__info__page.classList.remove("hidden");
});

emre__info__page.addEventListener("click", function () {
  emre__info__page.classList.add("hidden");
});

const infoButton_emaar = document.querySelector(".infoButton_emaar");
const emaar__info__page = document.getElementById("emaar__info__page");

infoButton_emaar.addEventListener("click", function () {
  emaar__info__page.classList.remove("hidden");
});

emaar__info__page.addEventListener("click", function () {
  emaar__info__page.classList.add("hidden");
});
