import {foods,foodMaterials,DeleteFoodsUser} from "./api.js"
import { successAlert ,CheckLogin,separate} from "./Services.js"


const userid=CheckLogin();
const test = document.querySelector('#row')
test.print
const price =async (material)=>{
    let end = 0
  material.forEach(item=>{
    
    end += (item.value*item.materialRaw.price)
    
  })
  return end;
  }

const renderRawMaterial = async ()=>{
    const food =await foods(userid)
    food.forEach(async item => {
        const material = await foodMaterials(item.id)
        const FoodCost = await price(material)
        const note=`
        <div class="col-lg-4 col-md-6 col-12 px-1 py-2 food-item">
        <img src="${item.image}" alt="" class="imge-food">
        <div class="title-food">
          <div class="name-food">${item.name}</div>
        </div>
        <div class="price">
          <div>قیمت تمام شده</div>
          <div>تومان${separate(Math.round(FoodCost))}</div>
        </div>
        <a href="./amadehsazi.html?id=${item.id}">
          <div class="respi">
            مراحل آماده سازی
          </div>
        </a>
        <div class="trash" id="remove" data-id="${item.id}">
          <img src="./assets/images/trash.png" alt="">
        </div>
      </div>
        `
        document.querySelector("#row").innerHTML += note
    });
  
  }
   renderRawMaterial()
  
  window.addEventListener('load',()=>{
    setTimeout(()=>{
      const remove = document.querySelectorAll("#remove")
  console.log(remove);
  remove.forEach(item=>{
    item.addEventListener('click', ()=>{
      console.log( DeleteFoodsUser(item.getAttribute("data-id")))
      successAlert("success","غذا با موفیت حذف شد!")
      setTimeout(()=>{

        location.reload()
      },2000)
    })
  })
    },500)
  })
  