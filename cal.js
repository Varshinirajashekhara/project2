let result;
function addition() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a + b;
  // console.log(result);
  document.getElementById("result").innerText = result;
}
function subtraction() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a - b;
  // console.log(result);
  document.getElementById("result").innerText = result;
}
function multiplication() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  result = a * b;
  // console.log(result);
  document.getElementById("result").innerText = result;
}
function division() {
  let a = parseFloat(document.getElementById("input-1").value);
  let b = parseFloat(document.getElementById("input-2").value);
  if (b == 0) {
    alert("dividing by zero is not possible");
  } else {
    result = a / b;
    // console.log(result);
    document.getElementById("result").innerText = result;
  }
}
