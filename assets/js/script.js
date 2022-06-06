var slideIndex = 1;
slideShow(slideIndex);
postShow();
function myFunction() {
    var nav = document.getElementById("myTopNav");
    if (nav.className === "top-nav") {
        nav.className += " responsive";
    } else {
        nav.className = "top-nav";
    }
}
function plusSlide(n){
    slideShow(slideIndex += n);
}
function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if(n > slides.length) {
        slideIndex = 1;
    } else if(n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function* entries(obj) {
    for (let key of Object.keys(obj)) {
      yield [key, obj[key]];
    }
 }
function postShow() {
    let item_post = document.querySelector("#content");
    for (const [key, value] of entries(posts)){
        let data = document.createElement('article');
        data.classList.add('card');
        if(value.data1 != undefined){
            data.id = value.id;
            data.innerHTML = "<img src='assets/image/"+value.image+"' class='futured-image' />";
            data.innerHTML += "<h2>"+value.title+"</h2>";
            data.innerHTML += "<p>"+value.data1+"</p>";
            data.innerHTML += "<p>"+value.data2+"</p>";
            if(value.title === "Jenis"){
                for(const [key, value] of entries(jenis)){
                data.innerHTML += "<h3>"+value.title+"</h3>";
                data.innerHTML += "<img src='assets/image/"+value.image+"' class='sub-image' />";
                data.innerHTML += "<p>"+value.data+"</p>";
                }
            }
        }else{
            data.id = value.id;
            data.innerHTML = "<img src='assets/image/"+value.image+"' class='futured-image' />";
            data.innerHTML += "<h2>"+value.title+"</h2>";
            data.innerHTML += "<p>"+value.data+"</p>";
            if(value.title === "Jenis"){
                for(const [key, value] of entries(jenis)){
                data.innerHTML += "<h3>"+value.title+"</h3>";
                data.innerHTML += "<img src='assets/image/"+value.image+"' class='sub-image' />";
                data.innerHTML += "<p>"+value.data+"</p>";
                }
            }
        }
        item_post.appendChild(data);
    }
}