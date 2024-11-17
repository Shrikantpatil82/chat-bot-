let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text){
let text_speack = new SpeechSynthesisUtterance(text)
text_speack.rate=1
text_speack.pitch=1
text_speack.volume=1
window.speechSynthesis.speak(text_speack)
}
function wishme (){
let day = new Date();
let hours = day.getHours()
if(hours>=0 && hours<12){
speak("good morning sir ")
}else if(hours>=12 && hours<16){
speak("good evening sir ")
}

}

// window.addEventListener("load",()=>{
// wishme()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new  speechRecognition()
recognition.onresult=(event)=>{
let currentIndex =   event.resultIndex
let transcript = event.results[currentIndex][0].transcript
content.innertext = transcript
takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
recognition.start();
btn.style.display = "none"
voice.style.display = "block"

});
function takeCommand(message) {
btn.style.display = "flex"
voice.style.display = "none"
if(message.includes("hello")|| message.includes("hey")){
speak("hello sir what can i help you?")
}else if(message.includes("who are you")){
speak("i am a virtual assistant created by shrikant sir ")
}else if(message.includes("open youtube")){
speak("opening youtube")
window.open("https://www.youtube.com")
}
else if(message.includes("open insta")){
speak("opening shri`s instagram profile")
window.open("https://www.instagram.com/")
}
else if(message.includes("open linkedin")){
speak("opening shri`s linkdin profile")
window.open("https://www.linkedin.com/in/shrikant-patil-7b2691270")
}
else if(message.includes("open github")){
speak("opening shri`s github profile")
window.open("https://github.com/Shrikantpatil82")
}
else if(message.includes("open facebook")){
speak("opening facebook profile")
window.open("https://www.facebook.com/")
}

else if(message.includes("open twitter")){
speak("opening twitter")
window.open("https://x.com/home")
}

else if(message.includes("open calculator")){
speak("opening calculator")
window.open("calculator://")
}

else if(message.includes("open whatsapp")){
speak("opening twitter")
window.open("WhatsApp://")
}
else if(message.includes(" speak time")){
let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"})
speak(time)
}
else if(message.includes(" speak date")){
let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
speak(date)
}
else if(message.includes(" father name")){
speak("bhausaheb kashinath patil")
}
else if(message.includes(" brother name")){
speak("dipak bhausaheb patil")
}
else if(message.includes(" mother name")){
speak(" pratibha bhausaheb patil")
}

else if(message.includes(" is normal guy")){
speak("NO his a brilian person ")
}
else if(message.includes(" future")){
speak(" his future  is senior software engineer")
}
else{
let finaltext = "this is what i found on internet regarding" + message.replace("siri","")||message.replace("shri","")
speak(finaltext)
window.open(`https://www.google.com/search?q=${message.replace("siri","")}`,"_blank")
}

}