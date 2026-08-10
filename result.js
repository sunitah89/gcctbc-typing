/*
    GCC TBC Typing Practice
    Result Calculation Engine

    Rules:
    Total Marks       = 40
    Passing Marks     = 16
    Allowed Mistakes  = 24
    25+ Mistakes      = FAIL
    Exam Time         = 7 Minutes
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


    /*
        ==========================================
        BASIC DATA
        ==========================================
    */

    const totalTypedCharacters =
        typedText.length;

    const questionCharacters =
        questionText.length;


    /*
        ==========================================
        CHARACTER-BY-CHARACTER COMPARISON
        ==========================================

        प्रत्येक character compare केला जातो.

        चुकीचा character = 1 mistake

        Typed text मध्ये जास्त characters असतील
        तर ते देखील mistakes मध्ये मोजले जातील.

        Question मध्ये राहिलेले characters
        omitted म्हणून मोजले जातील.
    */


    let wrongCharacters = 0;

    let correctCharacters = 0;

    let addedCharacters = 0;

    let omittedCharacters = 0;


    const maxLength =
        Math.max(
            typedText.length,
            questionText.length
        );


    for (let i = 0; i < maxLength; i++) {

        const typedChar =
            typedText[i];

        const correctChar =
            questionText[i];


        /*
            दोन्ही characters आहेत
        */

        if (
            typedChar !== undefined &&
            correctChar !== undefined
        ) {

            if (typedChar === correctChar) {

                correctCharacters++;

            } else {

                wrongCharacters++;

            }

        }


        /*
            Typed text मध्ये extra character
        */

        else if (
            typedChar !== undefined &&
            correctChar === undefined
        ) {

            addedCharacters++;

        }


        /*
            Question मधील character
            विद्यार्थ्याने type केला नाही
        */

        else if (
            typedChar === undefined &&
            correctChar !== undefined
        ) {

            omittedCharacters++;

        }

    }


    /*
        ==========================================
        TOTAL MISTAKES
        ==========================================
    */


    const totalMistakes =
        wrongCharacters +
        addedCharacters +
        omittedCharacters;


    /*
        ==========================================
        ACCURACY
        ==========================================
    */


    let accuracy = 0;


    if (totalTypedCharacters > 0) {

        accuracy =
            (correctCharacters /
            totalTypedCharacters) * 100;

    }


    accuracy =
        Math.max(
            0,
            Math.min(100, accuracy)
        );


    /*
        ==========================================
        GROSS SPEED
        ==========================================

        7 minutes examination.

        Standard typing calculation:

        Characters / 5 / minutes
    */


    const examMinutes = 7;


    const grossSpeed =
        totalTypedCharacters /
        5 /
        examMinutes;


    /*
        ==========================================
        NET SPEED
        ==========================================
    */


    const netSpeed =
        Math.max(
            0,
            grossSpeed -
            (totalMistakes / examMinutes)
        );


    /*
        ==========================================
        MARKS
        ==========================================

        40 marks total.

        16 marks passing.

        Mistakes <= 24:
            PASS

        Mistakes >= 25:
            FAIL

        Marks are calculated proportionally
        from accuracy.

        Minimum passing requirement is also
        controlled by the mistake rule.
    */


    let marks =

        (accuracy / 100) * 40;


    marks =
        Math.max(
            0,
            Math.min(40, marks)
        );


    /*
        ==========================================
        PASS / FAIL
        ==========================================
    */


    let passed = false;


    if (
        totalMistakes <= 24 &&
        marks >= 16
    ) {

        passed = true;

    }


    /*
        ==========================================
        ROUND VALUES
        ==========================================
    */


    const displayGrossSpeed =
        grossSpeed.toFixed(2);

    const displayNetSpeed =
        netSpeed.toFixed(2);

    const displayAccuracy =
        accuracy.toFixed(2);

    const displayMarks =
        marks.toFixed(2);


    /*
        ==========================================
        DISPLAY RESULT
        ==========================================
    */


    const resultStatus =
        document.getElementById(
            "resultStatus"
        );


    const totalMistakesElement =
        document.getElementById(
            "totalMistakes"
        );


    const marksElement =
        document.getElementById(
            "marks"
        );


    const grossSpeedElement =
        document.getElementById(
            "grossSpeed"
        );


    const netSpeedElement =
        document.getElementById(
            "netSpeed"
        );


    const accuracyElement =
        document.getElementById(
            "accuracy"
        );


    if (grossSpeedElement) {

        grossSpeedElement.textContent =
            displayGrossSpeed + " WPM";

    }


    if (netSpeedElement) {

        netSpeedElement.textContent =
            displayNetSpeed + " WPM";

    }


    if (accuracyElement) {

        accuracyElement.textContent =
            displayAccuracy + "%";

    }


    if (totalMistakesElement) {

        totalMistakesElement.textContent =
            totalMistakes;

    }


    if (marksElement) {

        marksElement.textContent =
            displayMarks + " / 40";

    }


    /*
        ==========================================
        PASS / FAIL DISPLAY
        ==========================================
    */


    if (resultStatus) {

        if (passed) {

            resultStatus.textContent =
                "PASS";

            resultStatus.className =
                "result-status pass";

        } else {

            resultStatus.textContent =
                "FAIL";

            resultStatus.className =
                "result-status fail";

        }

    }


    /*
        ==========================================
        SAVE RESULT
        ==========================================
    */


    localStorage.setItem(
        "grossSpeed",
        displayGrossSpeed
    );


    localStorage.setItem(
        "netSpeed",
        displayNetSpeed
    );


    localStorage.setItem(
        "accuracy",
        displayAccuracy
    );


    localStorage.setItem(
        "wrongCharacters",
        wrongCharacters
    );


    localStorage.setItem(
        "addedCharacters",
        addedCharacters
    );


    localStorage.setItem(
        "omittedCharacters",
        omittedCharacters
    );


    localStorage.setItem(
        "totalMistakes",
        totalMistakes
    );


    localStorage.setItem(
        "marks",
        displayMarks
    );


    localStorage.setItem(
        "examResult",
        passed ? "PASS" : "FAIL"
    );


    /*
        ==========================================
        CONSOLE INFORMATION
        ==========================================
    */

    console.log("========== GCC TBC RESULT ==========");

    console.log("Language:", language);

    console.log("Speed:", speed);

    console.log("Correct Characters:", correctCharacters);

    console.log("Wrong Characters:", wrongCharacters);

    console.log("Added Characters:", addedCharacters);

    console.log("Omitted Characters:", omittedCharacters);

    console.log("Total Mistakes:", totalMistakes);

    console.log("Accuracy:", displayAccuracy + "%");

    console.log("Gross Speed:", displayGrossSpeed);

    console.log("Net Speed:", displayNetSpeed);

    console.log("Marks:", displayMarks + "/40");

    console.log("Result:", passed ? "PASS" : "FAIL");

});
