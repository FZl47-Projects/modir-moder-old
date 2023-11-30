
/*------------------show and close modal-special-offer ------------------- */
const btnsShowModal = document.querySelector("#special-offer");
const btnsCloseModal = document.querySelector("#close-modal");
const contentModals = document.querySelector(".modal-special-offer");

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


  // get id from url
  var url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  // ---------



// import api
import {foods,foodMaterials,Updatefood,GetCategory} from "../api.js"


const submitSood = document.querySelector("#submitDarsad")
submitSood.addEventListener('click',async()=>{
  renderColumn(await foods(id))
})

const Rendercategory = async ()=>{

  const category = await GetCategory(id)
  category.forEach((item,index)=>{
    console.log(index);
    console.log(item);
    let note = `<div class="col-3 ${index==0 ?"":"active" }active" id="btnn-change" data-name=${item.id}>${item.name}</div>`
    document.querySelector("#category").innerHTML += note
  })
}

await Rendercategory()

let btns = document.querySelectorAll(".btns-cost #btnn-change");

btns.forEach(async(item, index) => {
  item.addEventListener("click", async() => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });

    btns[index].classList.add("active");

    let food = await foods(1)
    console.log(btns[index].getAttribute('data-name'));
    food = food.filter(item=>item.category==btns[index].getAttribute('data-name'))
    await renderColumn(food)

  });
});


const price =async (material)=>{
  let end = 0
material.forEach(item=>{
  
  end += (item.value*item.materialRaw.price)
  
})
return end;
}
let x15=0
const renderColumn = async (food)=>{
  document.querySelector("#row").innerHTML=""
  document.querySelector("#all").innerHTML=""

  let x=0
  let x1=0
  let x2=0
  let x3=0
  let x4=0
  let x5=0
  let x6=0
  let x7=0
  let x8=0
  let x9=0
  let x10=0
  let x11=0
  let x13=0
  let x14=0
 

  food.forEach(async (item,index)=>{
    const material = await foodMaterials(item.id)
    const FoodCost = await price(material)
    const darsad = document.querySelector("#costFood").value
    const darsadsood = document.querySelector("#darsadSood").value
    const cost = (FoodCost*darsad)/100
    // darsadSood
    const allCost =FoodCost+(FoodCost*darsad)/100
    const allPrice =allCost+(allCost*darsad)/100
    food.forEach((item,index)=>{

      x11 += parseInt(parseInt((allCost*35)/100)*item.NumberSold )
      x13 +=item.NumberSold
      x14 =Math.round(70/(index+1))
   
    })

    let x12 = Math.round(x11/x13)
    const t4 =parseInt(parseInt((allCost*35)/100))>=x12?"H":"L"
    const u4=parseInt(item.NumberSold)>=x14?"H":"L"
    const note= `
    <tr>
  <!-- name-food -->
    <td class="name-food">${item.name}</td>
  <!-- name-food -->
  <!-- column-table -->
    <td><span class="item-row">${Math.round(FoodCost)}</span></td> 
  <!-- column-table -->
    <td><span class="item-row" >${Math.round(cost)}</span></td>
    <td><span class="item-row">${Math.round(allCost)}</span></td> 
    <td><span class="item-row">${darsadsood}</span></td>
    <td><span class="item-row">${Math.round(allPrice)}</span></td>
    <td class="price"><input type="tel" value="${parseInt(allPrice)}"></td>
    <td class="item-row"        >${parseInt((allCost*darsadsood)/100)}</td> 
    <td class="item-row" id="foodCost">${parseInt((FoodCost*100)/parseInt(allPrice))}</td>
    <td class="num"><input type="tel" id="numberSold" value="${item.NumberSold}"></td>
    <td><span class="item-row">${parseInt(allPrice)*parseInt(item.NumberSold)}</span></td>
    <td><span class="item-row">${parseInt(allCost*item.NumberSold)}</span></td> 
    <td><span class="item-row">${parseInt((allCost*darsadsood)/100*item.NumberSold )}</span></td> 
    <td><span class="item-row">${t4}</span></td>
    <td><span class="item-row">${u4}</span></td>
    <td class="${t4=="H"&&u4=="H"?"bg-success":t4=="H"&&u4=="L"?"bg-warning":t4=="L"&&u4=="L"?"bg-danger":t4=="L"&&u4=="H"?"****":""}"><span class="item-row "style="font-size:20px;">${t4=="H"&&u4=="H"?"*****":t4=="H"&&u4=="L"?"***":t4=="L"&&u4=="L"?"**":t4=="L"&&u4=="H"?"****":""}</span></td>
    <td class="item-row">${(item.NumberSold/x13/0.7).toFixed(2)}%</td> 
 
    </tr>
`
  document.querySelector("#row").innerHTML+=note
 
    x+=parseInt(FoodCost)
    
    x1+=parseInt(cost)
   
    x2+=parseInt(allCost)
    
    x3+=parseInt(allPrice)
   

  
    x5+=(FoodCost*100)/parseInt(allPrice)
  
    x6+=parseInt(item.NumberSold)
    x7 +=parseInt((allCost*35)/100)
    
    x8+=parseInt((FoodCost*100)/parseInt(allPrice))
    x9+=item.NumberSold
    x10+=parseInt(allCost*item.NumberSold)

  
    
  const all = `
  <td>کل</td>
  <td>#####</td>
  <td>${x1}</td>
  <td>${x3}</td>
  <td>${x4}</td>
  <td>${Math.round(x5)}</td>
  <td>${x6}</td>
  <td>${x7}</td>
  <td>${x8/(index+1)}</td>
  <td>${x9}</td>
  <td>#####</td>
  <td>${x10}</td>
  <td>#####</td>
  <td></td>
  <td></td>
  <td></td>`
  document.querySelector("#all").innerHTML=all
  document.querySelector("#sood").innerHTML=x12
  document.querySelector("#sahm").innerHTML=x14
  })
 


  const editBTN = document.querySelector("#edit")
  editBTN.addEventListener('click',()=>{
    food.forEach(async(item,index)=>{
      const number =  document.querySelectorAll("#numberSold")
      item.NumberSold=number[index].value;
      console.log(item);
      delete item['image']
      if(await Updatefood(item.id,item)){
        location.reload()
      }
    })
  })
}


await renderColumn(await foods(1))



const downloadBtn = document.querySelector("#download")
downloadBtn.addEventListener('click',()=>{
  window.print()
})