// Elements
const stage = document.getElementById("stage");
const envelope = document.getElementById("envelopeWrap");
const replay = document.getElementById("replayBtn");
const floatHearts = document.getElementById("floatHearts");

// Open Envelope
envelope.addEventListener("click", () => {

    if(stage.classList.contains("opened")) return;

    stage.classList.add("opened");

    createHearts();

});

// Replay Button
replay.addEventListener("click", () => {

    stage.classList.remove("opened");

    floatHearts.innerHTML = "";

});

// Floating Hearts
function createHearts(){

    floatHearts.innerHTML="";

    const emojis=["❤️","💖","💕","💘","💝","🌹","✨"];

    for(let i=0;i<35;i++){

        let heart=document.createElement("div");

        heart.className="fheart";

        heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        heart.style.left=Math.random()*100+"%";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        heart.style.animationDelay=(Math.random()*2)+"s";

        floatHearts.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}

// Create Background Stars
const stars=document.getElementById("stars");

for(let i=0;i<40;i++){

    let star=document.createElement("span");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*4+"s";

    stars.appendChild(star);

}

// Falling Hearts Background
const rain=document.getElementById("rain");

const icons=["❤️","💖","✨"];

for(let i=0;i<30;i++){

    let drop=document.createElement("div");

    drop.className="drop";

    drop.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    drop.style.left=Math.random()*100+"%";

    drop.style.animationDuration=(5+Math.random()*5)+"s";

    drop.style.animationDelay=Math.random()*5+"s";

    drop.style.fontSize=(15+Math.random()*12)+"px";

    rain.appendChild(drop);

}
