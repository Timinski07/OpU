//hide everything on the website
var htmlTag = document.querySelector("html")
htmlTag.style.display = "none"

//wait until dom is fully received
document.addEventListener("DOMContentLoaded", function() {
    //copy body and display loading... on website
    bodyTag = document.querySelector("body");
    var bodyCopy = bodyTag.outerHTML;
    bodyTag.innerHTML =  "<h1 style= 'visibility: visible, color:white'>loading...<h1>"
    htmlTag.style.display = "block"

    //analyse and change the dom-content of site, that exists in the body
    //Making Changes...

    //show the changed site to the user
    setTimeout(function(){
        bodyTag.outerHTML = bodyCopy;
    },2000)
});