let div = document.querySelectorAll("div");
for(let i of div){
    console.log(i);
    let newelement = document.createElement("div");
    newelement.innerText = "yooooooo! I am deb";
    newelement.innerHTML = `<div class = "wrapper">
        <h4>
           <div class = "login" ><label><h1>Login</h1></label></div>
           <div class = "email">
            <input type="text" name = "email" placeholder=" Email"></div><br>
            <div class = "Password">
            <input type="password" name = "password" placeholder=" Password"></div><br>
            <div class="checkbox" ><input type = "checkbox" name = "tik" class="check"> Remember me<br><br>
            <label>Forgot Password?</label></div><br>
            <div class = "button" ><input type = "submit" name="submit" Value = "login"></div>
        </h4>
    </div>`;
    i.append(newelement);
}
