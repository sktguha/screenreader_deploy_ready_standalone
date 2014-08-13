chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://installed.html"}, function (tab) {
        console.log("help tab launched");
    });
});
alert("hello");