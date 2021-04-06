(()=> {
    console.log('fired');

    const videoTranscriptButton = document.querySelector(".transcriptButton");
    const audioTranscriptButton = document.querySelector(".audioTranscriptButton");

    function toggleTranscript(){
        console.log("Transcript");
        // debugger;

        this.nextElementSibling.classList.toggle("visible");
    }

    audioTranscriptButton.addEventListener("click", toggleTranscript);
    videoTranscriptButton.addEventListener("click", toggleTranscript);
})();