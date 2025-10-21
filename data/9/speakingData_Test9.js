window.questions = [
    {
        type: 'independent',
        intro: '/data/9/audioSpWr/1.1.mp3',
        prompt: `Do you agree or disagree with the following statement? Use details and examples to explain your answer. All children should be required to learn a second language in school.`,
        prepTime: 15,
        recordTime: 45
    },
    {
        type: 'integrated',
        intro: ["/data/9/audioSpWr/2.1.mp3"],
        prompt: `<div class="q2">
          <h1 style="text-align:center;">Student Art Display</h1>
          <p>
The university is currently considering possible locations on campus for displaying paintings and other artwork by students. I think the lobby at the entrance to the student center would be a great location. Since many students pass through the Student center every day, artwork displayed in the lobby would be viewed by hundreds of people. Also, because the whole front of the building is made of glass window, the lobby is filled with natural light. This makes it perfect for displaying artwork, which should have plenty of light to be seen and appreciated.
<br>Sincerely yours, Paul Sands.
          </p>
          <p><strong>You will then listen to a conversation.</strong></p>
        </div>`,
        ques: `Briefly summarize the proposal in the student’s letter. Then state her opinion about the proposal and explain the reasons she gives for holding that opinion.`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/9/audioSpWr/2.2.mp3", "/data/9/audioSpWr/2.3.mp3"]
    },
    {
        type: 'integrated',
        intro: ["/data/9/audioSpWr/3.1.mp3"],
        prompt: `<div class="q3">
          <h1 style="text-align:center;">Entertainment Merchandising</h1>
          <p>
            An effective, widely used marketing practice in the entertainment industry is entertainment merchandising. Entertainment merchandising is a form of marketing in which the brand or image from one product is also used to sell another. The practice of entertainment merchandising often occurs in connection with movies and television shows, especially those associated with children. For example, the success of a popular children’s television show may result in the marketing of toys that are designed to look like characters in the show. Or the situation may be reversed when a children’s television show is written to include characters that are based on already-popular toys.
          </p>
          <p><strong>You will then listen to a lecture.</strong></p>
        </div>`,
        ques: `Using the examples from the lecture, explain the concept of Entertainment Merchandising.`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/9/audioSpWr/3.2.mp3", "/data/9/audioSpWr/3.3.mp3"]
    },
    {
        type: 'listening',
        prompt: 'You will now listen to a lecture.',
        ques: `Using the points from the lecture explain why researchers think that babies may feel empathy.`,
        prepTime: 30,
        recordTime: 60,
        audioSrc: ["/data/9/audioSpWr/4.1.mp3", "/data/9/audioSpWr/4.2.mp3"]
    }
];
