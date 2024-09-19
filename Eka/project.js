let currentIndex = 0;
const images = [
  "EMAAR GALLİARD/galliard-01.jpg",
  "EMAAR GALLİARD/galliard-02.jpg",
  "EMAAR GALLİARD/galliard-03.jpg",
  "EMAAR GALLİARD/galliard-04.jpg",
  "EMAAR GALLİARD/galliard-05.jpg",
  "EMAAR GALLİARD/galliard-06.jpg",
  "EMAAR GALLİARD/galliard-07.jpg",
  "EMAAR GALLİARD/galliard-08.jpg",
  "EMAAR GALLİARD/galliard-09.jpg",
  "EMAAR GALLİARD/galliard-10.jpg",
  "EMAAR GALLİARD/galliard-11.jpg",
  "EMAAR GALLİARD/galliard-12.jpg",
  "EMAAR GALLİARD/galliard-13.jpg",
  "EMAAR GALLİARD/galliard-14.jpg",
  "EMAAR GALLİARD/galliard-15.jpg",
  "EMAAR GALLİARD/galliard-16.jpg",
  "EMAAR GALLİARD/galliard-17.jpg",
  "EMAAR GALLİARD/galliard-18.jpg",
];

function updateGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].src = images[(currentIndex + i) % images.length];
  }
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateGallery, 5000);

// Modal functionality
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((img, index) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

const close = document.querySelector(".close");
close.onclick = function () {
  modal.style.display = "none";
};

/********** BKM */

const imagesbkm = [
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq01.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq02.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq03.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq04.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq05.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq06.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq07.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq08.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq09.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq10.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq11.jpg",
  "BKM Mutfak - Uniq Maslak/bkm_mutfak_uniq12.jpg",
];

function updateGallerybkm() {
  const galleryItemsbkm = document.querySelectorAll(".gallery-item-bkm img");
  for (let i = 0; i < galleryItemsbkm.length; i++) {
    galleryItemsbkm[i].src = imagesbkm[(currentIndex + i) % imagesbkm.length];
  }
  currentIndex = (currentIndex + 1) % imagesbkm.length;
}

setInterval(updateGallerybkm, 5000);

// Modal functionality
const modalbkm = document.getElementById("myModalbkm");
const modalImgbkm = document.getElementById("img02");
const galleryItemsbkm = document.querySelectorAll(".gallery-item-bkm img");

galleryItemsbkm.forEach((img, index) => {
  img.onclick = function () {
    modalbkm.style.display = "block";
    modalImgbkm.src = this.src;
  };
});

const closebkm = document.querySelector(".closebkm");
closebkm.onclick = function () {
  modalbkm.style.display = "none";
};

/********** BKM ATOLYE */

const imagesbkmatolye = [
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye01.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye02.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye03.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye04.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye05.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye06.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye07.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye08.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye09.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye10.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye11.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye12.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye13.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye14.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye15.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye16.jpg",
  "BKM MutfakAtölye - Ankara/bkmmutfakatolye17.jpg",
];

function updateGallerybkmatolye() {
  const galleryItemsbkmatolye = document.querySelectorAll(
    ".gallery-item-bkmatolye img"
  );
  for (let i = 0; i < galleryItemsbkmatolye.length; i++) {
    galleryItemsbkmatolye[i].src =
      imagesbkmatolye[(currentIndex + i) % imagesbkmatolye.length];
  }
  currentIndex = (currentIndex + 1) % imagesbkm.length;
}

setInterval(updateGallerybkmatolye, 5000);

// Modal functionality
const modalbkmatolye = document.getElementById("myModalbkmatolye");
const modalImgbkmatolye = document.getElementById("img03");
const galleryItemsbkmatolye = document.querySelectorAll(
  ".gallery-item-bkmatolye img"
);

galleryItemsbkmatolye.forEach((img, index) => {
  img.onclick = function () {
    modalbkmatolye.style.display = "block";
    modalImgbkmatolye.src = this.src;
  };
});

const closebkmatolye = document.querySelector(".closebkmatolye");
closebkmatolye.onclick = function () {
  modalbkmatolye.style.display = "none";
};
