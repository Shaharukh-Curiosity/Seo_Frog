function Seo_Improve(document_root) {
  var html = "";

  var page_title = document.getElementsByTagName("title")[0].innerHTML;
  if (page_title) {
    html += "Title : " + "  " + page_title;
    html += "\n\n";
    html +=
      "Title Length:" +
      "  " +
      document.getElementsByTagName("title")[0].innerHTML.length + ' (Maximum : 60) study suggested ';
  } else {
    html += "Title : " + "title is missing";
  }
  html += "\n\n";

  html += "Keoywords : " + Meta_Keywords() + "\n\n";

  html += "Description : " + Meta_Description() + "\n\n";

  html += "URL : " + document.URL + '\n\n';

  html+= 'Author : ' + Meta_Author() + '\n\n';

  html+=' Publisher : ' + Meta_Publisher() + '\n\n';

  /*var x=document.querySelector("link[rel='canonical']").getAttribute("href");
  if(x){
    html+= 'Canonical : ' + x +'\n\n';

  }else{
    html += 'Canonical : ' + ' Canonical tag is not exist'
  }
  */

   
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

function Page_H1() {
  var total_h1 = document.getElementsByTagName("h1");
  var page_h1_replicate = "";
  for (var i = 0; i < total_h1.length; i++) {
    page_h1_replicate += "<h1>" + total_h1[i].innerHTML + "</h1>";
  }
  return page_h1_replicate;
}

function Page_H2() {
  var total_h2 = document.getElementsByTagName("h2");
  var page_h2_replicate = "";
  for (var i = 0; i < total_h2.length; i++) {
    page_h2_replicate += "\n" + "<h2>" + total_h2[i].innerHTML + "</h2>";
  }
  return page_h2_replicate;
}

function Page_H3() {
  var total_h3 = document.getElementsByTagName("h3");
  var page_h3_replicate = "";
  for (var i = 0; i < total_h3.length; i++) {
    page_h3_replicate += "<h3>" + total_h3[i].innerHTML + "</h3>";
  }
  return page_h3_replicate;
}

function Page_H4() {
  var total_h4 = document.getElementsByTagName("h4");
  var page_h4_replicate = "";
  for (var i = 0; i < total_h4.length; i++) {
    page_h4_replicate += "<h4>" + total_h4[i].innerHTML + "</h4>";
  }
  return page_h4_replicate;
}
function Page_H5() {
  var total_h5 = document.getElementsByTagName("h5");
  var page_h5_replicate = "";
  for (var i = 0; i < total_h5.length; i++) {
    page_h5_replicate += "<h5>" + total_h5[i].innerHTML + "</h5>";
  }
  return page_h5_replicate;
}

function Page_H6() {
  var total_h6 = document.getElementsByTagName("h6");
  var page_h6_replicate = "";
  for (var i = 0; i < total_h6.length; i++) {
    page_h6_replicate += "<h6>" + total_h6[i].innerHTML + "</h6>";
  }
  return page_h6_replicate;
}

function Meta_Keywords() {
  var meta_info = document.getElementsByTagName("meta");
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("name") === "keywords") {
      return meta_info[i].content;
    } else {
      return " Keywords Not Found";
    }
  }
}

function Meta_Author(){
  var meta_info = document.getElementsByTagName("meta");
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("property") === "author") {
      return meta_info[i].content;
    } else {
      return " Author is missing";
    }
  }

}



function Meta_Publisher(){
  var meta_info = document.getElementsByTagName("meta");
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("name") === "author") {
      return meta_info[i].content;
    } else {
      return " Author is missing";
    }
  }

}

function Meta_Description() {
  var meta_info = document.getElementsByTagName("meta");
  for (var i = 0; i < meta_info.length; i++) {
    if (meta_info[i].getAttribute("name") === "description") {
      return meta_info[i].content;
    } else {
      return " Description is missing";
    }
  }
}

function Page_Headers() {
  var page_headers = "";
  page_headers += "\n Page headers\n\n";
  page_headers += "Total H1:" + Total_H1() + "\n";
  page_headers += "Total H2:" + Total_H2() + "\n";
  page_headers += "Total H3:" + Total_H3() + "\n";
  page_headers += "Total H4:" + Total_H4() + "\n";
  page_headers += "Total H5:" + Total_H5() + "\n";
  page_headers += "Total H6:" + Total_H6() + "\n";

  page_headers += "\n\nVisual Representation of all Page Headers\n\n";
  page_headers += Page_H1() + "\n";
  page_headers += "\n " + Page_H2() + "\n";
  page_headers += "\n" + Page_H3() + "\n";
  page_headers += "\n" + Page_H4() + "\n";
  page_headers += "\n" + Page_H5() + "\n";
  page_headers += Page_H6() + "\n";

  return page_headers;
}

//page total links
function Total_Page_Links() {
  var total_page_links = "";
  total_page_links += document.getElementsByTagName("a").length;

  return total_page_links;
}

//check the all available broken link in particular page

function Find_Broken_Links() {
  var total_broken_links = document.getElementsByTagName("a");
  var broken_links = 0;
  var total_broken_link_found = "";
  for (var i = 0; i < total_broken_links.length; i++) {
    if (
      total_broken_links[i].getAttribute("href") === "" ||
      total_broken_links[i].getAttribute("href") === undefined ||
      total_broken_links[i].getAttribute("href") === "#"
    ) {
      total_broken_links[i].style.backgroundColor = "red";

      broken_links++;
    }
  }

  if (total_broken_links) {
    total_broken_link_found += "Borken Links:" + broken_links;
  } else {
    total_broken_link_found += "Broken Links:" + "No Broken Links Found";
  }

  return total_broken_link_found;
}

// retrieve all link path
function Get_Link_Path() {
  var image_src = document.getElementsByTagName("a");
  var src_path = "";
  for (var i = 0; i < image_src.length; i++) {
    src_path += image_src[i].getAttribute("href") + "\n";
  }

  return src_path;
}

function Link_Without_Title() {
  var total_image = document.getElementsByTagName("a");

  var image_without_title = 0;
  for (var i = 0; i < total_image.length; i++) {
    if (
      total_image[i].getAttribute("title") === "" ||
      total_image[i].getAttribute("title") === undefined ||
      total_image[i] === null
    ) {
      image_without_title++;
    }
  }
  if (image_without_title) {
    return image_without_title;
  } else {
    return 0;
  }
}

function Page_Links() {
  var broken_links = "";

  broken_links += "Total Links:" + Total_Page_Links() + "\n\n";

  broken_links += Find_Broken_Links() + "\n\n";

  broken_links += "Link Without Title:" + Link_Without_Title() + "\n\n";

  broken_links+='(Red Indicator in the webpage is a indicate available broken links in the page)\n\n'

  broken_links += "//Links href\n\n";


  broken_links += Get_Link_Path();

  return broken_links;
}

function Total_Page_Images() {
  return document.getElementsByTagName("img").length;
}

function Total_Images_Without_Alt() {
  var total_image_alt = document.getElementsByTagName("img");
  var total_images_without_alt = 0;
  for (var i = 0; i < total_image_alt.length; i++) {
    if (
      total_image_alt[i].getAttribute("alt") === null ||
      total_image_alt[i].getAttribute("alt") === undefined ||
      total_image_alt[i].getAttribute("alt") === ""
    ) {
      total_images_without_alt++;
    }
  }
  return total_images_without_alt;
}

function Total_Images_Without_Title() {
  var total_image_title = document.getElementsByTagName("img");
  var total_images_without_title = 0;
  for (var i = 0; i < total_image_title.length; i++) {
    if (
      total_image_title[i].getAttribute("title") === null ||
      total_image_title[i].getAttribute("title") === undefined ||
      total_image_title[i].getAttribute("title") === ""
    ) {
      total_images_without_title++;
    }
  }
  return total_images_without_title;
}

function Page_Images_Path() {
  var image_path = document.getElementsByTagName("img");
  var all_image_path = "";
  for (var i = 0; i < image_path.length; i++) {
    all_image_path += "//:" + image_path[i].src + "\n\n";
  }
  return all_image_path;
}

function Total_Page_Script() {
  return document.getElementsByTagName("script").length;
}

function Get_Images() {
  var page_image_info = "";

  page_image_info += "Total Images : " + Total_Page_Images() + "\n\n";

  page_image_info +=
    "Images Without Alt : " + Total_Images_Without_Alt() + "\n\n";

  page_image_info +=
    "Images Without Title : " + Total_Images_Without_Title() + "\n\n\n";

   page_image_info+='//Images Path\n\n' ;
   page_image_info+='-------------------------\n\n'
  page_image_info += Page_Images_Path();

  return page_image_info;
}

function Total_Page_Script() {
  return document.getElementsByTagName("script").length;
}

function Page_Script_Path() {
  var script_path = document.getElementsByTagName("script");
  var all_script_path = "";
  for (var i = 0; i < script_path.length; i++) {
    all_script_path += "//" + script_path[i].getAttribute("src") + "\n\n";
  }

  return all_script_path;
}

function Page_Script() {
  var page_script_info = "";
  page_script_info +=
    "Total Script have used  : " + Total_Page_Script() + "\n\n";

  page_script_info +=
    "(null) is indicating you did not provide script path in src attribute\n\n";

  page_script_info += "//Scripts Path" + "\n";
  page_script_info += "--------------------\n\n";
  page_script_info += Page_Script_Path();

  return page_script_info;
}

chrome.runtime.sendMessage({
  action: "getinfo",
  source: Seo_Improve(document),
});

chrome.runtime.sendMessage({
  action: "getheaders",
  source: Page_Headers(document),
});

chrome.runtime.sendMessage({
  action: "getlinks",
  source: Page_Links(document),
});

chrome.runtime.sendMessage({
  action: "getimages",
  source: Get_Images(document),
});

chrome.runtime.sendMessage({
  action: "getscripts",
  source: Page_Script(document),
});
