let image = document.createElement("img");
image.setAttribute("class", "slideimage")
let slide = {
    0: "https://th.bing.com/th/id/OIP.5TgTdrgnpg5Fe-pMxyP8ywHaEt?w=282&h=180&c=7&r=0&o=5&pid=1.7",
    1: "https://th.bing.com/th/id/OIP.JV-ljcA5wPfCr4E3dN4NKwHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7",
    2: "https://th.bing.com/th/id/OIP.t9r3VwKZMjYoxS4JsAmxvAHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7"
}
let i = 0;

setInterval(function () {

    if (i == 3) {
        i = 0;
    }

    image.src = slide[i];
    i++;

}, 2500)

document.querySelector("#slideshow").append(image);

let moviesarr = [];

function moviesdata(n, r, p, i) {
    this.name = n;
    this.release = r;
    this.poster = p;
    this.imdb = i;
}

let m1 = new moviesdata("Venom: Let There Be Carnage", "Released on : October 1, 2021 (USA)", "https://th.bing.com/th/id/OIP.Gi0CHRcu5xxMzpQ8Gj--eQHaE4?w=263&h=180&c=7&r=0&o=5&pid=1.7", "7.0");
let m2 = new moviesdata("Shang-Chi and the Legend of the Ten Rings", "Released on : September 3, 2021 (USA)", "https://th.bing.com/th/id/OIP.KG0wPQIe5LEreb1OeOSjMQHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7", "7.5");
let m3 = new moviesdata("The Batman", "Released on : March 4, 2022 (USA)", "https://th.bing.com/th/id/OIP.zNynFYARaA_fEKsALHO2mQHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7", "8.5");
let m4 = new moviesdata("Morbius", "Released on : 1 Apr 2022", "https://blogger.googleusercontent.com/img/a/AVvXsEhV990GXA52g0DsQE5EMm780w11tmjvqpHiMWAYshH2ENQKr-I1vOa7my8qtE0AuW38NjR2K6oA3vMSr994GtNyQt_5MoZZk2zmUSICZu80iudv3QAn6oflt6f9CqdRFc-herhCCP7_NZhNm4LzGXDZWW7eXa-BR29RfbfOgHXAvgTf5Y20XKjmturX=w484-h640", "7.0");
let m5 = new moviesdata("Thor: Love and Thunder (2022)", "Released on : July 8, 2022 (USA)", "https://th.bing.com/th/id/OIP.zGFqaQ0rXpmL7VSoL8QmDAHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7", "7.3");
let m6 = new moviesdata("Doctor Strange in the Multiverse of Madness", "Released on : May 6, 2022 (USA)", "https://th.bing.com/th/id/OIP.yEjALACEo8uBzo_yEZIVcwHaD3?w=336&h=180&c=7&r=0&o=5&pid=1.7", "8.0");
let m7 = new moviesdata("Joker", "Released on : 2nd oct 2019", "https://thebannercsi.files.wordpress.com/2019/11/image.jpg", "9.1");
let m8 = new moviesdata("Moon Knight (TV Mini Series 2022)", "Released on : 04 May 2022", "https://th.bing.com/th/id/OIP.40K-lNEWrf8vv8IT_cs-PgHaFF?w=204&h=140&c=7&r=0&o=5&pid=1.7", "8.1");
let m9 = new moviesdata("Loki (TV Series 2021)", "Released on : Jun 09, 2021", "https://th.bing.com/th/id/OIP.EfGzh0b-VfVtvnt_QK_ulgHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7", "7.5");

moviesarr.push(m1, m2, m3, m4, m5, m6, m7, m8, m9);

// console.log(moviesarr)

localStorage.setItem("movies", JSON.stringify(moviesarr));

displaydata(moviesarr);

function sorthtl() {
    moviesarr.sort(function (a, b) {
        return b.imdb - a.imdb;
    })

    displaydata(moviesarr);

}

function sortlth() {
    moviesarr.sort(function (a, b) {
        return a.imdb - b.imdb;
    })

    displaydata(moviesarr);
}

function displaydata(moviesarr) {
    document.querySelector("#movies").innerHTML = "";


    moviesarr.map(function (el) {

        let box = document.createElement("div");
        box.setAttribute("class", "innerbox");

        let image = document.createElement("img");
        image.src = el.poster;
        image.setAttribute("class", "mapimage");

        let name = document.createElement("h2");
        name.innerText = el.name;

        let release = document.createElement("h3");
        release.innerText = el.release;

        let imdb = document.createElement("h4");
        imdb.innerText = "Imdb rating : " + el.imdb;

        box.append(image, name, release, imdb);

        document.querySelector("#movies").append(box);
    })

}