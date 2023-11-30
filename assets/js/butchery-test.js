// import api
import {
  GetMaterialWithId,
  UpdateMaterial,
  Getbutchery,
  Updatebutchery,
  Insertbutchery,
} from "./api.js";
// import function seprate number

import { separate } from "./Services.js";
// show loading
const loading = document.querySelector(".loading");
document.querySelector(".test").style.display = "none";
loading.style.display = "block";
// get id from url
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
// query selector
const rawValue = document.querySelector("#rawValue");
const cookedValue = document.querySelector("#cookedValue");
const anbar = document.querySelector("#anbar");
const bedon = document.querySelector("#bedon");
const darsad_bedon = document.querySelector("#darsad-bedon");
const ghabel = document.querySelector("#ghabel");
const pokht = document.querySelector("#pokht");
const darsad_ghabel = document.querySelector("#darsad-ghabel");
const nameProduct = document.querySelector("#nameProduct");

// get material with id
const material = await GetMaterialWithId(id);

// get test with food id
await Getbutchery(id)
  .then(async (res) => {
console.log(res);

   
    
    // name used food
    localStorage.setItem("bid", res.id);
    // insert value in element
    nameProduct.value = res.used;
    rawValue.value = res.raw_press;
    cookedValue.value = res.cooked_press;
    anbar.value = res.weight;
    document.querySelector("#Oldprice").value=res.totalprice
    document.querySelector("#anbar-2").value = anbar.value;
    bedon.value = res.useless;
    ghabel.value = res.usable;
    darsad_bedon.value = ((bedon.value * 100) / anbar.value).toFixed(2);
    const weight_loss =
      parseFloat(anbar.value) -
      (parseFloat(bedon.value) + parseFloat(ghabel.value));
    darsad_ghabel.value = ((ghabel.value * 100) / anbar.value).toFixed(2);
    document.querySelector("#result").value = weight_loss;
    document.querySelector("#darsad-result").value = (
      (weight_loss * 100) /
      anbar.value
    ).toFixed(2);

   if(parseInt((res.totalprice * anbar.value)/weight_loss)!=material.price){
    let test = res
    test.totalprice = material.price
    
    console.log(await Updatebutchery(localStorage.getItem("bid"), test));
    location.reload()
   }

    document.querySelector("#tamiz").value = weight_loss;
    document.querySelector("#darsad-tamiz").value = (
      (weight_loss * 100) /
      anbar.value
    ).toFixed(2);
    pokht.value = res.cooking_loss;
    document.querySelector("#darsad-pokht").value = (
      (pokht.value * 100) /
      weight_loss
    ).toFixed(2);
    document.querySelector("#darsad-pokht").value = (
      (pokht.value * 100) /
      weight_loss
    ).toFixed(2);
    document.querySelector("#forosh").value = weight_loss - pokht.value;
    document.querySelector("#darsad-forosh").value = (
      ((weight_loss - pokht.value) * 100) /
      weight_loss
    ).toFixed(2);
    // result
    document.querySelector("#nesbat-khorak").value = (
      (weight_loss * 100) /
      anbar.value
    ).toFixed(2);
    document.querySelector("#nesbat-pokhteh").value = (
      ((weight_loss - pokht.value) * 100) /
      weight_loss
    ).toFixed(2);
    document.querySelector("#price-kham").value = separate(
      ((res.totalprice* anbar.value) / weight_loss).toFixed(2)
    );
    document.querySelector("#price-pokhteh").value = separate(
      ((res.totalprice* anbar.value) / (weight_loss - pokht.value)).toFixed(2)
    );
    document.querySelector("#price-pors-kham").value = separate(
      ((res.totalprice* anbar.value) / weight_loss).toFixed(2) *
        document.querySelector("#rawValue").value
    );
    document.querySelector("#price-pors-pokhteh").value = separate(
      ((res.totalprice* anbar.value) / weight_loss).toFixed(2) *
        document.querySelector("#cookedValue").value
    );

    document.querySelector("#kham-num").value =
      weight_loss / document.querySelector("#rawValue").value;
    document.querySelector("#pokhteh-num").value =
      (weight_loss - pokht.value) /
      document.querySelector("#cookedValue").value;

      let data = material;
      
     
        data.price = parseInt((res.totalprice* anbar.value) / weight_loss).toFixed(
          2
        );
    
    // update or insert
    document.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
       
      document.querySelector(".test").style.display = "none";
      loading.style.display = "block";
      setTimeout(async () => {
       
        const data2 = {
          cooked_press: rawValue.value,
          raw_press: cookedValue.value,
          cooking_loss: pokht.value,
          totalprice: document.querySelector("#price").value,
          usable: ghabel.value,
          useless: bedon.value,
          used: nameProduct.value == "" ? "empty" : nameProduct.value,
          weight: anbar.value,
          material: material.id,
        };
  

       
        console.log(await Updatebutchery(localStorage.getItem("bid"), data2));
        document.querySelector(".test").style.display = "block";
        loading.style.display = "none";
        location.reload()
      }, 2000);
      
    } });

    document.querySelector(".test").style.display = "block";
    loading.style.display = "none";
    let materialNewPrice= data
    materialNewPrice.price=parseInt((res.totalprice* anbar.value) / weight_loss).toFixed(2)

    console.log(await UpdateMaterial(material.id, materialNewPrice));
  })
  .catch(async (err) => {
 
    document.addEventListener("keyup",async (event) => {
      if (event.key === "Enter") {
        
        document.querySelector(".test").style.display = "none";
        loading.style.display = "block";
        let data = material;

      const weight_loss =
        parseFloat(anbar.value) -
        (parseFloat(bedon.value) + parseFloat(ghabel.value));
      data.price = parseInt(
        (material.price * anbar.value) / weight_loss
      ).toFixed(2);

      setTimeout(async () => {
        document.querySelector(".test").style.display = "none";
        loading.style.display = "block";
       console.log( await UpdateMaterial(material.id, data));
        const data2 = {
          
          cooked_press: rawValue.value,
          raw_press: cookedValue.value,
          cooking_loss: pokht.value,
          totalprice:document.querySelector("#price").value,
          usable: ghabel.value,
          useless: bedon.value,
          used: nameProduct.value == "" ? "empty" : nameProduct.value,
          weight: anbar.value,
          material: material.id,
        };
        console.log(data2);

        console.log(await Insertbutchery(localStorage.getItem("bid"), data2));
        location.reload()

      }, 2000);
 
   } });

   document.querySelector(".test").style.display = "block";
   loading.style.display = "none";

  });

console.log(material);

//-------------------- set information ---------------------
document.querySelector("#rawname").value = material.name;

document.querySelector("#price").value = material.price;

// ---------------------------------------------------------
// -------------update value after keyup -------------------

rawValue.addEventListener("keyup", () => {
  console.log("hello");
});
cookedValue.addEventListener("keyup", () => {
  console.log("hello");
});
// ---------------------------------------------------------

anbar.addEventListener("keyup", () => {
  const anbar2 = (document.querySelector("#anbar-2").value = anbar.value);
});

bedon.addEventListener("keyup", () => {
  darsad_bedon.value = ((bedon.value * 100) / anbar.value).toFixed(2);
});

ghabel.addEventListener("keyup", () => {
  const weight_loss =
    parseFloat(anbar.value) -
    (parseFloat(bedon.value) + parseFloat(ghabel.value));

  darsad_ghabel.value = ((ghabel.value * 100) / anbar.value).toFixed(2);
  document.querySelector("#result").value = weight_loss;
  document.querySelector("#darsad-result").value = (
    (weight_loss * 100) /
    anbar.value
  ).toFixed(2);
  document.querySelector("#tamiz").value = weight_loss;
  document.querySelector("#darsad-tamiz").value = (
    (weight_loss * 100) /
    anbar.value
  ).toFixed(2);
});
pokht.addEventListener("keyup", () => {
  const weight_loss =
    parseFloat(anbar.value) -
    (parseFloat(bedon.value) + parseFloat(ghabel.value));

  document.querySelector("#darsad-pokht").value = (
    (pokht.value * 100) /
    weight_loss
  ).toFixed(2);
  document.querySelector("#forosh").value = weight_loss - pokht.value;
  document.querySelector("#darsad-forosh").value = (
    ((weight_loss - pokht.value) * 100) /
    weight_loss
  ).toFixed(2);

  console.log(weight_loss);
  console.log(parseFloat(material.price * anbar.value));

  // result
  document.querySelector("#nesbat-khorak").value = (
    (weight_loss * 100) /
    anbar.value
  ).toFixed(2);
  document.querySelector("#nesbat-pokhteh").value = (
    ((weight_loss - pokht.value) * 100) /
    weight_loss
  ).toFixed(2);
  document.querySelector("#price-kham").value = (
    (material.price * anbar.value) /
    weight_loss
  ).toFixed(2);
  document.querySelector("#price-pokhteh").value = (
    (material.price * anbar.value) /
    (weight_loss - pokht.value)
  ).toFixed(2);
  document.querySelector("#price-pors-kham").value =
    ((material.price * anbar.value) / weight_loss).toFixed(2) *
    document.querySelector("#rawValue").value;
  document.querySelector("#price-pors-pokhteh").value =
    ((material.price * anbar.value) / weight_loss).toFixed(2) *
    document.querySelector("#cookedValue").value;

  document.querySelector("#kham-num").value =
    weight_loss / document.querySelector("#rawValue").value;
  document.querySelector("#pokhteh-num").value =
    (weight_loss - pokht.value) / document.querySelector("#cookedValue").value;




 
});


