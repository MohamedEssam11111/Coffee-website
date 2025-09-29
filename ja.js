const hearts = document.querySelectorAll(
  ".sec1 .four_icons .grouping4 .card .heart img"
);

hearts.forEach((heart) => {
  heart.addEventListener("mouseenter", () => {
    heart.src = "imgs/favorite_24dp_EA3323_FILL1_wght700_GRAD0_opsz24.png";
  });

  heart.addEventListener("mouseleave", () => {
    heart.src = "imgs/favorite_24dp_E3E3E3_FILL0_wght700_GRAD0_opsz24.png";
  });
});
const card1 = document.querySelector(".sec2 .grouping .cards .card1");
const card2 = document.querySelector(".sec2 .grouping .cards .card2");
const card3 = document.querySelector(".sec2 .grouping .cards .card3");
const dot1 = document.querySelector("#a1 img");
const dot2 = document.querySelector("#a2 img");
const dot3 = document.querySelector("#a3 img");

card1.addEventListener("mouseenter", () => {
  dot1.style.border = "11.9px solid #ff8c00ff";
});

card1.addEventListener("mouseleave", () => {
  dot1.style.border = "none";
});
card2.addEventListener("mouseenter", () => {
  dot2.style.border = "11.9px solid #ff8c00ff";
});

card2.addEventListener("mouseleave", () => {
  dot2.style.border = "none";
});
card3.addEventListener("mouseenter", () => {
  dot3.style.border = "11.9px solid #ff8c00ff";
});

card3.addEventListener("mouseleave", () => {
  dot3.style.border = "none";
});

const five = document.querySelectorAll(
  ".sec2 .grouping .cards .card .up-card .five-stars"
);
const star = document.querySelectorAll(
  ".sec2 .grouping .cards .card .up-card .five-stars .star"
);

star[0].addEventListener("mouseenter", () => {
  const img = five[0].querySelectorAll(
    ".sec2 .grouping .cards .card .up-card .five-stars img"
  );
});

// ----------------------------------------------
const wrap_icon = document.querySelector(".wrap-menu .menu-icon");
const wrap_card = document.querySelector(".wrap-menu .menue-card");

wrap_icon.addEventListener("click", () => {
  wrap_card.classList.toggle("active");
});
