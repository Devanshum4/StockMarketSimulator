function analyze(json) {

	
	let error= "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for GLOBAL_QUOTE."
	let invalidvalue = "{}"
	total = Object.values(json)
	all = Object.values(total)
	
	if(all[0]=== error){
		alert("Invalid Values - Enter Correct Stock ID with Correct Stock Market")

	}
	
	else{
	
		price = all[0]["05. price"]
		rounded_price = Math.round(price * 100) / 100
		Changeinprice = all[0]["09. change"]
		rounded_change = Math.round(Changeinprice * 100) / 100
		datelatest = all[0]["07. latest trading day"]
		cnames= all[0]["01. symbol"]
		changepercentage  = all[0]["10. change percent"]
	
		open = all[0]["02. open"]
		rounded_open = Math.round(open * 100) / 100
		high = all[0]["03. high"]
		rounded_high = Math.round(high * 100) / 100
		low = all[0]["04. low"]
		rounded_low = Math.round(low * 100) / 100
		previous = all[0]["08. previous close"]
		rounded_previous = Math.round(previous * 100) / 100
	

		$("#cname").html(cnames)
		$('#cname').prepend($('<img>',images))
		$("#sharep").html(currency)
		$("#sharep").append(rounded_price)
	
		$("#close").html(currency)
		$("#close").append(rounded_previous)
		$("#open").html(currency)
		$("#open").append(rounded_open)
		$("#high").html(currency)
		$("#high").append(rounded_high)
		$("#low").html(currency)
		$("#low").append(rounded_low)
		$("#day").html(datelatest)
	
	
	
		if(Changeinprice<0){
			var imageUrl = "rbg.png";
		
			$("#changes").css("background-image", "url("+imageUrl+")");

			$("#changes").css("box-shadow", "0px 05px 10px 0px rgba(214, 40, 40, 0.5)");
			$("#change").html(currency);
		
		
			$("#change").append(rounded_change);
	
		}
		else{
		var imageUrl = "gbg.png";
		$("#changes").css("background-image", "url("+imageUrl+")");
		$("#changes").css("box-shadow", "0px 05px 10px 0px rgba(88, 214, 141, 0.5)");
		$("#change").html(currency);
		$("#change").append(rounded_change);
	
	}
	
}
}
let currentChar = 1;

 function darkMode(){
	

		if (currentChar){
			$(document.body).css("background-color","white");
			$(document.body).css("color","black");
			$("#symbol").css("background-color", "#222222");
			$("#symbol").css("color", "white");
			$("#previous").css("background-color", "#222222");
			$("#previous").css("color", "white");
			$("#lowp").css("background-color", "#222222");
			$("#lowp").css("color", "white");
			$("#highp").css("background-color", "#222222");
			$("#highp").css("color", "white");
			$("#latestradingday").css("background-color", "#222222");
			$("#latestradingday").css("color", "white");
			$("#openp").css("background-color", "#222222");
			$("#openp").css("color", "white");
			$("#shareprice").css("background-color", "#222222");
			$("#shareprice").css("color", "white");
			currentChar = 0;
		}
		else   {
			
			$(document.body).css("background-color","black");
			$(document.body).css("color","white");
			$("#symbol").css("background-color", "white");
			$("#symbol").css("color", "black");
			$("#previous").css("background-color", "white");
			$("#previous").css("color", "black");
			$("#lowp").css("background-color", "white");
			$("#lowp").css("color", "black");
			$("#highp").css("background-color", "white");
			$("#highp").css("color", "black");
			$("#openp").css("background-color", "white");
			$("#openp").css("color", "black");
			$("#latestradingday").css("background-color", "white");
			$("#latestradingday").css("color", "black");
			$("#shareprice").css("background-color", "white");
			$("#shareprice").css("color", "black");
		
			currentChar = 1;
		}
	}
	
 



function getJSON() {
	let baseURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=";
	let Key = "6CAI1G7E9P5T859J";
	let name = $("#shareEntry").val();
	$(".datas").css("visibility", "visible");	
	
	
	

	let values = document.getElementById("stock");
	if (values.value=='india'){
		stockmarket = ".BSE" ;
		currency = "\u20b9";
		images ={id:'india',src:"bse.png"}
	}
	else if (values.value=='london'){
		stockmarket = ".LON"
		currency = "\u00a3"
		images = {id:'london',src:"londonse.png"}
	}
	else if (values.value=='canada'){
		stockmarket = ".TRT"
		currency = "CAD "
		images ={id:'toronto',src:"toronto.png"}
	}
	else if (values.value=='germany'){
		stockmarket = ".DEX"
		currency = "\u20AC"
		images = {id:'germany',src:"germany.png"}
	}
	else if(values.value=='US'){
		stockmarket = ""
		currency = "$ "
		images ={id:'us',src:"nasdaq.png"}
	}

	if (stockmarket==""){
		
		fullURL = baseURL + name+"&apikey="+Key;
		
	}
		else{
		fullURL = baseURL + name+stockmarket+"&apikey="+Key;
		
	}
	
	$("#shareprice").animate({
		
		opacity:'1'
	  });
	  $("#previous").animate({
		
		opacity:'1'
	  });	$("#symbol").animate({
		
		opacity:'1'
	  });	$("#highp").animate({
		
		opacity:'1'
	  });	$("#lowp").animate({
		
		opacity:'1'
	  });	$("#openp").animate({
		opacity:'1'
	  });	$("#latestradingday").animate({
		
		opacity:'1'
	  });	$("#changes").animate({
		
		opacity:'1'
	  });

	
		
	console.log(fullURL)
	$.get(fullURL, function(data) {
	
		console.log(data)
	
		
		analyze(data);

	});
}
