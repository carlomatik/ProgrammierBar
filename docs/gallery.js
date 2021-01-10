var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gall");
var images = new Array(
    "gallery/barimage1.jpg",
    "gallery/barimage2.jpg",
    "gallery/barimage3.jpg",
    "gallery/barimage4.jpg",
    "gallery/barimage5.jpg",
    "gallery/barimage6.jpg",
    "gallery/barimage7.jpg",
    "gallery/barimage8.jpg",

);

for (let i=0; i<btn.length; i++){
    btn[i].onclick = function()
    {
        gallery.src = images[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    
    };
}