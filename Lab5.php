<html lang="pl">
<head>
<title>Przykład z wykorzystaniem setInterval/clearInterval</title>

<script type="text/javascript">
var idInterwalu;

function zmienKolor() {
  idInterwalu = setInterval(zmienKolorTekstu, 1000);
}

function zmienKolorTekstu() {
  var elem = document.getElementById("my_box");
  if (elem.style.color == 'red') {
    elem.style.color = 'blue';
  } else if(elem.style.color == 'blue') {
    elem.style.color = 'yellow';
  }else {
    elem.style.color = 'red';
  }
}

function zatrzymajZmianeKoloru() {
  clearInterval(idInterwalu);
}
</script>
</head>

<body onload="zmienKolor();">
<div id="my_box">
<p>Hello World</p>
</div>
<button onclick="zmienKolor();">Start</button>
<button onclick="zatrzymajZmianeKoloru();">Stop</button>
</body>
</html>
