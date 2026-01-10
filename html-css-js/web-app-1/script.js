const users=[];
function dispMsg() {
    let  email= document.getElementById("txt").value;
    let  pwd= document.getElementById("pwd").value; 
    let found=users.find((user)=>user.email===email && user.pwd===pwd);
    if(found){
        lblMsg.innerText="Login successful. Welcome!";
    }else{
        
        lblMsg.innerText="Invalid credentials, please try again.";
    }
}  
function addUser(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("txt").value;
    let pwd=document.getElementById("pwd").value;
    let cpwd=document.getElementById("cpwd").value;
    if(pwd!==cpwd){
        alert("Password and Confirm password do not match");
        return;
    }
      let existingUser=users.find((user)=>user.email===email);
    if(existingUser){
            alert("User with this email already exists");
            return;
        }else{
            alert("User registered successfully");
        }
    let user={
        name:name,
        email:email,
        pwd:pwd
    };
    users.push(user)
    showLogin();
    console.log(users);
}
function showLogin(){
    let str= `
        <h3>Login form</h3>
        <p><label id="lblMsg"> </label></p>
        <p>UserName: <input type="text" id="txt" > </p>
        <p>Password: <input type="password" id="pwd"> </p>
        <p><button class="login-btn" onclick="dispMsg()">Log In</button></p>
        <hr>
        <p><button class="signup-btn" onclick="showSignUp()">Sign Up</button></p>
         `;
    root.innerHTML=str;
}
 
function showSignUp(){
    let str=`
    <h3>Sign Up form</h3>
    <p>Name: <input type="text" id="name" placeholder="Enter name"> </p>
    <p>Email: <input type="text" id="txt" placeholder="Enter email"> </p>
    <p>Password: <input type="password" id="pwd" placeholder="Enter password"> </p>
    <p>Confirm: <input type="password" id="cpwd" placeholder="Confirm password"> </p>
    <p><button class="login-btn" onclick="addUser()" >Submit</button></p>
    <hr>
    <P>Already have an account? <a href="#" onclick="showLogin()">Login</a></P>`;
    root.innerHTML=str;
}
