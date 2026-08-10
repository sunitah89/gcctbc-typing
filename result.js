/*
    GCC TBC Typing Practice
    Result Engine - Version 2
*/

document.addEventListener("DOMContentLoaded", function () {

    const typedText =
        localStorage.getItem("typedText") || "";

    const questionText =
        localStorage.getItem("questionText") || "";

    const language =
        localStorage.getItem("examLanguage") ||
        localStorage.getItem("language") ||
        "marathi";

    const speed =
        Number(
            localStorage.getItem("examSpeed") ||
            localStorage.getItem("speed") ||
            30
        );

    const EXAM_MINUTES = 7;

    const TOTAL_MARKS = 40;

    const PASSING_MARKS = 16;

    const MAX_ALLOWED_MISTAKES = 24;


    /*
        ------------------------------------------
        WORDS
        ------------------------------------------
    */

    function getWords(text) {

        return text
            .trim()
            .split(/\s+/)
            .filter(word => word.length > 0);

    }


    const correctWords =
        getWords(questionText);

    const typedWords =
        getWords(typedText);


    /*
        ------------------------------------------
        CHARACTER COMPARISON
        ------------------------------------------
    */

    let correctCharacters = 0;

    let wrongCharacters = 0;

    let addedCharacters = 0;

    let omittedCharacters = 0;


    const maxLength =
        Math.max(
            questionText.length,
            typedText.length
        );


    for (let i = 0; i < maxLength; i++) {

        const correct =
            questionText[i];

        const typed =
            typedText[i];


        if (
            correct !== undefined &&
            typed !== undefined
        ) {

            if (correct === typed) {

                correctCharacters++;

            } else {

                wrongCharacters++;

            }

        }
        else if (
            typed !== undefined
        ) {

            addedCharacters++;

        }
        else if (
            correct !== undefined
        ) {

            omittedCharacters++;

        }

    }


    /*
        ------------------------------------------
        WORD ANALYSIS
        ------------------------------------------
    */

    let wrongWords = 0;

    let omittedWords = 0;

    let addedWords = 0;

    let incompleteWords = 0;


    const wordCount =
        Math.max(
            correctWords.length,
            typedWords.length
        );


    for (let i = 0; i < wordCount; i++) {

        const correct =
            correctWords[i];

        const typed =
            typedWords[i];


        /*
            Correct word exists + typed word exists
        */

        if (
            correct !== undefined &&
            typed !== undefined
        ) {

            if (correct === typed) {

                continue;

            }


            /*
                Typed word is shorter than
                answer word = incomplete
            */

            if (
                typed.length < correct.length &&
                correct.startsWith(typed)
            ) {

                incompleteWords++;

            }
            else {

                wrongWords++;

            }

        }


        /*
            Answer word exists but
            student did not type it
        */

        else if (
            correct !== undefined &&
            typed === undefined
        ) {

            omittedWords++;

        }


        /*
            Student typed extra word
        */

        else if (
            typed !== undefined &&
            correct === undefined
        ) {

            addedWords++;

        }

    }


    /*
        ------------------------------------------
        TOTAL MISTAKES
        ------------------------------------------
    */

    const totalMistakes =
        wrongWords +
        omittedWords +
        addedWords +
        incompleteWords;


    /*
        ------------------------------------------
        ACCURACY
        ------------------------------------------
    */

    let accuracy = 0;


    if (typedText.length > 0) {

        accuracy =
            (correctCharacters /
            typedText.length) * 100;

    }


    accuracy =
        Math.max(
            0,
            Math.min(100, accuracy)
        );


    /*
        ------------------------------------------
        GROSS SPEED
        ------------------------------------------
    */

    const grossSpeed =
        typedText.length /
        5 /
        EXAM_MINUTES;


    /*
        ------------------------------------------
        NET SPEED
        ------------------------------------------
    */

    const netSpeed =
        Math.max(
            0,
            grossSpeed -
            (totalMistakes / EXAM_MINUTES)
        );


    /*
        ------------------------------------------
        MARKS
        ------------------------------------------
    */

    let marks =
        (accuracy / 100) *
        TOTAL_MARKS;


    marks =
        Math.max(
            0,
            Math.min(
                TOTAL_MARKS,
                marks
            )
        );


    /*
        ------------------------------------------
        PASS / FAIL
        ------------------------------------------
    */

    const passed =
        totalMistakes <= MAX_ALLOWED_MISTAKES &&
        marks >= PASSING_MARKS;


    /*
        ------------------------------------------
        DISPLAY
        ------------------------------------------
    */

    setText(
        "resultLanguage",
        language
    );

    setText(
        "resultSpeed",
        speed + " WPM"
    );

    setText(
        "grossSpeed",
        grossSpeed.toFixed(2) + " WPM"
    );

    setText(
        "netSpeed",
        netSpeed.toFixed(2) + " WPM"
    );

    setText(
        "accuracy",
        accuracy.toFixed(2) + "%"
    );

    setText(
        "correctCharacters",
        correctCharacters
    );

    setText(
        "wrongWords",
        wrongWords
    );

    setText(
        "omittedWords",
        omittedWords
    );

    setText(
        "addedWords",
        addedWords
    );

    setText(
        "incompleteWords",
        incompleteWords
    );

    setText(
        "totalMistakes",
        totalMistakes
    );

    setText(
        "marks",
        marks.toFixed(2) +
        " / " +
        TOTAL_MARKS
    );


    /*
        ------------------------------------------
        RESULT STATUS
        ------------------------------------------
    */

    const resultStatus =
        document.getElementById(
            "resultStatus"
        );


    if (resultStatus) {

        if (passed) {

            resultStatus.textContent =
                "PASS";

            resultStatus.className =
                "result-status pass";

        }
        else {

            resultStatus.textContent =
                "FAIL";

            resultStatus.className =
                "result-status fail";

        }

    }


    /*
        ------------------------------------------
        SAVE RESULT
        ------------------------------------------
    */

    localStorage.setItem(
        "grossSpeed",
        grossSpeed.toFixed(2)
    );

    localStorage.setItem(
        "netSpeed",
        netSpeed.toFixed(2)
    );

    localStorage.setItem(
        "accuracy",
        accuracy.toFixed(2)
    );

    localStorage.setItem(
        "correctCharacters",
        correctCharacters
    );

    localStorage.setItem(
        "wrongWords",
        wrongWords
    );

    localStorage.setItem(
        "omittedWords",
        omittedWords
    );

    localStorage.setItem(
        "addedWords",
        addedWords
    );

    localStorage.setItem(
        "incompleteWords",
        incompleteWords
    );

    localStorage.setItem(
        "totalMistakes",
        totalMistakes
    );

    localStorage.setItem(
        "marks",
        marks.toFixed(2)
    );

    localStorage.setItem(
        "examResult",
        passed ? "PASS" : "FAIL"
    );


    /*
        ------------------------------------------
        HELPER
        ------------------------------------------
    */

    function setText(id, value) {

        const element =
            document.getElementById(id);

        if (element) {

            element.textContent = value;

        }

    }

});
