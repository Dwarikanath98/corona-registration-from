
function saveData(){
    let name,email,psw,;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;
    Age = document.getElementById("Age").value;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("psw",psw)
    localStorage.setItem("Age",Age)
    localStorage.setItem('phoneNumber', 123456789 );
var getPhNum = localStorage.getItem('phoneNumber');
confirm("Number is " + getPhNum );

    let user_records = new Array();
    user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("duplicate data");
    }
    else{
    user_records.push({
      "name":name,
      "email":email,
      "psw" : psw,
      "Age" :Age
    })
    localStorage.setItem("users",JSON.stringify(user_records));
  }
    
 
  }