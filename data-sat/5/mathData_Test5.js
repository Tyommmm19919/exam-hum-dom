window.satMathData = {
    testId: "1",
    section: "math",
    meta: {
        calculatorAllowed: true, // entire digital SAT Math allows calculator
        modules: [
            { id: 1, timeSeconds: 35 * 60 },
            { id: 2, timeSeconds: 35 * 60 }
        ],
        // Optional: your UI can color by skill/domain if you want
        domains: [
            "MATH"
        ]
    },
    items: [
        {
            id: "M1-01",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If 4r-35=4s +13, what is the value of r-s?</p>`,
            options: [`9`, `10`, `12`, `16`],
            correct: 2
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-y²=35<br>x+y=5<br>In the system of equations above, which of the
following is the value of x?</p>`,
            options: [`5`, `6`, `7`, `8`],
            correct: 1
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(x-<math>
  <mfrac>
    <mn>1</mn>
    <mn>x</mn>
  </mfrac>
</math>)²+4<br>Which ofthe following is equivalent to the
expression shown above?
</p>`,
            options: [`x²-<math>
  <mfrac>
    <mn>1</mn>
    <mn>x²</mn>
  </mfrac>
</math>+4`, `x²+<math>
  <mfrac>
    <mn>1</mn>
    <mn>x²</mn>
  </mfrac>
</math>+4`, `(x+<math>
  <mfrac>
    <mn>1</mn>
    <mn>x</mn>
  </mfrac>
</math>)²`, `(x+<math>
  <mfrac>
    <mn>1</mn>
    <mn>x</mn>
  </mfrac>
</math>)²-4`],
            correct: 2
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.4.png"><br>Note: Figure not drawn to scale.<br>In the triangle above, a = 3x+20 and b =x-10. If
cos a = sin b, what is the value of x?
</p>`,
            options: [`20`, `25`, `28`, `30`],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.5.png"><br>In the triangle above, the length of AB is 20. What
is the area of triangle ABC?</p>`,
            options: [`50<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`, `25<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`, `<math>
  <mfrac>
    <mrow>
      <mn>25</mn>
      <msqrt>
        <mn>3</mn>
      </msqrt>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mrow>
      <mn>50</mn>
      <msqrt>
        <mn>3</mn>
      </msqrt>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math>`],
            correct: 0
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <msqrt>
    <mi>-6</mi>
  </msqrt>
</math>⋅<math>
  <msqrt>
    <mi>-24</mi>
  </msqrt>
</math><br>If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math>,  which of the following is equivalent to
the expression shown above?</p>`,
            options: [`12`, `-12`, `12i`, `-12i`],
            correct: 1
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 7 and 8 refer to the following
information.<br>P(t)=b+at<br>Jessie purchased a micro oven for $750. After 10 years,
the value of the oven will be $0. The value Pof the
oven during year t is modeled by the equation above,
where a and b are constants.<br>Based on the information above, what is the value of
a?

</p>`,
            options: [`75`, `50`, `-10`, `-75`],
            correct: 3
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 7 and 8 refer to the following
information.<br>P(t)=b+at<br>Jessie purchased a micro oven for $750. After 10 years,
the value of the oven will be $0. The value Pof the
oven during year t is modeled by the equation above,
where a and b are constants.<br>In how many years will the value of the micro oven
be decreased by $180?</p>`,
            options: [`2.4`, `4`, `4.5`, `5`],
            correct: 0
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>P=<math>
  <mfrac>
    <mn>A-d</mn>
    <mn>B+d</mn>
  </mfrac>
</math><br>A tire repair center uses the formula above to
calculate the pressure of tire, where d is the
diameter of the tire. Which of the following
expresses d in terms of the other variables?</p>`,
            options: [`d=<math>
  <mfrac>
    <mn>P-PB</mn>
    <mn>A-1</mn>
  </mfrac>
</math>`, `d=<math>
  <mfrac>
    <mn>A-P</mn>
    <mn>B-1</mn>
  </mfrac>
</math>`, `d=<math>
  <mfrac>
    <mn>A-PB</mn>
    <mn>P+1</mn>
  </mfrac>
</math>`, `d=<math>
  <mfrac>
    <mn>A-1</mn>
    <mn>P-B</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.10.png"><br>In the cube above, the length of diagonal PQ is
12. What is the surface area of the cube?</p>`,
            options: [`27`, `64`, `150`, `288`],
            correct: 3
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>On a car trip Adam drove 50 miles more than half
the number of miles Benjamin drove. If together they
drove 500 miles, how many miles did Adam drive?</p>`,
            options: [`200`, `250`, `300`, `350`],
            correct: 0
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>Plan</th>
    <th>Monthly Fee</th>
    <th>Cost/Minute</th>
  </tr>
  <tr>
    <td>A</td>
    <td>$25</td>
    <td>$0.20</td>
  </tr>
  <tr>
   <tr>
    <td>B</td>
    <td>$40</td>
    <td>$0.08</td>
  </tr>
  <tr>
    
  </tr>
</table><br>A cellular phone company offers two different phone
plans shown in the table above. What is the number
of minutes when the total cost is the same for both
plans?
</p>`,
            options: [`80`, `95`, `100`, `125`],
            correct: 3
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>10x+5</mn>
    <mn>x-1</mn>
  </mfrac>
</math>
<br>Which of the following is equivalent to the
expression above?
</p>`,
            options: [`-15`, `<math>
  <mfrac>
    <mn>5</mn>
    <mn>x-1</mn>
  </mfrac>
</math>-10
`, `<math>
  <mfrac>
    <mn>5</mn>
    <mn>x-1</mn>
  </mfrac>
</math>+10`, `<math>
  <mfrac>
    <mn>15</mn>
    <mn>x-1</mn>
  </mfrac>
</math>+10`],
            correct: 3
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.14.png"><br>A tiger is 500 feet from its prey. It starts to sprint
toward its prey at 88 feet per second. At the same
time, the prey starts to sprint in the same direction at
p feet per second. The tiger catches its prey in 20
seconds. The graphs shown above represent this
relationship. Based on the graphs, what is the value
of p?
</p>`,
            options: [`50`, `63`, `70`, `72`],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>P(x)=(x-2)Q(x)+R<br>The equation above shows when P(x) is divided by
(x-2), the remainder is R, where Q(x) is the
quotient. If P(x) =5x²-3x +4, what is the value of
R?</p>`,
            options: [`4`, `6`,`12`, `18`],
            correct: 3
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>ax+by-2=0<br>
In the function above, a and b are constants. If the
graph of the function has a negative slope and a
negative y-intercept, which of the following is true?</p>`,
            options: [`a=0`, `a>0`, `a<0`, `a≥0`],
            correct: 2
        },
        {
            id: "M1-17",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.17.png"><br>In the figure above, OP and OS of sector OSP are
radii and the length of AC ofrectangle ABCO is 10.
If the measure of angle ACO is 60°, which
of the following is closest to the area of the shaded
region?</p>`,
            options: [`30`, `32`, `35`, `40`],
            correct: 2
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>R²-S²=19<br>In the equation above, if R and S are positive
integers, what is the value of R?
</p>`,
            correct: { answers: ["10"], numeric: 10, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>
In reading group A with 90 students, there are 4
boys for every 5 girls. In the other reading group,
B, there are 3 boys for every 2 girls. If these two
groups are combined, the ratio of boys to girls will
be 10:9. How many students are in the reading
group B?</p>`,
            correct: { answers: ["100"], numeric: 100, tolerance:0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(a-1)x²+(b-2)x+c=0<br>In the equation above, a, b, and c are constants. If
the equation is true for all values of x, what is the
value of a+b+c?
</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>3x+py=12<br>rx+5y=6<br>In the system of equations above, p and r are
constants. If the system has infinitely many
solutions, what is the value of <math>
  <mfrac>
    <mn>p</mn>
    <mn>r</mn>
  </mfrac>
</math> ?</p>`,
            correct: { answers: ["20/3", "6.6667"], numeric: 6.6667, tolerance: 1e-6 }
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/1.22.png"><br>In the figure above, D and E are the midpoints of
AB and BC respectively. If the area of the shaded
region is 42, what is the area of triangle ABC?</p>`,
            correct: { answers: ["56"], numeric: 56, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>A local telephone company charges $30 for the first
400 texts with additional texts over 400 costing
$0.08 per text. If Jessie uses n texts, n > 400, which
of the following expressions represents her total cost
in dollars?
</p>`,
            options: [`0.08n+30`, `0.08 +30(400)`, `0.08(n-400) +30`, `0.08(n-400) +30(400)`],
            correct: 2
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Robert earns P dollars in 4 days. At this rate how
many days will it take him to earn S dollars?
</p>`,
            options: [`4S`, `<math>
  <mfrac>
    <mn>4P</mn>
    <mn>S</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>S</mn>
    <mn>4P</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>4S</mn>
    <mn>P</mn>
  </mfrac>
</math>`],
            correct: 3
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If f(x-5) =5x-14, which of the following is the
value of f(2)?</p>`,
            options: [`-4`, `-3`, `15`, `21`],
            correct: 3
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>Gender</th>
    <th>Seniors</th>
    <th>Juniors</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Boys</td>
    <td>15</td>
    <td></td>
    <td>22</td>
  </tr>
  <tr>
    <td>Girls</td>
    <td></td>
    <td>23</td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td>45</td>
    <td></td>
    <td></td>
  </tr>
  <tr><br>A certain reading group consists of only senior and
junior students. The incomplete table above shows
the number of students. How many students are in
the reading group?
</p>`,
            options: [`68`, `75`, `79`, `85`],
            correct: 1
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following
information.<br>The length of a spring varies directly as the amount
of weight attached to it. When a weight of 10 grams
is attached, the spring is stretched to 25 centimeters.<br>Which of the following is the equation that relates
the weight W and the length L of the spring?</p>`,
            options: [`L=15W`, `L=0.8W`, `L=2.5W`, `L=2.5W+25`],
            correct: 2
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following
information.<br>The length of a spring varies directly as the amount
of weight attached to it. When a weight of 10 grams
is attached, the spring is stretched to 25 centimeters.<br>What is the number of grams that stretches a spring
33 centimeters?
</p>`,
            options: [`12.8
`, `13.2`, `15`, `18`],
            correct: 1
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>p(x)=20x-k<br>The profit p, in dollars, from a car wash is given by
the function above, where x is the number of cars
washed and k is a constant. When 40 cars were
washed today, the profit was $500. If the owner
wants to make a profit of at least $650, how many
more cars should be washed?
</p>`,
            options: [`7`, `8`, `23`, `25`],
            correct: 1
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If 4<sup>a+b</sup>=8 and 9<sup>a-b</sup>=81, what is the value of
a²-b²?
</p>`,
            options: [`3`, `8`, `12`, `15`],
            correct: 0
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If f(x-2)=3x-5 for all values of x, which of
the following is the expression for f(x)?
</p>`,
            options: [`f(x)=3x-1
`, `f(x)=3x+1`, `f(x)=3x+2
`, `f(x)=3x+3`],
            correct: 1
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/2.10.png"><br>In the xy-plane above, line l is perpendicular to
line m. Which of the following points lies on line
l?
</p>`,
            options: [`(1, 2)`, `(3,4)`, `(5,7)`, `(6,9)
`],
            correct: 3
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>5a+b+4i= (a-2b)+ki<br>In the equation above, a, b, and k are constants. If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math>, what is the value of <math>
  <mfrac>
    <mn>a</mn>
    <mn>b</mn>
  </mfrac>
</math> ?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>4</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>3</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>3</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>41</mn>
    <mn>3</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>v(t)=490-9.8t<br>A bullet is shot up into the air from ground level. The
equation above shows the velocity, v, of the bullet, in
meters per second, after t seconds. According to the
model, what is the meaning of the 9.8 in the
equation?
</p>`,
            options: [`Forevery increase of 1 second, the velocity
increases by 9.8 meters per second.`, `For every increase of 1 second, the velocity
decreases by 9.8 meters per second.`, `For every decrease of 1 second, the velocity
decreases by 9.8 meters per second.`, `For every decrease of 9.8 second, the velocity
increases by 490 meters per second.
`],
            correct: 1
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>ax+by=5<br>In the equation above, a and b are non-zero
constants. If a+b=0, which of the following
must be true about the graph in the xy-plane?</p>`,
            options: [`The slope of the graph is negative.`, `The slope of the graph is positive.`, `The slope of the graph is zero.`, `The slope of the graph is undefined.
`],
            correct: 1
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Claire first walked one third of the way from home
to her friend's house for a birthday party. For the
rest of the way to her friend's house, she ran 4
times as fast as she walked. If she took 14 minutes
to walk one third of the way, how many minutes
did it take her to get from home to her friend's
house?
</p>`,
            options: [`21`, `24`, `28`, `35`],
            correct: 0
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>1</mn>
    <mn>8</mn>
  </mfrac>
</math>x-<math>
  <mfrac>
    <mn>1</mn>
    <mn>4</mn>
  </mfrac>
</math>y=1<br><math>
  <mfrac>
    <mn>1</mn>
    <mn>10</mn>
  </mfrac>
</math>x+<math>
  <mfrac>
    <mn>1</mn>
    <mn>5</mn>
  </mfrac>
</math>y=2<br>In the system of equations above, point (a, b) is the
solution of the system. What is the value of a+b?</p>`,
            options: [`10`, `13`, `17`, `20`],
            correct: 2
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 16 and 17 refer to the following
information.<br>h=v<sub>0</sub>t-<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>gt²+40<br>A rocket is launched from a height of 40 meters with
an initial speed of 196 meters per second. The
equation above describes the height h and the initial
speed vo of the rocket, where t is the time elapsed
since the rocket is launched and g is the acceleration
due to gravity (9.8 m/s²).<br>How long will it take for the rocket to reach its
maximum height in seconds?

</p>`,
            options: [`15`, `20`, `25`, `30`],
            correct: 1
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 16 and 17 refer to the following
information.<br>h=v<sub>0</sub>t-<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>gt²+40<br>A rocket is launched from a height of 40 meters with
an initial speed of 196 meters per second. The
equation above describes the height h and the initial
speed vo of the rocket, where t is the time elapsed
since the rocket is launched and g is the acceleration
due to gravity (9.8 m/s²).<br>What is the maximum height, in meters, of the
rocket from the ground?
</p>`,
            options: [`1200`, `1600`, `2000`, `2400`],
            correct: 2
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/2.18.png"><br>In the figure above, DE FG AC and
AF =FD= DB. If the area of AFGC is 20, what is
the area of the shaded region?</p>`,
            correct: { answers: ["12"], numeric: 12, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/2.19.png"><br>Note: Figure not drawn to scale.<br>The xy-plane above shows the graphs of two
quadratic functions and a rectangle. Points
A, B,C, and D lie on the graphs of y=x² and
y=-x² respectively. Ifthe area ofrectangle
ABCD is 108, what is the length of BC?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>5s-2t-1=-a<br>-8s+bt-2=2<br>In the system of equations above, a and b are
constants. If the system has infinitely many
solutions, what is the value of a?
</p>`,
            correct: { answers: ["7/2", "3.5"], numeric: 3.5, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/5/2.21.png"><br>In the figure above, circle O is tangent to the sides of
triangle ABC. If AB=10 and BC=6, what is the
circumference of the circle to the nearest tenth?</p>`,
            correct: { answers: ["63/5", "12.6"], numeric: 12.6, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>f(x)=3x³-8x²+5x-k<br>In the polynomial function above, k is a constant.
If (x-2) is a factor of f(x), what is the value of
k?
</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        
    ]
};