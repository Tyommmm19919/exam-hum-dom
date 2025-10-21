window.writingTasks = [
    {
        type: 'integrated',
        directions: `Directions: You have 20 minutes to plan and write your response. Your response will be judged on the basis of 
        the quality of your writing and on how well your response presents the points in the lecture and their relationship to the 
        reading passage. Typically an effective response will be 150 to 225 words.
        <br><br><h3>Question: 
        Summarize the points made in the lecture, being sure to explain how they respond to the specific points made reading passage.
        </h3>`,
        readingPassage: `<h2>Reading Passage</h2> 
        
        Text

        <br><br>`,
        audioSrc: '/data/2/audioSpWr/writingAudio.mp3',
        timeLimit: 20 * 60
    },
    {
        type: 'independent',
        directions: `<h3>Instructions: Write a post responding to the professor's question. In your response you should: express and support your personal opinion make a contribution to the discussion. An effective response will contain at least 100 words.</h3><br><br>`,
        question: `

Doc/profText

<br><br>

St1Text

<br><br>

St2Text

<br>
        `,
        timeLimit: 10 * 60
    }
];


//file-i anuny writingData_TestX x-y testi hamary
//1-um poxum enq questiony(directionnery naxaverchi toxy) mekel texty, audioin qashum nuyn anunov dnum audioSpWr file-i mech
//2-um poxum enq menak questiony
//htmlum avelacnum enq option ira valueov 