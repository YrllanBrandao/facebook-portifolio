const textArea = document.getElementById("content");
const myLength = document.getElementById("max-length");
const closeChat = document.getElementById("btn-close");
const btnMessage = document.getElementById("btn-message");
const btnFloating = document.getElementById("btn-floating");
const chat = document.getElementById("chat");
console.log("working")


textArea.addEventListener("input", checkLength);
textArea.addEventListener("paste", checkLength);
textArea.addEventListener("change", checkLength)
function checkLength(){
    const CONTENT = textArea.value
    const LENGTH = CONTENT.length
    const MAX = 400;
    console.log("--")
    if(LENGTH >=  MAX)
    {
        textArea.style.border = "2px solid red";
        const slicedContent = CONTENT.slice(0, 400)
        textArea.value = slicedContent
        textArea.style.border = "none";
    }
   else{
    myLength.innerHTML = `${LENGTH} of 400`;
    textArea.style.border = "none";
   }

}

// show chat
btnMessage.addEventListener("click", ()=>{

    chat.style.display  = "block";
    btnFloating.style.display = "none";
})
btnFloating.addEventListener("click", ()=>{

    chat.style.display  = "block";
    btnFloating.style.display = "none";
})
// closing chat
closeChat.addEventListener("click", ()=>{

    chat.style.display = "none";
    btnFloating.style.display = "block";
})
