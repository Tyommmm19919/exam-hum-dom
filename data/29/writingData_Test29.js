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
        
A little over 2,200 years ago, the Roman navy attacked the Greek port city of Syracuse. According to some ancient historians, the Greeks defended themselves with an ingenious weapon called a "burning mirror": a polished copper surface curved to focus the Sun's rays onto Roman ships, causing them to catch fire. However, we have several reasons to suspect that the story of the burning mirror is just a myth and the Greeks of Syracuse never rally built such a device.
<br><br>
First, the ancient Greeks were not technologically advanced enough to make such a device. A mirror that would focus sunlight with sufficient intensity to set ships on fire would have to be several meters wide. Moreover, the mirror would have to have a very precise parabolic curvature(a curvature derived from a geometric shape known as the parabola). The technology for manufacturing a large sheet of copper with such specifications did not exist in the ancient world.
<br><br>
Second, the burning mirror would have taken a long time to set the ships on fire. In an experiment conducted to determine whether a burning mirror was feasible, a device concentrating the Sun's rays on a wooden object 30 meters away took ten minutes to set the object on fire: and during that time, the object had to be unmoving. It is unlikely that Roman ships stayed perfectly still for that much time, Such a weapon would therefore have been very impractical and ineffective.
<br><br>
Third, a burning mirror does not seem like an improvement on a weapon that the Greeks already had: flaming arrows. Shooting at an enemy's ships with flaming arrows was a common way of setting the ships on fire. The burning mirror and flaming arrows would have been effective at about the same distance. So the Greeks had no reason to build a weapon like a burning mirror.



        <br><br>`,
        audioSrc: '/data/29/audio/writingAudio.mp3',
        timeLimit: 20 * 60
    },
    {
        type: 'independent',
        directions: `<h3>Instructions: Write a post responding to the professor's question. In your response you should: express and support your personal opinion make a contribution to the discussion. An effective response will contain at least 100 words.</h3><br><br>`,
        question: `

<strong style = "text-align: center;">Dr. Diaz</strong><br>

As I mentioned in class, technology plays a vital role in shaping the modern world. However, there is an ongoing debate about the balance between privacy and security in the digital age. Governments often grapple with the challenge of finding the right approach to protecting citizens' privacy while ensuring national security. If you were a policy maker, which issue would you argue is more important—protecting privacy or ensuring national security? Why?

<br><br>

<strong style = "text-align: center;">Karen</strong><br>

Protecting privacy should take precedence. It is a fundamental right that safeguards personal freedom and autonomy. Respecting privacy builds trust between citizens and the government. Furthermore, privacy protections can be implemented without compromising national security measures.


<br><br>

<strong style = "text-align: center;">Brad</strong><br>

I respectfully disagree with Karen. Ensuring national security should be the priority. In a constantly evolving threat landscape, it is crucial to safeguard the well-being of the nation and its citizens. National security measures may involve limited intrusions on privacy, but they are necessary for maintaining a safe and secure society.


<br>
        `,
        timeLimit: 10 * 60
    }
];
