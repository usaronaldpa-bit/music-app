let audioContext; let bpm = 120; let isPlaying = false; let isRecording = false; /* PIANO NOTES */ const notes = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88, C5: 523.25 };
/* PLAY PIANO NOTE */ function playNote(note) { if (!audioContext) { audioContext = new AudioContext(); } constoscillator = audioContext.createOscillator(); const gainNode = audioContext.createGain(); oscillator.type = "sine";oscillator.frequency.value = notes[note]; gainNode.gain.setValueAtTime( 0.4, audioContext.currentTime );gainNode.gain.exponentialRampToValueAtTime( 0.001, audioContext.currentTime + 1 ); oscillator.connect(gainNode);gainNode.connect( audioContext.destination ); oscillator.start(); oscillator.stop( audioContext.currentTime + 1 ); }
/* PLAY */ function playMusic() { if (!audioContext) { audioContext = new AudioContext(); } isPlaying = true;console.log("Music playing"); } /* PAUSE */ function pauseMusic() { isPlaying = false; console.log("Music paused"); }/* STOP */ function stopMusic() { isPlaying = false; console.log("Music stopped"); }
/* RECORD */ function recordMusic() { const recordButton = document.querySelector( ".btn-outline-danger" ); if(!isRecording) { isRecording = true; recordButton.innerHTML = "⏹ Stop Recording"; recordButton.classList.add("recording" ); console.log("Recording started"); } else { isRecording = false; recordButton.innerHTML = "🔴 Record";recordButton.classList.remove( "recording" ); console.log("Recording stopped"); } }
/* BPM */

function changeBPM() {

    const bpmInput =
        document.getElementById("bpm");

    bpm =
        bpmInput.value;

    document.getElementById(
        "bpmValue"
    ).innerText = bpm;

}

/* SELECT INSTRUMENT */

function selectInstrument(
    instrument,
    button
) {

    document.getElementById(
        "selectedInstrument"
    ).innerText = instrument;

    const buttons =
        document.querySelectorAll(
            ".instrument-btn"
        );

    for (
        let i = 0;
        i < buttons.length;
        i++
    ) {

        buttons[i].classList.remove(
            "selected"
        );

    }

    button.classList.add(
        "selected"
    );

}
