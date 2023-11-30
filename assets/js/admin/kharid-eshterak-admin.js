
import {GetAllSubscription} from "../api.js"
import {successAlert} from "../Services.js"
const renderPakage = async ()=>{
const subscription = await GetAllSubscription()

subscription.forEach(item=>{
  const note = `<!-- item-pakage -->
  <div class="col-12 col-md-4 p-2">
    <div class="content-pakage">
        <div class="name-pakage">
            <span>${item.name}</span>
            <div class="left">
                <span class="trash"><img src="../assets/images/trash.png" alt=""></span>
                <span class="edit" id="edit-btn"><img src="../assets/images/edit-food.png" alt=""></span>
            </div>
        </div>
  
        <div class="col-12 p-3">
            <span class="title-des">توضیحات</span>
            <div class="description-pakage">${item.description}</div>
        </div>
        
       
        <div class="price">
            <p> ${item.price-(item.discount*item.price)/100} 
                <del> ${item.price} </del>
             </p> 
        </div>
        
                       
  
    </div>
  </div>
  <!-- item-pakage --> `
  const modal = ` <div class="content-modal modal-edit-pakage">
  <div class="inner-modal">
    <form class="px-4 pt-2">
      <div class="py-2">
       <div class="item-cost-month">
         <div class="title-input">نام پکیج</div>
         <input type="text" value="${item.name}" id="name-pakage">
       </div>
        <textarea
        
          name="modal"
          class="input-modal"
          cols="30"
          rows="7"
          
        >${item.description}</textarea>
        <div class="item-cost-month">
          <div class="title-input">قیمت(تومان)</div>
          <input type="text" value="${(item.discount*item.price)/100} " id="price-pakage">
        </div>
        <div class="item-cost-month">
          <div class="title-input">تخفیف (درصد)</div>
          <input type="text" value="${item.discount}" id="off-pakage" >
        </div>
      </div>
      <div class="btn-sabt btn-send-modal" data-id="${item.id}">
        <div>ثبت</div>
        </div>
    </form>
  </div>
 </div>
<!-- end modal-edit-pakage -->`
document.querySelector("#edit").innerHTML +=modal

  document.querySelector("#pakage").innerHTML +=note
})
}


await renderPakage()



// -----------------moadal-add-material-category---------------------//
const btnsShowModal = document.querySelectorAll("#add-pakage");
const btnsSendModal = document.querySelector(".btn-send-modal");
const contentModals = document.querySelector(".modal-add-edit-pakage");
btnsShowModal.forEach((item) => {
  item.addEventListener("click", () => {
    contentModals.classList.add("active");
  });
});


contentModals.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModals.classList.remove("active");
});

// -----------------moadal-add-material-category---------------------//
// -----------------moadal-add-material-category---------------------//
const btnsShowModall = document.querySelectorAll("#edit-btn");
const btnsSendModall = document.querySelector(".btn-send-modal");
const contentModalss = document.querySelector(".modal-edit-pakage");
btnsShowModall.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalss.classList.add("active");
  });
});


contentModalss.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalss.classList.remove("active");
});

// -----------------moadal-add-material-category---------------------//

const add = document.querySelector("#addsubmit")
add.addEventListener('click',async()=>{
  const name = document.querySelector("#name")
  const description=document.querySelector("#description")
  const price=document.querySelector("#price")
  const discount=document.querySelector("#discount")
  const data = {
    "name":name.value,
    "description":description.value,
    "price":price.value,
    "discount":discount.value
  }
  console.log(await GetAllSubscription(data,"POST"));
  successAlert("success","پکیج جدید اضافه شد")
    setTimeout(()=>{
        location.href="./kharid-eshterak-admin.html"
    },2000)
    renderPage;
})