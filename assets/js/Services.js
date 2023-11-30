/* ----------------check login---------------------- */
const checkLogin = async (val) => {
  const result = window.localStorage.getItem(`${val}`);
  if (result === null || result === undefined || result === " ") {
    window.location.replace("./login.html");
  }
};
/* ----------------check login---------------------- */

/*------------------------check login admin-------------------------- */
const checkLoginAdmin = async (val) => {
  const result = window.localStorage.getItem(`${val}`);
  const res = JSON.parse(window.localStorage.getItem(`${val}`));
  if (
    result === null ||
    result === undefined ||
    result === " " ||
    res.type !== "admin"
  ) {
    window.location.replace("./loginAdmin.html");
  }
};
/*------------------------check login admin-------------------------- */

/*------------------------check login frosh-------------------------- */
const checkLoginFrosh = async (val) => {
  const result = window.localStorage.getItem(`${val}`);
  const res = JSON.parse(window.localStorage.getItem(`${val}`));
  if (
    result === null ||
    result === undefined ||
    result === " " ||
    res.type !== "sales_operator"
  ) {
    window.location.replace("../loginAdmin.html");
  }
};
/*------------------------check login frosh-------------------------- */

/*------------------------check login frosh-admin -------------------------- */
const checkLoginFroshAndAdmin = async (val, type) => {
  const result = window.localStorage.getItem(`${val}`);
  const res = JSON.parse(window.localStorage.getItem(`${val}`));

  if (result === null || result === undefined || result === " ") {
    window.location.replace("./loginAdmin.html");
  }

  if (type === "courier_operator") {
    window.location.replace("./loginAdmin.html");
  }
};
/*------------------------check login frosh-admin -------------------------- */

/*------------------------check login paik-------------------------- */
const checkLoginPaik = async (val) => {
  const result = window.localStorage.getItem(`${val}`);
  const res = JSON.parse(window.localStorage.getItem(`${val}`));

  if (
    result === null ||
    result === undefined ||
    result === " " ||
    res.type !== "courier_operator"
  ) {
    window.location.replace("../loginAdmin.html");
  }
};
/*------------------------check login paik-------------------------- */

/* ----------------exit account---------------------- */
const exitAccount = async () => {
  window.localStorage.removeItem("user");
  window.location.replace("./login.html");
};
/* ----------------exit account---------------------- */

/* ----------------show and close modal---------------------- */
const showModal = (modal) => {
  let contentModal = document.querySelector(`#${modal.id}`);
  contentModal.classList.add("active");
};
const closeModal = (modal) => {
  let contentModal = document.querySelector(`#${modal.id}`);
  contentModal.classList.remove("active");
};
/* ----------------show and close modal---------------------- */

/* ----------------sweet alert---------------------- */

const successAlert = (type, text) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: text,
  });
};
/* ----------------sweet alert---------------------- */

/* ----------------دکمه بازگشت---------------------- */
const backPage = () => {
  history.back();
};
/* ----------------دکمه بازگشت---------------------- */

/* ----------------چک کردن شماره همراه----------------------- */

const checkPhoneNumber = (phone) => {
  const result = PersianTools.phoneNumberValidator(phone);
  return result;
};
/* ----------------چک کردن شماره همراه----------------------- */

/* ----------------چک کردن کد ملی----------------------- */
const checkNotiondalCode = (code) => {
  const result = PersianTools.verifyIranianNationalId(code);
  return result;
};
/* ----------------چک کردن کد ملی----------------------- */

/*-------------clear localstorage---------------*/
const clearLocalStorage = (val) => {
  window.localStorage.removeItem(`${val}`);
};
/*-------------clear localstorage---------------*/
const CheckLogin=()=>{
  const userid =localStorage.getItem("UTid")
  console.log(userid);
  if(!userid){
      location.href="./login.html"
      
  }
  return userid
}
function separate(Number) 
{
Number+= '';
Number= Number.replace(',', '');
let x = Number.split('.');
let y = x[0];
let z= x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(y))
y= y.replace(rgx, '$1' + ',' + '$2');
return y+ z;
}
export {
  showModal,
  closeModal,
  successAlert,
  backPage,
  checkPhoneNumber,
  checkNotiondalCode,
  clearLocalStorage,
  checkLogin,
  exitAccount,
  checkLoginAdmin,
  checkLoginPaik,
  checkLoginFrosh,
  checkLoginFroshAndAdmin,
  CheckLogin,
  separate,
};
