window.readingData = {
    passages: [
        {
            title: "Title",
            text: [
                `TEXT`
            ],
            questions: [
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 0 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 1 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "c"], correct: 2 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 3 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 0 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 1 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 2 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 3 },
                {
                    type: "insert-sentence",
                    sentence: `sentenceq`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 3
                },
                {
                    type: "summary",
                    prompt: "prompt",
                    choices: [
                        { text: "a", isCorrect: true },
                        { text: "b", isCorrect: true },
                        { text: "c", isCorrect: true },
                        { text: "d", isCorrect: false },
                        { text: "e", isCorrect: false },
                        { text: "f", isCorrect: false }
                    ],
                    correct: [0, 1, 2]
                }
            ]
        },
        {
            title: "title",
            text: [
                `TEXT`
            ],
            questions: [
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 0 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 1 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "c"], correct: 2 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 3 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 0 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 1 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 2 },
                { type: "multiple-choice", question: `q`, options: ["a", "b", "c", "d"], correct: 3 },
                {
                    type: "insert-sentence",
                    sentence: `sentenceq`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 3
                },
                {
                    type: "summary",
                    prompt: "prompt",
                    choices: [
                        { text: "a", isCorrect: true },
                        { text: "b", isCorrect: true },
                        { text: "c", isCorrect: true },
                        { text: "d", isCorrect: false },
                        { text: "e", isCorrect: false },
                        { text: "f", isCorrect: false }
                    ],
                    correct: [0, 1, 2]
                }
            ]
        }
    ],
    specialBehavior: [
        { targetId: "arr1", questionIndex: 0, styles: { display: "inline", fontWeight: "600", color: "red" } },


        { targetId: "word", questionIndex: 1, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" } },
    ]
};


// &nbsp;<span class="arr" id="arr1">&#10132;</span>


// {
//     type: "dual-bucket",
//         prompt: "dir",
//         choices: [
//             "opt1",
//             "opt2",
//             "opt3",
//             "opt4",
//             "opt5",
//             "opt6",
//             "opt7"
//         ],
//             buckets: [
//                 { title: "Name1", selectCount: 2, correct: [1, 5] },
//                 { title: "Name2", selectCount: 3, correct: [0, 3, 6] }
//             ]
// }



// file-i anuny readingData_TestX x-y testi hamary
//Title um grum enq titely amen meki
//Texterum textery
//multiple choice-i q-um harcny amen mekum chisht hertakanutyamb optionneri optionnery
//multiple-answer en tesakna vor 2 hat chisht patasxan ka(sax multiple choice-i nmana, menak type-i anunna poxvum mekel 2 patasxana, orinak [0, 3] es dzevov)
//insert sentence-um menak et sentence-nenq dnum sentenceq-i texy(9 u 19 harcernen vapshe ylnu)
//summary-um propmpt um verevy et directionnernenq dnum, texterum amen a b c...(karas et saitum amen optiony yntres toxuma copy anes) mekel hertakanutyuny dzaxic acha gnum verevic nerqev che( aysingn A B taky C D...)


// textum amen pragraphic arach &nbsp; u verchum <br><br>(2 hat anpayman)
//ete paragraphy inchvor harcum nshvuma uremn avelcnum es <span class="arr" id="arrX">&#10132;</span> x-y paragraphi hamary, ete erku kam avel angama nshvum amen harci hamary koxy avelacnum es 
//nshvac barery nuyn dzev spani mech es avelacnum id-n bary zut, kam ete naxadustyuna sentence1 ev ayln
//insert sentence hamar et qarakusu texery texti mech amen qarakusy texy grum es [BOX]

//amen testi hamar readingi js-um avelacnum es et nshvox pahery, orinakner readingum kan, aysinqn ete 2 rd harcnum erkrord paragraphi strelken nshvuma      highlightOnQuestion("arr2", 1, { display: "inline", fontWeight: "600", color: "red" });
// 0-n arachi harcna mihat heta yngnum amen meky

// patasxannery anckacneluc multipleChoice-i u inserSentence-i hamar zut hamarnes grum(eli mihat het yngaca 0-n arachinna)
//summarii hamar hamarnery meke true/false-y chisht texer es dnum


//u htmlum avelacnum es option ira valueov
