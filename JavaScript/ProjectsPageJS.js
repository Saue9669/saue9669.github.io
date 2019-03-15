

var getJson = function(){
    var req = new XMLHttpRequest();


    req.onreadystatechange = function(){
        if(req.readyState==4 && req.status == 200){
        


        var content = JSON.parse(req.response);
        var count = Object.keys(content).length;
        for(i=0; i<count;i++){
          var holder = content[i];
          (holder[0]);
      
          createLightbox(holder[0], holder[2], holder[3], holder[1], (i+1), count);
        }
     
        


        }
  
    };

  var projectsContent = "https://saue9669.github.io/json/Projects.json"
  
  req.open("GET", projectsContent, true);
  req.send();


  var button = document.getElementById("b1");
  button.addEventListener("click", translate, false);
};

var translate = function(){
  translateContent();
  translateDropdown();
  translateRest();
  

};

var createLightbox= function(title, image, thumbnail, content, spot, total){


    var para = document.createElement("div");
    para.setAttribute("class", "column");
    para.setAttribute("id", "column"+i);
    var element = document.getElementById("row");
    element.appendChild(para);

    var para = document.createElement("img");
    para.src = thumbnail;
    para.setAttribute("onclick", "openModal();currentSlide("+(spot)+")");
    para.setAttribute("class", "hover-shadow");
    para.style.width = "100%";
    (para);
    var element = document.getElementById("column"+i);
    element.appendChild(para);


    var para = document.createElement("div");
    para.setAttribute("class", "mySlides");
    para.setAttribute("id", "mySlides"+i);
    para.style.display = "block";
    var element = document.getElementById("modal-content");
    element.appendChild(para);

    var para = document.createElement("p");
    var node = document.createTextNode(spot+"/"+total);
    para.setAttribute("class", "numbertext");
    para.appendChild(node);
    var element = document.getElementById("mySlides" +i);
    element.appendChild(para);

    var para = document.createElement("p");
    var node = document.createTextNode(title);
    para.setAttribute("id", "title");
    para.appendChild(node);
    var element = document.getElementById("mySlides" +i);
    element.appendChild(para);

    var para = document.createElement("img");
    para.src = image;

    var element= document.getElementById("mySlides"+i);
    element.appendChild(para);


    var para = document.createElement("p");
    var node = document.createTextNode(content);
    para.setAttribute("class", "content");
    para.setAttribute("id", "content");
    para.appendChild(node);
    var element = document.getElementById("mySlides" +i);
    element.appendChild(para);

};

var translateContent = function(){

  var req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if(req.readyState==4 && req.status == 200){
      content = JSON.parse(req.response);
      var count = Object.keys(content).length;
      var holder = content[0];

      var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
      url = url + holder[0] + "/" + holder[1];
      for(i =1; i<count; i++){
        holder = content[i];
        
        url = url+"/"+ holder[0]+"/"+holder[1]; 
      }
      url = url + "&lang=ru&[format=html]";
      
      var req2 = new XMLHttpRequest();
      req2.onreadystatechange = function(){
          if(req2.readyState==4 && req2.status == 200){
          var text = JSON.parse(req2.response);
          text = text.text[0];
          var split = text.split("/");
         
          
          var j =0;
          for(i=0; i<count; i++){
            (i);
            
              
              var para = document.createElement("p");
              var node = document.createTextNode(split[j]);    
              para.appendChild(node);
              var parent= document.getElementById("mySlides"+i);
              var child = document.getElementById("title");
              parent.replaceChild(para, child);

              var para = document.createElement("p");
              var node = document.createTextNode(split[j+1]);    
              para.appendChild(node);
              var parent= document.getElementById("mySlides"+i);
              var child = document.getElementById("content");
              parent.replaceChild(para, child);
              j=j+2;
            }
          
     



          }else if(req2.readyState==4 && req2.status == 401){
            alert("Could not translate due to an Invalid API Key");
          }else if(req2.readyState==4 && req2.status == 402){
            alert("Could not translate due to an Blocked API Key");
          }else if(req2.readyState==4 &&req2.status == 404){
            alert("Could not translated due to the amount of translated text being over the daily limit");
          }else if(req2.readyState==4 &&req2.status == 413){
            alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
          }else if(req2.readyState==4 &&req2.status == 422){
            alert("The text could not be translated");
          }else if(req2.readyState==4 &&req2.status == 501){
            alert("Could not translate due to the specified translation direction not being supported");
          }
      }

      req2.open("GET", url, true);
      req2.send();
    


    }
  }

  var projectsContent = "https://saue9669.github.io/json/Projects.json"
  req.open("GET", projectsContent, true);
  req.send();
  
};




var translateDropdown = function(){

      
  var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
  url = url + ["Explore", "Home","Resume"];
  url = url + "&lang=ru&[format=html]";
  (url);


  var req = new XMLHttpRequest();
  req.onreadystatechange = function(){
    if(req.readyState==4 && req.status == 200){
      
      drop = JSON.parse(req.response);
      var trans = drop.text[0];
      split = trans.split(",");

      (split[0]);
    

      var para = document.createElement("span");
      var node = document.createTextNode(split[0]);
      para.appendChild(node);

      var parent = document.getElementById("dropdown");
      var child = document.getElementById("explore");
      parent.replaceChild(para,child);
      var links = ["index.html","Resume.html"];
      for(i=0; i<2; i++){

        var para = document.createElement("a");
        para.setAttribute("href", links[i]);
        var node = document.createTextNode(split[i+1]);
        para.appendChild(node);

        var parent = document.getElementById("dropdown-content");
        var child = document.getElementById("link");
        parent.replaceChild(para,child);
      } 
    }else if(req.readyState==4 && req.status == 401){
        alert("Could not translate due to an Invalid API Key");
    }else if(req.readyState==4 && req.status == 402){
        alert("Could not translate due to an Blocked API Key");
    }else if(req.readyState==4 &&req.status == 404){
        alert("Could not translated due to the amount of translated text being over the daily limit");
    }else if(req.readyState==4 &&req.status == 413){
        alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
    }else if(req.readyState==4 &&req.status == 422){
        alert("The text could not be translated");
    }else if(req.readyState==4 &&req.status == 501){
        alert("Could not translate due to the specified translation direction not being supported");
    }

  };
  req.open("GET", url, true);
  req.send();
  
};

var translateRest = function(){


    var text = [document.getElementById("name").textContent,"/", document.getElementById("school").textContent,"/", document.getElementById("Yandex").textContent];
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text="+text+"&lang=ru&[format=html]";
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
      if(req.readyState == 4 && req.status == 200){
        var response = JSON.parse(req.response);
        response = response.text[0];
        var split = response.split("/");
        var elements = ["h1", "h2","p"];
        var IDs = ["name", "school","Yandex"]; 
        var parents = ["header", "header", "footer"];
        
        for(i=0; i<3; i++){
          (i);
          split[i] = split[i].slice(1,-1);
          var para = document.createElement(elements[i]);
          var node = document.createTextNode(split[i]);
          para.appendChild(node);


          var parent = document.getElementById(parents[i]);
          var child = document.getElementById(IDs[i]);
          parent.replaceChild(para, child);

        }
    
      }else if(req.readyState==4 && req.status == 401){
        alert("Could not translate due to an Invalid API Key");
      }else if(req.readyState==4 && req.status == 402){
          alert("Could not translate due to an Blocked API Key");
      }else if(req.readyState==4 &&req.status == 404){
          alert("Could not translated due to the amount of translated text being over the daily limit");
      }else if(req.readyState==4 &&req.status == 413){
          alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
      }else if(req.readyState==4 &&req.status == 422){
          alert("The text could not be translated");
      }else if(req.readyState==4 &&req.status == 501){
          alert("Could not translate due to the specified translation direction not being supported");
      }
    };

    req.open("GET", url, true);
    req.send();

};



function openModal() {
    document.getElementById('myModal').style.display = "block";
}


function closeModal() {
  document.getElementById('myModal').style.display = "none";
}



var slideIndex = 1;
showSlides(slideIndex);





function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };


  slides[slideIndex-1].style.display = "block";
  
}





