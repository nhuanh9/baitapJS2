var number = "";
var pheptinh = "";
var arr = [];
function getValue(val1){
	number = document.getElementById("number").value;
	document.getElementById("number").value = number+""+val1;
	number = val1;
	arr.push(number);
}
function pheptoan(val2){
	pheptinh = document.getElementById("number").value;
	document.getElementById("number").value =pheptinh+ ""+val2;
	pheptinh = val2;
	arr.push(pheptinh);
}
function ketqua(){
	ketquaTinh = 0;
	for (var i =0;i<arr.length;i++){
		ketquaTinh+= arr[i];
	}
	ketquaTinh=eval(ketquaTinh);
	document.getElementById("number").value=ketquaTinh;
}
function reset(){
	number = "";
	pheptinh = "";
	arr = [];
	document.getElementById("number").value="";
}
