localStorage.setItem("cateegory","all")

/*------------------show and close modal-special-offer ------------------- */
const btnsShowModal = document.querySelector("#special-offer");
const btnsCloseModal = document.querySelector("#close-modal");
const contentModals = document.querySelector(".modal-special-offer");
const loading = document.querySelector(".loading")

loading.style.display="block";
document.querySelector(".all").style.display="none";
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
/*------------------show and close modal-special-offer ------------------- */
// import api 
import {
  foods,
  foodMaterials,
  Updatefood,
  GetCategory,
  InsertpercentagesForCostControl,
  GetpercentagesForCostControl,
  Login,
  UpdatepercentagesForCostControl,
} from "./api.js";
import { CheckLogin, successAlert, separate } from "./Services.js";
// check for user login
const userid = CheckLogin();
// .........
let darsad = document.querySelector("#costFood");
let zarib = document.querySelector("#zarib");
const percentages = await GetpercentagesForCostControl(userid);

if (percentages == "") {
  zarib.value = 2;
  darsad.value = 35;
} else {
  console.log(percentages);
  zarib.value = percentages[0].FactorcCoefficient;
  darsad.value = percentages[0].productionOrService;
}

const submitSood = document.querySelector("#submitDarsad");
submitSood.addEventListener("click", async () => {
  renderColumn(await foods(userid));
  const data = {
    FactorcCoefficient: zarib.value,
    productionOrService: darsad.value,
    user: userid,
  };
  if (percentages[0]) {
    console.log(await UpdatepercentagesForCostControl(percentages[0].id, data));
  } else {
    console.log(data);
    console.log(await InsertpercentagesForCostControl(data));
  }
});

// backtick for categorys
const Rendercategory = async () => {
  const category = await GetCategory(userid);
  category.forEach((item, index) => {
    let note = `<div class="col-3 " id="btnn-change" data-name=${item.id}>${item.name}</div>`;
    document.querySelector("#category").innerHTML += note;
  });
};
await Rendercategory();
// ............

// onclick method for categorys
let btns = document.querySelectorAll(".btns-cost #btnn-change");
let foodall = await foods(userid);
btns.forEach(async (item, index) => {
  item.addEventListener("click", async () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });

    btns[index].classList.add("active");

     
  
    let food = foodall.filter(
      (item) => item.category == btns[index].getAttribute("data-name")
    );
    localStorage.setItem("cateegory", btns[index].getAttribute("data-name"))
    if (btns[index].getAttribute("data-name") == "all")
      await renderColumn(await foods(userid));
    else await renderColumn(food);
  });
});
// ............................
// price function for food cost
const price = async (material) => {
  let end = 0;
  material.forEach((item) => {
    end += item.value * item.materialRaw.price;
  });
  return end;
};
// ...........
let x15 = 0;
const renderColumn = async (food) => {
  document.querySelector("#row").innerHTML = " ";
  document.querySelector("#all").innerHTML = " ";

  let x = 0;
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let x4 = 0;
  let x5 = 0;
  let x6 = 0;
  let x7 = 0;
  let x8 = 0;
  let x9 = 0;
  let x10 = 0;
  let x11 = 0;
  let x13 = 0;
  let x14 = 0;
  let x15 = 0;

  food.forEach(async (item, index) => {
    document.querySelector("#date").value =new Date(item.updated).toLocaleDateString('fa-IR');;
    const material = await foodMaterials(item.id);
    const FoodCost = await price(material);
    const darsad = document.querySelector("#costFood").value;
    const zarib = document.querySelector("#zarib").value;
    const cost = (FoodCost * darsad) / 100;
    // darsadSood
    const allCost = FoodCost + (FoodCost * darsad) / 100;
    const allPrice = Math.round(FoodCost * 2 + cost);
    if (index == 0) {
      food.forEach(async (item, index) => {
        x11 += parseInt(parseInt((allCost * 35) / 100) * item.NumberSold);
        x13 += item.NumberSold;
        x14 = Math.round(70 / (index + 1));
      });
    }

    setTimeout(() => {
      let x12 = Math.round(x11 / x13);
      const t4 = parseInt(parseInt((allCost * 35) / 100)) >= x12 ? "H" : "L";
      const u4 = parseInt(item.NumberSold) >= x14 ? "H" : "L";
      const note = `
    <tr>
  <!-- name-food -->
    <td class="name-food">${item.name}</td>
  <!-- name-food -->
  <!-- column-table -->
    <td><span class="item-row">${separate(Math.round(FoodCost))}</span></td> 
  <!-- column-table -->
    <td><span class="item-row" >${separate(Math.round(cost))}</span></td>
    <td><span class="item-row">${separate(
      Math.round(FoodCost) * zarib
    )}</span></td> 
   
    <td><span class="item-row">${separate(Math.round(allPrice))}</span></td>
    <td class="price"><input type="tel" class="price_offered" value="${
      item.price_offered != null
        ? separate(parseInt(item.price_offered))
        : separate(Math.round(allPrice))
    }"></td>
    <td class="item-row">${separate(
     Math.round( parseFloat(
        (item.price_offered != null ? item.price_offered : allPrice) - FoodCost
      ))
    )}</td> 
    <td class="item-row" id="foodCost">${separate(
      parseInt(
        (FoodCost /
          parseInt(
            item.price_offered != null ? item.price_offered : allPrice
          )) *
          100
      )
    )}</td>
    <td class="num"><input type="tel" id="numberSold" value="${
      item.NumberSold
    }"></td>
    <td><span class="item-row">${separate(
      parseInt(item.price_offered != null ? item.price_offered : allPrice) *
        parseInt(item.NumberSold)
    )}</span></td>
    <td><span class="item-row">${separate(
      parseInt(parseInt(allCost) * parseInt(item.NumberSold))
    )}</span></td> 
    <td><span class="item-row">${separate(
      parseInt(
        (item.price_offered != null ? item.price_offered : allPrice) - allCost
      ) * parseInt(item.NumberSold)
    )}</span></td> 
    <td><span class="item-row">${t4 == "H" ? "High" : "Low"}</span></td>
    <td><span class="item-row">${u4 == "H" ? "High" : "Low"}</span></td>
    <td class="${
      t4 == "H" && u4 == "H"
        ? "bg-success"
        : t4 == "H" && u4 == "L"
        ? "bg-primary"
        : t4 == "L" && u4 == "L"
        ? "bg-danger"
        : t4 == "L" && u4 == "H"
        ? "bg-warning"
        : ""
    }"><span class="item-row "style="font-size:20px;">${
        t4 == "H" && u4 == "H"
          ? "*****"
          : t4 == "H" && u4 == "L"
          ? "***"
          : t4 == "L" && u4 == "L"
          ? "**"
          : t4 == "L" && u4 == "H"
          ? "****"
          : ""
      }</span></td>
    <td class="item-row">${
      t4 == "H" && u4 == "H"
        ? "سودآور و محبوب، کیفیت حفظ شود "
        : t4 == "H" && u4 == "L"
        ? "سود بالا، محبوبیت کم"
        : t4 == "L" && u4 == "L"
        ? "نه سود،نه محبوبیت،بهتر است حذف شود"
        : t4 == "L" && u4 == "H"
        ? "سود کم محبوبیت بالا"
        : ""
    }</td> 
    
 
    </tr>
`;

      document.querySelector("#row").innerHTML += note;

      x += parseInt(FoodCost);

      x1 += parseInt(cost);

      x2 += parseInt(allCost);

      x3 += parseInt(FoodCost * zarib);

      x5 += Math.round(
        item.price_offered != null ? item.price_offered : allPrice
      );

      x6 += parseFloat(
        (item.price_offered != null ? item.price_offered : allPrice) - FoodCost
      );
      x7 +=
        parseInt(item.price_offered != null ? item.price_offered : allPrice) *
        parseInt(item.NumberSold);

      x8 += parseInt(
        (FoodCost * 100) /
          parseInt(item.price_offered != null ? item.price_offered : allPrice)
      );
      x9 += item.NumberSold;
      x10 += parseInt(allCost * item.NumberSold);
      x15 +=
        parseInt(
          (item.price_offered != null ? item.price_offered : allPrice) - allCost
        ) * parseInt(item.NumberSold);
      const all = `
  <td>کل</td>
  <td>${separate(Math.round(x))}</td>
  <td>${separate(Math.round(x1))}</td>
  <td>${separate(Math.round(x3))}</td>
  <td>${separate(Math.round(x5))}</td>
  <td>${separate(Math.round(x5))}</td>
  <td>${separate(Math.round(x6))}</td>
  <td>${separate(Math.round(x8 / (index + 1)))}</td>
  <td>${separate(Math.round(x9))}</td>
  <td>${separate(Math.round(x7))}</td>
  <td>${separate(Math.round(x10))}</td>
  <td>${separate(Math.round(x15))}</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>`;
      document.querySelector("#all").innerHTML = all;
      document.querySelector("#sood").innerHTML = x12;
      document.querySelector("#sahm").innerHTML = x14;
    
      loading.style.display="none";
      document.querySelector(".all").style.display="block";
    }, 3000);
 
    const editBTN = document.querySelector("#edit");
    editBTN.addEventListener("click", async () => {
      successAlert("success", "لطفا کمی صبر کنید!");
      const number = document.querySelectorAll("#numberSold");
      const price_offeredin = document.querySelectorAll(".price_offered");
    
      
      const food = foodall.filter(item=>localStorage.getItem("cateegory")!="all"?item.category==localStorage.getItem("cateegory"):item);
      console.log(food);
      food.forEach(async (item, index) => {

        console.log(item);
        item.NumberSold = number[index].value;
        item.price_offered = +price_offeredin[index].value.replace(",", "");
        const date = new Date()
        item.updated=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        delete item["image"];
        console.log("............");
       console.log( await Updatefood(item.id, item));
      });
      successAlert("success", "عملیات با موفقیت انجام شد!");
      setTimeout(() => location.reload(), 3000);
    });
  });

};

await renderColumn(await foods(userid));

const downloadBtn = document.querySelector(".download");
downloadBtn.addEventListener("click", () => {

  window.print()
});
