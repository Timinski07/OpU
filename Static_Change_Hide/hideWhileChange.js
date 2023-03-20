function hideContent(mutations, observer) {
    var htmlTag = document.querySelector("html")
    if (htmlTag.style.display != "none") {
        htmlTag.style.display = "none"
        observer.disconnect()
    }
}
const observer = new MutationObserver(hideContent);
//calls the hide Content Function, when html-tag is created
observer.observe(document.documentElement, { childList: true, subtree: true });

//wait until dom is fully received
document.addEventListener("DOMContentLoaded", function () {
    //copy body and display loading... on website
    bodyTag = document.querySelector("body");
    var bodyCopy = bodyTag.outerHTML;
    bodyTag.innerHTML = "<h1 style= 'visibility: visible, color:white'>loading...<h1>"
    document.querySelector("html").style.display = "block"

    //analyse and change the dom-content of site, that exists in the body
    //Making Changes...

    //show the changed site to the user
    setTimeout(function(){
        bodyTag.outerHTML = bodyCopy;
    },2000)
});