import { GetAllTicket } from "../api.js";
// /* ------------------change btns and content--------------------- */
// show new ticket function
const renderNewTicket = async () => {
  let Ticket = await GetAllTicket();
  Ticket =Ticket.filter(item=>item.status == "wa")
  Ticket.forEach((item) => {
    
      const note = `<div class="new-ticket col-12 col-md-6">
        <div class="inner-ticket">
          <div class="top">
            <div
              class="title d-flex justify-content-between align-items-center my-2"
            >
              <span>${item.user.name}</span>
              <span dir="ltr">${item.user.phone_number}</span>
            </div>
            <div class="des">${item.message}</div>
          </div>
          <div class="btn-modal-1">پاسخ تیکت</div>
          <!-- START MODAL -->
          <div class="content-modal modal-ticket">
            <div class="inner-modal">
              <form class="px-4 pt-2">
                <div class="py-2">
                  <div class="name">${item.user.name}</div>
                  <div class="title">${item.message}</div>
                  <textarea
                    name="modal"
                    class="input-modal"
                    cols="30"
                    rows="7"
                    placeholder="پاسخ تیکت"
                  ></textarea>
                </div>
                <div class="btns-modal">
                  <div class="btn-modal col-6">
                    <span class="btn-send-modal"
                      >ارسال</span
                    >
                  </div>
                  <div class="btn-modal close-modal-adamtaeid col-6">
                    <span>لغو</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END MODAL -->
        </div>
      </div>`;
    document.querySelector("#row-new").innerHTML += note;
  });
};
await renderNewTicket();
let btns = document.querySelectorAll(".btns .btn-change");
let contents = document.querySelectorAll(".items-content");
// btn for switch to old ticket or new tciket
btns.forEach((item, index) => {
  item.addEventListener("click", () => {
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


// active and deactive modal send ticket reply
const btnsShowModal = document.querySelectorAll(".btn-modal-1");
console.log(btnsShowModal);
const btnsCloseModal = document.querySelectorAll(".close-modal-adamtaeid");
const btnsSendModal = document.querySelector(".btn-send-modal");
const valueModals = document.querySelector(".input-modal");
const contentModals = document.querySelector(".modal-ticket");
btnsShowModal.forEach((item) => {
  item.addEventListener("click", () => {
    contentModals.classList.add("active");
  });
});
btnsCloseModal.forEach((item) => {
  item.addEventListener("click", () => {
    contentModals.classList.remove("active");
  });
});

contentModals.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModals.classList.remove("active");
});
// active and deactive modal send ticket reply


const renderOldTicket = async () => {
  let Ticket = await GetAllTicket();
  Ticket.forEach((item) => {
    let note=` <div class="item-all-ticket col-12 col-md-6">
    <div class="item-ticket">
      <div
        class="title d-flex justify-content-between align-items-center my-2"
      >
        <span>${item.user.name}</span>
        <span>${item.user.phone_number}</span>
      </div>
      <div class="des-1">
        ${item.message}
      </div>
      ${item.status=="wa"?`<div class="des-2 error">در انتظار پاسخ</div>`:`<div class="des-2 ">hello every body</div>`} 
    </div>
    </div>`
    document.querySelector("#row-all").innerHTML += note;
  });
};
await renderOldTicket();
