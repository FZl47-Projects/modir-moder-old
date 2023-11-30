// import api from api.js
import {
  materialRawUserId,
  InsertMaterialFood,
  PostCategory,
  GetCategory,
  Deletefood,
} from "../api.js";
// import functions alert checklogin and seprate(1,000,000)
import { successAlert, CheckLogin,separate } from "../Services.js";
const loading  = document.querySelector(".loading")
// check login
const userid = CheckLogin();
// -----------------moadal-add-material-category---------------------//
const btnsShowModall1 = document.querySelector("#add-category");
const contentModalss1 = document.querySelector(".modal-category1");
btnsShowModall1.addEventListener("click", () => {
  contentModalss1.classList.add("active");
});

contentModalss1.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalss1.classList.remove("active");
});
// -----------------moadal-add-material-category---------------------//
// -----------------moadal-add-material-category---------------------//
const btnsShowModall = document.querySelector("#add");
const btnsSendModall = document.querySelector(".btn-send-modal");
const contentModalss = document.querySelector(".modal-material-category");
const name = document.querySelector("#name");
const values = document.querySelector("#values");
btnsShowModall.addEventListener("click", () => {
  name.value = "";
  values.value = "";
  contentModalss.classList.add("active");
});

contentModalss.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalss.classList.remove("active");
});
// -----------------moadal-add-material-category---------------------//
// add Category
const CatageoryNameBtn = document.querySelector("#submit-Category");
CatageoryNameBtn.addEventListener("click", async () => {
  const nameCategory = document.querySelector("#Category-name");
  const data = {
    name: nameCategory.value,
    user: userid,
  };
  console.log(await PostCategory(data));
  successAlert("success", "دسته بندی جدید افزوده شد ");
  setTimeout(() => {
    location.reload();
  }, 2000);
});
//  end
const renderPage = async () => {
  const category = await GetCategory(userid);

  category.forEach((item) => {
    const note = `<div class="col-6 col-md-2 col-lg-2 p-1">
    <div class="material-btn-item " data-id="${item.id}"  id="itemCategory">
    ${item.name}
    <span style="margin-left:10px;" data-id="${item.id}" class="removeCategory"><img src="./assets/images/close.png" alt=""></span></div>
    </div>`;
    document.querySelector("#category").innerHTML += note;
  });
};
await renderPage();
const itemCategory = document.querySelectorAll("#itemCategory");
itemCategory.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    item.addEventListener("click", () => {
      itemCategory.forEach((item) => {
        item.classList.remove("active");
      });
      const id = item.getAttribute("data-id");
      itemCategory[index].classList.add("active");

      localStorage.setItem("CategoryId", id);
    });
  });
});
// raw material
const renderselect = async (material) => {
  material.forEach((item) => {
    const note = `<option value="${item.name}" style="color:white;" >${item.name}</option>`;
    document.querySelector("#select").innerHTML += note;
  });
};
const material = await materialRawUserId(userid);
await renderselect(material);
// -------------

/*-------------------------------disabled and enabled inputs-------------------------------- */
const inputs = document.querySelectorAll(".form-group .price");
const btnEdit = document.querySelectorAll(".btn-edit");
const submitBtn = document.querySelector(".btn-send-modal");

inputs.forEach((item) => {
  item.disabled = true;
});

btnEdit.forEach((item, index) => {
  item.addEventListener("click", () => {
    inputs[index].disabled = false;
    inputs[index].focus();
  });
});
const addRaw=async ()=>{
  const data = {
    name: name.value,

    value: values.value,
  };

  const price = material.filter((item) => item.name == name.value);
  console.log(price);
  const note = `
  <form id="add-food">
                            <div class="content-inputs">
                                <div class="col-12 col-md-1 px-2 close-content" id="deleteItem">
                                    <span class="close" ><img src="./assets/images/close.png" alt=""></span>
                                  </div>
                              <div class="col-12 col-md-3 px-2">
                                <div class="form-group"> 
                                  <input
                                    type="text"
                                    name="value-gram"
                                    id="value-name"
                                    data-id="${price[0].id}"
                                    value="${data.name}"
                                  />
                                  <small></small>
                                </div>
                              </div>
                              <div class="col-12 col-md-4 px-2">
                                <div class="form-group">
                                  <label for="value-gram">کیلوگرم/عدد</label>
                                  <input
                                    type="text"
                                    name="value-gram"
                                    id="value-gram"
                                    value="${data.value}"
                                  />
                                  <small></small>
                                </div>
                              </div>
                              <div class="col-12 col-md-4 px-2">
                                <div class="form-group">
                                  <label for="price" style="width:50%;">قیمت به ازای 1 کیلوگرم/عدد</label>
                                  <input class="price"
                                    type="text"
                                    name="phone-number"
                                    id="btnEdit"
                                    value="${separate(price[0].price)}"  style="width:30%;"
                                  />

                                  <small></small>
                                </div>
                              </div>
                              
                            </div>
                         </form>
  `;
  document.querySelector("#row").innerHTML += note;
  contentModalss.classList.remove("active");

  const removeItem = document.querySelectorAll("#deleteItem");
  removeItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentNode.parentNode.remove();
    });
  });
}
submitBtn.addEventListener("click", addRaw);

/*-------------------------------disabled and enabled inputs-------------------------------- */

const submitHandler = async() =>{

  const name = document.querySelector("#foodName");
  const image = document.querySelector("#javaz");

  if (image.files[0] != undefined) {
    if (name.value != undefined && name.value != " " && name.value != "") {
      if (localStorage.getItem("CategoryId") != null) {
        // create data for insert new food
        var formdata = new FormData();
        formdata.append("image", image.files[0], image.value);
        formdata.append("name", name.value);
        formdata.append("NumberSold", "0");
        formdata.append("resepi", "empty");
        formdata.append("user", userid);
        formdata.append("category", localStorage.getItem("CategoryId"));

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
// send data 
        fetch("http://185.252.28.87:8000/food/all/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
          successAlert("success", "لطفا کمی صبر کنید");

            const gram = document.querySelectorAll("#value-gram");
            const name = document.querySelectorAll("#value-name");
            name.forEach(async(item, index) => {
              console.log(item);
              const data = {
                materialRaw: item.getAttribute("data-id"),
                food: result.id,
                value: gram[index].value,
              };
              console.log(data);

              console.log(await InsertMaterialFood(data));
             
            });
          })
          // error
          .catch((error) => {
            console.log("error", error)
          
            submit.style.display = "none" 
            loading.style.display="none"
          });
          successAlert("success", "غذا جدید ثبت شد");
      } else {
        successAlert("error", "دسته بندی را انتخاب کنید!");
      }
    }else{
      successAlert("error","نام غذا  را وارد کنید!")
    }
  } else {
    // insert food without image
    if (name.value != undefined && name.value != " " && name.value != "") {
      if (localStorage.getItem("CategoryId") != null) {
  loading.style.display="block"

        var formdata = new FormData();
        formdata.append("name", name.value);
        formdata.append("NumberSold", "0");
        formdata.append("resepi", "empty");
        formdata.append("user", userid);
        formdata.append("category", localStorage.getItem("CategoryId"));


        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };
        fetch("http://185.252.28.87:8000/food/all/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            document.querySelector(".back").disabled=true
            const gram = document.querySelectorAll("#value-gram");
            const name = document.querySelectorAll("#value-name");
            name.forEach(async(item, index) => {
              console.log(item);
              const data = {
                materialRaw: item.getAttribute("data-id"),
                food: result.id,
                value: gram[index].value,
              };
              console.log(data);

              console.log(await InsertMaterialFood(data));
              
            });
            successAlert("success", "غذا جدید ثبت شد");
          
            setTimeout(() => {
              location.href = "./foods.html";
            }, 3000);
          })
          .catch((error) => {
            console.log("error", error)
            submit.disabled = true 
            loading.style.display="none"
          });

        

      } else {
        successAlert("error", "دسته بندی را انتخاب کنید!");
      }
    } else {
      successAlert("error", "نام غذا را وارد کنید!");
    }
  }
}


const submit = document.querySelector("#submit");
submit.addEventListener("click", async() => {
  
  await submitHandler()

});
// remove item 
const removeCategoryBtn = document.querySelectorAll(".removeCategory");
removeCategoryBtn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(Deletefood(item.getAttribute("data-id")));
    successAlert("success", "ایتم مورد نظر با موفقیت حذف شد!");
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});

// insert with enter btn 
document.body.addEventListener("keydown" , async(e) => {
    if(e.code === "Enter"){
      await addRaw();
    }
})
