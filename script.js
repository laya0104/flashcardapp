let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling web pages."
    }
];

let currentIndex = 0;

function saveCards() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

function displayCard() {

    if (flashcards.length === 0) {
        document.getElementById("question").innerText =
            "No Flashcards Available";

        document.getElementById("answer").innerText = "";
        return;
    }

    document.getElementById("question").innerText =
        flashcards[currentIndex].question;

    document.getElementById("answer").innerText =
        flashcards[currentIndex].answer;

    document.getElementById("answer").classList.add("hidden");

    document.getElementById("newQuestion").value =
        flashcards[currentIndex].question;

    document.getElementById("newAnswer").value =
        flashcards[currentIndex].answer;
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    if (flashcards.length === 0) return;

    currentIndex =
        (currentIndex + 1) % flashcards.length;

    displayCard();
}

function prevCard() {
    if (flashcards.length === 0) return;

    currentIndex =
        (currentIndex - 1 + flashcards.length) %
        flashcards.length;

    displayCard();
}

function addCard() {

    let question =
        document.getElementById("newQuestion").value;

    let answer =
        document.getElementById("newAnswer").value;

    if (question === "" || answer === "") {
        alert("Please enter both question and answer");
        return;
    }

    flashcards.push({
        question,
        answer
    });

    saveCards();

    currentIndex = flashcards.length - 1;

    displayCard();
}

function updateCard() {

    if (flashcards.length === 0) return;

    flashcards[currentIndex].question =
        document.getElementById("newQuestion").value;

    flashcards[currentIndex].answer =
        document.getElementById("newAnswer").value;

    saveCards();

    displayCard();
}

function deleteCard() {

    if (flashcards.length === 0) return;

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    saveCards();

    displayCard();
}

displayCard();