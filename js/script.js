let button = document.querySelector("button");

let speechReco = window.SpeechRecognition || window.webkitSpeechRecognition;

let reco = new speechReco();

let names = ['aapka name Anshul hai', 'Anshul hai']

let chat_ = document.querySelector(".chat_");
let chat_area = document.querySelector(".chat_area");

function userMsg(msg){
    let userOutput = `<p class="query">${msg}</p>`
    chat_area.innerHTML += userOutput;
    return chat_area;
}

function assistentResult(msg) {

    let userOutput = `<p class="assistentMsg">${msg}</p>`
    chat_area.innerHTML += userOutput;
    return chat_area;
}
function assistantMsg(msg) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "hi";
  speech.text = "Sorry baby!";

  if(msg.includes('what is my name')){
    let result = names[Math.floor(Math.random()*name.length)];
    speech.text= result;
  }else if (msg.includes('dark mode')){
    speech.text = 'Dark mode is on';
    document.body.style.background = '#000'
  }else if(msg.includes('Google open karo')){
    speech.text = 'Google is open now';
    window.location.href = "https://www.google.com"
  }

  window.speechSynthesis.speak(speech);
  assistentResult(speech.text);
}
reco.addEventListener("result", (e) => {
  let userSpeak = e.results[0][0].transcript;
  console.log(e);
  console.log(userSpeak);
  chat_.append(userMsg(userSpeak));
  assistantMsg(userSpeak);
});
button.addEventListener("click", () => {
  reco.start();
});
