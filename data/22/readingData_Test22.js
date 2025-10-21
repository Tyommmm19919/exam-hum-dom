window.readingData = {
    passages: [
        {
            title: "Urban Climates",
            text: [
                `
&nbsp;<span class="arr" id="arr1">&#10132;</span>The city is an extraordinary processor of mass and energy and has its own metabolism. A daily input of water, food, and energy of various kinds is matched by an output of sewage, solid waste, air pollutants, energy, and materials that have been transformed in some way. The quantities involved are enormous. Many aspects of this energy use affect the atmosphere of a city, particularly in the production of heat.
<br><br>
&nbsp;<span class="arr" id="arr2">&#10132;</span>In winter the heat produced by a city can equal or surpass the amount of heat available from the Sun. All the heat that warms a building eventually transfers to the surrounding air, a process that is quickest where houses are poorly insulated. But an automobile produces enough heat to warm an average house in winter, and if a house were perfectly insulated, one adult could also produce more than enough heat to warm it. Therefore, even without any industrial production of heat, an urban area tends to be warmer than the countryside that surrounds it.
<br><br>
&nbsp;<span class="arr" id="arr3">&#10132;</span>The burning of fuel, such as by cars, is not the only source of this increased heat. Two other factors contribute to the higher overall temperature in cities. The first is the heat capacity of the materials that constitute the city, which is typically dominated by concrete and asphalt. During the day, heat from the Sun can be conducted into these materials and stored—to be released at night. But in the countryside materials have a significantly lower heat capacity because a vegetative blanket prevents heat from easily flowing into and out of the ground. The second factor is that radiant heat coming into the city from the Sun is trapped in two ways: (1) by a continuing series of reflection among the numerous vertical surfaces that buildings present and (2) by the dust dome, the cloudlike layer of polluted air that most cities produce. Shortwave radiation from the Sun passes through the pollution dome more easily than outgoing longwave radiation does; the latter is absorbed by the gaseous pollutants of the dome and reradiated back to the urban surface.
<br><br>
&nbsp;<span class="arr" id="arr4">&#10132;</span>Cities, then, are warmer than the surrounding rural areas, and together they produce a phenomenon known as the urban heat island. Heat islands develop best under particular conditions associated with light winds, but they can form almost any time.[BOX] The precise <span id="conf">configuration</span> of a heat island depends on several factors.[BOX] For example, the wind can make a heat island stretch in the direction it blows.[BOX] When a heat island is well developed, variations can be extreme; in winter, busy streets in cities can be 1.7℃ warmer than the side streets.[BOX] Areas near traffic lights can be similarly warmer than the areas between them because of the effect of cars standing in traffic instead of moving. The maximum differences in temperature between neighboring urban and rural environments is called the heat-island intensity for that region. In general, the larger the city, the greater its heat-island intensity. The actual level of intensity depends on such factors as the physical layout, population density, and productive activities of a metropolis.
<br><br>
&nbsp;<span class="arr" id="arr5">&#10132;</span>The surface-atmosphere relationships inside metropolitan areas produce a number of climatic peculiarities. For one thing, the presence or absence of moisture is affected by the special qualities of the urban surface. With much of the built-up landscape impenetrable by water, even gentle rain runs off almost immediately from rooftops, streets, and parking lots. Thus, city surfaces, as well as the air above them, tend to be drier between episodes of rain; with little water available for the cooling process of evaporation, relative humidities are usually lower. Wind movements are also <span id="modified">modified</span> in cities because buildings increase the friction on air flowing around them. This friction tends to slow the speed of winds, making them far less efficient at dispersing pollutants. On the other hand, air turbulence increases because of the effect of skyscrapers on airflow. Rainfall is also increased in cities. The cause appears to be in part greater turbulence in the urban atmosphere as hot air rises from the built-up surface.
                `
            ],
            questions: [
                { type: "multiple-choice", question: "According to paragraph 2, how soon heat from a warmed house reaches the outside air is greatly affected by", options: ["how well the house is heated", "how well the house is insulated", "how many adults live in the house", "how much sunshine the house receives"], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 3, each of the following contributes to making urban areas warmer than the surrounding countryside EXCEPT", options: ["the fuel burned by motor vehicles", "the capacity to store heat of the materials used in building a city", "the easy flow of heat into the ground in city areas covered by vegetation", "the repeated reflection of solar radiation back and forth among buildings"], correct: 2 },
                { type: "multiple-choice", question: "According to paragraph 3, why do materials in the countryside have a lower heat capacity than materials in cities do?", options: ["The countryside in the Sun is the only important source of heat.", "Construction materials in the city are not as good at keeping buildings warm as they are in the countryside.", "In the countryside the solar heat that flows into the ground flows out again quickly.", "Countryside vegetation prevents heat from being trapped in the ground."], correct: 3 },
                { type: "multiple-choice", question: "The word “configuration”in the passage is closest in meaning to", options: ["location", "history", "temperature", "shape"], correct: 3 },
                { type: "multiple-choice", question: "According to paragraph 4, what can explain the substantial differences in temperature between one area and other within a well-developed heat island?", options: ["The overall size of the heat island that includes the two reasons", "The intensify of the heat island that includes the two areas", "Differences between the two areas in the general level of activity, including traffic", "Differences between the two areas in the insulation materials used in construction"], correct: 2 },
                { type: "multiple-choice", question: "Paragraph 4 supports the idea that a city’s heat-island intensity would increase if", options: ["the city went into an economic decline and lost population", "the city’s economy shifted from heavy industry to health care and education", "there was an upward trend in the average age of the city’s residents", "repair work on the streets slowed traffic throughout the city"], correct: 3 },
                { type: "multiple-choice", question: "According to paragraph 5, surfaces in the city are generally drier than surfaces in the countryside between periods of rainfall because", options: ["in the city gentle rain is much more common than heavy rain", "high temperatures in the city speed up the process of evaporation", "in the city there are longer periods of dry weather between episodes of rain", "rainwater in the city cannot soak into most surfaces and quickly runs off"], correct: 3 },
                { type: "multiple-choice", question: "The word “modified” in the passage is closest in meaning to", options: ["changed", "blocked", "increased", "weakened"], correct: 0 },
                {
                    type: "insert-sentence",
                    sentence: `Another possibility is for the heat island to be stretched along the course of major rivers, since large waterways typically have a warming effect on the air directly above them.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 2
                },
                {
                    type: "summary",
                    prompt: "An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Some answer choices do not belong in the summary because they express ideas that are not presented in the passage or are minor ideas in the passage. This question is worth 2 points. Cities create climatic conditions of their own through their physical structure and urban activities.",
                    choices: [
                        { text: "The amount of heat produced in a city will be reduced when cities use the heat from cars to warm homes.", isCorrect: false },
                        { text: "The built-up landscape of the city readily becomes a heat island, with greater water runoff and special climatic conditions such as low relative humidity and increased air turbulence.", isCorrect: true },
                        { text: "The materials from which cities are built and the effects of pollution domes help make urban areas warmer than rural areas.", isCorrect: true },
                        { text: "Cities tend to be warmer than their surrounding areas, in part because they produce heat by burning fuel for heating, powering vehicles, and industrial production.", isCorrect: true },
                        { text: "In most cities, the heating that results from solar radiation is intensified by carbon dioxide, a gas that is present at very high concentrations in cities’atmospheres.", isCorrect: false },
                        { text: "During periods without rainfall, the air in cities heats up and causes winds to slow down, with the result that pollutants are not dispersed.", isCorrect: false }
                    ],
                    correct: [1, 2, 3]
                }
            ]
        },
        {
            title: "Seventeenth-Century Dutch Agriculture",
            text: [
                `
&nbsp;<span class="arr" id="arr12">&#10132;</span>Agriculture and fishing formed the primary sector of the economy in the Netherlands in the seventeenth century. Dutch agriculture was modernized and commercialized new crops and agricultural techniques raised levels of production so that they were <span id="inLine">in line with market demands</span>, and cheap grain was imported annually from the Baltic region in large quantities. According to estimates, about 120,000 tons of imported grain fed about 600,000 people: that is about a third of the Dutch population.<span id="sentence2"> Importing the grain, which would have been expensive and time consuming for the Dutch to have produced themselves, kept the price of grain low and thus stimulated individual demand for other foodstuffs and consumer goods.</span>
<br><br>
&nbsp;<span class="arr" id="arr22">&#10132;</span>Apart from this, being able to give up labor-intensive grain production freed both the land and the workforce for more productive agricultural divisions. The peasants specialized in livestock husbandry and dairy farming as well as in cultivating industrial crops and fodder crops: flax, madder, and rape were grown, as were tobacco, hops, and turnips. These products were bought mostly by urban businesses. There was also a demand among urban consumers for dairy products such as butter and cheese, which, in the sixteenth century, had become more expensive than grain. The high prices encouraged the peasants to improve their animal husbandry techniques; for example, they began feeding their animals indoors in order to raise the milk yield of their cows.
<br><br>
&nbsp;<span class="arr" id="arr32">&#10132;</span>In addition to dairy farming and cultivating industrial crops, a third sector of the Dutch economy reflected the way in which agriculture was being modernized-horticulture.[BOX] In the sixteenth century, fruit and vegetables were to be found only in gardens belonging to wealthy people.[BOX] This changed in the early part of the seventeenth century when horticulture became accepted as an agricultural sector.[BOX] Whole villages began to cultivate fruit and vegetables.[BOX] The produce was then transported by water to markets in the cities, where the <span id="consumption">consumption</span> of fruit and vegetables was no longer restricted to the wealthy.
<br><br>
&nbsp;<span class="arr" id="arr42">&#10132;</span>As the demand for agricultural produce from both consumers and industry increased, agricultural land became more valuable and people tried to work the available land more intensively and to reclaim more land from wetlands and lakes. In order to increase production on existing land, the peasants made more use of crop rotation and, in particular, began to apply animal waste to the soil regularly, rather than leaving the fertilization process up to the grazing livestock. For the first time industrial waste, such as ash from the soap-boilers, was collected in the cities and sold in the country as artificial fertilizer. The increased yield and price of land justified reclaiming and draining even more land.
<br><br>
&nbsp;<span class="arr" id="arr52">&#10132;</span>The Dutch battle against the sea is <span id="legend">legendary</span>. Noorderkwartier in Holland, with its numerous lakes and stretches of water, was particularly suitable for land reclamation and one of the biggest projects undertaken there was the draining of the Beemster lake which began in 1608. The richest merchants in Amsterdam contributed money to reclaim a good 7,100 hectares of land. Forty-three windmills powered the drainage pumps so that <span id="they">they</span> were able to lease the reclamation to farmers as early as 1612, with the investors receiving annual leasing payments at an interest rate of 17 percent. Land reclamation continued, and between 1590 and 1665, almost 100,000 hectares were reclaimed from the wetland areas of Holland, Zeeland, and Friesland. However, land reclamation decreased significantly after the middle of the seventeenth century because the price of agricultural products began to fall, making land reclamation far less profitable in the second part of the century.
<br><br>
&nbsp;<span class="arr" id="arr62">&#10132;</span>Dutch agriculture was finally affected by the general agricultural crisis in Europe during the last two decades of the seventeenth century. However, what is astonishing about this is not that Dutch agriculture was affected by critical phenomena such as a decrease in sales and production, but the fact that the crisis appeared only relatively late in Dutch agriculture. In Europe as a whole, the exceptional reduction in the population and the related fall in demand for grain since the beginning of the seventeenth century had caused the price of agricultural products to fall. Dutch peasants were able to remain unaffected by this crisis for a long time because they had specialized in dairy farming industrial crops, and horticulture. However, toward the end of the seventeenth century, they too were overtaken by the general agricultural crisis.
                `
            ],
            questions: [
                { type: "multiple-choice", question: "By indicating that production was in line with market demands the author means that Dutch farmerswere able to", options: ["exceed other European countries in agricultural production", "produce crops mat were similar to those popular in other European countries", "supply sufficient quantities of the agricultural products that the Dutch population wanted to buy", "satisfy the demand for high quality agricultural products from the Baltic region"], correct: 2 },
                { type: "multiple-choice", question: "Which of the sentences below best expresses the essential information in the highlighted sentence in the passage? Incorrect choices change the meaning in important ways or leave out essential information.", options: ["Buying imported grain led to the Dutch demanding that other foodstuffs and consumer goods be imported.", "Because the Dutch were able to import inexpensive grain, they had money available to create a demand for other food products and consumer goods.", "Keeping the price of grain low was a primary goal of the Dutch at a time when they could not produce enough grain to provide for all their needs.", "The demand for other foodstuffs and consumer goods forced the Dutch to import grain and other products at a time when maintaining low prices was especially important."], correct: 1 },
                { type: "multiple-choice", question: "According to paragraph 2, the increases demands on Dutch agriculture made by urban consumers had which of the following results?", options: ["Seasonal shortages of the products consumers most wanted", "bIncreased production of high-quality grain products C.Raised prices charged by peasants to urban consumers", "Raised prices charged by peasants to urban consumers", "Different ways of caring for dairy-producing animals"], correct: 3 },
                { type: "multiple-choice", question: "The word “consumption” in the passage is closest in meaning to", options: ["sale", "storage", "exportation", "utilization"], correct: 3 },
                { type: "multiple-choice", question: "The word “they” in the passage refers to", options: ["merchants", "hectares", "windmills", "drainage pumps"], correct: 0 },
                { type: "multiple-choice", question: "According to paragraph 5, which of the following was an important reason why land-reclamation projects in the first half of the seventeenth century proceeded rapidly?", options: ["Windmills became powerful enough to run drainage pumps efficiently.", "Merchants invested large amounts of money in reclamation.", "High interest rates discouraged people from buying land already available.", "Reclaimed land was much more suitable for agriculture than the existing land."], correct: 1 },
                { type: "multiple-choice", question: "The word “legendary”in the passage is closest in meaning to", options: ["continuous", "well documented", "famous", "expensive"], correct: 2 },
                { type: "multiple-choice", question: "Which of the following best describes the organization of the passage?", options: ["A presentation of a theory and the evidence in favor of it", "A general statement followed by examples and relevant details", "A analysis of a problem and its solution", "A series of statements leading to a conclusion"], correct: 1 },
                {
                    type: "insert-sentence",
                    sentence: `Some villages specialized in growing cabbages and carrots; others grew onions, mustard, and coriander; and still others produced fruit and cultivated trees in nurseries.`,
                    insertionSpots: [0, 1, 2, 3],
                    correct: 3
                },
                {
                    type: "summary",
                    prompt: "An introductory sentence for a brief summary of the passage is provides below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Some sentences presented in the passage or are minor ideas in the passage. This question is worth 2 points. Agriculture formed one of the primary sectors of the economy in seventeenth-century Netherlands.",
                    choices: [
                        { text: "The Baltic region produced large quantities of grain for export to other regions, including the Netherlands.", isCorrect: false },
                        { text: "The richest people grew enough fruits and vegetables to supply the entire country with fresh produce.", isCorrect: false },
                        { text: "An agricultural crisis that began in Europe did not affect Dutch land-reclamation projects.", isCorrect: false },
                        { text: "Specialization in dairy farming, industrial crops, and horticulture allowed the Dutch to be more productive than some other regions in Europe.", isCorrect: true },
                        { text: "Land reclamation and improvement allowed the Dutch to meet demands for their agricultural products.", isCorrect: true },
                        { text: "Because the Dutch had specialized their agricultural output they were less susceptible to the crisis that Europe experienced from the beginning of the century.", isCorrect: true }
                    ],
                    correct: [3, 4, 5]
                }
            ]
        }
    ],
    specialBehavior:[
        {targetId: "arr2", questionIndex: 0, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr3", questionIndex: 1, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr3", questionIndex: 2, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr4", questionIndex: 4, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr4", questionIndex: 5, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr5", questionIndex: 6, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr22", questionIndex: 12, styles: { display: "inline", fontWeight: "600", color: "red" }},
        {targetId: "arr52", questionIndex: 15, styles: { display: "inline", fontWeight: "600", color: "red" }},


        {targetId: "conf", questionIndex: 3, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "modified", questionIndex: 7, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "inLine", questionIndex: 10, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "sentence2", questionIndex: 11, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "consumption", questionIndex: 13, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "they", questionIndex: 14, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},
        {targetId: "legend", questionIndex: 16, styles: { fontWeight: "600", backgroundColor: "rgb(144,144,144)" }},


    ]
};


// &nbsp;<span class="arr" id="arr1">&#10132;</span>