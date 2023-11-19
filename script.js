document.getElementById("button1MoreInfo").style.display = "none";
function cekKolomKosong() {
  var kolomInput = document.getElementById("email");

  if (kolomInput.value.trim() === "") {
    alert("Belum diisi");
    return false;
  }

  return true;
}
function resume() {
  var x = document.getElementById("about");
  var y = document.getElementById("work");
  if (x.style.display && y.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}
function lessInfo1() {
  var x = document.getElementById("info1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function lessInfo2() {
  var x = document.getElementById("info2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function lessInfo3() {
  var x = document.getElementById("info3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
