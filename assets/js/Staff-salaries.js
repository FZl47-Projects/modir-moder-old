import {GetIncomeEmployee,UpdateIncomeEmployee,InsertEmployee} from './api.js'
import {successAlert,separate} from "./Services.js"

const renderPage = async ()=>{    
    let income =await  GetIncomeEmployee()
    income=income.filter(item=>item.employee.chief==1)
   income.reverse();
    income.forEach( async(item) => {
        console.log(item);
        const note = `    <div class="col-12 col-md-6 px-2 py-2">
        <div class="inner-staff-salaries">
         <div class="content">
             <div class="right col-6">
                 <div class="up">
                     <img src="./assets/images/profile2.png" alt="">
                     <div class="moshakhasat">
                         <div>${item.employee.name}</div>
                         <div>${item.employee.job}</div>
                     </div>
     
                 </div>
                 <div class="down">
                     <div class="mablagh-kol">مبلغ کل دریافتی</div>
                     <input  type="text" id="totalAmount" value="${separate(item.totalAmount)}">
     
                 </div>
             </div>
             <div class="left col-6">
                 <div class="staff-item">
                     <div class="title">حقوق ثابت</div>
                     <input  type="text" id="fixedSalary" value="${separate(item.fixedSalary)}">
                 </div>
                 <div class="staff-item">
                     <div class="title">ساعت اضافی کار درماه</div>
                     <input  type="text" id="overTime" value = "${item.overTime}">
                 </div>
                 <div class="staff-item">
                     <div class="title">تشویقی</div>
                     <input  type="text" id="reward" value="${separate(item.reward)}">
                 </div>
             </div>
             <div class="left col-12 d-flex justify-content-between">
             
             <div class="staff-item">
               <div class="title" >هزینه های اضافی</div>
               <input  type="text" id="extra_expenses" value="${separate(item.extra_expenses)}"placeholder="تومان">
           </div>
           <div class="staff-item">
               <div class="title" >سنوات</div>
               <input  type="text" id="gift" value="${separate(item.gift)}" placeholder="تومان">
           </div>
           <div class="staff-item">
               <div class="title">بیمه</div>
               <input  type="text" id="Insurance" value="${separate(item.Insurance)}"  placeholder="تومان">
           </div>
         </div>
         <!-- btn-sabt -->
         <div class="d-flex justify-content-center w-100">
         <div class="sabt" data-id="${item.id}" data-employee="${item.employee.id}">
         <span class="sabt-btn" >
             ثبت
         </span>
     </div>
         </div>
      
         <!-- btn-sabt -->
        </div>
             
         
         
        
     </div>
        `

      

        document.querySelector("#row").innerHTML += note
    });
    const submit  = document.querySelectorAll(".sabt")
    console.log(submit);
    submit.forEach((item,index)=>{
        
        item.addEventListener('click',()=>{
            const fixedSalary = document.querySelectorAll("#fixedSalary")
            const overTime = document.querySelectorAll("#overTime")
            const reward = document.querySelectorAll("#reward")
            const totalAmount = document.querySelectorAll("#totalAmount")
            const extra_expenses =document.querySelectorAll("#extra_expenses")
            const gift =document.querySelectorAll("#gift")
            const Insurance = document.querySelectorAll("#Insurance")

            const data = {
                "id":item.getAttribute("data-id"),
                "fixedSalary":fixedSalary[index].value,
                "overTime":overTime[index].value,
                "reward":reward[index].value,
                "totalAmount":totalAmount[index].value,
                "employee": item.getAttribute("data-employee"),
                "Insurance":Insurance[index].value,
                "gift":gift[index].value,
                "extra_expenses":extra_expenses[index].value
            }
            console.log(data);
            if(UpdateIncomeEmployee(item.getAttribute("data-id"),data))
                successAlert("success","اطلاعات با موفقیت ثبت شد !")
            setTimeout(()=>{
                location.reload()
            },3000)
        })

       
    })

}
 renderPage()


// -----------------moadal-add-material-category---------------------//
const btnsShowModal = document.querySelectorAll("#new-staff");
const btnsSendModal = document.querySelector(".btn-send-modal");
const contentModals = document.querySelector(".modal-new-employe");
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


const submit = document.querySelector("#submit")
submit.addEventListener('click',()=>{
    const name = document.querySelector("#name")
    const job = document.querySelector("#job")
    const data = {
        "name":name.value,
        "job":job.value,
        "chief":1
    }
  
    console.log(InsertEmployee(data))
    console.log(data);

    successAlert("success","کارمند جدید ثبت شد")
    setTimeout(()=>{
        location.href="./Staff-salaries.html"
    },2000)
    renderPage;
})

