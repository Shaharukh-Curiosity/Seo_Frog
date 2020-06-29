 

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
      message.innerText = request.source;
       
      console.log(request)
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getheaders") {
      headers.innerText = request.source;
       
      console.log(request)
    }
  });
  
   
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getlinks") {
      links.innerText = request.source;
       
      console.log(request)
    }
  });
  

  function onWindowLoad() {
  
    var message = document.querySelector('#message');
    var headers = document.querySelector('#headers');
    var links = document.querySelector('#links');

   
    chrome.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
      }
    });
  
  }
   

 


  window.onload = onWindowLoad;