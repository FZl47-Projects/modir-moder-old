import {
    checkNotiondalCode,
    checkPhoneNumber,
    clearLocalStorage,
    successAlert
  } from "./Services.js";
  
import {signin} from "./api.js"
  let form = document.querySelector(".form-signup");
  let userName = document.querySelector("#name-signUp");
  let notionalCode = document.querySelector("#notioanalCode-signUp");
  let password = document.querySelector("#password-signUp");
  let confirmPassword = document.querySelector("#confirmPassword-signUP");
  let resturant_name= document.querySelector("#resturant_name")
  
  console.log(notionalCode);
  userName.focus();
  console.log(form);
  // submit form
  form.addEventListener("submit", async (e) => {

    e.preventDefault();
    checkInput();

    if (!checkInput()) {

    
      const signUpUser = 
        {
          "name":  `${userName.value}`,
          "phone_number": `+98${localStorage.getItem("phoneNumber")}`,
          "password": `${password.value}`,  
          "restaurantName": `${resturant_name.value}`,
          "city":`${notionalCode.value}`
          }
          
      
      console.log(signUpUser);
     console.log(await signin(signUpUser))
  
      successAlert("success","عملیات با موفقیت انجام شد");
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
    } else if (codeValue === false) {
      setError(notionalCode, "لطفا نام شهر معتبر وارد کنید");
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