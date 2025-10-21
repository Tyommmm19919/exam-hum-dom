window.readingData = {
    passages: [
        {
            title: "Lake Water",
            text: [
                `
&nbsp;<span class="arr" id="arr1">&#10132;</span>Where does the water in a lake come from, and how does water leave it? Water enters a lake from inflowing rivers, from underwater seeps and springs, from overland flow off the surrounding land, and from rain falling directly on the lake surface. Water leaves a lake via outflowing rivers, by soaking into the bed of the lake, and by evaporation. <span id="much">So much</span> is obvious.
<br><br>
&nbsp;<span class="arr" id="arr2">&#10132;</span>The questions become more complicated when actual volumes of water are considered: how much water enters and leaves by each route? Discovering the inputs and outputs of rivers is a matter of measuring the discharges of every inflowing and outflowing stream and river. Then exchanges with the atmosphere are calculated by finding the difference between the <span id="gains">gains</span> from rain, as measured (rather roughly) by rain gauges, and the losses by evaporation, measured with models that correct for the other sources of water loss. For the majority of lakes, certainly those surrounded by forests, input from overland flow is too small to have a noticeable effect. Changes in lake level not explained by river flows plus exchanges with the atmosphere must be due to the net difference between what seeps into the lake from the groundwater and what leaks into the groundwater. <span id="note">Note the word "net"</span>: measuring the actual amounts of groundwater seepage into the lake and out of the lake is a much more complicated matter than merely inferring their difference.
<br><br>
&nbsp;<span class="arr" id="arr3">&#10132;</span>Once all this information has been gathered, it becomes possible to judge whether a lake’s flow is mainly due to its surface inputs and outputs or to its underground inputs and outputs.[BOX] If the former are greater, the lake is a surface-water-dominated lake; if the latter, it is a seepage-dominated lake.[BOX] Occasionally, common sense tells you which of these two possibilities applies.[BOX] For example, a pond in hilly country that maintains a steady water level all through a dry summer in spite of having no streams flowing into it must obviously be seepage dominated. Conversely, a pond with a stream flowing in one end and out the other, which dries up when the stream dries up, is clearly surface water dominated.[BOX]
<br><br>
&nbsp;<span class="arr" id="arr4">&#10132;</span>By whatever means, a lake is constantly gaining water and losing water: its water does not just sit there, or, anyway, not for long. This raises the matter of a lake’s residence time. The residence time is the average length of time that any particular molecule of water remains in the lake, and it is calculated by dividing the volume of water in the lake by the rate at which water leaves the lake. The residence time is an average; the time spent in the lake by a given molecule (if we could follow its fate) would depend on the route it took: it might flow through as part of the fastest, most direct current, or it might circle in a backwater for an indefinitely long time.
<br><br>
&nbsp;<span class="arr" id="arr5">&#10132;</span>Residence times vary enormously. They range from a few days for small lakes up to several hundred years for large ones; Lake Tahoe, in California, has a residence time of 700 years. The residence times for the Great Lakes of North America, namely, Lakes Superior, Michigan, Huron, Erie, and Ontario, are, respectively, 190,100,22,2.5, and 6 years. Lake Erie’s is the lowest: although its area is larger than Lake Ontario’ s, its volume is less than one-third as great because it is so shallow-less than 20 meters on average.
<br><br>
&nbsp;<span class="arr" id="arr6">&#10132;</span>A given lake’s residence time is by no means a fixed quantity. It depends on the rate at which water enters the lake, and that depends on the rainfall and the evaporation rate. Climatic change (the result of global warming?) is dramatically affecting the residence times of some lakes in northwestern Ontario, Canada. In the period 1970 to 1986, rainfall in the area decreased from 1,000 millimeters to 650 millimeters per annum, while above-average temperatures speeded up the evapotranspiration rate (the rate at which water is lost to the atmosphere through evaporation and the processes of plant life). The result has been that the residence time of one of the lakes increased from 5 to 18 years during the study period. The slowing down of water renewal leads to a chain of further consequences; it causes dissolved chemicals to become increasingly concentrated, and this, in turn, has a marked effect on all living things in the lake.                
                `
            ],
            questions: [
                { type: "multiple-choice", question: "The phrase 'So much' in the passage refers to", options: ["the negative effects of overland flow, rain, and evaporation on river water levels", "water that a lake loses to outflowing rivers, to the lake bed, and to evaporation", "the importance of rivers to the maintenance of lake water levels", "the information given about ways that water can enter or exit a lake"], correct: 3 },
                { type: "multiple-choice", question: "The word 'gains' in the passage is closest in meaning to", options: ["results", "increases", "resources", "savings"], correct: 1 },
                { type: "multiple-choice", question: "Which of the following can be inferred from paragraph 2 about the movement of water into a lake?", options: ["Heavy rain accounts for most of the water that enters into lakes.", "Rainfall replaces approximately the amount of water lost through evaporation.", "Overland flow into lakes is reduced by the presence of forests.", "Seepage has a smaller effect on water level than any other input."], correct: 2 },
                { type: "multiple-choice", question: "Why does the author use the phrase Note the word 'net' in the passage?", options: ["To emphasize the impact of seepage on water levels", "To point out that seepage is calculated differently from river flows and atmospheric exchanges", "To compare the different methods of calculating seepage", "To emphasize the difficulty of obtaining specific values for seepage inputs and outputs"], correct: 3 },
                { type: "multiple-choice", question: "According to paragraph 3, which of the following best describes a seepage-dominated lake?", options: ["A lake that is fed by streams but still has fluctuating water levels", "A lake with a constant water level that has no streams or rivers as inputs", "A lake with a stream flowing into it and a stream flowing out of it", "A lake that has surface and underground inputs but loses water during dry seasons"], correct: 1 },
                { type: "multiple-choice", question: "It can be inferred from paragraph 4 that the length of time a given molecule of water remains in a lake", options: ["depends entirely upon the average speed of a lake' s currents", "can be measured by the volume of the lake alone", "can be greater or lesser than the residence time", "is similar to the length of time all other molecules remain in that lake"], correct: 2 },
                { type: "multiple-choice", question: "According to paragraph 5, Lake Erie's residence time is lower than Lake Ontario's for which of the following reasons?", options: ["Lake Erie has a larger area than Lake Ontario.", "Lake Ontario is shallower than Lake Erie.", "Lake Ontario has a greater volume than Lake Erie.", "Lake Erie receives less rainfall than Lake Ontario."], correct: 2 },
                { type: "multiple-choice", question: "According to paragraph 6, which of the following explains the increase in residence time of some lakes of northwestern Ontario?", options: ["The amount of water flowing into the lakes has increased.", "The rate of evaporation has decreased more sharply than the amount of rainfall.", "The renewal of the lakes' water has slowed due to changes in climate.", "Plants have required less water from the lakes"], correct: 2 },
                {
                    type: "insert-sentence",
                    sentence: `Of course, a lake may be neither surface-water-nor seepage-dominated if, for example, its inputs are predominantly surface and its outputs are predominantly seepage.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 3
                },
                {
                    type: "summary",
                    prompt: "prompt",
                    choices: [
                        { text: "By measuring the water quantities at each of a lake's inputs and outputs, it can be determined whether water enters the lake mainly from surface or groundwater sources.", isCorrect: true },
                        { text: "Changes in lake level and volume are caused principally by the amount of evaporation of water into the atmosphere.", isCorrect: false },
                        { text: "It is sometimes possible to decide whether a lake is surface water dominated or seepage dominated by simple observation at different seasons.", isCorrect: true },
                        { text: "The average period of time that molecules of water spend in a lake—the residence time—varies from lake to lake and overtime within a particular lake.", isCorrect: true },
                        { text: "The residence times of surface-water-dominated lakes are usually longer than those of seepage-dominated lakes", isCorrect: false },
                        { text: "The residence time of a lake frequently depends on the kinds of organisms to be found in the lake.", isCorrect: false }
                    ],
                    correct: [0, 2, 3]
                }
            ]
        },
        {
            title: "Breathing During Sleep",
            text: [
                `
&nbsp;<span class="arr" id="arr12">&#10132;</span>Of all the physiological differences in human sleep compared with wakefulness that have been discovered in the last decade, changes in respiratory control are most dramatic. Not only are there differences in the level of the functioning of respiratory systems, there are even changes in how they function. Movements of the rib cage for breathing are reduced during sleep, making the contractions of the diaphragm more important.[BOX] Yet because of the physics of lying down, the stomach applies weight against the diaphragm and makes it more difficult for the diaphragm to do its job.[BOX] However, there are many other changes that affect respiration when asleep.
<br><br>
&nbsp;<span class="arr" id="arr22">&#10132;</span>[BOX] During wakefulness, breathing is controlled by two interacting systems.[BOX] The first is an automatic, metabolic system whose control is centered in the brain stem. It subconsciously adjusts breathing rate and depth in order to regulate the levels of carbon dioxide (CO2) and oxygen (O2), and the acid-base ratio in the blood. The second system is the voluntary, behavioral system. Its control center is based in the forebrain, and it regulates breathing for use in speech, singing, sighing, and so on. It is capable of ignoring or overriding the automatic, metabolic system and produces an irregular pattern of breathing.
<br><br>
&nbsp;<span class="arr" id="arr32">&#10132;</span>During NREM (the phase of sleep in which there is no rapid eye movement) breathing becomes deeper and more regular, but there is also a decrease in the breathing rate, resulting in less air being exchanged overall. This occurs because during NREM sleep the automatic, metabolic system has exclusive control over breathing and the body uses less oxygen and produces less carbon dioxide. Also, during sleep the automatic metabolic system is less responsive to carbon dioxide levels and oxygen levels in the blood. Two things result from these changes in breathing control that occur during sleep. First, there may be a brief cessation or reduction of breathing when falling asleep as the sleeper waxes and wanes between sleep and wakefulness and their differing control mechanisms. Second, once sleep is fully obtained, there is an increase of carbon dioxide and a decrease of oxygen in the blood that persists during NREM.
<br><br>
&nbsp;<span class="arr" id="arr42">&#10132;</span>But that is not all that changes. During all phases of sleep, several changes in the air passages have been observed. It takes twice as much effort to breathe during sleep because of greater resistance to airflow in the airways and changes in the efficiency of the muscles used for breathing. Some of the muscles that help keep the upper airway open when breathing tend to become more relaxed during sleep, especially during REM (the phase of sleep in which there is rapid eye movement). Without this muscular action, <span id="inhaling">inhaling is like sucking air out of a balloon</span>—the narrow passages tend to collapse. Also there is a regular cycle of change in resistance between the two sides of the nose. If something blocks the "good" side, such as congestion from allergies or a cold, then resistance increases dramatically. Coupled with these factors is the loss of the complex interactions among the muscles that can change the route of airflow from nose to mouth.
<br><br>
&nbsp;<span class="arr" id="arr52">&#10132;</span>Other respiratory regulating mechanisms apparently cease functioning during sleep. For example, during wakefulness there is an immediate, automatic, adaptive increase in breathing effort when inhaling is made more difficult (such as breathing through a restrictive face mask). This reflexive adjustment is totally absent during NREM sleep. Only after several inadequate breaths under such conditions, resulting in the considerable elevation of carbon dioxide and reduction of oxygen in the blood, is breathing effort adjusted. Finally, the coughing reflex in reaction to irritants in the airway produces not a cough during sleep but a cessation of breathing. If the irritation is severe enough, a sleeping person will arouse, clear the airway, then <span id="resume">resume</span> breathing and likely return to sleep.
<br><br>
&nbsp;<span class="arr" id="arr62">&#10132;</span>Additional breathing changes occur during REM sleep that are even more dramatic than the changes that occur during NREM.<span id="sentence2"> The amount of air exchanged is even lower in REM than NREM because, although breathing is more rapid in REM,it is also more irregular, with brief episodes of shallow breathing or absence of breathing.</span> In addition, breathing during REM depends much more on the action of the diaphragm and much less on rib cage action.

                `
            ],
            questions: [
                { type: "multiple-choice", question: "According to paragraph 1, which of the following can be inferred about the diaphragm during sleep?", options: ["During sleep the diaphragm requires increased movement of the rib cage.", "The diaphragm helps with breathing as movements of the rib cage decrease during sleep.", "The diaphragm requires a great amount of pressure to function properly.", "The diaphragm contributes to the effective functioning of the rib cage."], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 3, which of the following may occur just before NREM sleep begins?", options: ["The automatic, metabolic system may increase its dependence on air exchanges.", "Breathing can stop for a short time as a person falls asleep.", "An increase in the oxygen level in the blood can occur as sleep becomes fully obtained.", "The level of carbon dioxide in the blood may drop suddenly."], correct: 1 },
                { type: "multiple-choice", question: "What is the author's purpose in stating that inhaling is like sucking air out of a balloon?", options: ["To refute the argument that additional effort is necessary for breathing during sleep", "To argue that REM sleep is more important than NREM sleep", "To illustrate the difficulty of breathing during sleep", "To illustrate how blockage of narrow passages can be prevented during sleep"], correct: 2 },
                { type: "multiple-choice", question: "All of the following are mentioned in paragraph 4 as being characteristic of breathing during sleep EXCEPT", options: ["relaxation of the muscles involved in the respiratory system", "changes in resistance between the two sides of the nose", "easier airflow in the passages of the upper airway", "absence of certain complex muscle interactions"], correct: 2 },
                { type: "multiple-choice", question: "According to paragraph 5, what happens during NREM sleep when inhaling is difficult?", options: ["There is an immediate, automatic, adaptive increase in breathing effort.", "The sleeping person takes several inadequate breaths before the breathing effort is adjusted.", "The coughing reflex causes the breathing effort to adjust.", "The airways become cleared as the blood removes irritants."], correct: 1 },
                { type: "multiple-choice", question: "It can be inferred from paragraph 5 that a very mild irritation during sleep will likely cause the sleeping person to", options: ["increase the breathing effort", "wake up and remove the source of irritation", "cough while still sleeping", "stop breathing temporarily while still sleeping"], correct: 3 },
                { type: "multiple-choice", question: "The word 'resume' in the passage is closest in meaning to", options: ["reduce", "stop", "Readjust", "restart"], correct: 3 },
                { type: "multiple-choice", question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.", options: ["Because breathing is more shallow and irregular in REM than in NREM, less air is exchanged in REM.", "Breathing in NREM is less effective than breathing in REM because of irregular episodes of rapid breathing during NREM.", "Because breathing is more rapid in NREM sleep than in REM sleep, breathing often becomes shallow.", "Although REM has brief episodes of shallow breathing or lack of breathing, breathing is more rapid than in NREM."], correct: 0 },
                {
                    type: "insert-sentence",
                    sentence: `To better understand breathing during sleep, it is, however, helpful to first understand how respiration works in general.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 2
                },
                {
                    type: "dual-bucket",
                    prompt:
                        "Directions: From the seven statements below, select the statements that correctly characterize breathing during wakefulness and those statements that correctly characterize breathing during sleep. Drag each answer choice you select into the appropriate box of the table. Two of the answer choices will NOT be used. This question is worth 3 points.",
                    choices: [
                        "The role of the rib cage increases and the role of the diaphragm decreases.",
                        "Carbon dioxide in blood rises and oxygen drops.",
                        "The coughing reflex is extremely complex.",
                        "A great deal of effort is used for breathing.",
                        "Upper airways are resistant to colds and allergies.",
                        "There is a drop in the volume of air that is exchanged.",
                        "Automatic and voluntary respiratory systems are both involved."
                    ],
                    buckets: [
                        { title: "wakefulness", selectCount: 2, correct: [0, 6] },
                        { title: "sleep", selectCount: 3, correct: [1, 3, 5] }
                    ]
                }   
            ]
        }
    ],
    specialBehavior:[
        {targetId: "arr2", questionIndex: 2, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr3", questionIndex: 4, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr4", questionIndex: 5, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr5", questionIndex: 6, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr6", questionIndex: 7, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr12", questionIndex: 10, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr32", questionIndex: 11, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr42", questionIndex: 13, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr52", questionIndex: 14, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr52", questionIndex: 15, styles: { display: "inline", fontWeight: "600", color: "red" }},


        {targetId: "much", questionIndex: 0, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "gains", questionIndex: 1, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "note", questionIndex: 3, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "inhaling", questionIndex: 12, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "resume", questionIndex: 16, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "sentence2", questionIndex: 17, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},


    ]
};


// &nbsp;<span class="arr" id="arr1">&#10132;</span>
