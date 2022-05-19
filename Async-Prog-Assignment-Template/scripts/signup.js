function userdata(n, m, e, p) {
    this.name = n;
    this.mob = m;
    this.email = e;
    this.password = p;
}

function submitdata() {
    event.preventDefault();

    //console.log("Hiiii")

    let form = document.querySelector("#inputform");
    let name = form.name.value;
    let mob = form.mobile.value;
    let email = form.email.value;
    let password = form.password.value;

    if (form.name.value == "" || form.mobile.value == "" || form.email.value == "" || form.password.value == "") {
        alert("Incomplete information");
    }
    else {

        let obj = new userdata(name, mob, email, password);

        let userarr = JSON.parse(localStorage.getItem("data")) || [];

        userarr.push(obj);

        localStorage.setItem("data", JSON.stringify(userarr));

        form.name.value = null;
        form.mobile.value = null;
        form.email.value = null;
        form.password.value = null;

    }

}