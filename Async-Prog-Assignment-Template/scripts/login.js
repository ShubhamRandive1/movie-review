var usercred = JSON.parse(localStorage.getItem("data"));

function loginsubmit() {
    event.preventDefault();

    // console.log("Hiii")

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var flag = false;
    for (var i = 0; i < usercred.length; i++) {
        if (usercred[i].email == email && usercred[i].password == password) {
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }

    if (flag) {
        alert("Login successful");
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        window.location.href = "index.html";

    }
    else {
        alert("Invalid Cridentials");
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
    }
}