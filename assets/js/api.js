import { CheckLogin } from "./Services.js";

const BASE_URL = "http://185.252.28.87:8000/";
// counseling
const getCounseling = async () => {
  const response = await axios(`${BASE_URL}counseling/all/`);
  return response.data;
};
// education
const getEducation = async () => {
  const response = await axios(`${BASE_URL}education/all/`);
  return response.data;
};

// article
const GetAllArticle = async () => {
  const response = await axios(`${BASE_URL}article/all/`);
  return response.data;
};
const GetArticleWithUser = async (id) => {
  const response = await axios(`${BASE_URL}article/all/${id}/`);
  return response.data;
};
const 
DeleteArticle = async (id) => {
  const response = await axios.delete(`${BASE_URL}article/all/${id}/`);
  return response.data;
};

const InsertArticle = async (data) => {
  const response = await axios.post(`${BASE_URL}article/all/`, data);
  return response.data;
};
// ticket
const GetAllTicket = async () => {
  const response = await axios(`${BASE_URL}ticket/all/`);
  return response.data;
};
const SendTicket = async (data) => {
  const response = await axios.post(`${BASE_URL}ticket/all/`, data);
  return response.data;
};
const GetTicketWithId = async (id) => {
  const response = await axios(`${BASE_URL}ticket/GetId/?id=${id}`);
  return response.data;
};
// material raw
const category = async (data, method) => {
  if (method == "GET") {
    const response = await axios(`${BASE_URL}rawmaterial/allCategory/`);
    return response.data;
  } else if (method == "POST") {
    const response = await axios.post(
      `${BASE_URL}rawmaterial/allCategory/`,
      data
    );
    return response.data;
  }
};
const materialRaw = async (method, data) => {
  if (method == "POST") {
    const response = await axios.post(
      `${BASE_URL}rawmaterial/allMaterial/`,
      data
    );
    return response.data;
  } else if (method == "GET") {
    const response = await axios(`${BASE_URL}rawmaterial/allMaterial/`);
    return response.data;
  }
};
const GetcategoryWithUserId = async (id) => {
  const response = await axios(`${BASE_URL}rawmaterial/GetId/?id=${id}`);
  return response.data;
};
const DeleteCategory = async (id) => {
  const response = await axios.delete(`${BASE_URL}rawmaterial/CategoryGetId/${id}/`);
  return response.data;
};

const materialRawUserId = async (id) => {
  const response = await axios(
    `${BASE_URL}rawmaterial/GetmaterialId/?id=${id}`
  );
  return response.data;
};
const UpdateMaterial = async (id,data) => {
  const response = await axios.put(
    `${BASE_URL}rawmaterial/GetId/${id}/`,data
  );
  return response.data;
};
const GetMaterialWithId = async (id) => {
  const response = await axios(
    `${BASE_URL}rawmaterial/GetId/${id}/`
  );
  return response.data;
};
const DeleteMaterialWithId = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}rawmaterial/GetId/${id}/`
  );
  return response.data;
};


// food

const GetpercentagesForCostControl = async (id) => {
  const response = await axios(`${BASE_URL}food/percentages/?id=${id}`);
  return response.data;
};
const UpdatepercentagesForCostControl = async (id,data) => {
  const response = await axios.put(`${BASE_URL}food/percentages/${id}/`,data);
  return response.data;
};
const InsertpercentagesForCostControl = async (data) => {
  const response = await axios.post(`${BASE_URL}food/percentages/all/`,data);
  return response.data;
};

const GetFoodWithUserId = async (id) => {
  const response = await axios(`${BASE_URL}food/GetId/?id=${id}`);
  return response.data;
};
const foods = async (id) => {
  const response = await axios(`${BASE_URL}food/GetId/?id=${id}`);
  return response.data;
};
const PreparationsFoods = async (id) => {
  const response = await axios(`${BASE_URL}food/Preparations/food/?id=${id}`);
  return response.data;
};
const Insertfood = async (data) => {
  const response = await axios.post(`${BASE_URL}food/all/`,data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }});
  return response.data;
};
const PreparationsDeleteFoodsUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}food/Preparations/material/${id}/`);
  return response.data;
};
const DeleteFoodsUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}food/GetId/${id}/`);
  return response.data;
};
const foodMaterials = async (id) => {
  const response = await axios(`${BASE_URL}food/GetFood/${id}/`);
  return response.data;
};
const PreparationsfoodMaterials = async (id) => {
  const response = await axios(`${BASE_URL}food/Preparations/material/${id}/`);
  return response.data;
};
const foodWithId = async (id) => {
  const response = await axios(`${BASE_URL}food/GetId/${id}/`);
  return response.data;
};
const PreparationsfoodWithId = async (id) => {
  const response = await axios(`${BASE_URL}food/Preparations/food/${id}/`);
  return response.data;
};
const Deletefood = async (id) => {
  const response = await axios.delete(`${BASE_URL}food/category/delete/${id}/`);
  return response.data;
};
const Updatefood = async (id, data) => {
  const response = await axios.put(`${BASE_URL}food/GetId/${id}/`, data);
  return response.data;
};
const PreparationsUpdatefood = async (id, data) => {
  const response = await axios.put(`${BASE_URL}food/Preparations/food/${id}/`, data);
  return response.data;
};
const GetCategory = async (id) => {
  const response = await axios(`${BASE_URL}food/category/?id=${id}`);
  return response.data;
};
const PreparationsGetCategory = async (id) => {
  const response = await axios(`${BASE_URL}food/Preparations/category/?id=${id}`);
  return response.data;
};
const InsertMaterialFood = async (data) => {
  const response = await axios.post(`${BASE_URL}food/all/material/`,data);
  return response.data;
};
const PreparationsInsertMaterialFood = async (data) => {
  const response = await axios.post(`${BASE_URL}food/Preparations/material/all/`,data);
  return response.data;
};
const PostCategory = async(data)=>{
  const response = await axios.post(`${BASE_URL}food/category/Post/`,data);
  return response.data;
  
}
const PreparationsPostCategory = async(data)=>{
  const response = await axios.post(`${BASE_URL}food/Preparations/category/all/`,data);
  return response.data;
  
}
const DeleteMaterial = async(id)=>{
  const response = await axios.delete(`${BASE_URL}food/GetFood/${id}/`);
  return response.data;
  
}
const PreparationsDeleteMaterial = async(id)=>{
  const response = await axios.delete(`${BASE_URL}food/Preparations/material/${id}/`);
  return response.data;
  
}


// cost
const GetCostWithUser = async (id) => {
  const response = await axios(`${BASE_URL}cost/GetId/?id=${id}`);
  return response.data;
};
const GetAllCost = async (method, data) => {
  if (method == "POST") {
    const response = await axios.post(`${BASE_URL}cost/all/`, data);
    return response.data;
  } else if (method == "GET") {
    const response = await axios(`${BASE_URL}cost/all/`);
    return response.data;
  }
};

// employee
const GetEmployeeWithUserId = async (id) => {
    const response = await axios(`${BASE_URL}employee/Get/?id=${id}`);
    return response.data;
};
const InsertEmployee=async (data)=>{
  const response = await axios.post(`${BASE_URL}employee/all/`,data);
  const data2={
    "fixedSalary":0,
    "overTime":0,
    "reward":0,
    "totalAmount":0,
    "employee": response.data.id
}
  const response2 = await axios.post(`${BASE_URL}income/all/`,data2);
  return response.data;
}
const GetIncomeEmployee = async () => {
  const response = await axios(`${BASE_URL}income/all/`);
  return response.data;
};
const UpdateIncomeEmployee = async (id, data) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}income/GetId/${id}/`, data);
  return response.data;
};

// story
const GetStory = async () => {
  const response = await axios(`${BASE_URL}story/all/`);
  return response.data;
};
// user
const Login = async (phone,password) => {
  const response = await axios(`${BASE_URL}user/Login/?phone=${phone}&&password=${password}`);
  return response.data;
};
const GetAllUser = async () => {
  const response = await axios(`${BASE_URL}user/all/`);
  return response.data;
};
const signin = async (data) => {
  const response = await axios.post(`${BASE_URL}user/all/`,data);
  return response.data;
};
const GetWithUser = async (id) => {
  const response = await axios(`${BASE_URL}user/GetId/${id}/`);
  return response.data;
};

// counseling
const Insertcounseling = async (data,method) => {
  if(method =="GET"){
    const response = await axios(`${BASE_URL}counseling/all/`);
    return response.data;
  }else{

    const response = await axios.post(`${BASE_URL}counseling/all/`,data);
    return response.data;
  }
};
// shopping List
const GetShopingList = async (id) => {
  const response = await axios(`${BASE_URL}shopinglist/GetId/?id=${id}`);
  return response.data;
};

const GetAllSubscription = async (data,method) => {
  if(method=="POST"){
    const response = await axios.post(`${BASE_URL}subscription/all/`,data);
    return response.data;
  }else{

    const response = await axios(`${BASE_URL}subscription/all/`);
    return response.data;
  }
};


const Getbutchery = async (id) => {
  const response = await axios(`${BASE_URL}butchery/GetId/${id}/`)
  return response.data;
};
const Updatebutchery = async (id,data) => {
  const response = await axios.put(`${BASE_URL}butchery/GetId/${id}/`,data);
  return response.data;
};
const Insertbutchery = async (id,data) => {
  const response = await axios.post(`${BASE_URL}butchery/all/`,data);
  return response.data;
};
(async() => {
  const id =localStorage.getItem("UTid")
  let user = await GetAllUser()
  user = user.filter(item=>item.id==id)
  if( document.querySelector(".name")!=null){

    document.querySelector(".name").innerHTML=user[0].name;
    console.log(user);
    document.querySelector(".city").innerHTML=user[0].city;
    return user;
  }
})();

export {
  getCounseling,
  getEducation,
  GetFoodWithUserId,
  GetAllArticle,
  GetArticleWithUser,
  GetAllTicket,
  SendTicket,
  InsertArticle,
  GetTicketWithId,
  materialRaw,
  category,
  foods,
  foodMaterials,
  foodWithId,
  Updatefood,
  GetCostWithUser,
  GetEmployeeWithUserId,
  GetIncomeEmployee,
  GetStory,
  GetCategory,
  GetAllUser,
  Login,
  signin,
  Insertcounseling,
  GetShopingList,
  GetcategoryWithUserId,
  GetAllCost,
  materialRawUserId,
  UpdateIncomeEmployee,
  InsertEmployee,
  UpdateMaterial,
  Insertfood,
  GetMaterialWithId,
  DeleteArticle,
  InsertMaterialFood,
  GetAllSubscription,
  PostCategory,
  DeleteMaterial,
  DeleteMaterialWithId,
  DeleteCategory,
  Deletefood,
  DeleteFoodsUser,
  Getbutchery,
  Updatebutchery,
  Insertbutchery,
  GetpercentagesForCostControl,
  UpdatepercentagesForCostControl,
  InsertpercentagesForCostControl,
  PreparationsFoods,
  PreparationsfoodMaterials,
  PreparationsDeleteFoodsUser,
  PreparationsInsertMaterialFood,
  PreparationsGetCategory,
  PreparationsPostCategory,
  PreparationsfoodWithId,
  PreparationsUpdatefood,
  PreparationsDeleteMaterial,
  GetWithUser,
};
