window.readingData2026 = {
  // timeSec: 25*60,

  // Cycle 1 — cloze[0], email[0], daily[0], academic[0]
  clozeList: [
    {
      prompt: "Fill in the missing letters.",
      textHtml: `
      We know from drawings that have been preserved in caves for over 10,000 years that early humans performed dances as a group activity. We ml<span data-gap="0"></span> think th<span data-gap="1"></span> prehistoric peo<span data-gap="2"></span> concentrated on<span data-gap="3"></span> on ba<span data-gap="4"></span> survival. How<span data-gap="5"></span> it i<span data-gap="6"></span> clear fr<span data-gap="7"></span> the rec<span data-gap="8"></span> that dan<span data-gap="9"></span> was important to them. They recorded more drawings of dances than of any other group activity. Dances served various purposes, including ritualistic communication with the divine, storytelling, and social cohesion. 
      `,
      answersByGap: { "0": "ght", "1": "at", "2": "ple", "3": "ly", "4": "sic", "5": "ever", "6": "s", "7": "om", "8": "ord", "9": "cing" }
    },
    // Cycle 2 — cloze[1]
    {
      prompt: "Complete the words.",
      textHtml: `
The human brain is a complex organ responsible for controlling all bodily functions and enabling thought, emotion, and memory. It i<span data-gap="0"></span> divided in<span data-gap="1"></span> several reg<span data-gap="2"></span>, each wi<span data-gap="3"></span> specific ro<span data-gap="4"></span>. The cerebrum, i<span data-gap="5"></span> largest pa<span data-gap="6"></span>, is invo<span data-gap="7"></span> in cogn<span data-gap="8"></span> functions su<span data-gap="9"></span> as reasoning, planning, and language. The cerebellum coordinates movement and balance, while the brainstem controls vital bodily functions like breathing and heart rate. Together, they enable the brain to perform its various tasks.`,
      answersByGap: { "0": "s", "1": "to", "2": "ions", "3": "th", "4": "les", "5": "ts", "6": "rt", "7": "lved", "8": "itive", "9": "ch" }
    }
  ],

  emails: [
        {
      title: "Email",
      meta: "Municipal Charter<br>Sign up for paperless billing statements today.",
      stimulusHtml: `
        <p>Safe, convenient, easy. Enroll in paperless billing to receive monthly savings account statements in an electronic PDF document. Access your Municipal Charter account through the mobile app and select account preferences in the upper right-hand corner to enroll.</p>
      `,
      items: [
        {
          stemHtml: "What type of business issued the notice?",
          options: ["An Internet provider", "A computer company", "A paper company", "A bank"],
          answerIndex: 3
        },
        {
          stemHtml: "How can customers enroll in paperless billing?",
          options: ["By visiting a Municipal Charter office", "By accessing the Municipal Charter website", "By using the Municipal Charter app", "By calling a Municipal Charter customer service representative"],
          answerIndex: 2
        }
      ]
    },
    {
      title: "Email",
      meta: "Art",
      stimulusHtml: `
        <p><img src="../data2026/1/email2.png"></p>
      `,
      items: [
        {
          stemHtml: "When is the date of the art workshop?",
          options: ["September 10th", "September 12th", "September 20th", "September 30th"],
          answerIndex: 2
        },
        {
          stemHtml: "What should Ms. Edwards bring to the workshop?",
          options: ["A payment method", "Extra paint", " A protective garment", "Proof of reservation"],
          answerIndex: 2
        }
      ]
    },
  ],

  dailies: [
    {
      title: "Campus Notice",
      meta: "Café Hours",
      stimulusHtml: `<p><img src="../data2026/1/email1.png"></p>`,
      items: [
        {
          stemHtml: `What is the main purpose of the post?`,
          options: ["To explain the benefits of organic farming", "To describe the variety of products available at the farmer’s market", "To compare different farmer’s markets in the area", "To offer advice on starting a stall at the farmer’s market"],
          answerIndex: 1
        },
        {
          stemHtml: "What reason is given for the popularity of the Thompson family’s stall?",
          options: ["They offer cooking tips and recipes.", "They offer the lowest prices at the market.", "They provide friendly service and excellent products.", "They have a beautiful and well-decorated stall."],
          answerIndex: 2
        },
        {
          stemHtml: "Why do customers go to the bakery stall early?",
          options: ["To get the free samples given in mornings", "To get freshly baked bread and pastries before they are gone", "To meet the famous baker", "To take advantage of early morning discounts"],
          answerIndex: 1
        }
      ]
    },
    {
      title: "Email",
      meta: "Read an email",
      stimulusHtml: `<p><img src="../data2026/1/email3.png"></p>`,
      items: [
        {
          stemHtml: "What is the main purpose of the email?",
          options: ["To attract customers to a new fitness center", "To provide Ms. Nguyen with an opportunity to provide expert personal training", "To celebrate Ms. Nguyen’s achievements in wellness", "To announce a discount available to fitness-center members"],
          answerIndex: 0
        },
        {
          stemHtml: "What can be inferred about Ms. Nguyen’s relationship with the fitness center?",
          options: ["She helps the fitness center to organize activities.", " She has already explored the new facility.", "She is a member at one of the fitness center’s other locations.", "She is new to using fitness centers and exercise equipment."],
          answerIndex: 2
        },
        {
          stemHtml: "The new fitness center is intended for use by which of the following groups of people?",
          options: ["Expert personal trainers", "Top-tier athletes", " Existing fitness-center members", "Community members of all fitness levels"],
          answerIndex: 3
        }
      ]
    }
  ],

  academics: [
    {
      title: "The Mirror Test",
      passageHtml: `
        <p>
&nbsp;Very young children cannot recognize themselves in a mirror; they usually achieve this <span data-token="w1">milestone</span> around 18 months of age. The ability to recognize oneself in the mirror is considered to be a key component of self-awareness and consciousness for humans. But what about animals?
<br><br>
&nbsp;For many years, scientists have known that members of the great ape family could recognize themselves in mirrors. They measured this by the “mirror test,” which involved putting a colored mark on an ape’s body, and then showing the ape its reflection in a mirror. If the ape tried to remove the mark on its own body, the scientists knew that the ape was recognizing its reflection.
<br><br>
&nbsp;Apes are close relatives of humans, but in recent years, scientists have discovered that other animals also pass the “mirror test.” Elephants and dolphins have shown signs of self-recognition. These, like apes, are highly intelligent animals. But in a more recent experiment, a type of fish called the cleaner fish tried to scrape a mark off its body when it saw itself in the mirror. This suggests that even less intelligent animals may possess more self-awareness than previously suspected.

        </p>
      `,
      items: [
        {
          stemHtml: "What is the passage mainly about?",
          options: ["Stages of early childhood development", "Research on animal cognition", "Differences between apes, elephants, and dolphins", "Recent experiments on fish"],
          answerIndex: 1
        },
        {
          type: "vocab",
          token: "w1",
          stemHtml: `The word <em>milestone</em> in the first sentence is closest in meaning to`,
          options: ["multifaceted", "temporary", "confusing", "ancient"],
          answerIndex: 0
        },
        {
          stemHtml: "Why did scientists put colored marks on animals’ bodies?",
          options: ["It made it possible to track the animals’ movements.", "It helped them determine whether the animals recognized themselves.", "It made it easier to tell the animals apart.", "It showed whether some animals can detect color differences."],
          answerIndex: 1
        },
        {
          stemHtml: " According to the passage, all of the following are true about elephants EXCEPT:",
          options: ["They can recognize themselves in mirrors.", "They are highly intelligent animals.", "They possess qualities in common with apes.", "They understand certain signs from other animals."],
          answerIndex: 3
        },
        {
          stemHtml: "Why does the author mention cleaner fish?",
          options: ["To suggest that a wide range of animals may possess self-awareness", "To imply that ocean animals are highly intelligent", "To demonstrate a flaw in a recent experiment", "To provide an example of an animal that does not recognize itself"],
          answerIndex: 0
        }
      ]
    },
    {
      title: "The Paradox of Choice",
      passageHtml: `
        <p>
&nbsp;The paradox of choice, a concept popularized by psychologist Barry Schwartz, suggests that more options can lead to less satisfaction. While the freedom to choose is fundamental to consumer culture, an overabundance of choices—from groceries to electronics—can overwhelm individuals, causing anxiety and decision fatigue. This paradox implies that the vast array of possibilities available today might actually diminish consumer contentment, as the fear of making the wrong choice looms large.
<br><br>
&nbsp;Research supports this notion. In an experiment, psychologist Sheena Iyengar found that shoppers were more likely to purchase jam when offered 6 varieties instead of 24. The limited selection eased the decision process, reducing the pressure to find the ‘perfect’ option and making the experience more enjoyable. This phenomenon reveals that fewer choices can sometimes make consumers happier, which is a valuable insight for marketers and retailers aiming to boost satisfaction by <span data-token="w2">curating</span> their offerings.
<br><br>
&nbsp;The paradox also has broader implications. In individualistic cultures, where personal choice is highly valued, the burden of decision-making can be significant. Conversely, collectivist cultures, which often provide fewer choices, report higher levels of contentment. This dynamic suggests that understanding cultural differences in consumer psychology can help businesses optimize their product strategies and enhance overall well-being.
</p>
      `,
      items: [
        {
          stemHtml: "Which of the following best states a main idea of the passage?",
          options: [" Effective marketing strategies focus on increasing product options.", "Modern consumer culture is driven by a demand for fewer products.", "Individualism enhances consumer contentment.", "Limiting consumer choices can lead to higher satisfaction."],
          answerIndex: 3
        },
        {
          stemHtml: "What is one effect of decision fatigue as mentioned in the passage?",
          options: ["Desire to make the same choices as other consumers", "Anxiety about making the wrong choice", "Preference for consumer cultures", "Enhanced freedom to choose"],
          answerIndex: 1
        },
        {
          stemHtml: "Why does the author mention Sheena Iyengar’s experiment?",
          options: ["To highlight the effectiveness of marketing strategies", "To explain the methodology used in consumer psychology", "To provide evidence supporting the paradox of choice", "To criticize the abundance of products in modern markets"],
          answerIndex: 2
        },
        {
          type: "vocab",
          token: "w2",
          stemHtml: `The word <em>curating</em> in the passage is closest in meaning to`,
          options: ["eliminating", "organizing", "increasing", "changing"],
          answerIndex: 1
        },
        {
          stemHtml: "What can be inferred about consumers in collectivist cultures?",
          options: ["They tend to report lower levels of satisfaction.", "They are more affected by the paradox of choice.", "They generally have fewer choices available.", "They prefer individual decision-making."],
          answerIndex: 2
        }
      ]
    }
  ]
};
