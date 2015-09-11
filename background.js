/*if(!localStorage.first){
    chrome.tabs.create({
       url : "http://whatever.com/welcome.html"
    });
    localStorage.first = "true";
}*/

if (!localStorage['ran_before']) {
  localStorage['ran_before'] = '1';
  chrome.tabs.create({
       url : chrome.extension.getURL("options.html")
    });
}

if(!localStorage.blist)
	localStorage.blist=JSON.stringify(new Array());


chrome.tabs.onUpdated.addListener(function callback(tabid,info,tab)
{
    
if(info.status=="loading")
    return;
	console.log([info,tab]);
	var url=tab.url.toString().split('?')[0];
        var list=JSON.parse(localStorage.blist);
	if(list.indexOf(url)==-1) //if not in blist then execute screenreader code
	{
	chrome.tabs.executeScript(tab.tabId, {file:"browserspeak.js"}, function(){
		    chrome.tabs.executeScript(tab.tabId, {file:"screenreader.js"}, function(){ console.log("Inserted both browserspeak.js and screenreader.js into "+url)});
			});
	}
});


chrome.browserAction.onClicked.addListener(function (tab){
var url=tab.url.split('?')[0];

var list=JSON.parse(localStorage.blist);
console.log(list);
var index=list.indexOf(url);
console.log(url+" "+index);
if(index==-1) //not in blacklist
{
	if(window.confirm("Disable screenreader for this page?"))
		{
		   list.push(url);
		   localStorage.blist=JSON.stringify(list);
		   alert("Disabled. please reload for changes to take effect");
		}
}
//in blist
else
{
   if(window.confirm("Enable screenreader for this page?"))
		{
		   list.splice(index,1);
		   localStorage.blist=JSON.stringify(list);
		   alert("Enabled .please reload for changes to take effect");
		}
}
});