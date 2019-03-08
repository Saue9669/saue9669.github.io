

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