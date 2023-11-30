import {GetCostWithUser} from './api.js'
const cost = await GetCostWithUser(1)
console.log(cost);
const FoodCost = cost.filter(item=>item.condition=='food')
if(FoodCost != ""){
FoodCost.reverse()
document.querySelector("#FoodCost").value = FoodCost[0].price
}
const DrinkCost = cost.filter(item=>item.condition=='drink')
if(DrinkCost != ""){
DrinkCost.reverse();
document.querySelector("#DrinkCost").value = DrinkCost[0].price
}
const CakeCost = cost.filter(item=>item.condition=='cake')
if(CakeCost != ""){
CakeCost.reverse()
document.querySelector("#CakeCost").value = CakeCost[0].price
}