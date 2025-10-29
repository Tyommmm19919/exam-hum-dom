





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
            skill: "MATH",
            prompt:
                `<p>If 
<math>
  <mfrac>
    <mn>2x - 3</mn>
    <mn>2</mn>
  </mfrac>
</math> = k - 1 and k =5, what is the value of 2x?</p>`,
            options: ["4", " 5.5", "8", "11"],
            correct: 3
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>(5+31)-(8-2i) =a +bi<br> In the equation above, a and b are real numbers.
If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math>, what is the value of b?
</p>`,
            options: ["-1", "1", "-5", "5"],
            correct: 3
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If Claire paid & dollars for a computer that was only
20 dollars more than halfthe original price, what
was the original price, in dollars?
</p>`,
            options: ["k+20", "k-40", "2k-20", "2k-40"],
            correct: 3
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>Jenny is on the school swim team and has swim
practice m hours in the morning and p hours in the
evening each day. The schedule is the same each day.
If she swims a total of k hours for five days, which of
the following is the expression for т?</p>`,
            options: [`
<p><math>
  <mfrac>
    <mn>k - p</mn>
    <mn>5</mn>
  </mfrac>
</math></p>`,
                `<p><math>
  <mfrac>
    <mn>k - 5p</mn>
    <mn>5</mn>
  </mfrac>
</math></p>`,
                `k - 5p`, `5(k - 5p)`],
            correct: 1
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>A certain business is marketing its product and has
determined that, when it raised the selling price of its
product, its sales went down. The number of units
sold, P, is modeled by the equation P =1200-20s,
where s is the selling price, in dollars. Based on this
model, what is the decrease in selling price from 700
units sold to 900 units sold?
</p>`,
            options: [`5`, `10`, `15`, `20`],
            correct: 1
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>
                (x<sup>2</sup>+ 
y<sup>2</sup>)<sup>2</sup> - (x<sup>2</sup>- 
y<sup>2</sup>)<sup>2</sup> <br> 
Which of the following is equivalent to the
expression above?

                 `,
            options: [`x<sup>4</sup> - y<sup>4</sup>`, `2(x<sup>2</sup> + y<sup>2</sup>)`, `2x<sup>2</sup>y<sup>2</sup>`, `4x<sup>2</sup>y<sup>2</sup>`],
            correct: 3
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>Kimberly earns & dollars per week. At this rate how
many weeks will it take her to earn p dollars?</p>`,
            options: [`<math>
  <mfrac>
    <mn>p</mn>
    <mn>k</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>k</mn>
    <mn>p</mn>
  </mfrac>
</math>`, `kp`, `<math>
  <mfrac>
    <mn>10p</mn>
    <mn>k</mn>
  </mfrac>
</math>`],
            correct: 0
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If <math>
  <mfrac>
    <mn>2a</mn>
    <mn>b</mn>
  </mfrac>
</math> = 5, what is the value of <math>
  <mfrac>
    <mn>5b</mn>
    <mn>a</mn>
  </mfrac>
</math></p>`,
            options: [`2`, `4`, `10`, `12.5`],
            correct: 0
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>2x+by=10<br>ax+4y=15<br>In the system of equations above, a and b are
constants and a =2b. Ifthe system has no solution,
which of the following could be a possible value of
a?
</p>`,
            options: [`-2`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `4`, `8`],
            correct: 2
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>f(x)= ax²-15<br>For the function f defined above, a is a constant
and f(3)=10. Which of the following is equal to
the vabue of f(5)?
</p>`,
            options: [`f(0)`, `f(3)`, `f(-3)`, `f(-5)`],
            correct: 3
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>A certainjob can be done in 20 hours by 4 people.
How many people are needed to do the same job in
10 hours?
</p>`,
            options: [`2`, `4`, `8`, `10`],
            correct: 2
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>Which of the following is equivalent
to f(x)=x²-6x+7?
</p>`,
            options: [`f(x)=(x+3)² +5`, `f(x)=(x-3)2+2`, `f(x)=(x-3)2-2`, `f(x)=(x-7)(x+1)`],
            correct: 2
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If 24x²-kx+16 = (3x+4)(ax-b) for all values
of x, where a,b, and k are constants, what is the
value of A?
</p>`,
            options: [`-44`, `-12`, `12`, `44`],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>In the xy-plane, the equation of line is
x+3y = 5. If line m is perpendicular to line ,
what is a possible equation of line т?</p>`,
            options: [`y=-<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>x+2`, `y=<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math> - 1`, `y=-3x+1`, `3x+<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>`],
            correct: 3
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If a+b=8 and <math>
  <mfrac>
    <mn>
27<sup>a</sup>
    </mn>
    <mn>
3<sup>b</sup>
    </mn>
  </mfrac>
</math>=81, what is the value of a</p>`,
            options: [`3`, `4`, `5`, `6`],
            correct: 0
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>In a right triangle, one ofthe angles is x". If
tan x=<math>
  <mfrac>
    <mn>5</mn>
    <mn>12</mn>
  </mfrac>
</math>, what is the value of sinx?</p>`,
            correct: { answers: ["5/13", "0.3648"], numeric: 5/13, tolerance: 1e-6 },
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>      <img src="../data-sat/1/q17.png"> <br> Dawson needs to measure the height of a building
near his house. He chooses a point P on the
ground where he can visually align the roof of his
car with the edge of the building roof. The height
of the car is 4 feet and the distance from point P
to point Q is 10 feet, as shown in the figure
above. Ifthe distance from point to point R is
80 feet, and the height ofthe building is k feet,
what is the value of k?
</p>`,
            correct: { answers: ["36"], numeric: 36, tolerance: 0 },
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If a(x+1)+b(x-1) =7x for all real number x,
where a and b are constants, what is the value of a?
</p>`,
            correct: { answers: ["3.5"], numeric: 3.5, tolerance: 0 },
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>According to the formula p =<math>
  <mfrac>
    <mn>4</mn>
    <mn>3</mn>
  </mfrac>
</math>k+81, if the value of 3
p is increased by 16, by how much does the value of
k increase?
</p>`,
            correct: { answers: ["12"], numeric: 12, tolerance: 7 },
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p> 
x<sup>2</sup>+
y<sup>2</sup> =56<br>
y= <math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math><br>
According to the system of equations above, what is
the value of x?</p>`,
            correct: { answers: ["7"], numeric: 7, tolerance: 0 },
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>
<table>
  <tr>
    <th>x</th>
    <th>f(x)</th>
  </tr>
    <tr>
    <td>1</td>
    <td>6</td>
  </tr>
  <tr>
    <td>2</td>
    <td>10</td>
  </tr>
    <tr>
    <td>3</td>
    <td>14</td>
  </tr>
    <tr>
    <td>4</td>
    <td>18</td>
  </tr>
    <tr>
    <td>5</td>
    <td>22</td>
  </tr>
    <tr>
    <td>1</td>
    <td>6</td>
  </tr>
</table><br> The selected values of a function shown in the table
above represent a linear function. Which of the
following equals ƒ(10)?

                </p>`,
            options: [`36`, `40`, `42`, `44`],
            correct: 2
        },
        {
            id: "M1-22",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If 3(a+ 2b-c)=12, what is the value of a +2b in
terms of c?
</p>`,
            options: [`3c-4`, `c-12`, `c+4`, `c-4`],
            correct: 2
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.3.png"></p><br>In the figure above, lines l and m are parallel.
If the measure of 1 is twice the measure of 2,
what is the measure of 1?
`,
            options: [`100°`, `120°`, `135°`, `145°`],
            correct: 1
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If 
8<sup>n</sup> x 4² = 210,what is the value of n?</p>`,
            options: [`2`, `3`, `4`, `5`],
            correct: 0
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>For what value of n is |n+4|+1 less than 0?</p>`,
            options: [`-5`, `-4`, `3`, `There is no such value of n`],
            correct: 3
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.6.png"><br>The equation of the graph of line in the xy - plane
above is y = mx +6, where m is a constant. If the
line passes through a point (3, 2), what is the value
of m?</p>`,
            options: [`-<math>
  <mfrac>
    <mn>4</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>1</mn>
    <mn>4</mn>
  </mfrac>
</math>`],
            correct: 0
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.8.png"><br>The graph above shows the test scores of 20 students.
Based on the histogram above, what is the average
(arithmetic mean) score on the test? </p>`,
            options: [`70`, `73`, `75`, `78`],
            correct: 3
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>In Ms. Lee's class, the number of boys is more than
twice the number of girls. There are at least 7 girls and
there are no more than 15 boys. How many students
are in the class?
</p>`,
            options: [`19`, `20`, `21`, `22`],
            correct: 3
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>h(t)=-16t²+128t+320<br>A science class determined that the motion of a ball
launched from the top of a 10-story building could be
described by the function above, where t represents
the time the ball is in the air in seconds and h, the
height in feet ofthe ball above the ground.
<br><br>What is the number of seconds it takes for the ball
to reach its peak?
</p>`,
            options: [`2`, `4`, `8`, `10`],
            correct: 1
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>h(t)=-16t²+128t+320<br>A science class determined that the motion of a ball
launched from the top of a 10-story building could be
described by the function above, where t represents
the time the ball is in the air in seconds and h, the
height in feet ofthe ball above the ground.
<br><br>At what time will the ball hit the ground? </p>`,
            options: [`5`, `8`, `10`, `12`],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>The perimeter of a rectangle is 54cm. If the length is
2 cm more than its width, what is the area of the
rectangle?
</p>`,
            options: [` 181.25cm²`, `728cm²`, ` 800cm²`, `820cm²`],
            correct: 0
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>3x-y>0<br>
2x+y>1<br>Which of the following is NOT a solution of the
system of inequalities above?</p>`,
            options: [`(3,0)`, `(2,5)`, `(0,-3)`, `(5,-8)`],
            correct: 2
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>Radioactive decay is an exponential function where the
amount, y, of radioactive material is reduced by onehalf over a certain period of time t. Material M has a
half- life of 50 years.<br><br>If there are 800 grams of radioactive material M,
which of the following best represents the decay
equation?
</p>`,
            options: [` y=800-400t`, `y=800(<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>)<sup>t</sup>`, `y=800(<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>)<sup><math>
  <mfrac>
    <mn>t</mn>
    <mn>5</mn>
  </mfrac>
</math></sup>`, `800(1-0.5t)`],
            correct: 2
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>Radioactive decay is an exponential function where the
amount, y, of radioactive material is reduced by onehalf over a certain period of time t. Material M has a
half- life of 50 years.<br><br>If there are 800 grams of radioactive material M, then
how much ofthis material would remain radioactive
after 200 years?</p>`,
            options: [`25 grams`, `50 grams`, `100 grams`, `200 grams`],
            correct: 1
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.17.png"><br>In the xy-plane above, the area of OPQ is 3.
What is the value of k?</p>`,
            options: [`2`, `4`, `6`, `8`],
            correct: 0
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>A circle in the xy-plane with center (4,0) passes
through point (7,4). Which of the following is the
equation of the circle?
</p>`,
            options: [`(x-4)<sup>2</sup> + y<sup>2</sup>=9`, `(x-4)<sup>2</sup> + y<sup>2</sup>=25`, `(x-4)<sup>2</sup> + y<sup>2</sup>=5`, `(x+4)<sup>2</sup> + y<sup>2</sup>=5`],
            correct: 1
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.19.png"><br>The graph ofthe function f is shown in the
xy-plane above. Which of the following is the
average rate of change between x =-3 and x = 6?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>2</mn>
    <mn>9</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>8</mn>
    <mn>9</mn>
  </mfrac>
</math>`, `2`, `It cannot be determined from the given
information.`],
            correct: 0
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.35.png"><br>Two cylinders shown above have the same volume.
If the radius of cylinder II is twice the radius of
cylinder I and the height of cylinder I is 10, what is
the height h of cylinder X?
</p>`,
            correct: { answers: ["5/2", "2.5"], numeric: 2.5, tolerance: 1e-6 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.36.png"><br>For what value of x is the function above
undefined?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>If a and b are positive integers and a²-b² =24,
which of the following could be the smallest value
of a?
</p>`,
            options: [`4`, `5`, `7`, `8`],
            correct: 1
        },
        {
            id: "M2-19",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.27.png"><br>The graph of y=<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>x(x-6)is shown in the xy-plane above. Which ofthe following are the
coordinates of vertex P?
</p>`,
            options: [`(3,-2) `, `(2,-4)`, `(3,-3)`, `(3,-4.5)`],
            correct: 2
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.33.png"><br>The graph of a linear function f is shown in the
xy-plane above. If f(k) =1, what is the value of
f(-2k)?</p>`,
      correct: { answers: ["7"], numeric: 7, tolerance: 0 }

        },
        {
            id: "M2-21",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p><img src="../data-sat/1/2.29.png"><br>The figure above shows a rectangular solid with width
x, length y, and height z. If xy = 20, yz = 10, and
xz =18, what is the volume of the solid?
</p>`,
            options: [`60`, `70`, `80`, `90`],
            correct: 0
        },
        {
            id: "M2-22",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "MATH",
            prompt:
                `<p>For O.K theater tickets, a ticket for an adult is 5
dollars more than a ticket for a child. If a group of 6
adults and 10 children pay a total of 142 dollars,
what is the cost, in dollars, of a ticket for one adult
and one child?
</p>`,
            options: [`19`, `18`, `17`, `16`],
            correct: 0
        }
    ]
};