 

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getinfo") {
      message.innerText = request.source;
       
      
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getheaders") {
      headers.innerText = request.source;
       
     }
  });
  
   
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getlinks") {
      links.innerText = request.source;
       
      
    }
  });

  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getimages") {
      images.innerText = request.source;
       
      
    }
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getscripts") {
      scripts.innerText = request.source;
       
       
    }
  });

  function onWindowLoad() {
  
    var message = document.querySelector('#message');
    var headers = document.querySelector('#headers');
    var links = document.querySelector('#links');
    var links = document.querySelector('#images');


   
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