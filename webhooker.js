function postDataToWebhook(data){
  //get the values needed from the passed in json object
  var userName=data.name;
  var userPlatform=data.platform;
  var userEmail=data.email;
  //url to your webhook
  var webHookUrl="";



// Keyboard Shortcut

// function getPage() {
//   return window.location.href
// };


// function messages(peer, message){
//   sendMessage({
//   peer: 'pellizzeti_adv',
//   message: getPage
//   })};



  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var oReq = new XMLHttpRequest();
  var myJSONStr = payload={
      "chat_id": '',
      "text": "Teste da mensagem"
        }



//register method called after data has been sent method is executed
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", webHookUrl,true);
  oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  oReq.send(JSON.stringify(myJSONStr));
}



//callback method after webhook is executed
function reqListener () {
  console.log(this.responseText);
}
