var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function clickHandler1() {
  var completeURL = serverURL + "?" + "text=" + txtInput.value;

  fetch(completeURL)
    .then((response) => response.json())
    .then((resp) => (outputDiv.innerText = resp.contents.translated))
    .catch((err) => console.log(err));
}

btnTranslate.addEventListener("click", clickHandler1);



// async function clickHandler1() {
//   var completeURL = serverURL + "?" + "text=" + txtInput.value;
//   try {
//     const response = await fetch(completeURL);
//     const resp = await response.json();
//     outputDiv.innerText = resp.contents.translated;
//   } catch (err) {
//     console.log(err);
//   }
// }





// function getTranslateURL(text) {
//   return serverURL + "?" + "text=" + text;
// }

// function errorHandler(error) {
//   console.log("error occured", error);
//   alert("Something wrong with server! Try again after some time.");
// }

// function clickHandler() {
//   // outputDiv.innerText = "ajajajajaja" + txtInput.value;
//   var inputText = txtInput.value;
//   fetch(getTranslateURL(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedText = json.contents.translated;
//       outputDiv.innerText = translatedText;
//     })
//     .catch(errorHandler);
// }
// btnTranslate.addEventListener("click", clickHandler1);
