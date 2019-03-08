

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
