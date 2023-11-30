// import api 
import {
  PreparationsfoodWithId,
  PreparationsfoodMaterials,
  PreparationsUpdatefood,
  PreparationsDeleteMaterial,
  materialRawUserId,
  PreparationsInsertMaterialFood,
  
} from "./api.js";
// import funcrions for show alert , cheke userlogin and seprate number
import { successAlert,CheckLogin ,separate} from "./Services.js";

// get user and check user login 
const userid=CheckLogin();
// query for get element html 
const btnsShowModall = document.querySelector("#add");
const btnsSendModall = document.querySelector(".btn-send-modal");
const contentModalss = document.querySelector(".modal-material-category");
const submitBtn = document.querySelector(".btn-send-modal");
const name = document.querySelector("#name");
const values = document.querySelector("#values");
// show modals
btnsShowModall.addEventListener("click", () => {
  name.value = "";
  values.value = "";
  contentModalss.classList.add("active");
});

contentModalss.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalss.classList.remove("active");
});

// get and show raw material in select input
const renderselect= async (material)=>{
    material.forEach(item=>{
  
      const note = `<option value="${item.name}" style="color:white;" >${item.name}</option>`
      document.querySelector("#select").innerHTML +=note
    })
  }
  const material = await materialRawUserId(userid)
  await renderselect(material)

// onclick for submit material
submitBtn.addEventListener("click", async () => {
  const data = {
    name: name.value,
    value: values.value,
  };

  const material = await materialRawUserId(userid);

  const price = material.filter((item) => item.name == name.value);
// create html tag 
  
  const note2 = `<div class="row-table">
    <div class="item-mavadghazaei col-12">
            <div class="col-2 border-c name-mavad">
                <input type="text" value="${data.name}" data-value = "${data.value}"data-id="${price[0].id}" id="nameMaterial" >
            </div>
            <div class="col-3 border-c meghdar-mavad">
                <input type="text" value="${
                  data.value
                }" id="name-material" >
            </div>
            <div class="col-3 border-c meghdar-mavad">
                <input type="text" value="${
                  separate(price[0].price)
                }" id="name-material" >
            </div>
            <div class="col-3 border-c meghdar-mavad">
                <input type="text" value="${
                  separate(price[0].price * data.value)
                }" id="name-material" >
            </div>
            <div class="col-1 remove" id="deleteItem" data-id="${price[0].id}">
            <span><img src="./assets/images/close.png" alt=""></span>
        </div>
    </div>
</div>`;

  document.querySelector("#row").innerHTML += note2;
  contentModalss.classList.remove("active");
// remove item 
  const removeItem = document.querySelectorAll("#deleteItem");
  removeItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.parentNode.remove();
    });
  });

});

// show resepi 
const renderResepi = async () => {
  // get id from url
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  // ---------
  // get food with id
  const food = await PreparationsfoodWithId(id);
  // ---------
  // set information
  document.querySelector("#foodName").innerHTML = food.name;
  document.querySelector("#imageFood").src = food.image;
  // get material with food id
  const materials = await PreparationsfoodMaterials(food.id);
  // ----------
  let priceAll = 0;
  let Weight = 0;
  // set material informations
  materials.forEach(async (item) => {
    priceAll += (item.materialRaw.price * item.value) ;
    

    const note = `
            <div class="row-table">
                <div class="item-mavadghazaei col-12">
                        <div class="col-2 border-c name-mavad">
                            <input type="text" value="${
                              item.materialRaw.name
                            }" id="name-material" >
                        </div>
                        <div class="col-3 border-c meghdar-mavad">
                            <input type="text" value="${
                              item.value
                            }کیلوگرم/عدد" id="name-material" >
                        </div>
                        <div class="col-3 border-c meghdar-mavad">
                            <input type="text" value="${
                              separate(item.materialRaw.price)
                            }" id="name-material" >
                        </div>
                        <div class="col-3 border-c meghdar-mavad">
                            <input type="text" value="${
                              separate((item.materialRaw.price * item.value) )
                            }" id="name-material" >
                        </div>
                        <div class="col-1 remove" id="deleteItem" data-id="${
                          item.id
                        }">
                        <span><img src="./assets/images/close.png" alt=""></span>
                    </div>
                </div>
            </div>`;
    document.querySelector("#row").innerHTML += note;
    const removeItem = document.querySelectorAll("#deleteItem");
  
    removeItem.forEach((item) => {
      item.addEventListener("click", () => {
        PreparationsDeleteMaterial(item.getAttribute("data-id"))
        item.parentNode.parentNode.remove();
      });
    });
  });
  // -----------------
  // Show the final result
  document.querySelector("#priceAll").innerHTML = priceAll;



  const text = document.querySelector("#des-request");
  // set resepi
  text.innerHTML = food.resepi;
  // update resepi after click in editBtn
  const editBTN = document.querySelector("#edit");
  // insert or update resepi 
  editBTN.addEventListener("click", () => {
    
    const name_material = document.querySelectorAll("#nameMaterial");
  
    // get id from url
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
  name_material.forEach((item) => {
   
    const data2 = {
      materialRaw: item.getAttribute("data-id"),
      food: id,
      value: item.getAttribute("data-value"),
    };


    console.log(PreparationsInsertMaterialFood(data2));
    
  });



    food.resepi = text.value;
    delete food["image"];
    PreparationsUpdatefood(food.id, food);
    successAlert("success", "رسپی با موفقیت ثبت شد!");
  });
};
await renderResepi();
// end set information
const removeBtn = document.querySelectorAll("#remove");
removeBtn.forEach((item) => {
  item.addEventListener("click", async () => {
    console.log(await PreparationsDeleteMaterial(item.getAttribute("data-id")));
    successAlert("success", "ایتم مورد نظر با موفقیت حذف شد !");
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});
