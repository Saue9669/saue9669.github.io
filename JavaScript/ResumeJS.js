
var update = function(){
	
	
	var req = new XMLHttpRequest();


	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			content = JSON.parse(req.response);
			var count = Object.keys(content).length;
			
			for(i = 0; i< count-2; i++){
				
				var holder = content[i];
				var para = document.createElement("h3");
				para.setAttribute("id", content.headers[i]+"Header");
				var node = document.createTextNode(content.headers[i]);
				para.appendChild(node);

				var element = document.getElementById("content");
				element.appendChild(para);

				for(j = 0; j<holder.length; j++){
					
					var para = document.createElement("p");
					para.setAttribute("id", content.headers[i]);
					var node = document.createTextNode("*"+holder[j]);
				
					para.appendChild(node);

					var element = document.getElementById("content");
					element.appendChild(para);

					
				}
			}

		}
	
	};

	var resumeContent = "https://saue9669.github.io/json/Resume.json"
	
	req.open("GET", resumeContent, true);
	req.send();

	var button = document.getElementById("b1");
	button.addEventListener("click", translate, false);


};

var translate = function(){
	translateContent();
	translateDropdown();
	translateRest();

};


var translateContent = function(){

	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			content = JSON.parse(req.response);
			var count = Object.keys(content).length;
			var holder = content[0];
			(content.headers[0], content[0]);
			for(i = 0; i<count-2;i++){


			translateSection(content.headers[i], content[i]);
			}
		}
	}

	var resumeContent = "https://saue9669.github.io/json/Resume.json"
	req.open("GET", resumeContent, true);
	req.send();
	
};

var translateDropdown = function(){

			
	url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
	url = url + ["Explore", "Home","Projects"];
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
			var links = ["index.html","Projects.html"];
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
		}else if(req.readyState==4 && req.status == 404){
			alert("Could not translated due to the amount of translated text being over the daily limit");
		}else if(req.readyState==4 && req.status == 413){
			alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
		}else if(req.readyState==4 && req.status == 422){
			alert("The text could not be translated");
		}else if(req.readyState==4 && req.status == 501){
			alert("Could not translate due to the specified translation direction not being supported");
		}

	};
	req.open("GET", url, true);
	req.send();
	
};


var translateSection = function(header, content){

	var url= "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
	url = url + [header , content];
	url = url + "&lang=ru&[format=html]";

	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			var text = JSON.parse(req.response);
			
			text = text.text[0];
			splitContent = text.split(",");
			(splitContent);

			var para = document.createElement("h3");
			var node = document.createTextNode(splitContent[0]);		
			para.appendChild(node);

			var parent= document.getElementById("content");
			var child = document.getElementById(header+"Header");
			parent.replaceChild(para,child);

			var count = Object.keys(splitContent).length;

			for(i = 1; i<count;i++){

				var para = document.createElement("p");
				var node = document.createTextNode("*"+splitContent[i]);		
				para.appendChild(node);

				var parent= document.getElementById("content");
				var child = document.getElementById(header);
				parent.replaceChild(para,child);
			}




		}else if(req.readyState==4 && req.status == 401){
			alert("Could not translate due to an Invalid API Key");
		}else if(req.readyState==4 && req.status == 402){
			alert("Could not translate due to an Blocked API Key");
		}else if(req.readyState==4 && req.status == 404){
			alert("Could not translated due to the amount of translated text being over the daily limit");
		}else if(req.readyState==4 && req.status == 413){
			alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
		}else if(req.readyState==4 && req.status == 422){
			alert("The text could not be translated");
		}else if(req.readyState==4 && req.status == 501){
			alert("Could not translate due to the specified translation direction not being supported");
		}
	}

	req.open("GET", url, true);
	req.send();
}

var translateEnglish = function(){
	
}

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
		}else if(req.readyState==4 && req.status == 404){
			alert("Could not translated due to the amount of translated text being over the daily limit");
		}else if(req.readyState==4 && req.status == 413){
			alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
		}else if(req.readyState==4 && req.status == 422){
			alert("The text could not be translated");
		}else if(req.readyState==4 && req.status == 501){
			alert("Could not translate due to the specified translation direction not being supported");
		}
    };

    req.open("GET", url, true);
    req.send();

};