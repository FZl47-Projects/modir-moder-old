import {
  materialRaw,
  GetcategoryWithUserId,
  category,
  UpdateMaterial,
  DeleteMaterialWithId,
  DeleteCategory,
} from "./api.js";
import { successAlert, CheckLogin, separate } from "./Services.js";

const userid = CheckLogin();
// -----------------moadal-add-material-category---------------------//
const btnsShowModall = document.querySelector("#add");
const btnsSendModall = document.querySelector(".btn-send-modal");
const contentModalss = document.querySelector(".modal-material-category");
const name = document.querySelector("#name");
const price = document.querySelector("#price");

btnsShowModall.addEventListener("click", () => {
  name.value = " ";
  price.value = " ";
  contentModalss.classList.add("active");
});

contentModalss.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModalss.classList.remove("active");
});
// -----------------moadal-add-material-category---------------------//

// -----------------moadal-add-category---------------------//
const btnsShowModal = document.querySelector("#add-category");
const btnsSendModal = document.querySelector(".btn-send-modal");
const contentModals = document.querySelector(".modal-category");

btnsShowModal.addEventListener("click", () => {
  contentModals.classList.add("active");
});

contentModals.addEventListener("click", (e) => {
  if (e.target.className === "inner-modal")
    contentModals.classList.remove("active");
});
// -----------------moadal-add-category---------------------//

// back tick category
const categorys = async () => {
  const material = await GetcategoryWithUserId(userid);
  console.log(material);
  material.forEach((item, index) => {
    if (index == 0) {
      var note = `<!-- btn-raw-material -->
      <div class="col-6 col-md-1 col-lg-2 p-1">
          <div class="material-btn-item active" data-id="${item.id}">${item.name}
          <span style="margin-left:10px;" data-id="${item.id}" class="removeCategory"><img src="./assets/images/close.png" alt=""></span>
          </div>
      </div>
  <!-- btn-raw-material -->`;
    } else {
      note = `<!-- btn-raw-material -->
        <div class="col-6 col-md-2 col-lg-2 p-1">
        
        <div class="material-btn-item" data-id="${item.id}">
        ${item.name}
        <span style="margin-left:10px;" data-id="${item.id}" class="removeCategory"><img src="./assets/images/close.png" alt=""></span>
        </div>
    </div>
  <!-- btn-raw-material -->`;
    }
    document.querySelector("#category").innerHTML += note;
  });
};
// end
await categorys();

// -----------------change-content-and-btn---------------------//

let btns = document.querySelectorAll(".material-btn .material-btn-item");

btns.forEach((item, index) => {
  item.addEventListener("click", async () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    const id = item.getAttribute("data-id");
    btns[index].classList.add("active");
    localStorage.setItem("mid", id);
    await material(id);
    const removeMaterialBtn = document.querySelectorAll("#removeMaterial");
    console.log(removeMaterialBtn);
    removeMaterialBtn.forEach((item) => {
      console.log(item);
      item.addEventListener("click", () => {
        console.log(DeleteMaterialWithId(item.getAttribute("data-id")));
        successAlert("success", "ایتم مورد نظر با موفقیت حذف شد !");
        setTimeout(() => {
          location.reload();
        }, 3000);
      });
    });
  });
});
// -----------------change-content-and-btn---------------------//

// back tick category
const material = async (category) => {
 
  document.querySelector("#row").innerHTML = "";

  let material = await materialRaw("GET");

  material = material.filter((item) => item.category == category);
  
  material.forEach((item) => {
 
    const note = `<div class="Raw-material-row" id="raw-materials">
<!-- item-row -->
<div class="col-1 Raw-material-item"
    id="Raw-material-code">${item.id}</div>
<!-- item-row -->
<div class="col-3 p-1 Raw-material-item"
    >
    <input type="text" id="Raw-material-name" name="name-material" value="${
      item.name
    }" >
</div>
<div class="col-4 p-1 Raw-material-item"
    >
    <input type="tell" id="Raw-material-price" name="price-material" value="${separate(
      item.price
    )}">
</div>
<div class="col-3 test-ghasabi">
  <span class="btn-test-ghasabi"><a href="./butchery-test.html?id=${
    item.id
  }">فرم افت </a></span>
  </div>
  <div class="col-1 remove" id="removeMaterial" data-id="${item.id}">
  <span><img src="./assets/images/close.png" alt=""></span>
</div>
</div>
`;

    document.querySelector("#row").innerHTML += note;
  });
};
// end
let cat = await category("","GET");
cat = cat.filter(item=>item.user==userid)
if (cat.length!=0)
  await material(cat[0].id);
  

// --------------------add-material-----------------//
const add = document.querySelector("#add");
const row = document.querySelector("#row");

add.addEventListener("click", (eve) => {
  eve.preventDefault();
  let raw = document.querySelectorAll(".Raw-material-row");

  const note = `<div class="Raw-material-row">
    <!-- item-row -->
    <div class="col-1 Raw-material-item"
        id="Raw-material-code"></div>
    <!-- item-row -->
    <div class="col-6 p-1 Raw-material-item"
        >
        <input id="Raw-material-name" type="text" name="name-material" >
    </div>
    <div class="col-5 p-1 Raw-material-item"
        >
        <input id="Raw-material-price" type="number" name="price-material">
    </div>
</div> `;
  row.innerHTML += note;
});

// add category
const form = document.querySelector(".form")
form.addEventListener('submit',(even)=>even.preventDefault())
const submitCategory = document.querySelector("#submitCategory");

submitCategory.addEventListener("click", async (event) => {
  const name = document.querySelector("#categoryName");
  const data = {
    name: name.value,
    user: userid,
  };
  console.log(await category(data, "POST"));
  successAlert("success", "دسته بندی جدید افزوده شد ");
  setTimeout(() => {
    location.reload();
  }, 3000);
});

const submitMaterial = document.querySelector("#submitMaterial");
submitMaterial.addEventListener("click", async () => {
  const category = localStorage.getItem("mid");

  const data = {
    category: category,
    name: name.value,
    price: price.value,
    value: 1000,
    user: userid,
  };
  console.log(data);
  console.log(await materialRaw("POST", data));
  successAlert("success", "ماده اولیه با موفقیت افزوده شد!");
  setTimeout(() => {
    location.reload();
  }, 3000);
});

// edit material
const edit = document.querySelector("#edit");
console.log(edit);
edit.addEventListener("click", async() => {
  const name = document.querySelectorAll("#Raw-material-name");
  const price = document.querySelectorAll("#Raw-material-price");

  const code = document.querySelectorAll("#Raw-material-code");
  console.log(name);
  name.forEach(async(item, index) => {
    const data = {
      id: code[index].innerHTML,
      value: 1000,
      price: price[index].value,
      name: item.value,
      category: parseInt(localStorage.getItem("mid")),
      user: userid,
    };
    console.log(data);
    await UpdateMaterial(code[index].innerHTML, data);
  });
  successAlert("success", "عملیات با موفقیت انجام شد");
  setTimeout(() => {
    location.reload();
  }, 3000);
});

const removeMaterialBtn = document.querySelectorAll("#removeMaterial");
removeMaterialBtn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(DeleteMaterialWithId(item.getAttribute("data-id")));
    successAlert("success", "ایتم مورد نظر با موفقیت حذف شد !");
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});

const removeCategoryBtn = document.querySelectorAll(".removeCategory");
removeCategoryBtn.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.getAttribute("data-id"));
    console.log(DeleteCategory(item.getAttribute("data-id")));
    successAlert("success", "ایتم مو نظر با موفقیت حذف شد!");
    setTimeout(() => {
      location.reload();
    }, 3000);
  });
});
form.addEventListener("keydown" , async(e) => {
  if(e.code === "Enter"){
    const name = document.querySelector("#categoryName");
    const data = {
      name: name.value,
      user: userid,
    };
    console.log(await category(data, "POST"));
    successAlert("success", "دسته بندی جدید افزوده شد ");
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
})