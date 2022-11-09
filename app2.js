const test = document.querySelector(".divVignettes");
const test2 = document.querySelector(".testimg");

const taille = test.scrollHeight;
const taille2 = test.scrollWidth;
const taille3 = test2.scrollHeight;

console.log(taille);
console.log(taille2);
console.log(taille3);

// allQuestions.forEach((element) => {
//   element.addEventListener("click", function () {
//     const height = this.parentNode.childNodes[3].scrollHeight;
//     const currentChoice = this.parentNode.childNodes[3];

//     if (this.childNodes[3].src.includes("down")) {
//       this.childNodes[3].src = "/images/logoSite/chevron-up-solid.svg";
//       gsap.to(currentChoice, {
//         duration: 0.2,
//         height: height + 40,
//         padding: "20px 15px",
//         visibility: "visible",
//       });
//     } else if (this.childNodes[3].src.includes("up")) {
//       this.childNodes[3].src = "/images/logoSite/chevron-down-solid.svg";
//       gsap.to(currentChoice, {
//         duration: 0.2,
//         height: 0,
//         padding: "0px 15px",
//         visibility: "hidden",
//       });
//     }
//   });
// });
