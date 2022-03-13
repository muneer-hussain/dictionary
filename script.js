let searchBtn = document.getElementById("searchBtn")
let inputBox = document.getElementById("search")
let wordName = document.getElementById("search-name")
let definition = document.getElementById("definition")
let btn = document.getElementById("voice-btn")
let example = document.getElementById("example");


searchBtn.addEventListener("click", getResults)
     function getResults(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox.value}`).then(res => res.json()).then(result => {
        wordName.innerText = "Word : " + result[0].word;
        definition.innerText = "Definition" + "\n" + result[0].meanings[0].definitions[0].definition;
        if (result[0].meanings[0].definitions[0].example == undefined) {
            example.innerText = `Sorry ! We cannot find example for word "${inputBox.value}"`;
        } else {
            example.innerText = "Example" + "\n" + result[0].meanings[0].definitions[0].example
        }
    })
}
function speak(text) {
    let speak = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speak)
}

btn.addEventListener("click", function() {
    speak(inputBox.value)
})
window.addEventListener("keydown", (e) => {
 if (e.keyCode == 13) {
 getResults();
 }
 });
