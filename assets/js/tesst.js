

// validation formsabtnam//

let form = document.querySelector(".form-signup");
let userName = document.querySelector("#name-signUp");
let notionalCode = document.querySelector("#notioanalCode-signUp");
let password = document.querySelector("#password-signUp");
let confirmPassword = document.querySelector("#confirmPassword-signUP");

console.log(notionalCode);
userName.focus();

// submit form
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  checkInput();
  if (!checkInput()) {
    const signUpUser = {
      name: `${userName.value}`,
      phonenumber: `${localStorage.getItem("phoneNumber")}`,
      password: `${password.value}`,
      nationalcode: `${notionalCode.value}`,
      signature: "test.jpg",
      credit_reserve: "0",
      credit_shopping: "120000",
      isActive: "false",
      business_license: "test.jpg",
    };
    await register(signUpUser);

    successAlert("عملیات با موفقیت انجام شد");
    clearLocalStorage("phoneNumber");
    setTimeout(() => {
      window.location.replace("./login.html");
    }, 2000);
  }
});

// validation inputs
const checkInput = () => {
  const userNameValue = userName.value.trim();
  const codeValue = notionalCode.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let errors = {};

  if (userNameValue === "") {
    setError(userName, "لطفا نام و نام خانوادگی خود را وارد کنید");
    errors.name = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess(userName);
    delete errors.name;
  }

  if (codeValue === "") {
    setError(notionalCode, "لطفا کدملی خود را وارد کنید");
    errors.notionalCode = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (!!checkNotiondalCode(`${codeValue}`) === false) {
    setError(notionalCode, "لطفا کدملی معتبر وارد کنید");
    errors.notionalCode = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess(notionalCode);
    delete errors.notionalCode;
  }

  if (passwordValue === "") {
    setError(password, "لطفا رمز عبور خود را وارد کنید");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (passwordValue.length < 8) {
    setError(password, "رمز عبور نباید کمتر از هشت کاراکتر باشد");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess(password);
    delete errors.password;
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "لطفا رمز عبور خود را وارد کنید");
    errors.confirmPassword = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (confirmPasswordValue != passwordValue) {
    setError(confirmPassword, "رمز عبور رااشتباه وارد کردید ");
    errors.confirmPassword = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess(confirmPassword);
    delete errors.confirmPassword;
  }

  return !!Object.keys(errors).length;
};

// set errors
const setError = (input, message) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");

  formGroup.classList.add("error");
  small.innerText = message;
};

// set success
const setSuccess = (input) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");
  formGroup.classList.add("success");
  small.innerText = "";
};
// validation formsabtnam//






// validation formvorod//
import { checkPhoneNumber  , successAlert} from "./Services.js";

let form_one = document.querySelector(".form-login");
let phoneNumber = document.querySelector("#phoneNumber-login");
let password_one = document.querySelector("#password-login");

// phoneNumber.focus();

// submit form
form_one.addEventListener("submit", async (e) => {
  e.preventDefault();
  checkInput_one();
  if (checkInput_one() === false) {
    let userLogin = {
      phonenumber: `${phoneNumber.value}`,
      password: `${password.value}`,
    };

    const result = await login(userLogin);

    if (result === false || result === "" || result === undefined) {
      successAlert("error", "کاربر یافت نشد");
    }
    else{
      window.localStorage.setItem("user" , result)

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 2000);
    }
  }
});

// validation inputs
const checkInput_one = () => {
  const phoneValue = phoneNumber.value.trim();
  const passwordValue = password_one.value.trim();
  let errors = {};
  if (phoneValue === "") {
    setError_one(phoneNumber, "لطفا ایمیل خود را وارد کنید");
    errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (checkPhoneNumber(`${phoneValue}`) === false) {
    setError_one(phoneNumber, "لطفا شماره همراه معتبر وارد کنید");
    errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess_one(phoneNumber);
    delete errors.phoneNumber;
  }

  if (passwordValue === "") {
    setError_one(password_one, "لطفا رمز عبور خود را وارد کنید");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (passwordValue.length < 2) {
    setError_one(password_one, "رمز عبور نباید کمتر از هشت کاراکتر باشد");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccess_one(password_one);
    delete errors.password;
  }

  return !!Object.keys(errors).length;
};

// set errors
const setError_one = (input, message) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");

  formGroup.classList.add("error");
  small.innerText = message;
};

// set success
const setSuccess_one = (input) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");
  formGroup.classList.add("success");
  small.innerText = "";
};




































let btns = document.querySelectorAll(".btn-form");
let contents = document.querySelectorAll(".content");

let regiser_btn = document.querySelector(".btn-register");
let login_btn = document.querySelector(".btn-login");
let btn_link_register = document.querySelector(".btn-link-register");

let Registration_Form = document.querySelector(".Registration-Form");
let login_Form = document.querySelector(".form-login");

let Registration_btn = document.querySelector(".Registration-btn");

let form_send_code = document.querySelector(".form-send-code");
let send_code_btn = document.querySelector(".send-code-btn");

let form_sabtenam_nahayi = document.querySelector(".form-sabtenam-nahayi");

// move between formsabtenam-vorod //
btns.forEach((item, index) => {
  item.addEventListener("click", (eve) => {
    eve.preventDefault()
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    contents.forEach((item) => {
      item.classList.remove("active");
    });
    btns[index].classList.add("active");
    contents[index].classList.add("active");
  });
});
// move between formsabtenam-vorod //

btn_link_register.addEventListener("click", () => {
  regiser_btn.classList.add("active");
  login_btn.classList.remove("active");
  login_Form.classList.remove("active");
  Registration_Form.classList.add("active");

});

Registration_btn.addEventListener("click", (eve) => {
  eve.preventDefault()
  form_send_code.classList.add("active");
  Registration_Form.classList.remove("active");
});


send_code_btn.addEventListener("click", (eve) => {
  eve.preventDefault()
  form_send_code.classList.remove("active");
  form_sabtenam_nahayi.classList.add("active");
 
});

let btns_responsive = document.querySelectorAll(".btn-form-responsive");
let contents_responsive = document.querySelectorAll(".content-form-responsive");
let btn_link_register_responsive = document.querySelector(".btn-link-register");
let regiser_btn_responsive = document.querySelector(".btn-register");
let login_btn_responsive = document.querySelector(".btn-login");
let Registration_btn_responsive = document.querySelector(".Registration-btn-responsive");
let Registration_Form_responsive = document.querySelector(".Registration-Form-responsive");
let login_Form_responsive = document.querySelector(".form-login-responsive");
let form_send_code_responsive = document.querySelector(".form-send-code-responsive");
let send_code_btn_responsive = document.querySelector(".send-code-btn-responsive");

let form_sabtenam_nahayi_responsive = document.querySelector(".form-sabtenam-nahayi-responsive");

btns_responsive.forEach((item, index) => {
  item.addEventListener("click", () => {
    btns_responsive.forEach((item) => {
      item.classList.remove("active");
    });
    contents_responsive.forEach((item) => {
      item.classList.remove("active");
    });
    btns_responsive[index].classList.add("active");
    contents_responsive[index].classList.add("active");
  });
});
btn_link_register_responsive.addEventListener("click", () => {
  regiser_btn_responsive.classList.add("active");
  login_btn_responsive.classList.remove("active");
  Registration_Form_responsive.classList.add("active");
  login_Form_responsive.classList.remove("active");

});

Registration_btn_responsive.addEventListener("click", () => {
  form_send_code_responsive.classList.add("active");
  Registration_Form_responsive.classList.remove("active");
});


send_code_btn_responsive.addEventListener("click", () => {
  form_send_code_responsive.classList.remove("active");
  form_sabtenam_nahayi_responsive.classList.add("active");
 
});







