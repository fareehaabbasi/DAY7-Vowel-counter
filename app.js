const textArea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output");

btn.addEventListener("click", function() {
    if(textArea.value === "") {
        output.innerHTML = "Please enter a some text"
    }else{
        const text = textArea.value;
        let count = 0;
        for (var i = 0; i < text.length; i++){
            if(text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u"){
                count++
            }
        }
        output.innerHTML = `The numbers of Vowels are ${count}`;
    }
});