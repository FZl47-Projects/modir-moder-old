import {SendTicket,GetWithUser} from "./api.js"

import {successAlert,CheckLogin} from "./Services.js"

const userid=CheckLogin();
const user = await GetWithUser(userid)

const note =`
<section class="title-gg" style="z-index:-5;">
<span style="z-index: 5;">پروفایل</span>
</section>
<section class="up-profile col-12 col-lg-6">
<div class="row boxx">
    <div class="col-4 col-md-3">
        <img src="./assets/images/profile2.png" alt="" class="img-profile">
        
      <label for="javaz" class="label-apload"style="width:
        200px;"><img src="../assets/images/upload.png" alt="" class="upload-profile">
        </label>
 
    </div>
    <div class="col-8 col-md-9">
        <div class="col-12">
            <div class="form-group line profile-edit">
                <input class="price"
                  type="text"
                  name="name-oprator"
                  id="name"
                  value="${user.name}"
                />
                <span class="btn-edit">ویرایش</span>
                <small></small>
            </div>
        </div>

        <div class="col-12">
            <div class="form-group  profile-edit">
                <input class="price"
                  type="text"
                  name="name-oprator"
                  id="city"
                  value="${user.city} "
                />
                <span class="btn-edit">ویرایش</span>
                <small></small>
            </div>
        </div>
    </div>
</div>
</section>


<div class="content-profile">
<div class="content-inputss">
  <div class="col-12 col-md-6 px-2">
    <div class="form-group-information profile-edit">
        <span class="btn">شماره تلفن</span>
      <input
        type="text"
        name="name-oprator"
        id="name"
        value="${user.phone_number} "
      />
      
      <small></small>
    </div>
  </div>
  <div class="col-12 col-md-6 px-2 ">
    <div class="form-group-information">
        <span class="btn">پسورد</span>
      <input
        type="password"
        name="personnel-code"
        id="address"
        value="23585222112"
      />
      <small></small>
    </div>
  </div>
  <div class="col-12 col-md-6 px-2">
    <div class="form-group-information">
        <span class="btn">آدرس رستوران</span>
      <input
        type="text"
        name="phone-number"
        id="phone"
        value="------"
      />
     
      <small></small>
    </div>
  </div>
 
    <!-- <div class="col-12 col-md-6 px-2">
        <a href="./moshavereh.html" class="item-content">
            <span>درخواست مشاوره</span>
            <img src="./assets/images/back-icon.png" alt="icon">
        </a>

    </div> -->
    <div class="col-12 col-md-6 px-2">
        <a href="#" class="item-content">
            <span class="ersal-ticket">ارسال تیکت </span>
            <img src="./assets/images/back-icon.png" alt="icon">
        </a>
    </div>
    <div class="col-12 col-md-6 px-2">
      <a href="tikets.html" class="item-content">
          <span class="ersal-ticket">همه تیکت ها </span>
          <img src="./assets/images/back-icon.png" alt="icon">
      </a>
  </div>

</div>
</div>

<div class="content-modal modal-ticket">
<div class="inner-modal">
    <section class="content-new-request">
        <div class="title px-4">ارسال تیکت جدید</div>

        <div class="item-request des-request px-4 mt-3">
          <div class="title">توضیحات</div>
          <div class="inner col-12">
            <textarea
              name="des"
              id="des-request"
              cols="30"
              rows="10"
              class="p-3"
              placeholder="توضیحات خود را بنویسید"
            ></textarea>
          </div>
        </div>
        <div class="btn-repire py-3 text-center">
          <span class="repire-btn" id="send-ticket">ارسال تیکت</span>
          <span class="cancel" id="cancel-ticket">لغو</span>
        </div>
      </section>
</div>

</div>

`
document.querySelector(".main").innerHTML=note
/*------------------show and close modal-ticket ------------------- */
let btnsShowModal = document.querySelector(".ersal-ticket");
let btnsCloseModal = document.querySelector(".cancel");
let modals = document.querySelector(".modal-ticket");
let overalyModals = document.querySelector(".modal-ticket .inner-modal");



    btnsShowModal.addEventListener("click", () => {
    modals.classList.add("active");
  });


    btnsCloseModal.addEventListener("click", () => {
    modals.classList.remove("active");
  });


  overalyModals.addEventListener("click", (e) => {
    if (e.target.className === "inner-modal"){
      modals.classList.remove("active");
    }
  });
/*------------------show and close modal-ticket ------------------- */

/*-------------------------------disabled and enabled inputs-edit-profile-------------------------------- */
const inputs = document.querySelectorAll(".form-group .price");
const btnEdit = document.querySelectorAll(".btn-edit");

inputs.forEach((item) => {
    item.disabled = true;
});

btnEdit.forEach((item, index) => {
    item.addEventListener("click", () => {
        inputs[index].disabled = false;
        inputs[index].focus();

    });
});
/*-------------------------------disabled and enabled inputs-edit-profile-------------------------------- */
const  name = document.querySelectorAll("#name")
name.forEach(element => {
  console.log(element.tagName);
  if(element.tagName =="INPUT")
    // element.value = "majid"
    console.log("hello");
  else  
  console.log("hello");

    // element.innerHTML="majid"
});
document.querySelector("#city").innerHTML="kerman"


// send ticket 
const submit = document.querySelector("#send-ticket")
submit.addEventListener('click',()=>{
  var description = document.querySelector("#des-request").value 
  const data = {
    "message": description,
  "status":"wa",
  "user":userid
  }
  SendTicket(data)
  successAlert('success' , 'تیکت با موفقیت ارسال شد!')
  setTimeout(() => {
    modals.classList.remove("active");
  }, 2000);
})
// end send ticket 