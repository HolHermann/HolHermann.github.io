const allCross = document.querySelectorAll(".visible-pannel");
console.log(allCross);

allCross.forEach((element) => {
  element.addEventListener("click", function () {
    const height = this.parentNode.childNodes[3].scrollHeight;
    const height2 = this.parentNode.parentNode.childNodes[3].scrollHeight;

    const currentChoice = this.parentNode.childNodes[3];

    console.log(height2);
    console.log(height);
    console.log(currentChoice);

    const test = this.childNodes[3].src;

    console.log(test);
    if (this.childNodes[3].src.includes("croix")) {
      this.childNodes[3].src = "/images/logoSite/minus.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height + 40,
        opacity: 1,
        padding: "20px 15px",
      });
    } else if (this.childNodes[3].src.includes("minus")) {
      this.childNodes[3].src = "/images/logoSite/croix.svg";
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        padding: "0px 15px",
      });
    }
  });
});
