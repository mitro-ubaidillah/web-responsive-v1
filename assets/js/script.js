var slideIndex = 1;

slideShow(slideIndex);
postShow();

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
        // console.log(value.title);
        let data = document.createElement('article');
        data.classList.add('card');
        if(value.data1 != undefined){
            data.innerHTML = "<h2>"+value.image+"</h2>";
            data.innerHTML += "<h2>"+value.title+"</h2>";
            data.innerHTML += "<p>"+value.data1+"</p>";
            data.innerHTML += "<p>"+value.data2+"</p>";
            if(value.title == "Jenis"){
                for(const [key, value] of entries(jenis))
                data.innerHTML += "<h3>"+value.title+"</h3>";
            }
        }else{
            data.innerHTML = "<h2>"+value.image+"</h2>";
            data.innerHTML += "<h2>"+value.title+"</h2>";
            data.innerHTML += "<p>"+value.data+"</p>";
            if(value.title == "Jenis"){
                for(const [key, value] of entries(jenis)){
                data.innerHTML += "<h3>"+value.title+"</h3>";
                data.innerHTML += "<h3>"+value.image+"</h3>";
                data.innerHTML += "<p>"+value.data+"</p>";
                }
            }
        }
        item_post.appendChild(data);
    }
}