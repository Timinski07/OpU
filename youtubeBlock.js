//hide everything on the website
var htmlTag = document.querySelector("html")
htmlTag.style.display = "none"

//wait until dom is fully received
document.addEventListener("DOMContentLoaded", function() {
    //copy body and display loading... on website
    setTimeout(function(){
        console.log(document.querySelector("html"));
        var filterMenu = document.getElementById("filter-menu");
        filterMenu.remove(filterMenu);
        htmlTag.style.display = "block"
    },2000)
});