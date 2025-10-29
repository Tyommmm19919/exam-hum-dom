

window.satRWData = {
  testId: "1",
  section: "english",
  meta: {
    modules: [
      { id: 1, timeSeconds: 32 * 60 },
      { id: 2, timeSeconds: 32 * 60 }
    ],
    domains: [
      "Information and Ideas",
      "Craft and Structure",
      "Expression of Ideas",
      "Standard English Conventions"
    ]
  },

  items: [
    // MODULE 1
    {
      id: "1-01",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Words in Context",
      passage: `<p>The researcher called the early results <em>tenuous</em>, explaining that a larger sample would be needed before drawing conclusions.</p>`,
      question: `In the passage, the word “tenuous” most nearly means`,
      options: ["impressive", "uncertain", "durable", "balanced"],
      correct: 1
    },
    {
      id: "1-02",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Central Idea / Purpose",
      passage: `<p>Neighbors converted an empty lot into a small garden. Though modest, the space provides shade for bus riders, hosts free classes, and offers a quiet place to rest.</p>`,
      question: "The primary purpose of the passage is to",
      options: [
        "argue that community gardens eliminate the need for public transit",
        "describe how a small project can deliver multiple local benefits",
        "explain how to grow vegetables in a limited space",
        "compare two volunteer organizations"
      ],
      correct: 1
    },
    {
      id: "1-03",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Inference",
      passage: `<p>After the library added evening hours, returns increased the next month even though the number of new checkouts was unchanged.</p>`,
      question: "Which inference is best supported by the passage?",
      options: [
        "Patrons preferred morning hours.",
        "Later hours likely made returning books more convenient.",
        "The library purchased fewer new titles.",
        "Fines increased sharply during the month."
      ],
      correct: 1
    },
    {
      id: "1-04",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (text)",
      passage: `<p>A study tracked street temperatures before and after new trees were planted. Residents later reported shorter walks to shaded seating and fewer heat complaints.</p>`,
      question: "Which choice best supports the claim that residents experienced practical benefits?",
      options: [
        "Temperatures were tracked over several weeks.",
        "New trees were planted by volunteers.",
        "Residents reported shorter walks to shade.",
        "The study focused on a single neighborhood."
      ],
      correct: 2
    },
    {
      id: "1-05",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (quantitative)",
      passage: `<p>The table summarizes average afternoon surface temperatures one month after tree plantings.</p>`,
      table: {
        columns: ["Block", "Canopy Cover", "Avg Surface Temp (°C)"],
        rows: [
          ["A", "8%", "47.1"],
          ["B", "18%", "44.2"],
          ["C", "0%", "49.0"],
          ["D", "25%", "43.5"]
        ]
      },
      question:
        "Which choice best supports the claim that greater canopy cover is associated with lower surface temperatures?",
      options: [
        "Block C has 0% canopy and the highest temperature.",
        "Blocks A and B have similar traffic patterns.",
        "Block A and C were planted on the same day.",
        "Block D has more residents than Block B."
      ],
      correct: 0
    },
    {
      id: "1-06",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Function / Rhetorical Role",
      passage: `<p>Scientists revisited an earlier hypothesis after a more precise instrument produced conflicting measurements.</p>`,
      question: "The sentence primarily serves to",
      options: [
        "introduce a limitation of the instrument",
        "show how new evidence can prompt reevaluation",
        "argue that the original hypothesis was fraudulent",
        "describe the engineers who built the instrument"
      ],
      correct: 1
    },
    {
      id: "1-07",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Tone / Attitude",
      passage: `<p>Although the program's launch was delayed, the coordinator notes with cautious optimism that early participation has exceeded expectations.</p>`,
      question: "The overall tone of the passage is best described as",
      options: ["resigned", "detached", "cautiously hopeful", "skeptical"],
      correct: 2
    },
    {
      id: "1-08",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Paired Texts (relationship)",
      passage: `
        <div class="split">
          <div><strong>Text 1:</strong> The architect argues that compact housing can reduce energy use without sacrificing comfort.</div>
          <div><strong>Text 2:</strong> A tenant reports that well-insulated small units stayed warm through winter using little electricity.</div>
        </div>
      `,
      question: "How does Text 2 relate to Text 1?",
      options: [
        "It challenges the claim in Text 1 with contradictory data.",
        "It provides anecdotal support for the claim in Text 1.",
        "It proposes a different definition of comfort than Text 1.",
        "It discusses an unrelated topic."
      ],
      correct: 1
    },
    {
      id: "1-09",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Detail / Purpose of Detail",
      passage: `<p>The report mentions that bike racks were added near the market. This note appears in a section about encouraging short errands without cars.</p>`,
      question: "The mention of bike racks primarily serves to",
      options: [
        "criticize the market for limited parking",
        "illustrate a measure intended to support car-free trips",
        "contrast cycling with walking",
        "argue for restricting deliveries"
      ],
      correct: 1
    },
    {
      id: "1-10",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Words in Context",
      passage: `<p>The historian calls the evidence <em>scant</em> but intriguing, noting that a few letters survive while most records were lost.</p>`,
      question: `In the passage, “scant” most nearly means`,
      options: ["insignificant", "exaggerated", "limited", "misleading"],
      correct: 2
    },
    {
      id: "1-11",
      module: 1,
      domain: "Expression of Ideas",
      subtype: "Transitions",
      passage: `<p>The museum extended its weekend hours. ____ , attendance during those periods increased by nearly a third.</p>`,
      question: "Which choice completes the sentence with the most logical transition?",
      options: ["However", "Consequently", "Similarly", "Meanwhile"],
      correct: 1
    },
    {
      id: "1-12",
      module: 1,
      domain: "Expression of Ideas",
      subtype: "Rhetorical Synthesis",
      passage: `<p>A city planner is drafting a proposal to encourage active transportation.</p><ul><li>Study A: Households using public transit reported lower commuting stress.</li><li>Study B: Adding sidewalks increased local walking trips by 18%.</li></ul>`,
      question: "Which claim best synthesizes the information for the proposal?",
      options: [
        "Transit routes should be longer to reach distant suburbs.",
        "Investments that make walking and transit easier can improve residents’ daily experience.",
        "Sidewalks cost less to build than train lines.",
        "Residents dislike changes to street design."
      ],
      correct: 1
    },
    {
      id: "1-13",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Central Idea",
      passage: `<p>When a local river flooded ten years ago, volunteers formed a network to check on homebound neighbors. That network later organized grocery deliveries during winter storms.</p>`,
      question: "Which choice best states the central idea of the passage?",
      options: [
        "Rivers often flood during intense storms.",
        "A volunteer network created for one emergency became useful in later crises.",
        "Neighbors prefer grocery delivery to shopping in person.",
        "Volunteers should receive formal training."
      ],
      correct: 1
    },
    {
      id: "1-14",
      module: 1,
      domain: "Craft and Structure",
      subtype: "Text Structure",
      passage: `<p>First, the team identifies the problem; second, it lists constraints; finally, it proposes a design that meets those constraints.</p>`,
      question: "The organization of the passage is best described as",
      options: [
        "contrast between two opposing views",
        "chronological account of historical events",
        "step-by-step explanation of a process",
        "narrative with a character's reflection"
      ],
      correct: 2
    },
    {
      id: "1-15",
      module: 1,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (quantitative)",
      passage: `<p>The table shows survey responses about weekend travel distance after a new shuttle began service.</p>`,
      table: {
        columns: ["Distance", "Before Shuttle", "After Shuttle"],
        rows: [
          ["0–2 miles", "41%", "28%"],
          ["3–5 miles", "33%", "36%"],
          ["6–10 miles", "18%", "24%"],
          ["11+ miles", "8%", "12%"]
        ]
      },
      question:
        "Which choice best supports the claim that the shuttle enabled longer weekend trips for some residents?",
      options: [
        "The proportion of 6–10 mile trips increased after the shuttle began.",
        "The 0–2 mile category was the largest before the shuttle.",
        "The table reports percentages rather than counts.",
        "The 3–5 mile category changed by three percentage points."
      ],
      correct: 0
    },

    {
      id: "1-16",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Pronoun Agreement",
      passage: `<p>Each committee member should submit ____ notes by Friday.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["their", "his or her", "they're", "its"],
      correct: 1
    },
    {
      id: "1-17",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Subject–Verb Agreement",
      passage: `<p>A list of recommended readings ____ attached to the syllabus.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["were", "are", "is", "have been"],
      correct: 2
    },
    {
      id: "1-18",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Verb Tense / Consistency",
      passage: `<p>When the experiment began, the researchers <u>record</u> baseline data and then monitored changes for six weeks.</p>`,
      question: "Which choice best replaces the underlined word?",
      options: ["record", "records", "recorded", "have recorded"],
      correct: 2
    },
    {
      id: "1-19",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Comma — Nonessential Clause",
      passage: `<p>The speakers who traveled from abroad will present on Friday.</p>`,
      question:
        "To indicate that only some of the speakers traveled from abroad, which version is correct?",
      options: [
        "The speakers, who traveled from abroad, will present on Friday.",
        "The speakers who traveled from abroad will present on Friday.",
        "The speakers, who traveled from abroad will present on Friday.",
        "The speakers who traveled from abroad, will present on Friday."
      ],
      correct: 1
    },
    {
      id: "1-20",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Sentence Boundaries",
      passage: `<p>Our team analyzed the data for weeks, we drafted a brief report for the city council.</p>`,
      question: "Which choice best corrects the sentence?",
      options: [
        "Our team analyzed the data for weeks; we drafted a brief report for the city council.",
        "Our team analyzed the data for weeks; and we drafted a brief report for the city council.",
        "Our team analyzed the data for weeks therefore we drafted a brief report.",
        "Our team analyzed the data for weeks we drafted a brief report."
      ],
      correct: 0
    },
    {
      id: "1-21",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Modifier Placement",
      passage: `<p>Walking down the street, the mural <u>caught my eye</u> on the corner building.</p>`,
      question: "Which choice best revises the sentence to correct the modifier error?",
      options: [
        "The mural caught my eye, walking down the street, on the corner building.",
        "The mural on the corner building caught my eye as I walked down the street.",
        "Walking down the street, on the corner building the mural caught my eye.",
        "The mural caught my eye walking down the street on the corner building."
      ],
      correct: 1
    },
    {
      id: "1-22",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Parallelism",
      passage: `<p>The internship taught me to manage my time, communicate clearly, and <u>problem-solving</u> under pressure.</p>`,
      question: "Which choice best maintains parallel structure?",
      options: [
        "to manage my time, communicate clearly, and solve problems under pressure",
        "managing my time, communicating clearly, and problem-solving under pressure",
        "to manage my time, to communicate clearly, and solving problems under pressure",
        "to manage my time, communication clearly, and solving problems under pressure"
      ],
      correct: 0
    },
    {
      id: "1-23",
      module: 1,
      domain: "Expression of Ideas",
      subtype: "Concision",
      passage: `<p>Because the results were basically the same in every respect, the team decided to repeat the trial again.</p>`,
      question: "Which choice is most concise and maintains the meaning?",
      options: [
        "Because the results were the same, the team repeated the trial.",
        "Because the results were basically the same in every respect, the team repeated the trial over again.",
        "Due to the fact that the results were the same, the team repeated again.",
        "Because the results were the same in every possible way imaginable, the team repeated the trial."
      ],
      correct: 0
    },
    {
      id: "1-24",
      module: 1,
      domain: "Expression of Ideas",
      subtype: "Logical Connections",
      passage: `<p>Attendance was low during the first week; ____ , the outreach campaign hadn’t started yet.</p>`,
      question: "Which choice most logically completes the sentence?",
      options: ["for example", "in contrast", "in fact", "after all"],
      correct: 2
    },
    {
      id: "1-25",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Comparisons / Idiom",
      passage: `<p>The new device is more efficient <u>as</u> the older model.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["as", "than", "from", "to"],
      correct: 1
    },
    {
      id: "1-26",
      module: 1,
      domain: "Standard English Conventions",
      subtype: "Prepositions / Idiom",
      passage: `<p>The committee is responsible ____ allocating funds fairly.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["for", "to", "with", "of"],
      correct: 0
    },
    {
      id: "1-27",
      module: 1,
      domain: "Expression of Ideas",
      subtype: "Transitions",
      passage: `<p>The festival brought in visitors from neighboring towns. ____ , local restaurants extended their hours to meet demand.</p>`,
      question: "Which choice provides the most logical transition?",
      options: ["Nevertheless", "Consequently", "Instead", "Regardless"],
      correct: 1
    },

    // MODULE 2

    {
      id: "2-01",
      module: 2,
      domain: "Craft and Structure",
      subtype: "Words in Context",
      passage: `<p>The curator called the sketch “preliminary,” noting that its lines are intentionally <em>spare</em>.</p>`,
      question: `In the passage, “spare” most nearly means`,
      options: ["extravagant", "minimal", "careless", "fragile"],
      correct: 1
    },
    {
      id: "2-02",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Central Idea / Purpose",
      passage: `<p>To keep a rare bee species thriving, researchers planted strips of native flowers along field edges. These strips provided food when crops were not in bloom.</p>`,
      question: "The passage primarily aims to",
      options: [
        "warn against planting flowers near crops",
        "explain one approach to supporting pollinators",
        "argue that crops do not need bees to reproduce",
        "compare different bee species by size"
      ],
      correct: 1
    },
    {
      id: "2-03",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Inference",
      passage: `<p>After the city replaced sodium streetlights with LEDs, residents reported clearer nighttime visibility even though overall brightness levels were reduced.</p>`,
      question: "Which inference is best supported by the passage?",
      options: [
        "Color quality can affect perceived visibility.",
        "Residents preferred darker streets.",
        "LEDs consume more power than sodium lights.",
        "The number of streetlights decreased."
      ],
      correct: 0
    },
    {
      id: "2-04",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (text)",
      passage: `<p>Festival organizers surveyed vendors after moving to a larger venue. Most vendors reported higher sales and easier loading, citing wider aisles and additional parking.</p>`,
      question: "Which statement from the passage best supports the claim that the new venue improved vendor experience?",
      options: [
        "Organizers conducted a survey.",
        "Vendors reported higher sales and easier loading.",
        "The venue is larger than before.",
        "The festival occurs annually."
      ],
      correct: 1
    },
    {
      id: "2-05",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (quantitative)",
      passage: `<p>The chart shows commuter choices before and after a new rail line opened.</p>`,
      table: {
        columns: ["Mode", "Before", "After"],
        rows: [
          ["Drive alone", "64%", "51%"],
          ["Carpool", "10%", "11%"],
          ["Bus", "14%", "12%"],
          ["Rail", "0%", "18%"],
          ["Walk/Bike", "12%", "8%"]
        ]
      },
      question:
        "Which finding best supports the claim that the rail line reduced solo driving?",
      options: [
        "Rail use increased to 18%.",
        "Carpooling rose slightly.",
        "Bus use fell by two percentage points.",
        "Walking and biking declined."
      ],
      correct: 0
    },
    {
      id: "2-06",
      module: 2,
      domain: "Craft and Structure",
      subtype: "Function / Rhetorical Role",
      passage: `<p>By describing the river’s seasonal cycles before discussing floodplain farming, the author establishes context for the practice.</p>`,
      question: "The sentence primarily serves to",
      options: [
        "dispute a claim about rainfall patterns",
        "introduce a limitation of floodplain farming",
        "explain how background information prepares the main topic",
        "summarize the results of an experiment"
      ],
      correct: 2
    },
    {
      id: "2-07",
      module: 2,
      domain: "Craft and Structure",
      subtype: "Paired Texts (relationship)",
      passage: `
        <div class="split">
          <div><strong>Text 1:</strong> A historian argues that a city’s success depended on trade routes rather than mineral wealth.</div>
          <div><strong>Text 2:</strong> Shipping records show dramatic growth after a canal connected the city to the coast.</div>
        </div>
      `,
      question: "How does Text 2 relate to Text 1?",
      options: [
        "It contradicts the claim in Text 1.",
        "It provides evidence that supports Text 1.",
        "It introduces a new topic unrelated to Text 1.",
        "It questions the reliability of trade records."
      ],
      correct: 1
    },
    {
      id: "2-08",
      module: 2,
      domain: "Expression of Ideas",
      subtype: "Transitions",
      passage: `<p>Volunteers restored the trail’s bridges. ____ , hikers reported fewer detours and delays.</p>`,
      question: "Which choice completes the sentence with the most logical transition?",
      options: ["However", "Consequently", "Meanwhile", "Instead"],
      correct: 1
    },
    {
      id: "2-09",
      module: 2,
      domain: "Craft and Structure",
      subtype: "Words in Context",
      passage: `<p>The biologist offered a <em>tentative</em> explanation, emphasizing that further tests might revise the conclusion.</p>`,
      question: `In the passage, “tentative” most nearly means`,
      options: ["confident", "provisional", "contradictory", "obsolete"],
      correct: 1
    },
    {
      id: "2-10",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Detail / Purpose of Detail",
      passage: `<p>The profile notes that the artist once worked as a carpenter. The detail appears in a section about the precision of the artist’s wooden sculptures.</p>`,
      question: "The detail about carpentry primarily serves to",
      options: [
        "criticize the artist’s career choices",
        "explain the origin of certain technical skills",
        "compare sculpture with furniture design",
        "argue that wood is the best medium for art"
      ],
      correct: 1
    },
    {
      id: "2-11",
      module: 2,
      domain: "Expression of Ideas",
      subtype: "Rhetorical Synthesis",
      passage: `<p>A grant writer is preparing a summary.</p><ul><li>Report X: After-school clubs correlated with higher attendance.</li><li>Report Y: Students cited mentorship as a key reason to keep coming.</li></ul>`,
      question: "Which claim best synthesizes the information for the summary?",
      options: [
        "Clubs should meet less often to boost interest.",
        "Providing structured activities and mentors may improve school attendance.",
        "Mentorship is more expensive than clubs.",
        "Attendance depends solely on academic grades."
      ],
      correct: 1
    },
    {
      id: "2-12",
      module: 2,
      domain: "Craft and Structure",
      subtype: "Text Structure",
      passage: `<p>The author contrasts two approaches to soil restoration, then argues that combining them yields the best results.</p>`,
      question: "The structure of the passage is best described as",
      options: [
        "cause followed by multiple effects",
        "comparison leading to a synthesis",
        "chronological narration",
        "problem without a solution"
      ],
      correct: 1
    },

    // ---- Standard English Conventions (Module 2) ----
    {
      id: "2-13",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Pronoun Case",
      passage: `<p>The coordinator interviewed Maya and <u>I</u> about our schedules.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["I", "me", "myself", "mine"],
      correct: 1
    },
    {
      id: "2-14",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Apostrophes / Possession",
      passage: `<p>The <u>artists</u> studios open to the public on weekends.</p>`,
      question: "Which choice correctly completes the sentence?",
      options: [
        "artists'",
        "artist's",
        "artists",
        "artists’s"
      ],
      correct: 0
    },
    {
      id: "2-15",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Comma vs. Semicolon",
      passage: `<p>The exhibit was small <u>however</u> the pieces were unforgettable.</p>`,
      question: "Which choice best corrects the sentence?",
      options: [
        "The exhibit was small; however, the pieces were unforgettable.",
        "The exhibit was small, however the pieces were unforgettable.",
        "The exhibit was small however, the pieces were unforgettable.",
        "The exhibit was small; the pieces, however were unforgettable."
      ],
      correct: 0
    },
    {
      id: "2-16",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Colon / List or Explanation",
      passage: `<p>The recipe requires three ingredients <u>flour, water, and salt</u>.</p>`,
      question: "Which choice correctly uses punctuation?",
      options: [
        "The recipe requires three ingredients: flour, water, and salt.",
        "The recipe requires three ingredients; flour, water, and salt.",
        "The recipe requires three ingredients, flour, water, and salt.",
        "The recipe requires three ingredients— flour, water, and salt,."
      ],
      correct: 0
    },
    {
      id: "2-17",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Dash / Emphasis",
      passage: `<p>The plan—though ambitious—earned unanimous support.</p>`,
      question: "The dashes set off a phrase that functions as",
      options: [
        "an essential clause naming the plan",
        "a nonessential aside that modifies 'plan'",
        "a coordinating conjunction joining clauses",
        "a fragment that must be deleted"
      ],
      correct: 1
    },
    {
      id: "2-18",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Pronoun Clarity",
      passage: `<p>When Lena spoke to Mira about the schedule, <u>she</u> suggested moving the meeting.</p>`,
      question: "Which revision best removes ambiguity?",
      options: [
        "When Lena spoke to Mira about the schedule, she herself suggested moving the meeting.",
        "When Lena spoke to Mira about the schedule, Lena suggested moving the meeting.",
        "When Lena spoke to Mira about the schedule, Mira or Lena suggested moving the meeting.",
        "When Lena spoke to Mira about the schedule, it was suggested that the meeting be moved."
      ],
      correct: 1
    },
    {
      id: "2-19",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Agreement (Indefinite Pronouns)",
      passage: `<p>Neither of the proposals ____ ready for a vote.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["are", "were", "is", "have been"],
      correct: 2
    },
    {
      id: "2-20",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Adjective vs. Adverb",
      passage: `<p>The printer ran <u>slow</u> after the firmware update.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["slow", "slower", "slowly", "most slow"],
      correct: 2
    },
    {
      id: "2-21",
      module: 2,
      domain: "Expression of Ideas",
      subtype: "Concision",
      passage: `<p>She collaborated together with the team to complete the draft.</p>`,
      question: "Which choice is the most concise revision?",
      options: [
        "She collaborated with the team to complete the draft.",
        "She worked in collaboration together with the team to complete the draft.",
        "She collaborated alongside the team members in order to complete the draft.",
        "She collaborated together to complete the draft with the team."
      ],
      correct: 0
    },
    {
      id: "2-22",
      module: 2,
      domain: "Expression of Ideas",
      subtype: "Logical Connections",
      passage: `<p>We expected rain for the picnic; ____ , we reserved an indoor room as a backup.</p>`,
      question: "Which choice most logically completes the sentence?",
      options: ["nevertheless", "instead", "therefore", "similarly"],
      correct: 2
    },
    {
      id: "2-23",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Parallelism",
      passage: `<p>The course aims to teach students to think critically, write clearly, and <u>the analysis of</u> sources.</p>`,
      question: "Which choice best maintains parallel structure?",
      options: [
        "analyze sources",
        "the analysis of sources",
        "analyzing sources effectively",
        "to analyze of sources"
      ],
      correct: 0
    },
    {
      id: "2-24",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Comparatives / Quantifiers",
      passage: `<p>The new schedule leaves <u>less</u> interruptions during the day.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["less", "fewer", "few", "least"],
      correct: 1
    },
    {
      id: "2-25",
      module: 2,
      domain: "Standard English Conventions",
      subtype: "Verb Mood",
      passage: `<p>If I <u>was</u> the coordinator, I would schedule the event earlier.</p>`,
      question: "Which choice completes the sentence correctly?",
      options: ["was", "were", "am", "had been"],
      correct: 1
    },
    {
      id: "2-26",
      module: 2,
      domain: "Expression of Ideas",
      subtype: "Transitions",
      passage: `<p>The lab replaced disposable materials with durable ones. ____ , supply costs fell over the semester.</p>`,
      question: "Which choice provides the most logical transition?",
      options: ["Nevertheless", "Consequently", "Similarly", "Regardless"],
      correct: 1
    },
    {
      id: "2-27",
      module: 2,
      domain: "Information and Ideas",
      subtype: "Command of Evidence (quantitative)",
      passage: `<p>After a tutoring program started, the percentage of students passing algebra increased as shown below.</p>`,
      table: {
        columns: ["Term", "Pass Rate"],
        rows: [
          ["Fall", "62%"],
          ["Winter", "66%"],
          ["Spring", "71%"],
          ["Summer", "73%"]
        ]
      },
      question: "Which statement is best supported by the data?",
      options: [
        "Pass rates rose steadily across the terms.",
        "Pass rates declined in spring.",
        "The program only helped in summer.",
        "Winter had the highest pass rate."
      ],
      correct: 0
    }
  ]
};
