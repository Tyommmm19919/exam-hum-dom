window.questions = [
    {
        type: 'independent',
        intro: '/data/21/audioSpWr/1.1.mp3',
        prompt: `Do you agree or disagree with the following statement: Children should be required to learn practical skills in school, such as cooking or personal finance, in addition to academic subjects. Use details and examples to explain your opinion.`,
        prepTime: 15,
        recordTime: 45
    },
    {
        type: 'integrated',
        intro: ["/data/21/audioSpWr/2.1.mp3"],
        prompt: `<div class="q2">
          <h1 style="text-align:center;">University announces changes in campus tour guide</h1>
          <p>
           Traditionally, staff from the admission office has led the secondary-students who are considering attending the university. Beginning the next semester, however, current students will lead these guided walks around campus instead. “The staff of the admission office no longer have the time to lead campus tour, we need to focus our resources on our other responsibilities,” explained Christine Tanner, the director of admission. “Furthermore, we feel that current student will offer unique and valuable insight to our visitors during these campus tours”.
          </p>
          <p><strong>You will then listen to a conversation.</strong></p>
        </div>`,
        ques: `The woman expresses her opinion about the university’s plan. Briefly summarize the plan. Then state her opinion about the plan and explain the reasons she give s for holding that opinion.`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/21/audioSpWr/2.2.mp3", "/data/21/audioSpWr/2.3.mp3"]
    },
    {
        type: 'integrated',
        intro: ["/data/21/audioSpWr/3.1.mp3"],
        prompt: `<div class="q3">
          <h1 style="text-align:center;">Irrational Commitment</h1>
          <p>
            When people have devoted time and resources to a certain project, they generally wanted to see it succeed. However, they may grow so attached to the idea of a successful outcome that even if it starts to look like the project will fail, and the disadvantages are outweighing the benefits; they will nevertheless increase their attachment to the project rather than give up. This is known as irrational commitment. This tendency to continue with a project when it would make better sense to quit can be especially strong when people feel they may be judged by others for their eventual success or failure with the project.
          </p>
          <p><strong>You will then listen to a lecture.</strong></p>
        </div>`,
        ques: `Explain how the example from the professor’s lecture illustrates irrational comment.`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/21/audioSpWr/3.2.mp3", "/data/21/audioSpWr/3.3.mp3"]
    },
    {
        type: 'listening',
        prompt: 'You will now listen to a lecture.',
        ques: `Using the example of the mole, explain two different types of underground adaptation.`,
        prepTime: 30,
        recordTime: 60,
        audioSrc: ["/data/21/audioSpWr/4.1.mp3", "/data/21/audioSpWr/4.2.mp3"]
    }
];
