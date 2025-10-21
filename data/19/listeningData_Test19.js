window.listeningData = [
    {
        audio: `/data/19/audio/AudioLong1.mp3`,
        questions: [
            {
                intro: `/data/19/audio/1.1.mp3`,
                type: "single",
                question: "Why does the man go to talk to the woman?",
                options: [
                    { value: "A", text: " To find out if he can get extended borrowing privileges" },
                    { value: "B", text: " To find out if he needs to immediately return a book he borrowed" },
                    { value: "C", text: " To find out why he has to pay a library fine" },
                    { value: "D", text: " To find out why his borrowing privileges have been suspended" }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/1.2.mp3`,
                type: "multiple",
                question: "What will the man probably do today? Click on 2 answers.",
                options: [
                    { value: "A", text: " Get photocopies of a book chapter" },
                    { value: "B", text: " Find out who requested his book" },
                    { value: "C", text: " Borrow additional books" },
                    { value: "D", text: " Renew the book Modern Social Problems" }
                ],
                correct: ["A", "C"]
            },
            {
                intro: `/data/19/audio/1.3.mp3`,
                type: "single",
                question: "What is the woman trying to explain when she mentions students who have lost their borrowing privileges?",
                options: [
                    { value: "A", text: " Why the man should not photocopy part of the book" },
                    { value: "B", text: " The reasons for one of the library’s policies" },
                    { value: "C", text: " What will happen if the man does not return the book" },
                    { value: "D", text: " The reason the man has to fill out a form" }
                ],
                correct: ["C"]
            },
            {
                intro: `/data/19/audio/1.4.mp3`,
                type: "single",
                question: "How does the man probably feel at the end of the conversation?",
                options: [
                    { value: "A", text: " Annoyed that he has to pay a fine on the book" },
                    { value: "B", text: " Upset that he is losing his library privileges" },
                    { value: "C", text: " Glad that he can keep the book for two more weeks" },
                    { value: "D", text: " Less worried about having to return the book" }
                ],
                correct: ["D"]
            },
            {
                intro: [`/data/19/audio/1.5b.mp3`, `/data/19/audio/1.5.mp3`, `/data/19/audio/1.5a.mp3`],
                type: "single",
                question: "Why does the woman say this:",
                options: [
                    { value: "A", text: " To make sure she understands what the man’s problem is" },
                    { value: "B", text: " To encourage the man to return the book to the library soon" },
                    { value: "C", text: " To check whether the man has already returned the book" },
                    { value: "D", text: " To see if the man is familiar with the library’s policy" }
                ],
                correct: ["A"]
            }
        ]
    },
    {
        audio: `/data/19/audio/AudioLong2.mp3`,
        questions: [
            {
                intro: `/data/19/audio/2.1.mp3`,
                type: "single",
                question: "What is the main topic of the lecture?",
                options: [
                    { value: "A", text: " The reasons people are not always truthful in conversations" },
                    { value: "B", text: " The need for greater regulation of language used in advertising" },
                    { value: "C", text: " The need for maximum precision and detail in everyday conversation" },
                    { value: "D", text: " The role of certain rules in determining what a speaker means" }
                ],
                correct: ["D"]
            },
            {
                intro: `/data/19/audio/2.2.mp3`,
                type: "single",
                question: "According to the professor, what helps speakers keep conversations from proceeding too slowly?",
                options: [
                    { value: "A", text: " The ability to make inferences according to the Gricean Maxims" },
                    { value: "B", text: " The ability to effectively distinguish truth from falsehood" },
                    { value: "C", text: " The willingness to acknowledge that a Gricean Maxim has been violated" },
                    { value: "D", text: " The willingness to ignore the Gricean Maxims on occasion" }
                ],
                correct: ["A"]
            },
            {
                intro: `/data/19/audio/2.3.mp3`,
                type: "matrix",
                question: "For each of the following, indicate whether or not it reflects one of the Gricean Maxims that the professor mentions. (Click on any choice that does and leave the rest unchecked.) Click on as many answers as apply.",
                columns: ["Is a Maxim", "Is Not a Maxim"],
                rows: [
                    { text: "Try to make the topic interesting	", correct: "Is Not a Maxim" },
                    { text: "Avoid making claims that are false.	", correct: "Is a Maxim" },
                    { text: "Make comments as informative as necessary.	", correct: "Is a Maxim" },
                    { text: "Make as few assumptions as possible.	", correct: "Is Not a Maxim" },
                    { text: "Make comments relate to previous statements.	", correct: "Is a Maxim" }
                ]
            },
            {
                intro: `/data/19/audio/2.4.mp3`,
                type: "single",
                question: "Why does the professor describe a letter of recommendation?",
                options: [
                    { value: "A", text: " To point out differences between written statements and spoken statements" },
                    { value: "B", text: " To illustrate how people may be deceived in a business environment" },
                    { value: "C", text: " To show how violating a Maxim may contribute to a statement’s meaning" },
                    { value: "D", text: " To prove that lying is sometimes considered acceptable" }
                ],
                correct: ["C"]
            },
            {
                intro: `/data/19/audio/2.5.mp3`,
                type: "single",
                question: "What does the professor imply about advertisers?",
                options: [
                    { value: "A", text: " They are less likely than politicians to violate a Gricean Maxim." },
                    { value: "B", text: " They realize that consumers know whether an advertisement violates a Maxim." },
                    { value: "C", text: " They often make use of the Gricean Maxims to express humor." },
                    { value: "D", text: " They realize that consumers make false inferences from advertisements." }
                ],
                correct: ["D"]
            },
            {
                intro: `/data/19/audio/2.6.mp3`,
                type: "single",
                question: "What type of Maxim does the professor illustrate with this example:",
                options: [
                    { value: "A", text: " Manner" },
                    { value: "B", text: "Quality" },
                    { value: "C", text: "Quantity" },
                    { value: "D", text: " Relevance" }
                ],
                correct: ["D"]
            }
        ]
    },
    {
        audio: `/data/19/audio/AudioLong3.mp3`,
        questions: [
            {
                intro: `/data/19/audio/3.1.mp3`,
                type: "single",
                question: "Why does the professor want to talk to the student?",
                options: [
                    { value: "A", text: " To discuss her application to graduate school" },
                    { value: "B", text: " To discuss a possible internship at the school’s library" },
                    { value: "C", text: " To encourage her to increase the scope of her research project" },
                    { value: "D", text: " To suggest some changes to improve her research project" }
                ],
                correct: ["C"]
            },
            {
                intro: `/data/19/audio/3.2.mp3`,
                type: "single",
                question: "According to the professor, what information should be included in the student’s application?",
                options: [
                    { value: "A", text: " The amount of money she will need for her research" },
                    { value: "B", text: " The amount of time she will need to complete her project" },
                    { value: "C", text: " A summary of research already conducted on the topic" },
                    { value: "D", text: " Reasons why she chose that particular topic" }
                ],
                correct: ["A"]
            },
            {
                intro: `/data/19/audio/3.3.mp3`,
                type: "single",
                question: "Why does the professor mention a university in Boston?",
                options: [
                    { value: "A", text: " He used to be a professor at that university." },
                    { value: "B", text: " He thinks the student may find useful material there." },
                    { value: "C", text: " He has plans to visit the university soon." },
                    { value: "D", text: " He thinks the student should attend a conference there." }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/3.4.mp3`,
                type: "single",
                question: "What does the professor say he will do for the student?",
                options: [
                    { value: "A", text: " Help her determine details for a research budget" },
                    { value: "B", text: " Assist her with her graduate school inquiry" },
                    { value: "C", text: " Talk to her about ways of expanding her project" },
                    { value: "D", text: " Write a letter of recommendation for her" }
                ],
                correct: ["D"]
            },
            {
                intro: [`/data/19/audio/3.5b.mp3`, `/data/19/audio/3.5.mp3`, `/data/19/audio/3.5a.mp3`,],
                type: "single",
                question: "Why does the professor say this:",
                options: [
                    { value: "A", text: " He thinks the fund is rather limited." },
                    { value: "B", text: " He agrees that the fund’s name is rather long." },
                    { value: "C", text: " He thinks the student needs help with her project." },
                    { value: "D", text: " He is surprised that the student is not familiar with the fund" }
                ],
                correct: ["B"]
            }
        ]
    },
    {
        audio: `/data/19/audio/AudioLong4.mp3`,
        questions: [
            {
                intro: `/data/19/audio/4.1.mp3`,
                type: "single",
                question: "What is the lecture mainly about?",
                options: [
                    { value: "A", text: " The effect of ice ages on the development of agriculture" },
                    { value: "B", text: " A theory about a change in Earth’s climate cycle" },
                    { value: "C", text: " Strategies to prevent Earth from entering another ice age" },
                    { value: "D", text: " Some effects of industrialization on Earth’s atmosphere" }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/4.2.mp3`,
                type: "multiple",
                question: "What does the professor imply about Earth’s climate over the last several million years? Click on 2 answers.",
                options: [
                    { value: "A", text: " Ice ages have alternated with warmer periods." },
                    { value: "B", text: " Recent ice ages have not been as cold as earlier ice ages." },
                    { value: "C", text: " Interglacial periods have become cooler and cooler overtime." },
                    { value: "D", text: " Previous interglacial periods were shorter than the current interglacial period." }
                ],
                correct: ["A", "D"]
            },
            {
                intro: `/data/19/audio/4.3.mp3`,
                type: "single",
                question: "According to the professor, what factor is extending the duration of the current interglacial period?",
                options: [
                    { value: "A", text: " A shift in the locations of wetlands and forests" },
                    { value: "B", text: " The relatively mild temperatures of the most recent ice age" },
                    { value: "C", text: " The increased absorption of certain atmospheric gases by farm crops" },
                    { value: "D", text: " An increase in the quantity of certain gases in Earth’s atmosphere" }
                ],
                correct: ["D"]
            },
            {
                intro: `/data/19/audio/4.4.mp3`,
                type: "multiple",
                question: "According to the professor, what activities associated with the beginnings of agriculture may have slowed or prevented the onset of a predicted ice age? Click on 2 answers.",
                options: [
                    { value: "A", text: " The clearing of trees" },
                    { value: "B", text: " The burning of fossil fuels" },
                    { value: "C", text: " The domestication of certain animals" },
                    { value: "D", text: " The cultivation of certain grains" }
                ],
                correct: ["A", "D"]
            },
            {
                intro: `/data/19/audio/4.5.mp3`,
                type: "single",
                question: "What is the professor’s attitude toward industrialization?",
                options: [
                    { value: "A", text: " He thinks that its effect on Earth’s climate will decrease overtime." },
                    { value: "B", text: " He is worried that it may speed the arrival of the next ice age." },
                    { value: "C", text: " He thinks that it may reduce the effect of agriculture on Earth’s climate." },
                    { value: "D", text: " He is unsure about its long-term effects on Earth’s climate." }
                ],
                correct: ["D"]
            },
            {
                intro: [ `/data/19/audio/4.6.mp3`, `/data/19/audio/4.6a.mp3`],
                type: "single",
                question: "What does the professor imply when he says this:",
                options: [
                    { value: "A", text: " Theorists sometimes make careless predictions." },
                    { value: "B", text: " Theorists were unaware of some of the effects of human activities." },
                    { value: "C", text: " Technology of the 1970s was not sophisticated enough to detect the earliest stages of an ice age." },
                    { value: "D", text: " Scientists in the 1970s overestimated the speed at which ice ages progress." }
                ],
                correct: ["B"]
            }
        ]
    },
    {
        audio: `/data/19/audio/AudioLong5.mp3`,
        questions: [
            {
                intro: `/data/19/audio/5.1.mp3`,
                type: "single",
                question: "What is the lecture mainly about?",
                options: [
                    { value: "A", text: " The role played by folktales in contemporary Norwegian society" },
                    { value: "B", text: " A description of the major types of Norwegian folktales" },
                    { value: "C", text: " A comparison of Norwegian folktales and Norwegian folk legends" },
                    { value: "D", text: " An illustration of the differences between oral literature and written literature" }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/5.2.mp3`,
                type: "single",
                question: "What does the professor find appealing about folk legends?",
                options: [
                    { value: "A", text: " They are very imaginative." },
                    { value: "B", text: " They are somewhat realistic." },
                    { value: "C", text: " They stress what is important in a culture." },
                    { value: "D", text: " They show similarities between otherwise diverse societies." }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/5.3.mp3`,
                type: "single",
                question: "How is the story of the bear and the fox characteristic of Norwegian animal stories?",
                options: [
                    { value: "A", text: " It explains the origin of a physical characteristic of an animal." },
                    { value: "B", text: " It uses animal behavior to explain human characteristics." },
                    { value: "C", text: " It shows how animals were domesticated by people." },
                    { value: "D", text: " It contains episodes of animals changing into people." }
                ],
                correct: ["A"]
            },
            {
                intro: `/data/19/audio/5.4.mp3`,
                type: "multiple",
                question: "Why does the professor mention a folktale called east of the Sun and West of the Moon? Click on 2 answers.",
                options: [
                    { value: "A", text: " To point out conventions found in most folktales" },
                    { value: "B", text: " To point out differences between animal stories and comical stories" },
                    { value: "C", text: " To give an example of a transformation story" },
                    { value: "D", text: " To give an example of a story published in the first collection of Norwegian folktales" }
                ],
                correct: ["A", "C"]
            },
            {
                intro: `/data/19/audio/5.5.mp3`,
                type: "single",
                question: "What does the professor say about the characters in Norwegian Folktales?",
                options: [
                    { value: "A", text: " They usually behave in playful and amusing ways." },
                    { value: "B", text: " They usually behave the way that real Norwegian people behave." },
                    { value: "C", text: " Most are giants, trolls, or dragons." },
                    { value: "D", text: " Most are based on actual historical figures." }
                ],
                correct: ["B"]
            },
            {
                intro: `/data/19/audio/5.6.mp3`,
                type: "single",
                question: "What does the professor imply happened as a result of the Romantic movement’s spreading to Norway?",
                options: [
                    { value: "A", text: " Children’s literature became less popular." },
                    { value: "B", text: " Attempts were made to modernize the plots of traditional folktales." },
                    { value: "C", text: " Folktales began to be regarded as an important aspect of Norwegian culture." },
                    { value: "D", text: " Folktales in Norway became more similar to folktales from other parts of Europe." }
                ],
                correct: ["C"]
            }
        ]
    }
];

