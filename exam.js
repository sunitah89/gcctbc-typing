/*
    GCC TBC Typing Practice
    Exam Engine
*/

document.addEventListener("DOMContentLoaded", function () {

    const language =
        localStorage.getItem("language") || "marathi";

    const speed =
        Number(localStorage.getItem("speed")) || 30;


    /* -----------------------------------------
       DISPLAY LANGUAGE & SPEED
    ----------------------------------------- */

    const languageDisplay =
        document.getElementById("languageDisplay");

    const speedDisplay =
        document.getElementById("speedDisplay");


    if (languageDisplay) {
        languageDisplay.textContent = language;
    }

    if (speedDisplay) {
        speedDisplay.textContent = speed;
    }


    /* -----------------------------------------
       GET RANDOM PARAGRAPH
    ----------------------------------------- */

    const paragraphElement =
        document.getElementById("paragraph");


    let currentParagraph =
        getRandomParagraph(language, speed);


    if (paragraphElement) {
        paragraphElement.textContent =
            currentParagraph;
    }


    /* -----------------------------------------
       TYPING AREA
    ----------------------------------------- */

    const typingArea =
        document.getElementById("typingArea");


    if (!typingArea) {
        return;
    }


    typingArea.focus();


    /* -----------------------------------------
       EXAM VARIABLES
    ----------------------------------------- */

    let totalSeconds = 7 * 60;

    let examFinished = false;

    let fontSize = 18;


    const timerElement =
        document.getElementById("timer");


    /* -----------------------------------------
       TIMER DISPLAY
    ----------------------------------------- */

    function updateTimerDisplay() {

        const minutes =
            Math.floor(totalSeconds / 60);

        const seconds =
            totalSeconds % 60;


        const minuteText =
            String(minutes).padStart(2, "0");

        const secondText =
            String(seconds).padStart(2, "0");


        timerElement.textContent =
            minuteText + ":" + secondText;
    }


    updateTimerDisplay();


    /* -----------------------------------------
       START TIMER
    ----------------------------------------- */

    const timerInterval =
        setInterval(function () {

            if (examFinished) {
                clearInterval(timerInterval);
                return;
            }


            totalSeconds--;

            updateTimerDisplay();


            if (totalSeconds <= 0) {

                clearInterval(timerInterval);

                finishExam();

            }

        }, 1000);


    /* -----------------------------------------
       TYPING INPUT
    ----------------------------------------- */

    typingArea.addEventListener("input", function () {

        if (examFinished) {
            return;
        }

        /*
            पुढील टप्प्यात येथे:
            - Character checking
            - Word checking
            - Wrong word calculation
            - Omitted word calculation
            - Added word calculation
            जोडले जाईल.
        */

    });


    /* -----------------------------------------
       COPY / CUT / PASTE BLOCK
    ----------------------------------------- */

    ["copy", "cut", "paste"].forEach(function (eventName) {

        typingArea.addEventListener(
            eventName,
            function (event) {

                event.preventDefault();

            }
        );

    });


    /* -----------------------------------------
       RIGHT CLICK BLOCK
    ----------------------------------------- */

    document.addEventListener(
        "contextmenu",
        function (event) {

            event.preventDefault();

        }
    );


    /* -----------------------------------------
       KEYBOARD SHORTCUT BLOCK
       BACKSPACE IS ALLOWED
    ----------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.ctrlKey || event.metaKey) {

                const key =
                    event.key.toLowerCase();


                /*
                    Copy
                    Paste
                    Cut
                    Select All
                    Print
                    Save
                */

                if (
                    key === "c" ||
                    key === "v" ||
                    key === "x" ||
                    key === "a" ||
                    key === "p" ||
                    key === "s"
                ) {

                    event.preventDefault();

                }

            }

        }
    );


    /* -----------------------------------------
       ZOOM
    ----------------------------------------- */

    window.changeFontSize = function (amount) {

        fontSize += amount;


        if (fontSize < 12) {
            fontSize = 12;
        }


        if (fontSize > 32) {
            fontSize = 32;
        }


        if (paragraphElement) {

            paragraphElement.style.fontSize =
                fontSize + "px";

        }


        typingArea.style.fontSize =
            fontSize + "px";

    };


    /* -----------------------------------------
       FULL SCREEN
    ----------------------------------------- */

    window.goFullScreen = function () {

        const page =
            document.documentElement;


        if (!document.fullscreenElement) {

            if (page.requestFullscreen) {

                page.requestFullscreen();

            }

        } else {

            if (document.exitFullscreen) {

                document.exitFullscreen();

            }

        }

    };


    /* -----------------------------------------
       FINISH EXAM
    ----------------------------------------- */

    function finishExam() {

        if (examFinished) {
            return;
        }


        examFinished = true;


        typingArea.disabled = true;


        /*
            Store data for Result Page
        */

        localStorage.setItem(
            "typedText",
            typingArea.value
        );


        localStorage.setItem(
            "questionText",
            currentParagraph
        );


        localStorage.setItem(
            "examLanguage",
            language
        );


        localStorage.setItem(
            "examSpeed",
            speed
        );


        /*
            पुढील टप्प्यात result.html
            येथे उघडला जाईल.
        */

        window.location.href =
            "result.html";

    }


    /* -----------------------------------------
       PREVENT ACCIDENTAL PAGE LEAVE
    ----------------------------------------- */

    window.addEventListener(
        "beforeunload",
        function (event) {

            if (!examFinished) {

                event.preventDefault();

                event.returnValue = "";

            }

        }
    );

});
