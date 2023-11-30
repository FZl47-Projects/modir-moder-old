import {Insertcounseling} from './api.js'
import {CheckLogin} from './Services.js'
const userid=CheckLogin();
/*------------------change-input-noe-moshavereh ------------------- */
let form_hozori = document.querySelector(".form-hozori");
let form_gheyrehozori = document.querySelector(".form-gheyrehozori");
let select = document.querySelector('#noe-moshavereh')
select.addEventListener('change',()=>{
    if(select.value == 'gheyre-hozori'){
        form_gheyrehozori.classList.add("active");
        form_hozori.classList.remove("active")
      }

      else{
          if(select.value == 'hozori'){
            form_hozori.classList.add("active");
            form_gheyrehozori.classList.remove("active")
          }
      }
})

/*------------------show and close modal-moshavereh-gheyrehozori ------------------- */
let btnsShowModal = document.querySelector(".btn-bedon-nobat");

btnsShowModal.addEventListener('click',()=>{
  const title = document.querySelector("#title")
	const CounsellingType=document.querySelector("#noe-moshavereh")
	const job = document.querySelector("#jobs")
	const city = document.querySelector("#city")
  const data = {
    "topic":title.value,
    "job":job.value,
    "city":city.value,
    "condition":CounsellingType.value,
    "date":`0001-01-01`,
    "user":userid
  }

  console.log(data);
  console.log(Insertcounseling(data))
})


  //   btnsShowModal.addEventListener("click", () => {
  //   modals.classList.add("active");
  // });


  //   btnsCloseModal.addEventListener("click", () => {
  //   modals.classList.remove("active");
  // });


  // overalyModals.addEventListener("click", (e) => {
  //   if (e.target.className === "inner-modal"){
  //     modals.classList.remove("active");
  //   }
  // });
/*------------------show and close modal-moshavereh-gheyrehozori ------------------- */

