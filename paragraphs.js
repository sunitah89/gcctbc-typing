/*
    GCC TBC Typing Practice
    Paragraph Database

    पुढे यामध्ये अनेक Paragraph जोडता येतील.
*/

const typingParagraphs = {

    marathi: {

        30: [
            `भारत हा विविधतेने नटलेला सुंदर देश आहे. आपल्या देशात अनेक भाषा, संस्कृती, परंपरा आणि सण साजरे केले जातात. शिक्षण, तंत्रज्ञान आणि उद्योग या क्षेत्रांमध्ये भारताने मोठी प्रगती केली आहे. प्रत्येक नागरिकाने देशाच्या विकासामध्ये आपले योगदान देणे आवश्यक आहे.`
        ],

        40: [
            `वेळ हा आपल्या जीवनातील अत्यंत मौल्यवान घटक आहे. गेलेला वेळ पुन्हा परत मिळत नाही. त्यामुळे प्रत्येक व्यक्तीने आपल्या वेळेचा योग्य उपयोग केला पाहिजे. नियमित अभ्यास, मेहनत, शिस्त आणि योग्य नियोजन यामुळे कोणतेही ध्येय साध्य करता येते. विद्यार्थ्यांनी दररोज थोडा वेळ टायपिंगच्या सरावासाठी दिल्यास त्यांच्या वेगात आणि अचूकतेत नक्कीच सुधारणा होईल.`
        ],

        50: [
            `संगणक हे आधुनिक जीवनातील एक महत्त्वाचे साधन बनले आहे. कार्यालयीन कामकाज, शिक्षण, बँकिंग, व्यापार आणि संवाद या सर्व क्षेत्रांमध्ये संगणकाचा मोठ्या प्रमाणावर वापर केला जातो. संगणकाचा योग्य वापर करण्यासाठी टायपिंगचे ज्ञान आणि चांगला वेग आवश्यक आहे. नियमित सरावामुळे टायपिंग करताना चुका कमी होतात आणि कामाचा वेग वाढतो.`
        ],

        60: [
            `आजच्या डिजिटल युगामध्ये संगणक आणि इंटरनेटचा वापर आपल्या दैनंदिन जीवनाचा एक अविभाज्य भाग झाला आहे. सरकारी कार्यालये, शैक्षणिक संस्था, बँका, उद्योग आणि विविध व्यवसायांमध्ये संगणकावर मोठ्या प्रमाणावर काम केले जाते. त्यामुळे विद्यार्थ्यांनी संगणकाचे मूलभूत ज्ञान आत्मसात करण्याबरोबरच अचूक आणि वेगवान टायपिंगचा सराव करणे आवश्यक आहे. सातत्यपूर्ण सराव, योग्य बोटांची स्थिती आणि चुका टाळण्याची सवय यामुळे टायपिंग कौशल्यामध्ये मोठी सुधारणा होऊ शकते.`
        ]

    },


    english: {

        30: [
            `India is a beautiful country known for its diversity, culture and traditions. People belonging to different communities live together with mutual respect. Education, technology and industry have developed rapidly in recent years. Every citizen should contribute positively to the progress of the country.`
        ],

        40: [
            `Time is one of the most valuable things in our life. Once time is lost, it cannot be brought back. Therefore, every person should use time properly and wisely. Regular study, hard work, discipline and proper planning help us achieve our goals. Students can improve their typing speed and accuracy by practising regularly every day.`
        ],

        50: [
            `Computers have become an important part of modern life. They are widely used in offices, schools, banks, businesses and many other areas. Good typing skills are necessary for completing computer related work quickly and accurately. Regular practice helps a person reduce typing mistakes and improve speed. Accuracy should always be given importance along with speed.`
        ],

        60: [
            `In today's digital age, computers and the internet have become an essential part of our daily lives. Government offices, educational institutions, banks, industries and businesses use computers for many different activities. Students should learn basic computer skills and also develop accurate and fast typing habits. Continuous practice, correct finger placement and careful typing can help improve both speed and accuracy.`
        ]

    },


    hindi: {

        30: [
            `भारत विविधताओं से भरा हुआ एक सुंदर देश है। हमारे देश में अनेक भाषाएं, संस्कृतियां, परंपराएं और त्योहार मनाए जाते हैं। शिक्षा, तकनीक और उद्योग के क्षेत्र में भारत ने बहुत प्रगति की है। प्रत्येक नागरिक को देश के विकास में अपना योगदान देना चाहिए।`
        ],

        40: [
            `समय हमारे जीवन का बहुत महत्वपूर्ण हिस्सा है। बीता हुआ समय कभी वापस नहीं आता। इसलिए प्रत्येक व्यक्ति को समय का सही उपयोग करना चाहिए। नियमित अध्ययन, मेहनत, अनुशासन और उचित योजना के द्वारा हम अपने लक्ष्य को प्राप्त कर सकते हैं। विद्यार्थियों को प्रतिदिन टाइपिंग का अभ्यास करना चाहिए ताकि उनकी गति और शुद्धता में सुधार हो सके।`
        ],

        50: [
            `कंप्यूटर आधुनिक जीवन का एक महत्वपूर्ण साधन बन गया है। कार्यालय, विद्यालय, बैंक, व्यापार और अनेक क्षेत्रों में कंप्यूटर का उपयोग किया जाता है। कंप्यूटर पर तेजी और सही तरीके से काम करने के लिए अच्छी टाइपिंग का ज्ञान आवश्यक है। नियमित अभ्यास करने से टाइपिंग की गलतियां कम होती हैं और गति में सुधार होता है।`
        ],

        60: [
            `आज के डिजिटल युग में कंप्यूटर और इंटरनेट हमारे दैनिक जीवन का महत्वपूर्ण हिस्सा बन चुके हैं। सरकारी कार्यालयों, शैक्षणिक संस्थानों, बैंकों, उद्योगों और विभिन्न व्यवसायों में कंप्यूटर का व्यापक उपयोग किया जाता है। विद्यार्थियों को कंप्यूटर का मूलभूत ज्ञान प्राप्त करने के साथ-साथ सही और तेज टाइपिंग का अभ्यास भी करना चाहिए। लगातार अभ्यास, उंगलियों की सही स्थिति और गलतियों को कम करने की आदत से टाइपिंग कौशल में काफी सुधार किया जा सकता है।`
        ]

    }

};


/*
    Random Paragraph मिळवण्यासाठी Function
*/

function getRandomParagraph(language, speed) {

    if (
        !typingParagraphs[language] ||
        !typingParagraphs[language][speed]
    ) {

        language = "marathi";
        speed = 30;

    }

    const list =
        typingParagraphs[language][speed];

    const randomIndex =
        Math.floor(Math.random() * list.length);

    return list[randomIndex];

}
