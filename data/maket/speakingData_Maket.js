window.questions = [
    {
        type: 'independent',
        intro: '/data/X/audioSpWr/1.1.mp3',
        prompt: `prompt`,
        prepTime: 15,
        recordTime: 45
    },
    {
        type: 'integrated',
        intro: ["/data/X/audioSpWr/2.1.mp3"],
        prompt: `<div class="q2">
          <h1 style="text-align:center;">Title</h1>
          <p>
           Text
          </p>
          <p><strong>You will then listen to a conversation.</strong></p>
        </div>`,
        ques: `question`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/X/audioSpWr/2.2.mp3", "/data/X/audioSpWr/2.3.mp3"]
    },
    {
        type: 'integrated',
        intro: ["/data/X/audioSpWr/3.1.mp3"],
        prompt: `<div class="q3">
          <h1 style="text-align:center;">Title</h1>
          <p>
            Text
          </p>
          <p><strong>You will then listen to a lecture.</strong></p>
        </div>`,
        ques: `question`,
        prepTime: 30,
        recordTime: 60,
        readTime: 45,
        audioSrc: ["/data/X/audioSpWr/3.2.mp3", "/data/X/audioSpWr/3.3.mp3"]
    },
    {
        type: 'listening',
        prompt: 'You will now listen to a lecture.',
        ques: `question`,
        prepTime: 30,
        recordTime: 60,
        audioSrc: ["/data/X/audioSpWr/4.1.mp3", "/data/X/audioSpWr/4.2.mp3"]
    }
];



//file-i anuny speakingData_TestX X-y testi hamary
//audionery shat en amen harci hamar linkerov sax petqa qashenq anunnery vonc sra mecha tenc dnenq
// independenti hamar mihat audio vor harcna asum u questioni texty poxel
//2-i u 3-i hamar audioenery 3 hat poxum enq Title, Text, question
//4-i hamar 3 hat audio, u poxum enq questiony
// 2, 3 u 4 i hamar questionTypeX mnuma nuyn dzev misht vonc ka, nor audio dra hamar qashel petchi menak poxvuma 2.1 2.2 etc
//amen meki hamar htmlum option enq avelacnum
//audion kpcneluc listeningi pes /data/X x-y testi hamary