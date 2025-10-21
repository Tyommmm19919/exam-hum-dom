window.readingData = {
    passages: [
        {
            title: "Planets in Our Solar System",
            text: [
                `
&nbsp;<span class="arr" id="arr1">&#10132;</span>The Sun is the hub of a huge rotating system consisting of nine planets, their satellites, and numerous small bodies, including asteroids, comets, and meteoroids. An estimated 99.85 percent of the mass of our solar system is contained within the Sun, while the planets collectively make up most of the remaining 0.15 percent. The planets, in order of their distance from the Sun, are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto. Under the control of the Sun's gravitational force, each planet maintains an elliptical orbit and all of them travel in the same direction.
<br><br>
&nbsp;<span class="arr" id="arr2">&#10132;</span>The planets in our solar system fall into two groups: the terrestrial (Earth-like) planets (Mercury, Venus, Earth, and Mars) and the Jovian (Jupiter-like) planets (Jupiter, Saturn, Uranus, and Neptune). Pluto is not included in either category, because its great distance from Earth and its small size make this planet's true nature a mystery.
<br><br>
&nbsp;<span class="arr" id="arr3">&#10132;</span>The most obvious difference between the terrestrial and the Jovian planets is their size. The largest terrestrial planet, Earth has a diameter only one quarter as great as the diameter of the smallest Jovian planet, Neptune, and its mass is only one seventeenth as great. Hence, the Jovian planets are often called giants. Also, because of their relative locations, the four Jovian planets are known as the outer planets, while the terrestrial planets are known as the inner planets. There appears to be a correlation between the positions of these planets and their sizes.
<br><br>
&nbsp;<span class="arr" id="arr4">&#10132;</span>Other dimensions along which the two groups differ markedly are density and composition. The densities of the terrestrial planets average about 5 times the density of water, whereas the Jovian planets have densities that average only 1.5 times the density of water. One of the outer planets, Saturn, has a density of only 0.7 that of water, which means that Saturn would float in water. Variations in the composition of the planets are largely responsible for the density differences.[BOX] The substances that make up both groups of planets are divided into three groups—gases, rocks, and ices—based on their melting points.[BOX] The terrestrial planets are mostly rocks: dense rocky and metallic material, with minor amounts of gases.[BOX] The Jovian planets, on the other hand, contain a large percentage of the gases hydrogen and helium, with varying amounts of ices: mostly water, ammonia, and methane ices.[BOX]
<br><br>
&nbsp;<span class="arr" id="arr5">&#10132;</span>The Jovian planets have very thick atmospheres consisting of varying amounts of hydrogen, helium, methane, and ammonia. By comparison, the terrestrial planets have meager atmospheres at best. A planet's ability to retain an atmosphere depends on its temperature and mass. Simply stated, a gas molecule can "evaporate" from a planet if it reaches a speed known as the escape velocity. For Earth, this velocity is 11 kilometers per second. Any material, including a rocket, must reach this speed before it can leave Earth and go into space. The Jovian planets, because of their greater masses and thus higher surface gravities, have higher escape velocities (21-60 kilometers per second) than the terrestrial planets. Consequently, it is more difficult for gases to "evaporate" from them. Also, because the molecular motion of a gas depends on temperature, at the low temperatures of the Jovian planets even the lightest gases are unlikely to acquire the speed needed to escape. On the other hand, a comparatively warm body with a small surface gravity, like Earth's moon, is unable to hold even the heaviest gas and thus lacks an atmosphere. The slightly larger terrestrial planets Earth, Venus, and Mars retain some heavy gases like carbon dioxide, but even their atmospheres make up only an infinitesimally small portion of their total mass.
<br><br>
&nbsp;<span class="arr" id="arr6">&#10132;</span>The orderly nature of our solar system leads most astronomers to conclude that the planets formed at essentially the same time and from the same material as the Sun. It is hypothesized that the <span id="primodical">primordial</span> cloud of dust and gas from which all the planets are thought to have condensed had a composition somewhat similar to that of Jupiter. However, unlike Jupiter, the terrestrial planets today are nearly void of light gases and ices. The explanation may be that the terrestrial planets were once much larger and richer in these materials but <span id="eventually">eventually</span> lost them because of these bodies' relative closeness to the Sun, which meant that their temperatures were relatively high.
                `
            ],
            questions: [
                { type: "multiple-choice", question: "According to the passage, each of the following statements comparing terrestrial planets with Jovian planets is true EXCEPT:", options: ["Terrestrial planets are closer to the Sun than Jovian planets.", "Terrestrial planets have smaller diameters than Jovian planets.", "Terrestrial planets have smaller masses than Jovian planets.", "Terrestrial planets travel in a different direction than Jovian planets do."], correct: 3 },
                { type: "multiple-choice", question: "Paragraph 4 mentions which of the following as a reason why terrestrial planets are dense?", options: ["They are made up of three groups of substances.", "They are composed mainly of rocky and metallic materials.", "They contain more ice than Jovian planets.", "They contain relatively small amounts of water."], correct: 1 },
                { type: "multiple-choice", question: "Paragraph 4 supports each of the following statements about Saturn EXCEPT:", options: ["It is less dense than any of the terrestrial planets.", "It contains no rocky material.", "It contains ices.", "It contains a large percentage of gases."], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 5, which of the following statements is true of both Jovian and terrestrial planets?", options: ["The thicker the atmosphere, the smaller the planet’s mass", "The more varied the gases in the atmosphere, the higher the temperature", "The higher the surface gravity, the higher the escape velocity", "The less the atmosphere contributes to the total mass, the lower the temperature"], correct: 2 },
                { type: "multiple-choice", question: "According to paragraph 5, what is a major reason that Jovian planets have much thicker atmospheres than terrestrial planets do?", options: ["Jovian planets have lower surface gravities", "Jovian planets have lower temperatures", "Jovian planets have lower escape velocities", "Jovian planets’ gas molecules have higher average speeds"], correct: 1 },
                { type: "multiple-choice", question: "Paragraph 5 supports which of the following statements about the ability of planets to retain gases?", options: ["More-massive planets are less able to retain gases than less-massive ones.", "Planets are more likely to retain heavy gases than light gases.", "Jovian planets are unlikely to retain the lightest gases.", "Only terrestrial planets have been able to retain carbon dioxide."], correct: 1 },
                { type: "multiple-choice", question: "In calling the cloud of gas and dust from which the Sun and all the planets are thought to have condensed 'primordial' the author means that the cloud was", options: ["immense in size", "composed of similar particles", "present at the very beginning of our solar system's formation", "created from a great variety of different materials"], correct: 2 },
                { type: "multiple-choice", question: "The word 'eventually' in the passage is closest in meaning to", options: ["over time", "long ago", "simply", "certainly"], correct: 0 },
                {
                    type: "insert-sentence",
                    sentence: `This explains their relatively low densities.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 3
                },
                {
                    type: "dual-bucket",
                    prompt:
                        "Directions: From the seven answer choices below, select the two phrases that correctly characterize the terrestrial planets and the three phrases that correctly characterize the Jovian planets. Drag each phrase you select into the appropriate column of the table. Two of the phrases will NOT be used. This question is worth 3 points.",
                    choices: [
                        "Have relatively small sizes",
                        "Are grouped in the same category as Pluto",
                        "Contain relatively high proportions of ices",
                        "Have relatively high temperatures",
                        "Have densities that are generally lower than the density of water",
                        "Have relatively high escape velocities",
                        "Have a composition closer to that of the cloud from which they condensed"
                    ],
                    buckets: [
                        { title: "Terrestrial planets", selectCount: 2, correct: [0, 3] },
                        { title: "Jovian planets:", selectCount: 3, correct: [2, 5, 6] }
                    ]
                }
            ]
        },
        {
            title: "Development of the Periodic Table",
            text: [
                `
&nbsp;<span class="arr" id="arr12">&#10132;</span>The periodic table is a chart that reflects the periodic recurrence of chemical and physical properties of the elements when the elements are arranged in order of increasing atomic number (the number of protons in the nucleus). It is a monumental scientific achievement, and its development illustrates the essential <span id="interplay">interplay</span> between observation, prediction, and testing required for scientific progress. In the 1800's scientists were searching for new elements. By the late 1860's more than 60 chemical elements had been identified, and much was known about their descriptive chemistry. Various proposals were put forth to arrange the elements into groups based on similarities in chemical and physical properties.[BOX] The next step was to recognize a connection between group properties (physical or chemical similarities) and atomic mass (the measured mass of an individual atom of an element).[BOX] When the elements known at the time were ordered by increasing atomic mass, it was found that successive elements belonged to different chemical groups and that the order of the groups in this sequence was fixed and repeated itself at regular intervals.[BOX] Thus when the series of elements was written so as to begin a new horizontal row with each alkali metal, elements of the same groups were automatically assembled in vertical columns in a periodic table of the elements.[BOX] This table was the forerunner of the modern table.
<br><br>
&nbsp;<span class="arr" id="arr22">&#10132;</span>When the German chemist Lothar Meyer and (independently) the Russian Dmitry Mendeleyev first introduced the periodic table in 1869-70, one-third of the naturally occurring chemical elements had not yet been discovered. Yet both chemists were sufficiently farsighted to leave gaps where their analyses of periodic physical and chemical properties indicated that new elements should be located. <span id="bolderThan">Mendeleyev was bolder than Meyer</span> and even assumed that if a measured atomic mass put an element in the wrong place in the table, the atomic mass was wrong. In some cases this was true. Indium, for example, had previously been assigned an atomic mass between those of arsenic and selenium. Because there is no space in the periodic table between these two elements, Mendeleyev suggested that the atomic mass of indium be changed to a completely different value, where it would fill an empty space between cadmium and tin. In fact, subsequent work has shown that in a periodic table, elements should not be ordered strictly by atomic mass. For example, tellurium comes before iodine in the periodic table, even though its atomic mass is slightly greater. Such anomalies are due to the relative abundance of the "isotopes" or varieties of each element. All the isotopes of a given element have the same number of protons, but differ in their number of neutrons, and hence in their atomic mass. The isotopes of a given element have the same chemical properties but slightly different physical properties. We now know that atomic number (the number of protons in the nucleus), not atomic mass number (the number of protons and neutrons), determines chemical behavior.
<br><br>
&nbsp;<span class="arr" id="arr32">&#10132;</span>Mendeleyev went further than Meyer in another respect: he predicted the properties of six elements yet to be discovered. For example, a gap just below aluminum suggested a new element would be found with properties analogous to those of aluminum. Mendeleyev designated this element "eka-aluminum" (eka is the Sanskrit word for "next") and predicted its properties. Just five years later an element with the proper atomic mass was isolated and named gallium by its discoverer. The close correspondence between the observed properties of gallium and Mendeleyev’s predictions for eka-aluminum lent strong support to the periodic law. Additional support came in 1885 when eka-silicon, which had also been described in advance by Mendeleyev, was discovered and named germanium.
<br><br>
&nbsp;<span class="arr" id="arr42">&#10132;</span>The structure of the periodic table appeared to limit the number of possible elements. It was therefore quite surprising when John William Strut ，Lord Rayleigh, discovered a gaseous element in 1894 that did not fit into the previous classification scheme. A century earlier, Henry Cavendish had noted the existence of a residual gas when oxygen and nitrogen are removed from air, but its importance had not been realized. Together with William Ramsay, Rayleigh isolated the gas (separating it from other substances into its pure state) and named it argon. Ramsay then studied a gas that was present in natural gas deposits and discovered that it was helium, an element whose presence in the Sun had been noted earlier in the spectrum of sunlight but that had not previously been known on Earth. Rayleigh and Ramsay <span id="postulated">postulated</span> the existence of a new group of elements, and in 1898 other members of the series (neon, krypton, and xenon) were isolated.
                `
            ],
            questions: [
                { type: "multiple-choice", question: "The phrase 'interplay' in the passage is closest in meaning to", options: ["sequence", "interpretation", "requirement", "interaction"], correct: 3 },
                { type: "multiple-choice", question: "According to paragraph 1, what pattern did scientists notice when the known elements were written in order of increasing atomic mass?", options: ["The elements of the group of alkali metals were the first elements in the order of increasing atomic mass.", "Repetition of the same atomic masses for elements in different groups appeared.", "Elements with similar chemical properties appeared in the listing at regular intervals.", "Elements were chemically most similar to those just before and after them in the order."], correct: 2 },
                { type: "multiple-choice", question: "In paragraph 2, what is the author's purpose in presenting the information about the decision by Meyer and Mendeleyev to leave gaps in the periodic table?", options: ["To illustrate their confidence that the organizing principles of the periodic table would govern the occurrence of all chemical elements", "To indicate that some of their analyses of periodic physical and chemical properties were later found to be wrong", "To support the idea that they were unwilling to place new elements in the periodic table", "To indicate how they handled their disagreement about where to place new elements"], correct: 0 },
                { type: "multiple-choice", question: "What reason does the author provide for the claim that Mendeleyev was bolder than Meyer?", options: ["Mendeleyev corrected incorrect information Meyer had proposed.", "Mendeleyev assumed that some information believed to be true about the elements was incorrect.", "Mendeleyev argued that Meyer had not left enough gaps in the periodic table.", "Mendeleyev realized that elements were not ordered by atomic mass in the periodic table."], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 2, why did Mendeleyev suggest changing the atomic mass of indium?", options: ["Because indium did not fit into the periodic table in the place predicted by its atomic mass.", "Because there was experimental evidence that the atomic mass that had been assigned to indium was incorrect.", "Because there was an empty space between cadmium and tin in the periodic table.", "Because the chemical properties of indium were similar to those of arsenic and selenium."], correct: 0 },
                { type: "multiple-choice", question: "It can be inferred from paragraph 2 that tellurium comes before iodine in the periodic table even though tellurium's atomic mass is slightly greater because", options: ["iodine is less common than tellurium", "both iodine and tellurium have no isotopes", "the chemical behavior of tellurium is highly variable", "the atomic number of tellurium is smaller than that of iodine"], correct: 3 },
                { type: "multiple-choice", question: "It can be inferred from paragraph 3 that the significance of the discovery of gallium was that it supported which of the following?", options: ["The idea that aluminum was correctly placed in the periodic table.", "Mendeleyev's prediction that eka-silicon would be discovered next.", "The organizing principle of the periodic table.", "The idea that unknown elements existed."], correct: 2 },
                { type: "multiple-choice", question: "The word “postulated” in the passage is closest in meaning to", options: ["hypothesized", "discovered", "reported", "generated"], correct: 0 },
                {
                    type: "insert-sentence",
                    sentence: `It was a natural Idea to break up the series of elements at the points where the sequence of chemical groups to which the elements belonged began to repeat itself.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 2
                },
                {
                    type: "summary",
                    prompt: "prompt",
                    choices: [
                        { text: "Lord Rayleigh provided evidence that the structure of the periodic table limited the potential number of elements.", isCorrect: false },
                        { text: "Ramsay and Lord Rayleigh challenged the importance of the chemical research that Henry Cavendish had done a century earlier.", isCorrect: false },
                        { text: "Isotopes of a given element have exactly the same physical properties, but their chemical properties are slightly different.", isCorrect: false },
                        { text: "Mendeleyev and Meyer organized the known elements into a F chart that revealed periodic recurrences of chemical and physical properties.", isCorrect: true },
                        { text: "Mendeleyev's successful prediction of the properties of then- r unknown elements lent support to the acceptance of the periodic law.", isCorrect: true },
                        { text: "In the 1890's, Ramsay and Lord Rayleigh isolated argon and proposed the existence of a new series of elements.", isCorrect: true }
                    ],
                    correct: [3, 4, 5]
                }
            ]
        }
    ],
    specialBehavior:[
        {targetId: "arr4", questionIndex: 1, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr4", questionIndex: 2, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr5", questionIndex: 3, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr5", questionIndex: 4, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr5", questionIndex: 5, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr12", questionIndex: 11, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr22", questionIndex: 12, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr22", questionIndex: 14, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr22", questionIndex: 15, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr32", questionIndex: 16, styles: { display: "inline", fontWeight: "600", color: "red" }},


        {targetId: "primodical", questionIndex: 6, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "eventually", questionIndex: 7, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "interplay", questionIndex: 10, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "bolderThan", questionIndex: 13, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "postulated", questionIndex: 17, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},


    ]
};

