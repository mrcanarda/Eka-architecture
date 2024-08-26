///////////////////////////////////////////////////////
/////// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header__");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const gallard_info = document.querySelector(".gallard_info");
const gallard__info__page = document.getElementById("gallard__info__page");
const infoButton_bkmmaslak = document.querySelector(".infoButton_bkmmaslak");
const bkmm__mutfak__maslak__info__page = document.getElementById(
  "bkmm__mutfak__maslak__info__page"
);
const infoButton_bkmmutfakatolye = document.querySelector(
  ".infoButton_bkmmutfakatolye"
);
const bkmm__mutfak__atolye__info__page = document.getElementById(
  "bkmm__mutfak__atolye__info__page"
);
const infoButton_huqqabaz = document.querySelector(".infoButton_huqqabaz");
const huqqabaz__info__page = document.getElementById("huqqabaz__info__page");
const infoButton_maya = document.querySelector(".infoButton_maya");
const maya__info__page = document.getElementById("maya__info__page");
const infoButton_riva263 = document.querySelector(".infoButton_riva263");
const riva263__info__page = document.getElementById("riva263__info__page");

const infoButton_riva918 = document.querySelector(".infoButton_riva918");
const riva918__info__page = document.querySelector(".riva918__info__page");

gallard_info.addEventListener("click", function () {
  gallard__info__page.classList.remove("hidden");
});

gallard__info__page.addEventListener("click", function () {
  gallard__info__page.classList.add("hidden");
});

infoButton_bkmmaslak.addEventListener("click", function () {
  bkmm__mutfak__maslak__info__page.classList.remove("hidden");
});

bkmm__mutfak__maslak__info__page.addEventListener("click", function () {
  bkmm__mutfak__maslak__info__page.classList.add("hidden");
});

infoButton_bkmmutfakatolye.addEventListener("click", function () {
  bkmm__mutfak__atolye__info__page.classList.remove("hidden");
});

bkmm__mutfak__atolye__info__page.addEventListener("click", function () {
  bkmm__mutfak__atolye__info__page.classList.add("hidden");
});

infoButton_huqqabaz.addEventListener("click", function () {
  huqqabaz__info__page.classList.remove("hidden");
});

huqqabaz__info__page.addEventListener("click", function () {
  huqqabaz__info__page.classList.add("hidden");
});

infoButton_maya.addEventListener("click", function () {
  maya__info__page.classList.remove("hidden");
});

maya__info__page.addEventListener("click", function () {
  maya__info__page.classList.add("hidden");
});

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
