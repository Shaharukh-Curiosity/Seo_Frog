
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
  html += "\n\n";

  html += "Keoywords:" + Meta_Keywords() + "\n\n";

  html += "Description:" + Meta_Description() + "\n\n";

  
  html += "URL:" + document.URL;
  html += "\n\n";
 
  html += "\n\n";
  html += "Scripts:" + document.getElementsByTagName("script").length;

  html += "\n\n";


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

function Page_H1(){
  var total_h1=document.getElementsByTagName('h1')
  var page_h1_replicate='';
  for(var i=0;i<total_h1.length;i++){
    page_h1_replicate+= '<h1>'+ total_h1[i].innerHTML + '</h1>'

  }
  return page_h1_replicate;
}

function Page_H2(){
  var total_h2=document.getElementsByTagName('h2')
  var page_h2_replicate='';
  for(var i=0;i<total_h2.length;i++){
    page_h2_replicate+= '\n' + '<h2>'+ total_h2[i].innerHTML + '</h2>' 

  }
  return page_h2_replicate;
}

function Page_H3(){
  var total_h3=document.getElementsByTagName('h3')
  var page_h3_replicate='';
  for(var i=0;i<total_h3.length;i++){
    page_h3_replicate+= '<h3>'+ total_h3[i].innerHTML + '</h3>'

  }
  return page_h3_replicate;
}

function Page_H4(){
  var total_h4=document.getElementsByTagName('h4')
  var page_h4_replicate='';
  for(var i=0;i<total_h4.length;i++){
    page_h4_replicate+= '<h4>'+ total_h4[i].innerHTML + '</h4>'

  }
  return page_h4_replicate
}
  function Page_H5(){
    var total_h5=document.getElementsByTagName('h5')
    var page_h5_replicate='';
    for(var i=0;i<total_h5.length;i++){
      page_h5_replicate+= '<h5>'+ total_h5[i].innerHTML + '</h5>'
  
    }
    return page_h5_replicate;
  }
  
  function Page_H6(){
    var total_h6=document.getElementsByTagName('h6')
    var page_h6_replicate='';
    for(var i=0;i<total_h6.length;i++){
      page_h6_replicate+= '<h6>'+ total_h6[i].innerHTML + '</h6>'
  
    }
    return page_h6_replicate;
   
}

function Meta_Keywords() {
  var meta_info = document.getElementsByTagName("meta");
  console.log(meta_info);
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("name") === "keywords") {
      return meta_info[i].content;
    } else {
      return " Keywords Not Found";
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

function Page_Headers(){
  var page_headers=''
  page_headers += "\n Page headers\n\n";
  page_headers += "Total H1:" + Total_H1() + "\n";
  page_headers += "Total H2:" + Total_H2() + "\n";
  page_headers += "Total H3:" + Total_H3() + "\n";
  page_headers += "Total H4:" + Total_H4() + "\n";
  page_headers += "Total H5:" + Total_H5() + "\n";
  page_headers += "Total H6:" + Total_H6() + "\n";

  page_headers+= '\n\nVisual Representation of all Page Headers\n\n'
  page_headers +=Page_H1() + '\n';
  page_headers +='\n '+ Page_H2() + '\n';
  page_headers +='\n' +Page_H3() + '\n';
  page_headers +='\n' +Page_H4() + '\n';
  page_headers +='\n' + Page_H5() + '\n';
  page_headers +=Page_H6() + '\n';


  return page_headers;
} 

function Total_Page_Links(){
  var total_page_links =''
  total_page_links+= "Link:" + document.getElementsByTagName("a").length;

}

function Page_Links(){
  var page_links=''
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

}

chrome.runtime.sendMessage({
  action: "getSource",
  source: Seo_Improve(document),
});

 
chrome.runtime.sendMessage({
  action: "getheaders",
  source: Page_Headers(document),
});
