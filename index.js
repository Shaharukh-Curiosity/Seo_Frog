 var x=document.getElementsByTagName('p');
 x.backgroundColor='#FFOOFF'

function Info() {
  var page_general_info = document.getElementsByTagName("meta");
  var page_title = document.getElementsByTagName("title")[0].text;
  var title_length = document.getElementsByTagName("title")[0].innerText.length;
  console.log(page_general_info[1].name)
  document.getElementById('page_title').innerText=page_title;
  document.getElementById('title_length').innerText=title_length +  ' ' + 'characters';
 
  for(var i=0;i<page_general_info.length;i++){
    if(page_general_info[i].getAttribute('name')==='keywords'){
     document.getElementById('page_keywords').innerText=page_general_info[i].content;
      break;
    }
    else{
     
      document.getElementById('page_keywords').innerText='Keywords are missing from the page'
      document.getElementById("page_keywords").style.color = "red";   
     }
    
  }
  for(var i=0;i<page_general_info.length;i++){
  if(page_general_info[i].getAttribute('name') === 'description'){
    document.getElementById('page_description').innerText=page_general_info[i].content;
     
    break;
  }
  else{
    document.getElementById('page_description').innerText='description is missing from the page'
    document.getElementById("page_description").style.color = "red";   

  }

   
}
console.log(document.URL)
document.getElementById('page_url').innerText=document.URL;

for(var i=0;i<page_general_info.length;i++){
  
   if(page_general_info[i].getAttribute('name') === 'publisher'){
      document.getElementById('page_publisher').innerText=page_general_info[i].content;
      continue;
   }
   else{
     document.getElementById('page_publisher').innerText='Publisher is missing';
     document.getElementById("page_publisher").style.color = "red";   

   }

if(page_general_info[i].getAttribute('name') === 'author'){
  console.log('page author found')
  document.getElementById('page_author').innerText=page_general_info[i].content;
  continue;
 
}
else{
  document.getElementById('page_author').innerText='Page Author is missing';
  document.getElementById("page_author").style.color = "red";   


}
}
 
}

function Page_Header() {}

function total_h1() {
  var h1_value = document.getElementsByTagName("h1");
  total_h1 = [];
  for (var i = 0; i < h1_value.length; i++) {

    total_h1.push(h1_value[i]);
  }
  document.getElementById("page_h1").innerHTML = i;
  for (var i = 0; i < total_h1.length; i++) {
    document.write("<br>");
    var data = "<h1>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h1[i].innerHTML);
  }
}

function total_h2() {
  document.write("<br>");

  var h1_value = document.getElementsByTagName("h2");
  total_h2 = [];
  for (var i = 0; i < h1_value.length; i++) {
    total_h2.push(h1_value[i]);
  }
  document.getElementById("page_h2").innerHTML = i;

  for (var i = 0; i < total_h2.length; i++) {
    document.write("<br>");
    var data = "<h2>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h2[i].innerHTML);
  }
}

function total_h3() {
  document.write("<br>");

  var h1_value = document.getElementsByTagName("h3");
  total_h3 = [];
  for (var i = 0; i < h1_value.length; i++) {
    total_h3.push(h1_value[i]);
  }
  document.getElementById("page_h3").innerHTML = i;

  for (var i = 0; i < total_h3.length; i++) {
    document.write("<br>");
    var data = "<h3>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h3[i].innerHTML);
  }
}
function total_h4() {
  document.write("<br>");

  var h1_value = document.getElementsByTagName("h4");
  total_h4 = [];
  for (var i = 0; i < h1_value.length; i++) {
    total_h4.push(h1_value[i]);
  }
  document.getElementById("page_h4").innerHTML = i;

  for (var i = 0; i < total_h4.length; i++) {
    document.write("<br>");
    var data = "<h4>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h4[i].innerHTML);
  }
}

function total_h5() {
  document.write("<br>");

  var h1_value = document.getElementsByTagName("h5");
  total_h5 = [];
  for (var i = 0; i < h1_value.length; i++) {
    total_h5.push(h1_value[i]);
  }
  document.getElementById("page_h5").innerHTML = i;

  for (var i = 0; i < total_h5.length; i++) {
    document.write("<br>");
    var data = "<h5>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h5[i].innerHTML);
  }
}

function total_h6() {
  document.write("<br>");

  var h1_value = document.getElementsByTagName("h6");
  total_h6 = [];
  for (var i = 0; i < h1_value.length; i++) {
    total_h6.push(h1_value[i]);
  }
  document.getElementById("page_h6").innerHTML = i;

  for (var i = 0; i < total_h6.length; i++) {
    document.write("<br>");
    var data = "<h6>".replace(/&/g, "&amp;").replace(/</g, "&lt;");

    document.write(data);
    document.write(total_h6[i].innerHTML);
  }
}

function Page_Links() {
  var total_link = document.getElementsByTagName("a");

  document.getElementById("total_links").innerHTML = total_link.length;
  total_broken_links = 0;
  var display_link = [];
  for (var i = 0; i < total_link.length; i++) {
    if (
      total_link[i].getAttribute("href") === "" ||
      total_link[i].getAttribute("href") === undefined ||
      total_link[i].getAttribute("href") === "#"
    ) {
      total_broken_links++;
      console.log(
        "there are some broken links available in webpage that can put negative impact on seo"
      );
      continue;
    }

    display_link.push(total_link[i].href);
  }
  for (var i = 0; i < display_link.length; i++) {
    document.write("<br>");
    document.write(display_link[i]);
  }
  document.getElementById("broken_links").innerHTML = total_broken_links;
}

function broken_link_highlight() {
  var broken_link = document.getElementsByTagName("a");
  for (var i = 0; i < broken_link.length; i++) {
    if (
      broken_link[i].getAttribute("href") === "" ||
      broken_link[i].getAttribute("href") === undefined ||
      broken_link[i].getAttribute("href") === "#"
    ) {
      broken_link[i].style.backgroundColor = "Red";
    }
  }
}

function Page_Images() {
  var total_images = document.getElementsByTagName("img");
  document.getElementById("total_images").innerHTML = total_images.length;
  total_image_without_alt = 0;
  for (var i = 0; i < total_images.length; i++) {
    if (
      total_images[i].getAttribute("alt") === null ||
      total_images[i].getAttribute("alt") === undefined
    ) {
      total_image_without_alt++;
    }
  }
  total_image_without_title = 0;
  for (var i = 0; i < total_images.length; i++) {
    if (
      total_images[i].getAttribute("title") === null ||
      total_images[i].getAttribute("title") === undefined
    ) {
      total_image_without_title++;
    }
  }
  document.getElementById(
    "total_images_without_title"
  ).innerHTML = total_image_without_title;

  document.getElementById(
    "total_images_without_alt"
  ).innerHTML = total_image_without_alt;
  for (var i = 0; i < total_images.length; i++) {
    document.write("<br>");
    document.write(total_images[i].getAttribute("src"));
  }
}

function Page_Scripts() {
  var script_path = document.getElementsByTagName("script");
   document.getElementById("total_scripts").innerHTML = script_path.length;
  for (var i = 0; i < script_path.length; i++) {
    if (
      script_path[i].getAttribute("src") === undefined ||
      script_path[i].getAttribute("src") === null
    ) {

      continue;
    }
    document.write("<br>");
    document.write(script_path[i].getAttribute("src"));
  }
}
