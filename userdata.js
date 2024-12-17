let username = document.querySelector("#name");
let userage = document.querySelector("#box");
let btn = document.querySelector("#btn");
fetch("userdata.json").then((response)=>{
    return response.json();
}).then((data)=>{
       //console.log(data);
    //    for(let item of data){
    //     console.log(item);
    //    }
    btn.addEventListener('click',()=>{
        let get = 0;
        for(let i in data){
            if(data[i].name === username.value){
            console.log(data[i].age);
            userage.innerText = data[i].age;
            get = 1;
            }
            //console.log(data["Debottam"]);
        }
        if(get == 0){
            window.alert("No such username available");
        }
    })
});
