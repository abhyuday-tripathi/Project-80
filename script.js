var input1 = [];
function GetParaOne() {
  input1.length;
  for (var i = 1; i <= 5; i++) {
    input1.push(document.getElementById("paral_input_box_" + i).value);
    document.getElementById("showParaOne").innerHTML = input1.join(". ");
  }
  console.log(input1);
}

var input2 = [];
function GetParaTwo() {
  for (var i = 1; i <= 5; i++) {
    input2.push(document.getElementById("paral2_input_box_" + i).value);
    document.getElementById("showParaTwo").innerHTML = input2.join(". ");
  }
  console.log(input2);
}
