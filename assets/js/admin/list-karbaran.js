import {GetAllUser} from '../api.js'

const renderUser = async ()=>{
  const AllUser = await  GetAllUser()
  
  console.log(AllUser);
  AllUser.forEach(item=>{
    const note = `<div class="item-user col-12">
    <div class="col-4 name">
        <div>
            <span><img
                    src="../assets/images/profile-small.png"
                    alt=""></span>
            <span>${item.name}</span>
        </div>

    </div>
    <div class="col-4 phone" dir="ltr">${item.phone_number}</div>
    <div class="col-4">${item.city}</div>
</div>`
const modal = `<div class="content-modal modal-editing-information-user">
<div class="inner-modal">
    <div class="content px-4 pt-2">
        <div class="up-modal">
            <div class="col-4 img-up-modal">
                <img src="../assets/images/profile2.png"
                    alt="">
            </div>
            <div class="col-8">
                <div class="Specifications">
                    <div class="name">${item.name} </div>
                    <div class="city">${item.city} </div>
                </div>
            </div>
        </div>
        <form class="px-4 pt-2">
                <div class="form-group">
                    <label for="value-gram">شماره تلفن</label>
                    <input
                        type="tell"
                        dir="ltr"
                        name="value-gram"
                        id="value-gram"
                        value="${item.phone_number}"
                        />
                    <small></small>
                </div>
                <div class="form-group">
                    <label for="price" style="width:50%;">رمز عبور</label>
                    <input class="price"
                        type="password"
                        name="phone-number"
                        id="btnEdit"
                       placeholder="password"
                        />
                    <span class="btn-edit">ویرایش</span>
                    <small></small>
                </div>
                <div class="form-group">
                    <label for="price" style="width:50%;">نام رستوران</label>
                    <input class="price"
                        type="text"
                        name="phone-number"
                        id="btnEdit"
                        value="${item.restaurantName}"
                        />
                    <small></small>
                </div>
                
        </form>
    </div>
</div>

</div>`
document.querySelector("#modal").innerHTML +=modal
document.querySelector("#user").innerHTML +=note
  })
}
await renderUser()


/*------------------show and close modal-adamtaeid ------------------- */
let btnsShowModal = document.querySelectorAll(".item-user");

let modals = document.querySelectorAll(".modal-editing-information-user");
let overalyModals = document.querySelectorAll(".modal-editing-information-user .inner-modal");
btnsShowModal.forEach((item, index) => {
  item.addEventListener("click", () => {
    modals[index].classList.add("active");
  });
});
overalyModals.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (e.target.className === "inner-modal") {
      modals[index].classList.remove("active");
    }
  });
});
/*------------------show and close modal-adamtaeid ------------------- */
