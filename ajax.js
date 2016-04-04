function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      myFunction(xhttp);
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artysta</th><th>Tytuł</th><th>Kraj pochodzenia</th><th>Wytwórnia</th><th>Cena</th><th>Rok wydania płyty</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
	x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
    "</td><td>" +
	x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
    "</td><td>$" +
	x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
    "</td><td>" +
	x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}