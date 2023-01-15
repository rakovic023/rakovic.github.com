function imgfun() {
  var Image_id = document.getElementById('getimg');
  if (Image_id.src.match("slike/volvo16.jpg")) {
    Image_id.src = "slike/volvoin.jpg";
  }
  else {
    Image_id.src ="slike/volvo16.jpg"
  }
}
function imgfuner() {
  var Image_id = document.getElementById('gettimg');
  if (Image_id.src.match("slike/merc.jpg")) {
    Image_id.src = "slike/mercin.jpg";
  }
  else {
    Image_id.src ="slike/merc.jpg"
  }
}
function imgfunerr() {
  var Image_id = document.getElementById('getttimg');
  if (Image_id.src.match("slike/scania.jpg")) {
    Image_id.src = "slike/scaniain.jpg";
  }
  else {
    Image_id.src ="slike/scania.jpg"
  }
}
function myFunction() {
  var cena = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < cena.length; i++) {
    if (cena[i].checked) {
      txt = txt + cena[i].value + " ";
    }
  }
  document.getElementById("price").value =txt +"je Kamion za vas!";
}
