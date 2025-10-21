window.listeningData = [
    {
        audio: "/data/3/audio/AudioLong1.mp3",
        questions: [
            {
                intro: "/data/3/audio/1.1.mp3",
                type: "multiple",
                question: `Why does the man need the woman’s assistance?Click on 2 answers.`,
                options: [
                    { value: "A", text: "He does not know the publication date of some reviews he needs." },
                    { value: "B", text: "He does not know the location of the library’s videos collection of plays." },
                    { value: "C", text: " He does not know how to find out where the play is currently being performed." },
                    { value: "D", text: " He does not know how to determine which newspaper he should look at." }
                ],
                correct: ["A", "D"]
            },
            {
                intro: "/data/3/audio/1.3.mp3",
                type: "single",
                question: "What does the woman imply about critical reaction to the play Happy Strangers?",
                options: [
                    { value: "A", text: " Negative critical reaction led to its content being revised after it premiered." },
                    { value: "B", text: " The play has always been quite popular among university students." },
                    { value: "C", text: " Reactions to the play are more positive nowadays than they were in the past." },
                    { value: "D", text: " The play is rarely performed nowadays because critics have never liked it." }
                ],
                correct: ["C"]
            },
            {
                intro: "/data/3/audio/1.3.mp3",
                type: "multiple",
                question: `What does the woman say about her experience seeing a performance of Happy Strangers when she was younger? Click on 2 answers.`,
                options: [
                    { value: "A", text: " It was the first play she had seen performed professionally." },
                    { value: "B", text: " She saw it against the wishes of her parents." },
                    { value: "C", text: " She was surprised at how traditional the performance was." },
                    { value: "D", text: " She had a variety of emotional reactions to the play." }
                ],
                correct: ["A", "D"]
            },
            {
                intro: "/data/3/audio/1.4.mp3",
                type: "single",
                question: "What is the man’s attitude toward his current assignment?",
                options: [
                    { value: "A", text: " He is not confident that he will find the materials he needs." },
                    { value: "B", text: " He feels that performing in a play is less boring than reading one." },
                    { value: "C", text: " He thinks his review of the play will be more objective than the contemporary reviews were." },
                    { value: "D", text: " He is optimistic that he will learn to appreciate the play he is researching." }
                ],
                correct: ["D"]
            },
            {
                intro: ["/data/3/audio/1.5b.mp3", "/data/3/audio/1.5.mp3", "/data/3/audio/1.5a.mp3"],
                type: "single",
                question: "Why does the woman say this?",
                options: [
                    { value: "A", text: " To ask the man to clarify his request." },
                    { value: "B", text: " To state the man’s request more precisely." },
                    { value: "C", text: " To make sure that she heard the man correctly." },
                    { value: "D", text: " To correct a mistake the man has made." }
                ],
                correct: ["B"]
            }
        ]
    },
    {
        audio: "/data/3/audio/AudioLong2.mp3",
        questions: [
            {
                intro: "/data/3/audio/2.1.mp3",
                type: "single",
                question: "What is the lecture mainly about?",
                options: [
                    { value: "A", text: " Method s of observing unusual animal behavior." },
                    { value: "B", text: " A theory about ways birds attract mates." },
                    { value: "C", text: " Ways animals behave when they have conflicting drives." },
                    { value: "D", text: " Criteria for classifying animal behaviors." }
                ],
                correct: ["C"]
            },
            {
                intro: "/data/3/audio/4.2.mp3",
                type: "matrix",
                question: `Indicate whether each of the activities below describes a displacement activity. Click in the correct box for each phrase.<br><h3>Click in the correct box for each phrase</h3>`,
                columns: ["Yes", "No"],
                rows: [
                    { text: "An animal attacks tche ground instead of its enemy.", correct: "No" },
                    { text: "An animal falls asleep in the middle of a mating ritual.", correct: "Yes" },
                    { text: "An animal eats some food when confronted by it enemy.", correct: "Yes" },
                    { text: "An animal takes a drink of water after grooming itself.", correct: "No" }
                ]
            },
            {
                intro: "/data/3/audio/2.3.mp3",
                type: "single",
                question: "What does the professor say about disinhibition?",
                options: [
                    { value: "A", text: " It can prevent displacement activities from occurring." },
                    { value: "B", text: " It can cause animals to act on more than one drive at a time." },
                    { value: "C", text: " It is not useful for explaining many types of displacement activities." },
                    { value: "D", text: " It is responsible for the appearance of seemingly irrelevant behavior." }
                ],
                correct: ["D"]
            },
            {
                intro: "/data/3/audio/2.4.mp3",
                type: "single",
                question: "According to the lecture, what is one possible reason that displacement activities are often grooming behaviors?",
                options: [
                    { value: "A", text: " Grooming may cause an enemy or predator to be confused." },
                    { value: "B", text: " Grooming is a convenient and accessible behavior." },
                    { value: "C", text: " Grooming often occurs before eating and drinking." },
                    { value: "D", text: " Grooming is a common social activity." }
                ],
                correct: ["B"]
            },
            {
                intro: "/data/3/audio/2.5.mp3",
                type: "single",
                question: "Why does the professor mention the wood thrush?",
                options: [
                    { value: "A", text: " To contrast its displacement activities with those of other animals species." },
                    { value: "B", text: " To explain that some animals display displacement activities other than grooming" },
                    { value: "C", text: " To point out how displacement activities are influenced by the environment." },
                    { value: "D", text: " To give an example of an animal that does not display displacement activities." }
                ],
                correct: ["C"]
            },
            {
                intro: ["/data/3/audio/2.6b.mp3", "/data/3/audio/2.6.mp3", "/data/3/audio/2.6a.mp3"],
                type: "single",
                question: "What does the professor mean when she says this?",
                options: [
                    { value: "A", text: " She is impressed by how much the student knows about redirecting." },
                    { value: "B", text: " She thinks it is time to move on to the next part of this lectures." },
                    { value: "C", text: " The student’s answer is not an example of a displacement activity." },
                    { value: "D", text: "The student should suggest a different animal behavior to discuss next." }
                ],
                correct: ["C"]
            }
        ]
    },
    {
        audio: "/data/3/audio/AudioLong3.mp3",
        questions: [
            {
                intro: "/data/3/audio/3.1.mp3",
                type: "single",
                question: "What is the conversation mainly about?",
                options: [
                    { value: "A", text: " Methods for finding appropriate sources for a project." },
                    { value: "B", text: " Reasons the woman is having difficulties with a project." },
                    { value: "C", text: " Criteria the professor uses to evaluate group projects." },
                    { value: "D", text: " Ways to develop the skills needed to work in groups." }
                ],
                correct: ["B"]
            },
            {
                intro: "/data/3/audio/3.2.mp3",
                type: "single",
                question: "Why does the professor mention the ‘free-rider’ problem?",
                options: [
                    { value: "A", text: " To review a concept he explained in class." },
                    { value: "B", text: " To give the student a plan to solve her problem." },
                    { value: "C", text: " To clarify the problem the student is facing." },
                    { value: "D", text: " To explain a benefit of working in groups." }
                ],
                correct: ["C"]
            },
            {
                intro: "/data/3/audio/3.3.mp3",
                type: "single",
                question: "What is the professor’s opinion of the other students in the woman’s group?",
                options: [
                    { value: "A", text: " They try to take credit for work they did not do." },
                    { value: "B", text: " They did not perform well in previous courses with him." },
                    { value: "C", text: " They are more motivated when they are working in a group." },
                    { value: "D", text: " They do good work when they are interested in the subject" }
                ],
                correct: ["D"]
            },
            {
                intro: "/data/3/audio/3.4.mp3",
                type: "single",
                question: "Why did the woman choose property rights as a topic?",
                options: [
                    { value: "A", text: " The professor recommended the topic." },
                    { value: "B", text: " She already had a lot of reference materials on the subject." },
                    { value: "C", text: " She wanted to learn something new." },
                    { value: "D", text: " It was easy to research at the school library." }
                ],
                correct: ["C"]
            },
            {
                intro: "/data/3/audio/3.5.mp3",
                type: "multiple",
                question: `What mistakes does the professor imply the woman has made while working on a project? Click on 2 answers<br>`,
                options: [
                    { value: "A", text: " Finding sources for her group partners." },
                    { value: "B", text: " Writing the weekly progress reports for her group." },
                    { value: "C", text: " Forgetting to pay attention to the project’s deadlines." },
                    { value: "D", text: " Failing to involve the group members in the selection of a topic." }
                ],
                correct: ["A", "D"]
            }
        ]
    },
    {
        audio: "/data/3/audio/AudioLong4.mp3",
        questions: [
            {
                intro: "/data/3/audio/4.1.mp3",
                type: "single",
                question: "What does the professor mainly discuss?",
                options: [
                    { value: "A", text: " His plans for research involving moving rocks." },
                    { value: "B", text: " A difference between two geological forces that cause rocks to move" },
                    { value: "C", text: " Theories about why desert rocks move." },
                    { value: "D", text: " Reasons why geologists should study moving rocks." }
                ],
                correct: ["C"]
            },
            {
                intro: "/data/3/audio/4.3.mp3",
                type: "single",
                question: "According to the professor, what have the researchers agreed on?",
                options: [
                    { value: "A", text: " The rocks cannot move after ice storms." },
                    { value: "B", text: " The rocks do not move at night." },
                    { value: "C", text: " The rocks never move in circles." },
                    { value: "D", text: " The rocks are not moved by people." }
                ],
                correct: ["D"]
            },
            {
                intro: "/data/3/audio/4.3.mp3",
                type: "single",
                question: "The professor mentions experiments on the wind speed necessary to move rocks. What is the professor’s attitude toward the experiments?",
                options: [
                    { value: "A", text: " Their results were decisive." },
                    { value: "B", text: " They were not carried out carefully." },
                    { value: "C", text: " They were not continued long enough to reach a conclusion." },
                    { value: "D", text: " The government should not have allowed the experiments." }
                ],
                correct: ["A"]
            },
            {
                intro: "/data/3/audio/4.4.mp3",
                type: "single",
                question: "What important point does the professor make about the area where the rocks are found?",
                options: [
                    { value: "A", text: " It has been the site of Earth’s highest wind speeds." },
                    { value: "B", text: " It is subject to laws that restrict experimentation." },
                    { value: "C", text: " It is accessible to heavy machinery." },
                    { value: "D", text: " It is not subject to significant changes in temperature." }
                ],
                correct: ["B"]
            },
            {
                intro: "/data/3/audio/4.5.mp3",
                type: "single",
                question: "What is the professor’s purpose in telling the students about moving rocks?",
                options: [
                    { value: "A", text: " To teach a lesson about the structure of solid matter." },
                    { value: "B", text: " To share a recent advance in geology." },
                    { value: "C", text: " To give an example of how ice can move rocks." },
                    { value: "D", text: " To show how geologists need to combine information from several fields." }
                ],
                correct: ["D"]
            },
            {
                intro: ["/data/3/audio/4.6b.mp3", "/data/3/audio/4.6.mp3", "/data/3/audio/4.6a.mp3"],
                type: "single",
                question: "What does the professor imply when he says this:",
                options: [
                    { value: "A", text: " The movement pattern of the rocks was misreported by researchers." },
                    { value: "B", text: " The rocks are probably being moved by people." },
                    { value: "C", text: " The movement pattern of the rocks does not support the wind theory." },
                    { value: "D", text: " There must be differences in the rocks’ composition." }
                ],
                correct: ["C"]
            }
        ]
    },
    {
        audio: "/data/3/audio/AudioLong5.mp3",
        questions: [
            {
                intro: "/data/3/audio/5.1.mp3",
                type: "single",
                question: "What is the lecture mainly about?",
                options: [
                    { value: "A", text: " Reasons the United States government should not support the arts." },
                    { value: "B", text: " The history of government support for the arts in the United States." },
                    { value: "C", text: " Strengths and weaknesses of different government-sponsored arts programs." },
                    { value: "D", text: " Different ways in which governments can help support artists." }
                ],
                correct: ["B"]
            },
            {
                intro: "/data/3/audio/5.2.mp3",
                type: "multiple",
                question: `According to the talk, in what two ways was the Federal Art Project successful?Click on 2 answers.<br>`,
                options: [
                    { value: "A", text: " It established standards for art schools." },
                    { value: "B", text: " It provided jobs for many artists." },
                    { value: "C", text: " It produced many excellent artists." },
                    { value: "D", text: " It gave many people greater access to the arts." }
                ],
                correct: ["B", "D"]
            },
            {
                intro: "/data/3/audio/4.2.mp3",
                type: "matrix",
                question: "w",
                columns: ["1", "2", "3", "4"],
                rows: [
                    { text: "Arts councils were established in all 50 states of the country.", correct: "3" },
                    { text: "The federal budget supporting the arts was reduced by half.", correct: "4" },
                    { text: "The Federal Art Project helped reduce unemployment.", correct: "1" },
                    { text: ".The National Endowment for the Arts was established.", correct: "2" }
                ]
            },
            {
                intro: "/data/3/audio/5.4.mp3",
                type: "single",
                question: "Why does the professor mention the Kennedy Center and Lincoln Center?",
                options: [
                    { value: "A", text: " To give example s of institutions that benefit from corporate support." },
                    { value: "B", text: " To illustrate why some artists oppose the building of cultural centers." },
                    { value: "C", text: " To show how two centers were named after presidents who supported the arts." },
                    { value: "D", text: " To name two art centers built by the government during the Depression." }
                ],
                correct: ["A"]
            },
            {
                intro: "/data/3/audio/5.5.mp3",
                type: "single",
                question: "What does the professor say about artists’ opinions of government support for the arts?",
                options: [
                    { value: "A", text: " Most artists believe that the government should provide more funding for the art." },
                    { value: "B", text: " Most artists approve of the ways in which the government supports the arts." },
                    { value: "C", text: " Even artists do not agree on whether the government should support the arts." },
                    { value: "D", text: " Even artists have a low opinion of government support for the arts." }
                ],
                correct: ["C"]
            },
            {
                intro: ["/data/3/audio/5.6b.mp3", "/data/3/audio/5.6.mp3", "/data/3/audio/5.6a.mp3"],
                type: "single",
                question: "What does the professor imply when she says this:",
                options: [
                    { value: "A", text: " Others students should comment on the man’s remark." },
                    { value: "B", text: " Most people would agree with the man’s opinion." },
                    { value: "C", text: " Artwork funded by the government is usually of excellent quality." },
                    { value: "D", text: " The government project was not a waste of money." }
                ],
                correct: ["D"]
            }
        ]
    }
];
