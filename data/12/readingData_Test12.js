window.readingData = {
    passages: [
        {
            title: "Types of Social Groups",
            text: [
                `
&nbsp;<span class="arr" id="arr1">&#10132;</span>Life places us in a <span id="complex">complex</span> web of relationships with other people. Our humanness arises out of these relationships in the course of social interaction. Moreover, our humanness must be sustained through social interaction—and fairly constantly so. When an association continues long enough for two people to become linked together by a relatively stable set of expectations, it is called a relationship.<br><br>
&nbsp;<span class="arr" id="arr2">&#10132;</span>People are bound within relationships by two types of bonds: expressive ties and instrumental ties. Expressive ties are social links formed when we emotionally invest ourselves in and commit ourselves to other people. Through association with people who are meaningful to us, we achieve a sense of security, love, acceptance, companionship, and personal worth. Instrumental ties are social links formed when we cooperate with other people to achieve some goal. Occasionally, this may mean working with instead of against competitors. More often, we simply cooperate with others to reach some end without <span id="endowing">endowing</span> the relationship with any larger significance.<br><br>
&nbsp;<span class="arr" id="arr3">&#10132;</span>Sociologists have built on the distinction between expressive and instrumental ties to distinguish between two types of groups: primary and secondary. A primary group involves two or more people who enjoy a direct, intimate, cohesive relationship with one another. Expressive ties predominate in primary groups; we view the people as ends in themselves and valuable in their own right. A secondary group entails two or more people who are involved in an impersonal relationship and have come together for a specific, practical purpose. Instrumental ties predominate in secondary groups; we perceive people as means to ends rather than as ends in their own right. Sometimes primary group relationships evolve out of secondary group relationships. This happens in many work settings. People on the job often develop close relationships with coworkers as they come to share gripes, jokes, gossip, and satisfactions.<br><br>
&nbsp;<span class="arr" id="arr4">&#10132;</span>A number of conditions enhance the likelihood that primary groups will arise. First, group size is important. We find it difficult to get to know people personally when they are milling about and dispersed in large groups. In small groups we have a better chance to initiate contact and establish rapport with them. Second, face-to-face contact allows us to <span id="size">size</span> up others. Seeing and talking with one another in close physical proximity makes possible a subtle exchange of ideas and feelings. And third, the probability that we will develop primary group bonds increases as we have frequent and continuous contact. Our ties with people often deepen as we interact with them across time and gradually evolve interlocking habits and interests.<br><br>
&nbsp;<span class="arr" id="arr5">&#10132;</span>Primary groups are fundamental to us and to society. First, primary groups are critical to the socialization process. Within them, infants and children are introduced to the ways of their society. Such groups are the breeding grounds in which we acquire the norms and values that equip us for social life.<span id="sentence1"> Sociologists view primary groups as bridges between individuals and the larger society because they transmit, mediate, and interpret a society's cultural patterns and provide the sense of oneness so critical for social solidarity.</span><br><br>
&nbsp;<span class="arr" id="arr6">&#10132;</span>Second, primary groups are fundamental because they provide the settings in which we meet most of our personal needs.[BOX] Within them, we experience companionship, love, security, and an overall sense of well-being.[BOX] Not surprisingly, sociologists find that the strength of a group's primary ties has implications for the group's functioning.[BOX] For example, the stronger the primary group ties of a sports team playing together, the better their record is.[BOX]<br><br>
&nbsp;<span class="arr" id="arr7">&#10132;</span>Third, primary groups are fundamental because they serve as powerful instruments for social control. Their members command and dispense many of the rewards that are so vital to us and that make our lives seem worthwhile. Should the use of rewards fail, members can frequently win by rejecting or threatening to ostracize those who <span id="deviate">deviate</span> from the primary group's norms. For instance, some social groups employ shunning (a person can remain in the community, but others are forbidden to interact with the person) as a device to bring into line individuals whose behavior goes beyond that allowed by the particular group. Even more important, primary groups define social reality for us by structuring our experiences. By providing us with definitions of situations, they elicit from our behavior that conforms to group-devised meanings. Primary groups, then, serve both as carriers of social norms and as enforcers of them.<br><br>
                `
            ],
            questions: [
                { type: "multiple-choice", question: "The word “complex” in the passage is closest in meaning to", options: ["delicate", "elaborate", "private", "common"], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 1, which of the following is true of a relationship?", options: ["It is a structure of associations with many people.", "It should be studied in the course of a social interaction.", "It places great demands on people.", "It develops gradually overtime."], correct: 3 },
                { type: "multiple-choice", question: "The word “endowing” in the passage is closest in meaning to", options: ["leaving", "exposing", "providing", "understanding"], correct: 2 },
                { type: "multiple-choice", question: "Which of the following can be inferred about instrumental ties from the author's mention of working with competitors in paragraph 2?", options: ["Instrumental ties can develop even in situations in which people would normally not cooperate.", "Instrumental ties require as much emotional investment as expressive ties.", "Instrumental ties involve security, love, and acceptance.", "Instrumental ties should be expected to be significant."], correct: 0 },
                { type: "multiple-choice", question: "The phrase “size up” in the passage is closest in meaning to", options: ["enlarge", "evaluate", "impress", "accept"], correct: 1 },
                { type: "multiple-choice", question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.", options: ["Sociologists think that cultural patterns establish connections between the individual and the larger society.", "Sociologists believe that individuals with a sense of oneness bridge the gap between society and primary groups.", "Sociologists think primary groups contribute to social solidarity because they help maintain a society's cultural patterns.", "Sociologists believe that the cultural patterns that provide social solidarity arise as bridges from primary groups."], correct: 2 },
                { type: "multiple-choice", question: "The word “deviate” in the passage is closest in meaning to", options: ["detract", "advance", "select", "depart"], correct: 3 },
                { type: "multiple-choice", question: "According to paragraph 7, why would a social group use shunning?", options: ["To enforce practice of the kinds of behavior acceptable to the group", "To discourage offending individuals from remaining in the group", "To commend and reward the behavior of the other members of the group", "To decide which behavioral norms should be passed on to the next generation"], correct: 0 },
                {
                    type: "insert-sentence",
                    sentence: `People who do not live alone, for example, tend to make healthier life choices and develop fewer pathologies than people who live by themselves.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 1
                },
                {
                    type: "dual-bucket",
                    prompt:
                        "Directions: Complete the table below by selecting three answer choices that are characteristics of primary groups and two answer choices that are characteristics of secondary groups. This question is worth 3 points.",
                    choices: [
                        "Developing socially acceptable behavior",
                        "Working together against competitors",
                        "Experiencing pressure from outside forces",
                        "Viewing people as a means to an end",
                        "Existing for practical purposes",
                        "Providing meaning for life situations",
                        "Involving close relationships"
                    ],
                    buckets: [
                        { title: "Primary Groups", selectCount: 3, correct: [0, 5, 6] },
                        { title: "Secondary Groups", selectCount: 2, correct: [3, 4] }
                    ]
                }
            ]
        },
        {
            title: "Methods of Studying Infant Perception",
            text: [
                `
&nbsp;<span class="arr" id="arr12">&#10132;</span>In the study of perceptual abilities of infants, a number of techniques are used to determine infants' responses to various stimuli. Because they cannot verbalize or fill out questionnaires, indirect techniques of naturalistic observation are used as the primary means of determining what infants can see, hear, feel, and so forth. Each of these methods compares an infant's state prior to the introduction of a stimulus with its state during or immediately following the stimulus. The difference between the two measures provides the researcher with an indication of the level and duration of the response to the stimulus. For example, if a <span id="uniformly">uniformly</span> moving pattern of some sort is passed across the visual field of a neonate (newborn), <span id="repetitive">repetitive following movements of the eye</span> occur. The occurrence of these eye movements provides evidence that the moving pattern is perceived at some level by the newborn. Similarly, changes in the infant's general level of motor activity —turning the head, blinking the eyes, crying, and so forth — have been used by researchers as visual indicators of the infant's perceptual abilities.
<br><br>
&nbsp;<span class="arr" id="arr22">&#10132;</span>Such techniques, however, have limitations. First, the observation may be unreliable in that two or more observers may not agree that the particular response occurred, or to what degree it occurred. Second, responses are difficult to quantify. Often the rapid and diffuse movements of the infant make it difficult to get an accurate record of the number of responses. The third, and most <span id="potent">potent</span>, limitation is that it is not possible to be certain that the infant's response was due to the stimulus presented or to a change from no stimulus to a stimulus. The infant may be responding to aspects of the stimulus different than those identified by the investigator.<span id="sentence2">Therefore, when observational assessment is used as a technique for studying infant perceptual abilities, care must be taken not to overgeneralize from the data or to rely on one or two studies as conclusive evidence of a particular perceptual ability of the infant.</span>
<br><br>
&nbsp;<span class="arr" id="arr32">&#10132;</span>Observational assessment techniques have become much more sophisticated, reducing the limitations just presented. Film analysis of the infant's responses, heart and respiration rate monitors, and nonnutritive sucking devices are used as effective tools in understanding infant perception.[BOX] Film analysis permits researchers to carefully study the infant's responses over and over and in slow motion.[BOX] Precise measurements can be made of the length and frequency of the infant's attention between two stimuli.[BOX] Heart and respiration monitors provide the investigator with the number of heartbeats or breaths taken when a new stimulus is presented.[BOX] Numerical increases are used as quantifiable indicators of heightened interest in the new stimulus. Increases in nonnutritive sucking were first used as an assessment measure by researchers in 1969. They devised an apparatus that connected a baby's pacifier to a counting device. As stimuli were presented, changes in the infant's sucking behavior were recorded. Increases in the number of sucks were used as an indicator of the infant's attention to or preference for a given visual display.
<br><br>
&nbsp;<span class="arr" id="arr42">&#10132;</span><span class="arr" id="arr421">&#10132;</span>Two additional techniques of studying infant perception have come into vogue. The first is the habituation-dishabituation technique, in which a single stimulus is presented repeatedly to the infant until there is a measurable decline (habituation) in whatever attending behavior is being observed. At that point a new stimulus is presented, and any recovery (dishabituation) in responsiveness is recorded. If the infant fails to dishabituate and continues to show habituation with the new stimulus, it is assumed that the baby is unable to perceive the new stimulus as different. The habituation-dishabituation paradigm has been used most extensively with studies of auditory and olfactory perception in infants. The second technique relies on evoked potentials, which are electrical brain responses that may be related to a particular stimulus because of where they originate. Changes in the electrical pattern of the brain indicate that the stimulus is getting through to the infant's central nervous system and eliciting some form of response.
<br><br>
&nbsp;<span class="arr" id="arr52">&#10132;</span>Each of the preceding techniques provides the researcher with evidence that the infant can detect or discriminate between stimuli. With these sophisticated observational assessment and electro-physiological measures, we know that the neonate of only a few days is far more perceptive than previously suspected. However, these measures are only "indirect" indicators of the infant's perceptual abilities.
`
            ],
            questions: [
                { type: "multiple-choice", question: "Paragraph 1 indicates that researchers use indirect methods primarily to observe the", options: ["range of motor activity in neonates", "frequency and duration of various stimuli", "change in an infant's state following the introduction of a stimulus", "range of an infant's visual field"], correct: 2 },
                { type: "multiple-choice", question: "The word “uniformly” in the passage is closest in meaning to", options: ["clearly", "quickly", "consistently", "occasionally"], correct: 2 },
                { type: "multiple-choice", question: "Why does the author mention repetitive following movements of the eye?", options: ["To identify a response that indicates a neonate's perception of a stimulus", "To explain why a neonate is capable of responding to stimuli only through repetitive movements", "To argue that motor activity in a neonate may be random and unrelated to stimuli", "To emphasize that responses to stimuli vary in infants according to age"], correct: 0 },
                { type: "multiple-choice", question: "The word “potent” in the passage is closest in meaning to", options: ["artificial", "powerful", "common", "similar"], correct: 1 },
                { type: "multiple-choice", question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.", options: ["Researchers using observational assessment techniques on infants must not overgeneralize and must base their conclusions on data from many studies.", "On the basis of the data from one or two studies, it seems that some infants develop a particular perceptual ability not observed in others.", "To use data from one or two studies on infant's perceptual abilities, it is necessary to use techniques that will provide conclusive evidence.", "When researchers fail to make generalizations from their studies, their observed data is often inconclusive."], correct: 0 },
                { type: "multiple-choice", question: "According to paragraph 4, which of the following leads to the conclusion that infants are able to differentiate between stimuli in a habituation-dishabituation study?", options: ["Dishabituation occurs with the introduction of a new stimulus.", "Electrical responses in the infant's brain decline with each new stimulus.", "Habituation is continued with the introduction of a new stimulus.", "The infant displays little change in electrical brain responses."], correct: 0 },
                { type: "multiple-choice", question: "In paragraph 4, what does the author suggest about the way an infant's brain perceives stimuli?", options: ["An infant's potential to respond to a stimulus may be related to the size of its brain.", "Changes in the electrical patterns of an infant's brain are difficult to detect.", "Different areas of an infant's brain respond to different types of stimuli.", "An infant is unable to perceive more than one stimulus at a time."], correct: 2 },
                { type: "multiple-choice", question: "Paragraph 5 indicates that researchers who used the techniques described in the passage discovered that", options: ["infants find it difficult to perceive some types of stimuli", "neonates of only a few days cannot yet discriminate between stimuli", "observational assessment is less useful for studying infant perception than researchers previously believed", "a neonate is able to perceive stimuli better than researchers once thought"], correct: 3 },
                {
                    type: "insert-sentence",
                    sentence: `The repetition allows researchers to observe the infant's behavior until they reach agreement about the presence and the degree of the infant's response.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 1
                },
                {
                    type: "summary",
                    prompt: "Directions: An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer that express the most important ideas in the passage. Some sentences do not belong in the summary because they express ideas that not presented in the passage or are minor ideas in the passage. This question is worth 2 points. Researchers use a number of techniques to determine how infants respond to changes in their environment.",
                    choices: [
                        { text: "Data from observational methods must be confirmed through multiple studies.", isCorrect: true },
                        { text: "New techniques for studying preception have improved the accuracy with which researchers observe and quantify infant responses", isCorrect: true },
                        { text: "Indirect observation is most accurate when researchers use it to test auditory and olfactory perception in neonates.", isCorrect: false },
                        { text: "Visual indicators such as turning the head, blinking the eyes, or crying remain the best evidence of an infant's perceptual abilities.", isCorrect: false },
                        { text: "Pacifiers are commonly used in studies to calm an infant who has been presented with excessive stimuli.", isCorrect: false },
                        { text: "Sophisticated techniques that have aided new discoveries about perception in the neonate continue to be indirect measures.", isCorrect: true }
                    ],
                    correct: [0, 1, 5]
                }
            ]
        }
    ], 
    specialBehavior:[
    {targetId: "arr1", questionIndex: 1, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr2", questionIndex: 3, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr7", questionIndex: 7, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr12",  questionIndex:10, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr42",  questionIndex:15, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr421",  questionIndex:16, styles: {display: "inline", fontWeight: "600", color: "red" }},
    {targetId: "arr52",  questionIndex:17, styles: {display: "inline", fontWeight: "600", color: "red" }},




    {targetId: "complex", questionIndex: 0, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "endowing", questionIndex: 2, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "size", questionIndex: 4, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "sentence1", questionIndex: 5, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "deviate", questionIndex: 6, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "uniformly",  questionIndex:11, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "repetitive",  questionIndex:12, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "potent",  questionIndex:13, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }},
    {targetId: "sentence2",  questionIndex:14, styles: {fontWeight: "600", backgroundColor: "rgb(144, 144, 144)" }}
    ]
};
