let currentIndex = 0;

/********** MAYA */

const imagesmaya = [
  "Maya Eczanesi - Suadiye/MayaEczanesi01.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi02.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi03.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi04.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi05.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi06.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi07.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi08.jpg",
  "Maya Eczanesi - Suadiye/MayaEczanesi09.jpg",
];

function updateGallerymaya() {
  const galleryItemsmaya = document.querySelectorAll(".gallery-item-maya img");
  for (let i = 0; i < galleryItemsmaya.length; i++) {
    galleryItemsmaya[i].src =
      imagesmaya[(currentIndex + i) % imagesmaya.length];
  }
  currentIndex = (currentIndex + 1) % imagesmaya.length;
}

setInterval(updateGallerymaya, 5000);

// Modal functionality
const modalmaya = document.getElementById("myModalmaya");
const modalImgmaya = document.getElementById("img07");
const galleryItemsmaya = document.querySelectorAll(".gallery-item-maya img");

galleryItemsmaya.forEach((img, index) => {
  img.onclick = function () {
    modalmaya.style.display = "block";
    modalImgmaya.src = this.src;
  };
});

const closemaya = document.querySelector(".closemaya");
closemaya.onclick = function () {
  modalmaya.style.display = "none";
};

/********** ONG */

const imagesong = [
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 01.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 02.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 03.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 04.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 05.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 06.jpg",
  "ONG Yoga Center - Gümüşsuyu/ONG_Yoga 07.jpg",
];

function updateGalleryong() {
  const galleryItemsong = document.querySelectorAll(".gallery-item-ong img");
  for (let i = 0; i < galleryItemsong.length; i++) {
    galleryItemsong[i].src = imagesong[(currentIndex + i) % imagesong.length];
  }
  currentIndex = (currentIndex + 1) % imagesong.length;
}

setInterval(updateGalleryong, 5000);

// Modal functionality
const modalong = document.getElementById("myModalong");
const modalImgong = document.getElementById("img08");
const galleryItemsong = document.querySelectorAll(".gallery-item-ong img");

galleryItemsong.forEach((img, index) => {
  img.onclick = function () {
    modalong.style.display = "block";
    modalImgong.src = this.src;
  };
});

const closeong = document.querySelector(".closeong");
closeong.onclick = function () {
  modalong.style.display = "none";
};

/********** LOKAL */

const imageslokal = [
  "Lokal Plants - Etiler/Lokal Plants 01.jpg",
  "Lokal Plants - Etiler/Lokal Plants 02.jpg",
  "Lokal Plants - Etiler/Lokal Plants 03.jpg",
  "Lokal Plants - Etiler/Lokal Plants 05.jpg",
  "Lokal Plants - Etiler/Lokal Plants 06.jpg",
  "Lokal Plants - Etiler/Lokal Plants 07.jpg",
  "Lokal Plants - Etiler/Lokal Plants 08.jpg",
  "Lokal Plants - Etiler/Lokal Plants 09.jpg",
  "Lokal Plants - Etiler/Lokal Plants 10.jpg",
  "Lokal Plants - Etiler/Lokal Plants 11.jpg",
  "Lokal Plants - Etiler/Lokal Plants 12.jpg",
  "Lokal Plants - Etiler/Lokal Plants 13.jpg",
];

function updateGallerylokal() {
  const galleryItemslokal = document.querySelectorAll(
    ".gallery-item-lokal_plants img"
  );
  for (let i = 0; i < galleryItemslokal.length; i++) {
    galleryItemslokal[i].src =
      imageslokal[(currentIndex + i) % imageslokal.length];
  }
  currentIndex = (currentIndex + 1) % imageslokal.length;
}

setInterval(updateGallerylokal, 5000);

// Modal functionality
const modallokal = document.getElementById("myModalong");
const modalImglokal = document.getElementById("img08");
const galleryItemslokal = document.querySelectorAll(
  ".gallery-item-lokal_plants img"
);

galleryItemslokal.forEach((img, index) => {
  img.onclick = function () {
    modallokal.style.display = "block";
    modalImglokal.src = this.src;
  };
});

const closelokal = document.querySelector(".closelokal");
closelokal.onclick = function () {
  modallokal.style.display = "none";
};

const infoButton_maya = document.querySelector(".infoButton_maya");
const maya__info__page = document.getElementById("maya__info__page");

infoButton_maya.addEventListener("click", function () {
  maya__info__page.classList.remove("hidden");
});

maya__info__page.addEventListener("click", function () {
  maya__info__page.classList.add("hidden");
});

const ong__info__page = document.getElementById("ong__info__page");
const infoButton_ong = document.querySelector(".infoButton_ong");

infoButton_ong.addEventListener("click", function () {
  ong__info__page.classList.remove("hidden");
});

ong__info__page.addEventListener("click", function () {
  ong__info__page.classList.add("hidden");
});

const infoButton_lokal_plants = document.querySelector(
  ".infoButton_lokal_plants"
);
const lokal_plants__info__page = document.getElementById(
  "lokal_plants__info__page"
);

infoButton_lokal_plants.addEventListener("click", function () {
  lokal_plants__info__page.classList.remove("hidden");
});

lokal_plants__info__page.addEventListener("click", function () {
  lokal_plants__info__page.classList.add("hidden");
});
