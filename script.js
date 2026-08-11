/*
    GCC TBC Typing Website
    Start Exam Controller
*/


document.addEventListener("DOMContentLoaded", function () {

    const startButton =
        document.getElementById("startBtn");


    if (!startButton) {
        return;
    }


    startButton.addEventListener(
        "click",
        function () {

            /*
                Language
            */

            const language =
                document.getElementById(
                    "language"
                ).value;


            /*
                Speed
            */

            const speed =
                document.getElementById(
                    "speed"
                ).value;


            /*
                Save Exam Settings
            */

            localStorage.setItem(
                "language",
                language
            );


            localStorage.setItem(
                "speed",
                speed
            );


            /*
                Clear Previous Exam Data
            */

            localStorage.removeItem(
                "typedText"
            );

            localStorage.removeItem(
                "questionText"
            );

            localStorage.removeItem(
                "examResult"
            );

            localStorage.removeItem(
                "marks"
            );

            localStorage.removeItem(
                "accuracy"
            );

            localStorage.removeItem(
                "grossSpeed"
            );

            localStorage.removeItem(
                "netSpeed"
            );

            localStorage.removeItem(
                "totalMistakes"
            );

            localStorage.removeItem(
                "wrongWords"
            );

            localStorage.removeItem(
                "omittedWords"
            );

            localStorage.removeItem(
                "addedWords"
            );

            localStorage.removeItem(
                "incompleteWords"
            );


            /*
                Button Disable
            */

            startButton.disabled = true;

            startButton.textContent =
                "EXAM STARTING...";


            /*
                Open Exam Page
            */

            window.location.href =
                "exam.html";

        }
    );

});
