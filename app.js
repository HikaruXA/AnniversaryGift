// Countdown logic
const countdownElement = document.querySelector(".countdown");
const carousel = document.querySelector(".carousel");
const mainContent = document.querySelector(".maincontent");
const header = document.querySelector(".header");

// Set target time (November 17, 2024, 12:00 AM Philippines time)
const targetDate = new Date("November 14, 2024 13:40:00 GMT+0800"); // GMT+0800 for Philippines

// Update countdown every second
const countdownInterval = setInterval(function () {
  // Get the current time
  const now = new Date();

  // Calculate the difference between the target date and current time
  const timeDifference = targetDate - now;

  // If the countdown reaches zero or below
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    countdownElement.style.display = "none"; // Hide countdown
    carousel.classList.add("show"); // Show carousel
    mainContent.classList.add("show"); // Show main content
    header.classList.add("show"); // Show header
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display countdown
    countdownElement.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000); // Update every 1 second

//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 10000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
document.addEventListener("DOMContentLoaded", function () {
  const memoriesLink = document.querySelector('a[href="#memories"]');
  const memoriesSection = document.querySelector("#memories");

  memoriesLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default anchor behavior (page jump)

    // Scroll smoothly to the "Memories" section
    memoriesSection.scrollIntoView({
      behavior: "smooth", // Smooth scrolling effect
      block: "start", // Align at the start of the section
    });
  });
});
