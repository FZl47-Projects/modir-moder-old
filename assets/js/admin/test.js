let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");



btn1.addEventListener("click", () => {
    content1.classList.add("active");
    content2.classList.remove("active")
  });
 

  btn2.addEventListener("click", () => {
    content2.classList.add("active");
    content1.classList.remove("active")
  });