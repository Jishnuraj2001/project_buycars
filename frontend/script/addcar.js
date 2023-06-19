const addcar=document.getElementById("addcar_form");
addcar.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    obj["brand"]=document.getElementById("brand").value;
    obj["model_name"]=document.getElementById("model_name").value;
    obj["model_year"]=document.getElementById("model_year").value;
    obj["color"]=document.getElementById("color").value;
    obj["odometer_km"]=document.getElementById("odometer_km").value;
    obj["major_accidents"]=document.getElementById("major_accidents").value;
    obj["previous_owners"]=document.getElementById("previous_owners").value;
    obj["registration_place"]=document.getElementById("registration_place").value;
    obj["description"]=document.getElementById("description").value;
    obj["image"]=document.getElementById("image").value;
    addCarFn(obj);
})


async function addCarFn(obj){
    try {
        let res=await fetch(`http://localhost:3200/addcar`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json",
                authorization:sessionStorage.getItem("car_token")
            },
            body:JSON.stringify(obj)
        })
        let fin=await res.json();
        if(res.status==201){
            alert(fin.msg);
            // window.location.href="./html/login.html";
        }else{
            alert(fin.msg);
        }
    } catch (error) {
        alert("unable add new car");
    }
}