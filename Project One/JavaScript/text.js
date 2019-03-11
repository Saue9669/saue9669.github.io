

var my_recent_news = function(){


	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			var news = JSON.parse(req.response);
			
		}
	};
	
	location = "JSON/Recent News.json";
	req.open("GET", location, true);
	req.send();
}



var update_list = function(){
	console.log("aa:");
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			var news = JSON.parse(req.response);
		}
	};

	var newsURL = "JSON/Recent News.json"
	
	req.open("GET", newsURL, true);
	req.send();

	console.log(req);







	for(i = 0; i< req.length; i++){

		var para = document.createElement("p");
		var node = document.createTextNode("This isnt new.");
		para.appendChild(node);

		var element = document.getElementById("list");
		element.appendChild(para);
};

}
var translate = function(){
	console.log("aaaaa");
	var translated = new Array();
	var split = new Array();
	var request = function(){
	

		console.log("aaa");
		
		console.log(document.getElementById("name").textContent);
		var text = [document.getElementById("name").textContent,"/", document.getElementById("school").textContent,"/",  document.getElementById("dropdown").textContent,"/", document.getElementById("professional").textContent,"/", document.getElementById("p1").textContent,"/", document.getElementById("personal").textContent,"/", document.getElementById("p2").textContent,"/", document.getElementById("p3").textContent,"/", document.getElementById("projects").textContent,"/", document.getElementById("Yandex").textContent];
		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text="+text+"&lang=ru&[format=html]";
	

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			translated = JSON.parse(req.response);
			var trans = translated.text[0];
			split = trans.split("/");
			
			console.log(translated.text[0]);
			replace();
			
		}
	};
	
	req.open("GET", url, true);
	req.send();

	console.log();


	};


var replace = function(){

	var elements = ["h1", "h2", "span", "h3", "p", "h3", "p", "p", "h4", "p"];
	var IDs = ["name", "school", "dropdown", "professional", "p1", "personal", "p2", "p3", "projects", "footer"]; 
	var parents = ["header", "header", "header", "body1", "body1", "body2", "body2", "body2", "body3", "footer"];

	for(i=0; i<11; i++){
		console.log(i);
	var para = document.createElement(elements[i]);
	var node = document.createTextNode(split[i]);
	para.appendChild(node);


	var parent = document.getElementById(parents[i]);
	var child = document.getElementById(IDs[i]);
	parent.replaceChild(para, child);

	};

	};

	request();
	
};