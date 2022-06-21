const username = document.getElementById("username");
const password = document.getElementById("password");

const divUser = document.getElementById("user_gresit");
const divPass = document.getElementById("parola_gresita");

function Testare() {
    var cnt = 0;
    //localStorage.removeItem("logat");
    if (localStorage.getItem("logat") == null) {
        if (username.value === "admin") {
            console.log("corect");
            cnt++;
            divUser.style.visibility = "hidden";
        }
        else {
            console.log("incorect");
            divUser.style.visibility = "visible";
        }
    
        if (password.value === "1234") {
            console.log("corect");
            cnt++;
            divPass.style.visibility = "hidden";
        }
        else {
            console.log("Parola grasita");
            divPass.style.visibility = "visible";
        }
        if (cnt == 2) {
            localStorage.setItem("logat", "true");
            location.href = "./UserHome.html";
        }
    }
    else {
        alert("Sunteti deja conectat!");
        location.href = "./UserHome.html";
    }
}