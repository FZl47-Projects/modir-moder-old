import { getCounseling ,GetAllTicket} from "../api.js";
/*------------------------------Render Page--------------------------------- */


/*------------------------------menu-hamburger-right-close-show--------------------------------- */
let btnHamburger = document.querySelector("#hamburger");
let menuMobile = document.querySelector(".menu-admin");
let closeMenu = document.querySelector(".overlay-menu-mobile");

btnHamburger.addEventListener("click", () => {
  menuMobile.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
/*------------------------------menu-hamburger-right-close-show--------------------------------- */



// active and deactive modal send ticket reply//
const btnsShowModal = document.querySelectorAll(".btn-modal-1");
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
// active and deactive modal send ticket reply//


// active and deactive modal edit-information user//
const btnsShowModaltwo = document.querySelectorAll("#information-user");
const btnsCloseModaltwo = document.querySelectorAll(".close-modal-adamtaeid");
const btnsSendModaltwo = document.querySelector(".btn-send-modal");
const valueModalstwo = document.querySelector(".input-modal");
const contentModalstwo = document.querySelector(".modal-edit-information-user");
btnsShowModaltwo.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalstwo.classList.add("active");
  });
});
btnsCloseModaltwo.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalstwo.classList.remove("active");
  });
});

contentModalstwo.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalstwo.classList.remove("active");
});
// active and deactive modal edit-information user//





const renderCounseling = async () => {
  const counseling = await getCounseling();

  let elementcounseling = document.querySelector("#counseling");

  counseling.forEach((item) => {
    console.log(item);
    let note = `
      <div class="swiper-slide">
      <div class="item-darkhast-moshavereh item-list-1 item-list-gh p-0">
        <div class="content-item-o-p p-2">
          <div class="right col-12">
            <div class="title-s">
              <span>${item.user.name}</span>
              <span class="date">${new Date(item.date).getFullYear()}/${new Date(item.date).getMonth()}/${new Date(item.date).getDate()}</span>
            </div>
            <div class="des">${item.topic}</div>
            <div class="des">${item.condition=='ip'?"غیر حضوری":"حضوری"}-شهر ${item.city}</div>
          </div>
        </div>
        <div class="up p-2"></div>
        <div class="information" id="information-btn">جزئیات مشاوره</div>
      </div>
      </div>
     
      `;
    elementcounseling.innerHTML += note
  });
};
await renderCounseling()

const renderTickets = async () => {
  const Ticket = await GetAllTicket();

  let elementTicket = document.querySelector("#tickets");

  Ticket.forEach((item) => {
    console.log(item);
    let note = `
   


    <div class="swiper-slide">
    <div class="item-list-1 item-list-ticket">
      <div class="up p-2">
        <div class="content-item-o-p">
          <div class="right col-12">
            <div class="title-s">
              <span>${item.user.name}</span>
              <span class="date">${new Date(item.created).getFullYear()}/${new Date(item.created).getMonth()}/${new Date(item.created).getDate()}</span>
            </div>
            <div class="des">
             ${item.message}
            </div>
          </div>
        </div>
      </div>
      <div
        class="btn-ticket d-flex justify-content-between align-items-center mt-1"
      >
        <div class="btn-item adam col-12 text-center py-1">
          پاسخ تیکت
        </div>
      </div>
      <!-- START MODAL -->
      <div class="content-modal modal-adam-taeid">
        <div class="inner-modal">
          <form class="px-4 pt-2">
            <div class="py-2">
              <div class="title">
                پاسخ به تیکت <span>نام و نام خانوادگی</span>
              </div>
              <textarea
                name="modal"
                class="input-modal"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div class="btns-modal">
              <div class="btn-modal col-6">
                <span class="btn-send-modal">ارسال</span>
              </div>
              <div
                class="btn-modal close-modal-adamtaeid col-6"
              >
                <span>لغو</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- END MODAL -->
    </div>
  </div>
    `;
    elementTicket.innerHTML += note
  });
};
renderTickets()

const renderUser = async () => {
  const Ticket = await GetAllTicket();

  let elementTicket = document.querySelector("#karbaran");

  Ticket.forEach((item) => {
    console.log(item);
    let note =`<div class="swiper-slide">
    <div class="item-list-1 item-list-karbaran">
      <div class="up p-2">
        <div class="content-item-o-p">
          <div class="right col-12">
            <div class="title-s">
              <span class="date"
                ><img
                  src="../assets/images/profile2.png"
                  alt=""
              /></span>
              <div>
                <span>مجید رضایی</span>
                <div class="des">
                  <span>09123456789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="information">اطلاعات بیشتر</div>
    </div>
  </div>`;
    elementTicket.innerHTML += note
  });
};
renderUser()



// active and deactive modal modal-Consultation-requests//
const btnsShowModaltree = document.querySelectorAll("#information-btn");
const btnsCloseModaltree = document.querySelectorAll(".close-modal-adamtaeid");
const btnsSendModaltree = document.querySelector(".btn-send-modal");
const valueModalstree = document.querySelector(".input-modal");
const contentModalstree = document.querySelector(".modal-Consultation-requests");
console.log(btnsShowModaltree);
btnsShowModaltree.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalstree.classList.add("active");
  });
});
btnsCloseModaltree.forEach((item) => {
  item.addEventListener("click", () => {
    contentModalstree.classList.remove("active");
  });
});

contentModalstree.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalstree.classList.remove("active");
});
// active and deactive modal-Consultation-requests//