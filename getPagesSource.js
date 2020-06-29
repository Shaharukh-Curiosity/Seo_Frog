function Seo_Improve(document_root) {
  var html = "";

  var page_title = document.getElementsByTagName("title")[0].innerHTML;
  if (page_title) {
    html += "Title:" + "  " + page_title;
    html += "\n\n";
    html +=
      "Title Length:" +
      "  " +
      document.getElementsByTagName("title")[0].innerHTML.length;
  } else {
    html += "Title:" + "title is missing";
  }
  html+='\n\n'

  html+= 'Keoywords:'+Meta_Keywords()+ '\n\n'

  html+= 'Description:'+Meta_Description()+'\n\n'

  html += "\n\n";
  html += "URL:" + document.URL;
  html += "\n\n";
  html += "Link:" + document.getElementsByTagName("a").length;
  html += "\n\n";

  var total_links = document.getElementsByTagName("a");
  var total_broken_links = 0;
  for (var i = 0; i < total_links.length; i++) {
    if (
      total_links[i].getAttribute("href") === "" ||
      total_links[i].getAttribute("href") === undefined ||
      total_links[i].getAttribute("href") === "#"
    ) {
      total_broken_links++;
    }
  }
  if (total_broken_links) {
    html += "Borken Links:" + total_broken_links;
  } else {
    html += "Broken Links:" + "No Broken Links Found";
  }

  html += "\n\n";
  var total_images = document.getElementsByTagName("img");
  html += "Images:" + total_images.length;
  html += "\n\n";

  total_images_without_alt = 0;
  for (var i = 0; i < total_images.length; i++) {
    if (
      total_images[i].getAttribute("alt") === null ||
      total_images[i].getAttribute("alt") === undefined
    ) {
      total_images_without_alt++;
    }
  }

  html += "Images Without Alt:" + total_images_without_alt;

  html += "\n\n";

  total_image_without_title = 0;
  for (var i = 0; i < total_images.length; i++) {
    if (
      total_images[i].getAttribute("title") === null ||
      total_images[i].getAttribute("title") === undefined
    ) {
      total_image_without_title++;
    }
  }

  html += "Images Without Title:" + total_image_without_title;

  html += "\n\n";
  html += "Scripts:" + document.getElementsByTagName("script").length;

  html += "\n\n";
  html += "all headers\n\n";
  html += "Total H1:" + Total_H1() + "\n";
  html += "Total H2:" + Total_H2() + "\n";
  html += "Total H3:" + Total_H3() + "\n";
  html += "Total H4:" + Total_H4() + "\n";
  html += "Total H5:" + Total_H5() + "\n";
  html += "Total H6:" + Total_H6() + "\n";

  return html;
}

function Total_H1() {
  return document.getElementsByTagName("h1").length;
}

function Total_H2() {
  return document.getElementsByTagName("h2").length;
}
function Total_H3() {
  return document.getElementsByTagName("h3").length;
}

function Total_H4() {
  return document.getElementsByTagName("h4").length;
}

function Total_H5() {
  return document.getElementsByTagName("h5").length;
}

function Total_H6() {
  return document.getElementsByTagName("h6").length;
}


function Meta_Keywords(){
    var meta_info=document.getElementsByTagName('meta');
    console.log(meta_info)
    for(var i=0;i<meta_info.length;i++){
        if(meta_info[i].getAttribute('name')==='keywords'){
            
            return meta_info[i].content;
            
           }
           else{
                    return ' Keywords Not Found'
             }
    }
}

function Meta_Description() {
  var meta_info = document.getElementsByTagName("meta");
  console.log(meta_info);
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("name") === "description") {
      return meta_info[i].content;
    } else {
      return " Description is missing";
    }
  }
}
chrome.runtime.sendMessage({
  action: "getSource",
  source: Seo_Improve(document),
});
description.content