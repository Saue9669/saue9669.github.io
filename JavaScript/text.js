



var update = function(){
	console.log("aa:");
	
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			news = JSON.parse(req.response);
			console.log(news.items[0]);
			for(i = 0; i< news.items.length; i++){

		var para = document.createElement("p");
		var node = document.createTextNode(news.items[i]);
		para.appendChild(node);

		var element = document.getElementById("single_project");
		element.appendChild(para);
	};

		}
	};

	var newsURL = "json/Recent News.json"
	
	req.open("GET", newsURL, true);
	req.send();





	var button = document.getElementById("b1");
	button.addEventListener("click", translate, false);

	

};


var translate = function(){
	
	var translated = new Array();
	var split = new Array();
	var request = function(){
	

		console.log("aaa");
		
		console.log(document.getElementById("name").textContent);
		var text = [document.getElementById("name").textContent,"/", document.getElementById("school").textContent,"/", document.getElementById("professional").textContent,"/", document.getElementById("p1").textContent,"/", document.getElementById("personal").textContent,"/", document.getElementById("p2").textContent,"/", document.getElementById("p3").textContent,"/", document.getElementById("projects").textContent,"/", document.getElementById("Yandex").textContent];
		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text="+text+"&lang=ru&[format=html]";
		



		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			translated = JSON.parse(req.response);
			var trans = translated.text[0];
			split = trans.split("/");
			
			console.log(translated.text[0]);
			
			replace();
			replaceJSON();
			
		}
	};
	
	req.open("GET", url, true);
	req.send();

	console.log();


	};


var replace = function(){

	var elements = ["h1", "h2", "h3", "p", "h3", "p", "p", "h4", "p"];
	var IDs = ["name", "school", "professional", "p1", "personal", "p2", "p3", "projects", "Yandex"]; 
	var parents = ["header", "header", "body1", "body1", "body2", "body2", "body2", "list", "footer"];

	for(i=0; i<9; i++){
	console.log(i);
	split[i] = split[i].slice(1,-1);
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


var replaceJSON = function(){

	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4 && req.status == 200){
			
			news = JSON.parse(req.response);
			console.log(news.items[0]);
			var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190309T223804Z.a98bb641853168cc.3adc7c49f4b3f2c9dad4ab46463ad4cf1208ceee&text=";
			for(i = 0;i<news.items.length;i++){
				url = url+news.item[i]+"/";

				};
			url = url + "&lang=ru&[format=html]";
			var req2 = new XMLHttpRequest();
			req2.onreadystatechange = function(){
			if(req2.readyState==4 && req2.status == 200){
			
				translated = JSON.parse(req.response);
				var trans = translated.text[0];
				split = trans.split("/");
				for(i = 0; i< news.items.length; i++){

					var para = document.createElement("p");
					var node = document.createTextNode(news.items[i]);
					para.appendChild(node);

					var element = document.getElementById("single_project");
					element.appendChild(para);
					console.log(translated.text[0]);
			
			}
		};
	
		req2.open("GET", url, true);
		re2q.send();
		}
	}

	var newsURL = "json/Recent News.json"
	
	req.open("GET", newsURL, true);
	req.send();

}
}