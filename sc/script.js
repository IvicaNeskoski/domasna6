// 1 Напишете празен p таг во HTML и со помош на Javascript внесете краток Lorem ipsum текст во него
var paragraph_One = document.getElementsByClassName("lorem");

paragraph_One.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nemo, aspernatur mollitia quis, iure reprehenderit voluptatem, porro rerum modi cum commodi?";

document.write(paragraph_One.innerHTML);
console.log(paragraph_One.innerHTML);

    // 2 Во HTML креирајте копче (-) па потоа span со вредност 0 и уште едно копче (+) --> исто како на сликата
    // На клик на (-) бројката да се намалува
    // На клик на (+) бројката да се зголемува
    // // Бројката не смее да отиде под нула и над десет

var up = document.getElementById("up");
var down = document.getElementById("down");
var numbers = document.getElementById("numbers");

var count = 0;
up.addEventListener("click", function () {
    count += 1;
    if (count >= 10) {
        count = 10;
    }
    up.innerHTML = count;
});

down.addEventListener("click", function () {
    count -= 1;
    if (count <= 0) {
        count = 0;
    }
    down.innerHTML = count;
});

// 3 Во HTML напишете празна ul (unordered) list --> исто како на сликата
// во Javascript пополнете ја со имиња на пет програмски јазици (по избор)

var languages_pro = document.getElementsByClassName("list-intem");
// var lista = ["JavaScript","Swift","C#","C++","PHP"];

languages_pro[0].innerHTML = "JavaScript";
languages_pro[1].innerHTML = "Swift";
languages_pro[2].innerHTML = "C#";
languages_pro[3].innerHTML = "C++";
languages_pro[4].innerHTML = "PHP";

//     for (var i = 0; i < languages_pro.length; i++) {
//         languages_pro[i].innerHTML = lista[i];
//     };




// 4 Во HTML линкувајте слика со помош на img тагот
// на клик на сликата, сменете го src-от во некоја друга слика

var image_one = document.querySelector("img");

image_one.addEventListener("click", function(){
    image_one.src = "https://cdn3d.iconscout.com/3d/premium/thumb/metaverse-meditation-experience-6618470-5552799.png"
});





