var i = 0
var error = 0;
var worked3 = false;

function checkList(word) {
    var einArray = ["lebensmittel", "rezept", "github", "gesund", "nahrung", "postfach", " gmail", " usb c ", " usb-c "," adapter ", "programming", "code", "java", "c#", "python", "server", "powershell", " api ", "regex", "typescript", "node.js",
        "windows", "extension", "computerphile", " etf", "investor", "wireshark", "program", "html", "proxy", "unity", "xml", " css ", " php ",
        "ajax", "bootstrap", "sniffer", "hacking", "adobe", "photoshop", "website", " error", "logging", "password", "overflow", "linux", "macos",
        "byte", "directorie", " file", "data", "datei", "exception", "network", "nginx", "module", "library", "function", "for loop", "while loop",
        "matlab", " cmd", "batch", "bash", "command prompt", "instal", " vbs", "visual basic", "visual studio", "input", "output",
        "convert", "verification", "enable", "disable", "array", "object", "variable", "modify", "hello world", "operator", "inheritance", "overloading",
        "aktien", "bitcoin", " zins", "portfolio", "msci world", "schulden", "insolvenz", "stock", "Anleger", "comdirect", "splid", "learn", "language",
        "vocabulary", "software", " app", "computer", "desktop", "chrome", "monitor"];

    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1)
            included = true;
    });
    return included;
}
function checkList2(word) {
    var einArray = ["captal bra"];

    var included = false
    einArray.forEach(function (einArrayElement) {
        if (word.search(einArrayElement) > -1) {
            included = true;
        }
    });
    return included;
}

function repeat() {
    success3 = false;
    try {
        if (i > 100) {
            i = 0;
        }
        var beficon = document.getElementById("logo-icon");
        var icon = beficon.getElementsByTagName("svg")[0];
        beficon.remove(icon);
        var parent1 = document.getElementById("content");
        parent1 = parent1.getElementsByClassName("ytd-two-column-browse-results-renderer")[0];
        del = parent1.getElementsByClassName("style-scope ytd-two-column-browse-results-renderer")[0];
        parent1.remove(del);
        //console.log("in 1");
    }
    catch (err) {
        try {
            var video = document.getElementById("player-container-outer");
            var deli = video.getElementsByTagName("video")[0];

            var videoTitle = document.getElementById("info-contents");
            videoTitle = videoTitle.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
            videoTitle = videoTitle.toLowerCase();

            if (checkList(videoTitle)) {
                throw "error"
            }
            else {
                if (videoTitle != "") {
                    video.remove(deli);
                }
                else {
                    throw "error";
                }
            }
        }
        catch (errr) {
            try {
                var miniPlay = document.getElementsByTagName("ytd-miniplayer")[0];
                miniPlay.remove(miniPlay);
            }
            catch (errrr) {
                try {
                    var parent2 = document.getElementById("columns");
                    parent2 = parent2.getElementsByTagName("ytd-watch-next-secondary-results-renderer")[0];
                    parent2 = parent2.getElementsByTagName("ytd-compact-video-renderer")[i];
                    var del2 = parent2.getElementsByClassName("style-scope ytd-compact-video-renderer")[0];
                    var title = del2.getElementsByTagName("h3")[0].innerText;

                    title = title.toLowerCase();

                    if (checkList(title)) {
                        success3 = true;
                        ++i;
                    }
                    else {
                        parent2.remove(del2);
                    }

                    //var channel = del2.getElementsByTagName("ytd-channel-name")[0];
                    //channel = channel.getElementsByTagName("yt-formatted-string")[0];
                    //channel = channel.innerText;

                    ////console.log("in 2");

                    //if (channel == "sportstudio" || channel == "David Dobrik" || channel == "SPORT1" || channel == "What The Hell ? - Oh My Goal") {
                    //    i++;
                    //}
                    //else {
                    //    parent.remove(del);
                    //}
                }
                catch (err2) {
                    try {
                        var parent3 = document.getElementById("contents");
                        var beforedel = parent3.getElementsByTagName("ytd-video-renderer")[i];
                        var del3 = beforedel.getElementsByTagName("div")[0];
                        var title2 = del3.getElementsByTagName("h3")[0].innerText;
                        title2 = title2.toLowerCase();

                        if (checkList(title2)) {
                            ++i;
                        }
                        else {
                            beforedel.remove(del3);
                        }

                        //parent3 = beforedel.getElementsByClassName("style-scope ytd-video-renderer")[0];
                        //parent3 = parent3.getElementsByClassName("text-wrapper style-scope ytd-video-renderer")[0];
                        //var channel2 = parent3.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0];


                        ////console.log("in 3");
                        //if (channel2.innerText == "sportstudio" || channel2.innerText == "SPORT1" || channel2.innerText == "What The Hell ? - Oh My Goal") {
                        //    i++;
                        //}
                        //else {
                        //    beforedel.remove(del);
                        //}
                    }
                    catch (err3) {
                        ++i;
                    }
                }
                try {
                    var parent3 = document.getElementById("contents");
                    var beforedel = parent3.getElementsByTagName("ytd-video-renderer")[i];
                    var del3 = beforedel.getElementsByTagName("div")[0];
                    var title2 = del3.getElementsByTagName("h3")[0].innerText;
                    title2 = title2.toLowerCase();

                    if (checkList(title2)) {
                        ++i;
                    }
                    else {
                        beforedel.remove(del3);
                    }

                    //parent3 = beforedel.getElementsByClassName("style-scope ytd-video-renderer")[0];
                    //parent3 = parent3.getElementsByClassName("text-wrapper style-scope ytd-video-renderer")[0];
                    //var channel2 = parent3.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0];


                    ////console.log("in 3");
                    //if (channel2.innerText == "sportstudio" || channel2.innerText == "SPORT1" || channel2.innerText == "What The Hell ? - Oh My Goal") {
                    //    i++;
                    //}
                    //else {
                    //    beforedel.remove(del);
                    //}
                }
                catch (err4) {
                    if (success3 == false) {
                        ++i;
                    }
                }
            }
        }
    }
}
setInterval(repeat, 2);

