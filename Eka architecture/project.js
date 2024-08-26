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
const modalhuqqabaz = document.getElementById("myModalbkmatolye");
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
const modalmaya = document.getElementById("myModalriva918");
const modalImgmaya = document.getElementById("img06");
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
