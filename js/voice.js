        let voices = [];
        let utterance;

        function loadVoices() {
            voices = speechSynthesis.getVoices();
        }

        speechSynthesis.onvoiceschanged = loadVoices;

        document.getElementById('speak-button').onclick = function() {
            const textElement = document.getElementById('text-to-read');
            utterance = new SpeechSynthesisUtterance(textElement.textContent);
            const selectedVoice = voices.find(voice => voice.name === 'Microsoft Ava Online (Natural) - English (United States)');
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            utterance.rate = 1;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
        };

        document.getElementById('stop-button').onclick = function() {
            speechSynthesis.cancel();
        };