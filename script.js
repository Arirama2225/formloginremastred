function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let hasil = document.getElementById("hasil");

    if (user === "admin" && pass === "admin321") {
        hasil.style.color = "green";
        hasil.innerHTML = "akhire isok!";

        window.location.href = "dashboard.html";
    } else if (user === "" || pass === "") {
        hasil.style.color = "orange";
        hasil.innerHTML = "username dan password tidak boleh kosong!";
        
    } else {
        hasil.style.color = "red";
        hasil.innerHTML = "salah woy!";
    }
}