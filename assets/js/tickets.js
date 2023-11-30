import {GetTicketWithId} from "../api.js"
// /* ------------------change btns and content--------------------- */
let btns = document.querySelectorAll(".btns .btn-change");
let contents = document.querySelectorAll(".items-content");

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
const btnsShowModal = document.querySelector(".btn-modal-1");
const btnsCloseModal = document.querySelector(".close-modal-adamtaeid");
const btnsSendModal = document.querySelector(".btn-send-modal");
const valueModals = document.querySelector(".input-modal");
const contentModals = document.querySelector(".modal-ticket");


  btnsShowModal.addEventListener("click", () => {
    contentModals.classList.add("active");
  });


  btnsCloseModal.addEventListener("click", () => {
    contentModals.classList.remove("active");
  });



  contentModals.addEventListener("click", (e) => {
    if (e.target.className === "inner-modal")
      contentModals.classList.remove("active");
  });

const renderPage = async ()=>{
  const Ticket = await 
  GetTicketWithId(2)
  Ticket.forEach(item => {
    console.log();
    const note = `  <div class="item-all-ticket col-12 col-md-6 p-3">
    <div class="item-ticket">
      <div class="title d-flex justify-content-between align-items-center my-2">
        <span>${item.user.name}</span>
      </div>
      <div class="des-1">
       ${item.message}
      </div>
      <div class="des-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
      </div>
    </div>
  </div>`
  document.querySelector("#row").innerHTML+=note
});
}

renderPage()