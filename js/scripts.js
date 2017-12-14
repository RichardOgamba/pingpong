//business interface logic
var pingPong = function(pingpong) {
	output = []
	for (var i = 1; i <= pingpong; i+= 1) {
		if ((i % 3 === 0)&&(i % 5 === 0)) {
			 output.push("PingPong")
		} else if (i % 5 === 0) {
			 output.push("Pong");
		} else if (i % 3 === 0){
			 output.push("Ping");
		} else {
			 output.push(i)
		}
	}
	console.log(output);
	return output
}

// user interface logic
$(document).ready(function(){
	$("#pingpong").submit(function(event){
		event.preventDefault();
		var pingpong = parseInt($("input#pong").val());
		var result = pingPong(pingpong);
		$("#result").text(result);
	});
});
