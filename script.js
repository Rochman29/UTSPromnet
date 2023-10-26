function cekKolomKosong() {
  var kolomInput = document.getElementById("email");

  if (kolomInput.value.trim() === "") {
    alert("Belum diisi");
    return false;
  }

  return true;
}
