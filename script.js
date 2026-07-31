const stage = document.getElementById("stage");
const envelope = document.getElementById("envelopeWrap");
const replay = document.getElementById("replayBtn");
const letter = document.getElementById("letter");

envelope.addEventListener("click", function () {

    stage.classList.add("opened");

    letter.style.display = "flex";
    letter.style.opacity = "1";
    letter.style.transform = "translateY(0)";

});

replay.addEventListener("click", function () {

    stage.classList.remove("opened");

    letter.style.display = "none";
    letter.style.opacity = "0";

});
