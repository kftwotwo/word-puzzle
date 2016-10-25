$(document).ready(function() {
var str = "Believe you can and you're halfway there. Theodore Roosevelt";
var newStr = str.split("");
for (index=0; index<newStr.length; index+=1) {
	if (newStr[index]=== "a" || newStr[index] ==="e" || newStr[index] ==="i" || newStr[index] ==="o" || newStr[index] ==="u")
  		newStr.splice(index, 1, "-");
 }
 var final = newStr.join("");
 $(".submit").text(final);

 $("button").click(function(event){

	 $(".show").text("Believe you can and you're halfway there. Theodore Roosevelt");
 });
});
