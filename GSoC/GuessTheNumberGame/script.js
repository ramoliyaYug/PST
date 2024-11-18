const inputValue = document.getElementById("guess");
const btn = document.getElementById("submit");
const attempts = document.getElementById("attempts");
let hint = document.getElementById("hints");
let number = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", () => {
    let guessValue = parseInt(inputValue.value);
    if (guessValue === number) {
        hint.innerHTML = "Congratulations! You guessed the number";
        setTimeout(() => location.reload(), 5000); 
    } else if (guessValue > number) {
        hint.innerHTML = "Hint : Number is smaller";
        attempts.innerHTML = parseInt(attempts.innerHTML) + 1;
    } else if (guessValue < number) {
        hint.innerHTML = "Hint : Number is greater";
        attempts.innerHTML = parseInt(attempts.innerHTML) + 1;
    }
    inputValue.value = ""; 
    inputValue.focus(); 
    setTimeout(() => {
        hint.innerHTML = "";
    }, 1500); 
});

inputValue.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btn.click(); 
    }
});
