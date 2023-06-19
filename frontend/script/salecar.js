let car_container=document.getElementById("cars_container");



getAllCarsFn();

async function getAllCarsFn(){
    try {
        let res=await fetch("http://localhost:3200/allcars");
        let fin=await res.json();
        if(res.status==200){
            renderCarsFn(fin.data);
        }else{
            alert(fin.msg);
        }
    } catch (error) {
        console.log(error.message);
        alert("unable to get all cars");
    }
}




function renderCarsFn(array){
    car_container.innerHTML=null;
    let template_arr=array.map((el)=>{
        return`<div class="car_box">
        <img src=${el.image} alt=${el.brand+el.model_name} width="100%" height="300px">
        <div class="brand">Brand : ${el.brand}</div>
        <div class="model_name">Model Name : ${el.model_name}</div>
        <div class="model_year">Model year : ${el.model_year}</div>
        <div class="odometer_km">Odometer KM : ${el.odometer_km}</div>
        <div class="major_accidents">Accident History : ${el.major_accidents}</div>
        <div class="previous_owners">Previous Owners : ${el.previous_owners}</div>
        <div class="registration_place">Regitration Place : ${el.registration_place}</div>
        <div class="description">${el.description}</div>
        <button class="delete" data-id=${el._id}>DELETE</button>
        <button class="edit" data-id=${el._id}>EDIT</button>
    </div>`;
    })

    car_container.innerHTML=template_arr.join("");

    let all_delete_btns=document.querySelectorAll(".delete");
    for(let delete_btn of all_delete_btns){
        delete_btn.addEventListener("click",(event)=>{
            event.preventDefault();
            let id=event.target.dataset.id;
            deleteCarFn(id);
        })
    }
}

async function deleteCarFn(id){
    try {
        let res=await fetch(`http://localhost:3200/deletecar/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"Application/json",
                authorization:sessionStorage.getItem("car_token")
            }
        })
        let fin=await res.json();
        if(res.status==202){
            alert(fin.msg);
            window.location.href="../html/salecar.html";
        }else{
            alert(fin.msg);
        }
    } catch (error) {
        alert("unable to delete car data");
    }
}