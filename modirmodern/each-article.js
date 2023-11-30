/* ----------------دکمه بازگشت---------------------- */
const backPage = () => {
    history.back();
  };
  /* ----------------دکمه بازگشت---------------------- */
/*------------------------back page icon-------------------*/
let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  backPage();
});
/*------------------------back page icon-------------------*/