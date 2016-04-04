  var wsUri = "ws://echo.websocket.org/";//Adre odpytywanego serwera
  var output;
  
  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {//Funkcja zestawiająca wszystkie wymagane funkcje dla WebSocket'a
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };//NA otwarciu
    websocket.onclose = function(evt) { onClose(evt) };//Na zamknięciu
    websocket.onmessage = function(evt) { onMessage(evt) };//Po odebraniu wiadomości/danych
    websocket.onerror = function(evt) { onError(evt) };//W razie wystąpienia danych
  }

  function onOpen(evt)
  {//Otwarcie
    writeToScreen("Nawiązano połaczenie z serwerem");
  }
  function Send()
  {//Wysłąnie wiadomości
	doSend(document.getElementById("message").value);
  }
  function Polacz()
  {//Zestawienie połączenia w razie ew. zerwania
	testWebSocket();
  }

  function onClose(evt)
  {//Zamknięcie
    writeToScreen("Rozwiązanie połaczenia z serwerem");
  }

  function onMessage(evt)
  {//Po odebraniu wiadomości
    writeToScreen('<span style="color: blue;">Odpowiedź z serwera: ' + evt.data+'</span>');
    
  }
  function onDisconnect()
  {//Zakończenie połączenia
	websocket.close();
	
  }

  function onError(evt)
  {//W razie błędów
    writeToScreen('<span style="color: red;">Błąd:</span> ' + evt.data);
  }

  function doSend(message)
  {//Wysłąnie wiadomości do serwera
    writeToScreen("Wysłano: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {//Formatowanie odpowiedzi od serwera
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);//Połączenie zaraz po starcie strony