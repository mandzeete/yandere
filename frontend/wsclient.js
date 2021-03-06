function onSendClick() {
    document.getElementById("incomingMsgOutput").value = "";
    var message = document.getElementById("message").value;
    const rawResponse = fetch('http://serverip:8080', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({Action: "normalCommand", Data: message})
        }).then(function (response) {
            response.text().then((s) =>
            document.getElementById("incomingMsgOutput").value += s);
        });  
}