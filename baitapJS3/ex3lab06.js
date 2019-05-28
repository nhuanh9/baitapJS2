var number = "";
var pheptinh = "";
function getValue(val1){
	number = document.getElementById("number").value;
	document.getElementById("number").value = number+""+val1;
	number = val1;
}
function pheptoan(val2){
	pheptinh = document.getElementById("number").value;
	document.getElementById("number").value =pheptinh+ ""+val2;
	pheptinh = val2;
}
function ketqua(){
	ketquaTinh = 0;
	switch(pheptinh){
		case "+":
		ketquaTinh = parseInt(number)+parseInt(document.getElementById("number").value);
		break;
		case "-":
		ketquaTinh = parseInt(number)-parseInt(document.getElementById("number").value);
		break;
		case "*":
		ketquaTinh = parseInt(number)*parseInt(document.getElementById("number").value);
		break;
		case "/":
		ketquaTinh = parseInt(number)/parseInt(document.getElementById("number").value);
		break;
	}
		document.getElementById("number").value=ketquaTinh;
}
function reset(){
	number = "";
	pheptinh = "";
	document.getElementById("number").value="";
}
