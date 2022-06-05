var slideIndex = 1;

let posts = {
    a : {
        image : "esport.jpg",
        title : "Apa itu E-sport",
        data : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quia tenetur, cumque impedit facere ipsam, harum libero possimus iusto error eligendi quos sunt, hic nihil architecto porro soluta expedita. Mollitia"
    },
    b : {
        image : "history.jpg",
        title : "Sejarah",
        data : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quia tenetur, cumque impedit facere ipsam, harum libero possimus iusto error eligendi quos sunt, hic nihil architecto porro soluta expedita. Mollitia" 
    },
    c : {
        image : "cabang.jpg",
        title : "Cabang E-sport",
        data : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quia tenetur, cumque impedit facere ipsam, harum libero possimus iusto error eligendi quos sunt, hic nihil architecto porro soluta expedita. Mollitia" 
    }

}

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
        data.innerHTML = "<h2>"+value.image+"</h2>";
        data.innerHTML += "<h2>"+value.title+"</h2>";
        data.innerHTML += "<p>"+value.data+"</p>";


        item_post.appendChild(data);
    }
}