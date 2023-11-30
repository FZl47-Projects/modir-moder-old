import {GetCostWithUser,GetAllCost} from "./api.js"

import { successAlert,CheckLogin } from "./Services.js";

const userid=CheckLogin();
// -----------------moadal-add-cost-month---------------------//
const btnsShowModall = document.querySelector("#add-cost-month");
const btnsSendModall = document.querySelector(".btn-send-modal");
const contentModalss = document.querySelector(".modal-add-cost");

  btnsShowModall.addEventListener("click", () => {
    contentModalss.classList.add("active");
  });

  contentModalss.addEventListener("click", (e) => {
    if (e.target.className === "inner-modal")
      contentModalss.classList.remove("active");
  });
// -----------------moadal-add-cost-month---------------------//
//  back tick for show bil
const renderPage = async ()=>{
  // get cost with user id 
  let cost = await GetCostWithUser(userid)
  // filter cost for bil
  cost = cost.filter(item=>item.condition=="bi")
  // foreach 
  cost.forEach(item => {
    let date =new Date(item.date);
    const mounth =  new Intl.DateTimeFormat('fa-IR-u-nu-latn', {month: 'short'}).format(date);
    const note = `<div class="row">
    <div class="month col-2 col-md-2 px-2">
      ${mounth}
    </div>
      <div class="item-hazineh col-10 col-md-10">
        <div class="col-8 px-1 py-1 des">
          <textarea
          name="des"
          id="des-request"
          cols="0"
          rows="0"
          disabled
        >${item.description}</textarea>
        </div>
        <div class="col-4 px-1 py-1">
          <input type="text" style="width:100% ;" value="${item.price}" disabled>
      </div>
      
      </div>
  </div>`
  document.querySelector("#record").innerHTML += note
  });

}



// set bil
const submit = document.querySelector("#submit")
//  event click submit 
submit.addEventListener('click',async()=>{
  // get date from input 
  const date = new Date(document.querySelector("#date").value)
  // get price and description form input 
  const price = document.querySelector("#price ")
  const description = document.querySelector("#description")
  //  creat data 
  const data = {
    "condition":"bi",
    "user":userid,
    "price" :price.value,
    "date" :date,
    "description" :description.value
  }
// api
await GetAllCost("POST",data);
// show success alert 
  successAlert("success" ,"قبض شما باموفقیت ثبت شد !")
  // reload page
  setTimeout(()=>{
    location.reload()
  },3000)
})
renderPage()