var htmlTag
var url

console.log("quwvdztqwret\ngwtzqcwetrq\njwqvzqwrce\n")

//hides all the content for a page
function hideContent(mutations, observer) {
    htmlTag = document.querySelector("html")
    if (htmlTag.style.display != "none") {
        htmlTag.style.display = "none"
        observer.disconnect()
    }
}

//observer calls the hide Content Function, when html-tag is created
const observer = new MutationObserver(hideContent);
observer.observe(document.documentElement, { childList: true, subtree: true });



//execute code on html body and show the changes
function actAndShow() {
    url = document.location.href;
    //analyse and change the dom-content of site, that exists in the body
    //Make Changes...

    //show the changed site to the user
    setTimeout(function () {
        htmlTag.style.display = "block"
        //as soon as first changes are made body gets observed
        urlObserver.observe(document.querySelector("body"), { childList: true, subtree: true });
    }, 2000)
}

//wait until dom is fully received, then act
document.addEventListener("DOMContentLoaded", actAndShow);

//check if url was changed then hide/change/show
function urlChange(mutation, observer) {
    if (url != undefined) {
        if (url != document.location.href) {
            hideContent(mutation, observer)
            actAndShow()
        }
        else {
            //optional functions to be added
        }
    }
}

//when body is changed, call url change to check if url was changed
var urlObserver = new MutationObserver(urlChange);


