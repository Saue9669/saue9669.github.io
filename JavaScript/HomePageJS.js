
var translated = new Array();
var split = new Array();


var update = function(){
	("aa:");
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			news = JSON.parse(req.response);
			(news.items[0]);
			for(i = 0; i< news.items.length; i++){

				var para = document.createElement("p");
				para.setAttribute("id", "newsItem");
				var node = document.createTextNode(news.items[i]);
				para.appendChild(node);

				var element = document.getElementById("single_project");
				element.appendChild(para);
			};

		}
	



	};


	var newsURL = "https://saue9669.github.io/json/Recent News.json"
	
	req.open("GET", newsURL, true);
	req.send();

	var button = document.getElementById("b1");
	button.addEventListener("click", translate, false);
	("spot 1");

	

};


var translate = function(){
	("spot 2");
	
	var request = function(){
	

		("aaa");
		
		(document.getElementById("name").textContent);
		var text = [document.getElementById("name").textContent,"/", document.getElementById("school").textContent,"/", document.getElementById("professional").textContent,"/", document.getElementById("p1").textContent,"/", document.getElementById("personal").textContent,"/", document.getElementById("p2").textContent,"/", document.getElementById("p3").textContent,"/", document.getElementById("projects").textContent,"/", document.getElementById("Yandex").textContent];
		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text="+text+"&lang=ru&[format=html]";
		



		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState==4 && req.status == 200){
				
				translated = JSON.parse(req.response);
				var trans = translated.text[0];
				split = trans.split("/");
			
				(translated.text[0]);
			
				replace();
				replaceJSON();
				replaceDropdown();
			
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

		("spot 3");
	};
	("Requested");
	request();




	var replace = function(){
		("in replace");
		var elements = ["h1", "h2", "h3", "p", "h3", "p", "p", "h4", "p"];
		var IDs = ["name", "school", "professional", "p1", "personal", "p2", "p3", "projects", "Yandex"]; 
		var parents = ["header", "header", "body1", "body1", "body2", "body2", "body2", "list", "footer"];

		for(i=0; i<9; i++){
			(i);
			split[i] = split[i].slice(1,-1);
			var para = document.createElement(elements[i]);
			var node = document.createTextNode(split[i]);
			para.appendChild(node);


			var parent = document.getElementById(parents[i]);
			var child = document.getElementById(IDs[i]);
			parent.replaceChild(para, child);

		}
		
	};


var replaceJSON = function(){
	
	var req2 = new XMLHttpRequest();
	req2.onreadystatechange = function(){
		if(req2.readyState==4 && req2.status == 200){
			
			newsTranslated = JSON.parse(req2.response);
			
			url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
			url = url + newsTranslated.items;
			url = url + "&lang=ru&[format=html]";
			


			var req3 = new XMLHttpRequest();
			req3.onreadystatechange = function(){
			if(req3.readyState==4 && req3.status == 200){
			
				translated = JSON.parse(req3.response);
				var trans = translated.text[0];
				split = trans.split(",");
				for(i = 0; i< newsTranslated.items.length; i++){

					var para = document.createElement("p");
					var node = document.createTextNode(split[i]);
					para.appendChild(node);

					var parent = document.getElementById("single_project");
					var child = document.getElementById("newsItem");
					parent.replaceChild(para,child);
					
				}
			}else if(req3.readyState==4 && req3.status == 401){
				alert("Could not translate due to an Invalid API Key");
			}else if(req3.readyState==4 && req3.status == 402){
				alert("Could not translate due to an Blocked API Key");
			}else if(req3.readyState==4 && req3.status == 404){
				alert("Could not translated due to the amount of translated text being over the daily limit");
			}else if(req3.readyState==4 && req3.status == 413){
				alert("Could not translate due to an the amount of text sent exceeded the maximun text size");
			}else if(req3.readyState==4 && req3.status == 422){
				alert("The text could not be translated");
			}else if(req3.readyState==4 && req3.status == 501){
				alert("Could not translate due to the specified translation direction not being supported");
			}
		};
		req3.open("GET", url, true);
		req3.send();
		
		}


	};

	var newsURL = "https://saue9669.github.io/json/Recent News.json"
	
	req2.open("GET", newsURL, true);
	req2.send();
};


var replaceDropdown = function(){

	
			

			
	url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
	url = url + ["Explore", "Projects","Resume"];
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
			var links = ["Projects.html","Resume.html"];
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

	}
	req.open("GET", url, true);
	req.send();
	
};
};

