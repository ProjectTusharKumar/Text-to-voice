function texttoaudio(){
    let msg= document.querySelector('.text').value;
    let speeak=new SpeechSynthesisUtterance();

    speeak.lang="en-US"
    speeak.pitch=1