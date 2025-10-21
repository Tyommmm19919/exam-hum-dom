         window.listeningData = [
            {
                audio: "/data/2/audio/1.1.mp3",
                questions: [
                    {
                        intro: "/data/2/audio/1.1.mp3",
                        type: "single",
                        question: "Why does the man go to see his professor",
                        options: [
                            { value: "A", text: "To borrow some charts and graphs from her" },
                            { value: "B", text: "To ask her to explain some statistical procedures" },
                            { value: "C", text: "To talk about report he is writing" },
                            { value: "D", text: "To discuss a grade he got on a paper" }
                        ],
                        correct: ["C"]
                    },
                    {
                        intro: "/data/2/audio/1.2.mp3",
                        type: "matrix",
                        question: "What information will the man include in his report? Click in the correct box for each phrase",
                        columns: ["Include in report", "Not include in report"],
                        rows: [
                            { text: "Climate charts", correct: "Include in report" },
                            { text: "Interviews with meteorologists", correct: "Not include in report" },
                            { text: "Journals notes", correct: "Include in report" },
                            { text: "Statistical tests", correct: "Include in report" }
                        ]
                    },
                    {
                        intro: "/data/2/audio/1.3.mp3",
                        type: "single",
                        question: "Why does the professor tell the man about the appointment at the doctor's office?",
                        options: [
                            { value: "A", text: "To demonstrate a way of remembering things" },
                            { value: "B", text: "To explain why she needs to leave soon" },
                            { value: "C", text: "To illustrate a point that appears in his report" },
                            { value: "D", text: "To emphasize the importance of good health" }
                        ],
                        correct: ["A"]
                    },
                    {
                        intro: "/data/2/audio/1.4.mp3",
                        type: "single",
                        question: "What does the professor offer to do for the man",
                        options: [
                            { value: "A", text: "Help him collect more data in other areas of the state" },
                            { value: "B", text: "Submit it his research findings for publication" },
                            { value: "C", text: "Give him the doctor's telephone number" },
                            { value: "D", text: "Review the first version of his report" }
                        ],
                        correct: ["D"]
                    },
                    {
                        intro: ["/data/2/audio/1.5b.mp3", "/data/2/audio/1.5.mp3", "/data/2/audio/1.5a.mp3"],
                        type: "single",
                        question: "Why does the professor say this",
                        options: [
                            { value: "A", text: "To question the length of the paper" },
                            { value: "B", text: "To offer encouragement" },
                            { value: "C", text: "To dispute the data sources" },
                            { value: "D", text: " To explain a theory" }
                        ],
                        correct: ["B"]
                    }
                ]
            },
            {
                audio: "/data/2/audio/AudioLong2.mp3",
                questions: [
                    {
                        intro: "/data/2/audio/2.1.mp3",
                        type: "single",
                        question: "What aspect of Manila hemp fibers does the professor mainly discuss in the lecture",
                        options: [
                            { value: "A", text: "Similarities between cotton fibers and manila hemp fibers" },
                            { value: "B", text: "Various types of manila hemp fibers" },
                            { value: "C", text: "The economic importance of Manila hemp fibers" },
                            { value: "D", text: "A use of Manila hemp fibers" }
                        ],
                        correct: ["D"]
                    },
                    {
                        intro: "/data/2/audio/2.2.mp3",
                        type: "single",
                        question: "Why does the professor mention going away for the weekend?",
                        options: [
                            { value: "A", text: "To tell the class a joke" },
                            { value: "B", text: "To apologize for not completing some work" },
                            { value: "C", text: "To introduce the topic of the lecture" },
                            { value: "D", text: "To encourage students to ask about her trip" }
                        ],
                        correct: ["B"]
                    },
                    {
                        intro: "/data/2/audio/2.3.mp3",
                        type: "single",
                        question: "What does the professor imply about the name Manila hemp",
                        options: [
                            { value: "A", text: "It is a commercial brand name" },
                            { value: "B", text: "Part of the name is inappropriate" },
                            { value: "C", text: "The name has recently changed" },
                            { value: "D", text: "The name was first used in the 1940's" }
                        ],
                        correct: ["B"]
                    },
                    {
                        intro: "/data/2/audio/2.4.mp3",
                        type: "single",
                        question: "Why does the professor mention the Golden Gate Bridge?",
                        options: [
                            { value: "A", text: "To demonstrate a disadvantage of steel cables" },
                            { value: "B", text: " To give an example of the creative use of color" },
                            { value: "C", text: " To show that steel cables are able to resist salt water" },
                            { value: "D", text: " To give an example of a use of Manila hemp" }
                        ],
                        correct: ["A"]
                    },
                    {
                        intro: "/data/2/audio/2.5.mp3",
                        type: "single",
                        question: "According to the professor, what was the main reason that many ships used Manila hemp ropes instead of steel cables?",
                        options: [
                            { value: "A", text: " Manila hemp was cheaper" },
                            { value: "B", text: " Manila hemp was easier to produce" },
                            { value: "C", text: " Manila hemp is more resistant to salt water" },
                            { value: "D", text: " Manila hemp is lighter in weight" }
                        ],
                        correct: ["C"]
                    },
                    {
                        intro: "/data/2/audio/2.6.mp3",
                        type: "multiple",
                        question: `According to the lecture, what are two ways to increase the strength or rope made from Manila hemp fibers? Click on 2 answers`,
                        options: [
                            { value: "A", text: " Coat the fibers with zinc-based paint" },
                            { value: "B", text: " Combine the fibers into bundles" },
                            { value: "C", text: " Soak bundles of fibers in salt water" },
                            { value: "D", text: " Twist bundles of fibers" }
                        ],
                        correct: ["B", "D"]
                    }
                ]
            },
            {
                audio: "/data/2/audio/AudioLong3.mp3",
                questions: [
                    {
                        intro: "/data/2/audio/3.1.mp3",
                        type: "multiple",
                        question: `What are the students mainly discussing? Click on 2 answers`,
                        options: [
                            { value: "A", text: " Their courses for next semester" },
                            { value: "B", text: " Their plans for the weekend" },
                            { value: "C", text: " A poetry club" },
                            { value: "D", text: " A class assignment" }
                        ],
                        correct: ["A", "C"]
                    },
                    {
                        intro: "/data/2/audio/3.2.mp3",
                        type: "single",
                        question: "What does the man plan to do at the end of the month",
                        options: [
                            { value: "A", text: " Register for classes" },
                            { value: "B", text: " Finish writing his master's thesis" },
                            { value: "C", text: " Leave his job at the coffee shop" },
                            { value: "D", text: " Take a short vacation" }
                        ],
                        correct: ["C"]
                    },
                    {
                        intro: "/data/2/audio/3.3.mp3",
                        type: "single",
                        question: `Why does the man talk to the woman about the "Poetry Kitchen"?`,
                        options: [
                            { value: "A", text: " To find out how often the club meets" },
                            { value: "B", text: " To inform her that the date of the next meeting has changed" },
                            { value: "C", text: " To complain that not enough people are reading their poems" },
                            { value: "D", text: " To encourage her to attend" }
                        ],
                        correct: ["D"]
                    },
                    {
                        intro: "/data/2/audio/3.4.mp3",
                        type: "single",
                        question: "What is the woman's attitude toward participating in the poetry club?",
                        options: [
                            { value: "A", text: " She is looking forward to hearing her professor's poetry" },
                            { value: "B", text: " She is interested in attending but she has no time" },
                            { value: "C", text: " She thinks the poetry that is read there is not very good" },
                            { value: "D", text: " She used to participate but did not enjoy it" }
                        ],
                        correct: ["B"]
                    },
                    {
                        intro: "/data/2/audio/3.5.mp3",
                        type: "single",
                        question: "What will the students do in the summer",
                        options: [
                            { value: "A", text: " They will both take courses" },
                            { value: "B", text: " They will both have full-time jobs" },
                            { value: "C", text: " They will travel to England together" },
                            { value: "D", text: " They will teach a class together" }
                        ],
                        correct: ["A"]
                    }
                ]
            },
            {
                audio: "/data/2/audio/AudioLong4.mp3",
                questions: [
                    {
                        intro: "/data/2/audio/4.1.mp3",
                        type: "single",
                        question: "What is the main purpose of the lecture?",
                        options: [
                            { value: "A", text: " To illustrate the importance of extrinsic values" },
                            { value: "B", text: " To explain Aristotle's views about the importance of teaching" },
                            { value: "C", text: " To explain why people change what they value" },
                            { value: "D", text: " To discuss Aristotle's views about human happiness" }
                        ],
                        correct: ["D"]
                    },
                    {
                        intro: "/data/2/audio/4.2.mp3",
                        type: "matrix",
                        question: "The professor gives examples of things that have value for her. Indicate for each example what type of value it has for her. Click in the correct box. This question is worth 2 points.",
                        columns: ["Only extrinsic vlue", "Only intrinsic value", "Both extrinsic and intrinsic value"],
                        rows: [
                            { text: "Teaching", correct: "Only intrinsic value" },
                            { text: "Exercise", correct: "Only extrinsic value" },
                            { text: "Health", correct: "Both extrinsic and intrinsic value" },
                            { text: "Playing a musical instrument", correct: "Only intrinsic value" }
                        ]
                    },
                    {
                        intro: "/data/2/audio/4.3.mp3",
                        type: "single",
                        question: "Why is happiness central to Aristotle's theory?",
                        options: [
                            { value: "A", text: " Because it is so difficult for people to attain" },
                            { value: "B", text: " Because it is valued for its own sake by all people" },
                            { value: "C", text: " Because it is a means to a productive life" },
                            { value: "D", text: " Because most people agree about what happiness is" }
                        ],
                        correct: ["B"]
                    },
                    {
                        intro: "/data/2/audio/4.4.mp3",
                        type: "single",
                        question: "According to the professor, why does Aristotle think that fame cannot provide true happiness?",
                        options: [
                            { value: "A", text: " Fame cannot be obtained without help from other people" },
                            { value: "B", text: " Fame cannot be obtained by all people" },
                            { value: "C", text: " Fame does not last forever" },
                            { value: "D", text: " People cannot share their fame with other people" }
                        ],
                        correct: ["A"]
                    },
                    {
                        intro: ["/data/2/audio/4.5b.mp3", "/data/2/audio/4.5.mp3", "/data/2/audio/4.5a.mp3"],
                        type: "single",
                        question: "What does the professor mean when she says this",
                        options: [
                            { value: "A", text: " Teaching is not a highly valued profession in society" },
                            { value: "B", text: " She may change professions in order to earn more money" },
                            { value: "C", text: " The reason she is a teacher has little to do with her salary" },
                            { value: "D", text: " More people would become teachers if the salary were higher" }
                        ],
                        correct: ["C"]
                    }
                ]
            },
            {
                audio: "/data/2/audio/AudioLong5.mp3",
                questions: [
                    {
                        intro: "/data/2/audio/5.1.mp3",
                        type: "single",
                        question: "What is Bode's law?",
                        options: [
                            { value: "A", text: " A law of gravitation" },
                            { value: "B", text: " An estimate of the distance between Mars and Jupiter" },
                            { value: "C", text: " A prediction of how many asteroids there are" },
                            { value: "D", text: " A pattern in the spacing of the planets" }
                        ],
                        correct: ["D"]
                    },
                    {
                        intro: "/data/2/audio/5.2.mp3",
                        type: "single",
                        question: "Why does the professor explain Bode's Law to the class?",
                        options: [
                            { value: "A", text: " To describe the size of the asteroids" },
                            { value: "B", text: " To explain who the asteroids belt was discovered" },
                            { value: "C", text: " To explain how gravitational forces influence the planets" },
                            { value: "D", text: " To describe the impact of telescopes on astronomy" }
                        ],
                        correct: ["B"]
                    },
                    {
                        intro: "/data/2/audio/5.3.mp3",
                        type: "single",
                        question: "How does the professor introduce Bode's Law?",
                        options: [
                            { value: "A", text: " By demonstrating how it is derived mathematically" },
                            { value: "B", text: " By describing the discovery of Uranus" },
                            { value: "C", text: " By drawing attention to the inaccuracy of a certain pattern" },
                            { value: "D", text: " By telling the names of several of the asteroids" }
                        ],
                        correct: ["A"]
                    },
                    {
                        intro: "/data/2/audio/5.4.mp3",
                        type: "multiple",
                        question: `According to the professor, what two factors contributed to the discovery of the asteroid Ceres? Click on 2 answers.`,
                        options: [
                            { value: "A", text: " Improved telescopes" },
                            { value: "B", text: " Advances in mathematics" },
                            { value: "C", text: " The discovery of a new star" },
                            { value: "D", text: " The position of Uranus in a pattern" }
                        ],
                        correct: ["A", "D"]
                    },
                    {
                        intro: "/data/2/audio/5.5.mp3",
                        type: "single",
                        question: "What does the professor imply about the asteroid belt?",
                        options: [
                            { value: "A", text: " It is farther from the Sun than Uranus" },
                            { value: "B", text: " Bode believed it was made up of small stars" },
                            { value: "C", text: " It is located where people expected to find a planet" },
                            { value: "D", text: "Ceres is the only one of the asteroids that can be seen without a telescope" }
                        ],
                        correct: ["C"]
                    },
                    {
                        intro: ["/data/2/audio/5.6b.mp3", "/data/2/audio/5.6.mp3", "/data/2/audio/5.6a.mp3"],
                        type: "single",
                        question: "Why does the professor say this",
                        options: [
                            { value: "A", text: " To introduce an alternative application of Bode's Law" },
                            { value: "B", text: " To give an example of what Bode's law cannot explain" },
                            { value: "C", text: " To describe the limitations of gravitational theory" },
                            { value: "D", text: " To contrast Bode's Law with a real scientific law" }
                        ],
                        correct: ["D"]
                    }
                ]
            }
        ];