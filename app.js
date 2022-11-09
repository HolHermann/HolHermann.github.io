const allQuestions = document.querySelectorAll(".visible-pannel");

allQuestions.forEach((element) => {
  element.addEventListener("click", function () {
    const height = this.parentNode.childNodes[3].scrollHeight;
    const currentChoice = this.parentNode.childNodes[3];

    if (this.childNodes[3].src.includes("down")) {
      this.childNodes[3].src = "/images/logoSite/chevron-up-solid.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height + 40,
        opacity: 1,
        padding: "20px 15px",
      });
    } else if (this.childNodes[3].src.includes("up")) {
      this.childNodes[3].src = "/images/logoSite/chevron-down-solid.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        padding: "0px 15px",
      });
    }
  });
});
