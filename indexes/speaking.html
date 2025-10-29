<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TOEFL Speaking Section</title>
  <link rel="stylesheet" href="../styles/speaking.css" />
  <meta name="color-scheme" content="dark">
</head>

<body>
  <p class="warning">If you leave the test, switch tabs, or close the tab, the test will automatically reset!</p>

  <div id="speakingDirections" style="display:none;">
    <audio src="../commonAudios/SpeakingDirectionsAudio.mp3" id="spDirectionAu"></audio>
    <div class="topSpDir">
      <button id="continueDirec">Continue</button>
      <!-- Mobile play button for directions -->
      <button id="mobileDirectionsPlayBtn" style="display: none; padding: 12px 24px; margin: 10px auto; background: #FF9800; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">
        🔊 Tap to Play Directions
      </button>
    </div>
    <div class="spDirecText">
      <h1>Speaking section directions</h1>
      <h2>
        In this Speaking practice test. YOU will be able to demonstrate your ability to speak about a variety of topics.
        You will answer four questions by speaking into a microphone. Answer each of the questions as completely as
        possible.<br>
        In questions 1. you will speak about familiar topics. Your response will be scored on your ability to speak
        clearly and coherently about the topics.<br>
        In questions 2. You will first read a short text. The text will go away and you will then listen to a talk on
        the same topic. You will then be asked a question about what you have read and heard You will need to combine
        appropriate information from the text and the talk to provide a complete answer to the question Your response
        will be scored on your ability to speak clearly and coherently and on your ability to accurately convey
        information about what you have read and heard In questions 3 and 4. you will listen to part of a conversation
        or a lecture. You will then be asked a question about what you have heard. Your response will be scored on your
        ability to speak clearly and coherently and on your ability to accurately convey information about what you
        heard. In questions 2 through 4. you may take notes while you read and while you listen to the conversations and
        lectures. You may use yournotes to help prepare your response.<br>
        Listen carefully to the directions for each question. The directions will not be written on the screen. For each
        question, you will be given a short time to prepare your response (15 to 30 seconds, depending on the question).
        A clock will show how much preparation time is remaining. When the preparation time is up. you will be told to
        begin your response. A clock will show how much response time is remaining. A message will appear on the screen
        when the response time has ended.<br><br>
        Click on Continue to go on.
      </h2>
    </div>
  </div>

  <div id="app" style="display:none;">
    <div class="topSpWr">
      <p id="sectionName"></p>
      <div style="position: fixed; right: 5px;">
        <button id="interstitialContinue" style="float: right;">Continue</button>
      </div>
    </div>

    <div id="media-wrap">
      <audio id="audio-player" class="hidden"></audio>
      <div id="progress-container" class="hidden">
        <div id="progress-bar"></div>
      </div>
      <!-- Mobile play button for main audio -->
      <button id="mobileAudioPlayBtn" style="display: none; padding: 12px 24px; margin: 10px auto; background: #4CAF50; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">
        🔊 Tap to Play Audio
      </button>
    </div>

    <div id="question-wrap">
      <div id="question-text"></div>
      <div id="quesT"></div>
      <div id="timer"></div>
    </div>

    <!-- Interstitial between directions and each question -->
    <div id="interstitial" style="display:none;">
      <audio id="interstitialAudio"></audio>
      <div class="interstitialText" id="interstitialText"></div>
    </div>

    <div id="recordings" class="hidden"></div>
    <button id="download-btn" class="hidden">Download All Responses</button>
  </div>
  <audio src="../commonAudios/bib-prepare.mp3" id="bibPrepare"></audio>
  <audio src="../commonAudios/bib-speak.mp3" id="bibSpeak"></audio>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
  <script src="../scripts/recStore.js"></script>
  <script src="../scripts/speaking.js"></script>

  <script>
    // Track autoplay state
    let autoplayBlocked = false;
    let userHasInteracted = false;

    document.addEventListener("DOMContentLoaded", () => {
      const testId = sessionStorage.getItem("TEST_ID");
      if (!testId) {
        document.body.innerHTML = "<h2 style='color:red;'>TEST_ID is missing. Please return to the section selection page.</h2>";
        return;
      }

      sessionStorage.setItem("TEST_ID", testId);
      localStorage.setItem(`recordings_${testId}`, JSON.stringify([]));

      const script = document.createElement("script");
      script.src = `../data/${testId}/speakingData_Test${testId}.js`;

      script.onload = () => {
        if (window.questions && Array.isArray(window.questions)) {
          document.getElementById("speakingDirections").style.display = "block";
          
          // Try to play directions audio, show button if blocked
          const directionsAudio = document.getElementById("spDirectionAu");
          directionsAudio.play().catch((error) => {
            console.warn("Directions autoplay blocked:", error);
            autoplayBlocked = true;
            document.getElementById("mobileDirectionsPlayBtn").style.display = "block";
          });
        } else {
          alert("Speaking test data failed to load.");
        }
      };

      script.onerror = () => {
        alert("Error loading speaking test data.");
      };

      document.body.appendChild(script);

      // Mobile directions play button
      document.getElementById("mobileDirectionsPlayBtn").onclick = () => {
        userHasInteracted = true;
        const directionsAudio = document.getElementById("spDirectionAu");
        directionsAudio.play().catch(e => console.error("Directions play failed:", e));
        document.getElementById("mobileDirectionsPlayBtn").style.display = "none";
      };

      const continueBtn = document.getElementById("continueDirec");
      continueBtn.onclick = () => {
        userHasInteracted = true;
        const audio = document.getElementById("spDirectionAu");
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("speakingDirections").style.display = "none";
        document.getElementById("app").style.display = "block";
        document.getElementById("sectionName").innerText = "Speaking section";
        getMicAccess().then(() => {
          // Give speaking.js time to initialize before running questions
          setTimeout(() => {
            if (typeof runQuestion === 'function') {
              runQuestion();
            }
          }, 500);
        });
      };

      // Track user interactions
      document.addEventListener('click', () => {
        userHasInteracted = true;
      });

      // Simple mobile audio support - wait for speaking.js to load
      setTimeout(() => {
        setupMobileAudioSupport();
      }, 1000);
    });

    function setupMobileAudioSupport() {
      // Only override the main audio playback function
      const originalPlayAudioListWithProgress = window.playAudioListWithProgress;
      
      if (originalPlayAudioListWithProgress) {
        window.playAudioListWithProgress = function(srcList) {
          return new Promise(resolve => {
            const list = Array.isArray(srcList) ? srcList : [srcList];
            
            // If autoplay was blocked and user hasn't interacted, show play button
            if (autoplayBlocked && !userHasInteracted) {
              console.log('Showing mobile play button for main audio');
              showMainAudioPlayButton(list, resolve);
            } else {
              // Otherwise proceed normally - this should work now
              console.log('Proceeding with normal audio playback');
              originalPlayAudioListWithProgress.call(this, srcList).then(resolve);
            }
          });
        };
      }

      // Add a global audio error handler to detect autoplay blocks
      document.addEventListener('play', function(e) {
        if (e.target.id === 'audio-player') {
          document.getElementById("mobileAudioPlayBtn").style.display = "none";
          autoplayBlocked = false;
        }
      }, true);

      // Handle audio errors
      document.addEventListener('error', function(e) {
        if (e.target.tagName === 'AUDIO' && e.target.error) {
          console.warn('Audio error detected:', e.target.src);
          // Don't automatically set autoplayBlocked here to avoid breaking normal flow
        }
      }, true);
    }

    function showMainAudioPlayButton(audioList, resolve) {
      const playBtn = document.getElementById("mobileAudioPlayBtn");
      
      playBtn.style.display = "block";
      playBtn.onclick = () => {
        userHasInteracted = true;
        playBtn.style.display = "none";
        // Now proceed with normal audio playback using original function
        const originalPlayAudioListWithProgress = window.playAudioListWithProgress;
        if (originalPlayAudioListWithProgress) {
          originalPlayAudioListWithProgress.call(this, audioList).then(resolve);
        } else {
          resolve(); // Fallback
        }
      };
    }

    // Fallback: if questions don't start after 3 seconds, show a manual start button
    setTimeout(() => {
      if (document.getElementById("app").style.display === "block" && 
          document.getElementById("question-text").innerHTML === "" && 
          document.getElementById("interstitial").style.display === "none") {
        console.log("First question didn't load automatically, showing manual start");
        createManualStartButton();
      }
    }, 3000);
    //finliand
    function createManualStartButton() {
      const startBtn = document.createElement('button');
      startBtn.textContent = 'Start First Question';
      startBtn.style.cssText = 'padding: 12px 24px; margin: 20px auto; background: #2196F3; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; display: block;';
      startBtn.onclick = () => {
        if (typeof runQuestion === 'function') {
          startBtn.remove();
          runQuestion();
        }
      };
      document.getElementById("app").appendChild(startBtn);
    }
  </script>
</body>
</html>