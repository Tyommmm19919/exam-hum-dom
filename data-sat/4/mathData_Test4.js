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
                `<p>Which ofthe following expressions cannot be equal
to 0 for some value of x?</p>`,
            options: [`x²-2`, `x²+1`, `1-x²`, `2-x²`],
            correct: 1
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>f(x)=mx +b<br>In the function above, m and b are constants.
If <math>
  <mfrac>
    <mn>f(5)-f(2)</mn>
    <mn>3</mn>
  </mfrac>
</math>=2, what is the values of m? </p>`,
            options: [`2`, `3`, `4`, `5`],
            correct: 0
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>The line passing through the points (a, 3) and
(b, -2) is parallel to the graph of y=<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>x-10.What is the value of a-b?</p>`,
            options: [`5`, `7`, `8`, `10`],
            correct: 3
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>y=mx-<math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math><br>2x+3y=4<br>In the system of equations, a is a constant. If the
system has no solution, what is the value of m?</p>`,
            options: [`-<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>3</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>3</mn>
    <mn>2</mn>
  </mfrac>
</math>`],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If f(x) =(x-1)²-(x-1)-1, which of the
following expressions is equal to f(1-x)?</p>`,
            options: [`f(1-x) = (x+1)²- (x+1)-1`, `f(1-x)=(1-x)²-(1-x)-1`, `f(l-x)=x²-x-1`, `f(1-x)=x²+x-1`],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/1.6.png"><br>The graph ofa function f(x) is shown in the
xy-plane above. What is the area of triangle
ABC?
</p>`,
            options: [`16`, `32`, `64`, `128`],
            correct: 2
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If <math>
  <mfrac>
    <mn>a-2b</mn>
    <mn>b</mn>
  </mfrac>
</math>=<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>, which of the following is equal to <math>
  <mfrac>
    <mn>a</mn>
    <mn>b</mn>
  </mfrac>
</math></p>`,
            options: [`<math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>4</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>5</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>8</mn>
    <mn>3</mn>
  </mfrac>
</math>`],
            correct: 3
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>y=m<math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math><br>y=mx-k
<br>In the system of equations, m and k are constants.
If (4,16) is a solution to the system of equations
above, what is the value of k?
</p>`,
            options: [`4`, `8`, `12`, `16`],
            correct: 3
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/1.9.png"><br>The graphs of f and rectangle MATH are shown
in the xy-plane above. If MA = 25, what is the
length of AТ?</p>`,
            options: [`5`, `10`, `15`, `20`],
            correct: 1
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Which of the following equations has no solution?</p>`,
            options: [`10x-5x =3`, `7x=9x-2x+10`, `10x-6=8x+2x-6`, `10x-6=5x+4x-1`],
            correct: 1
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>f(x) = k(x+4)(x-10)<br>In the quadratic function f above, k is a constant.
25
The graph of the function in the xy-plane is a
parabola with vertex (a,b). If b=-7, which of the
following is equal to k?</p>`,
            options: [`<math>
  <mfrac>
    <mn>1</mn>
    <mn>49</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>7</mn>
  </mfrac>
</math>`, `7`, `49`],
            correct: 1
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/1.12.png"><br>Note: Figure not drawn to scale.<br>In the figure above, if line and m are parallel,
which of the following must be true?
</p>`,
            options: [` a+b+c=180`, `d+e=b
`, `b+e=c`, `a+b=180`],
            correct: 1
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
    <mn>5x²+kx+1</mn>
    <mn>x-1</mn>
  </mfrac>
</math>=ax+1+<math>
  <mfrac>
    <mn>2</mn>
    <mn>x-1</mn>
  </mfrac>
</math><br>The equation above is true for all values of x
except 1, where k and a are constants. What is
the value of k?
</p>`,
            options: [`-4`, `-2`, `2`, `4`],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>What are the solutions to 4(x-2)2-1=5?
</p>`,
            options: [`x=2±<math>
  <mfrac>
    <mn><math>
  <msqrt>
    <mi>6</mi>
  </msqrt>
</math>
</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `x=2±<math>
  <mfrac>
    <mn><math>
  <msqrt>
    <mi>6</mi>
  </msqrt>
</math>
</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `x=<math>
  <msqrt>
    <mi>2</mi>
  </msqrt>
</math>
±<math>
  <mfrac>
    <mn><math>
  <msqrt>
    <mi>6</mi>
  </msqrt>
</math>
</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `x=2±<math>
  <msqrt>
    <mi>6</mi>
  </msqrt>
</math>
`],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>Grade</th>
    <th>For</th>
    <th>Against</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Junior</td>
    <td>60</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Senior</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td>130</td>
    <td></td>
    <td>300</td>
  </tr>
  <tr>
    
  </tr>
</table>A supervisor surveyed students in his school to see if
they were for or against building a fast-food
restaurant in the school. The incomplete table above
shows the results of his survey. If 40% of juniors are
against it, how many seniors are in the school?
</p>`,
            options: [`100`, `120`, `170`, `200`],
            correct: 3
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>|x|=k<br>If the equation above has a real solution set, which of
the following must be true?<br>I. k≥0<br>II. k<0<bR>III. x>0

</p>`,
            options: [`I only`, `II only
`, `I and II only`, `II and III only`],
            correct: 0
        },
        {
            id: "M1-17",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Which of the following polynomials has a factor of
x-1?
</p>`,
            options: [`p(x)=x<sup>3</sup>+x²-2x+1`, `q(x)=2x<sup>3</sup>-x²+x-1`, `3x³-х-2 `, `-3x³+3x+1 `],
            correct: 2
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/1.18.png"><br>In the triangle above, the value of cos x is 0.8. If
the length of AC is 20, what is the length of BD?</p>`,
            correct: { answers: ["48/5", "9.6"], numeric: 9.6, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>2x³-10x²+5x-25=0<br>For what real value of x is the equation above true?</p>`,
            correct: { answers: ["5"], numeric: 5, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/1.20.png"><br>Note: Figure not drawn to scale.<br>In the figure above, AB =9, CD =3, and AC = 12.
What is the length of PQ?</p>`,
            correct: { answers: ["9/4", "2.25"], numeric: 2.25, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Question 19 and 20 refer to the following information.<br>
A T-Mobile telephone company offers domestic texting plans as follows.<br><table>
  <tr>
    <th>Plan A</th>
    <th>Plan B</th>
  </tr>
  <tr>
    <td>$0.25 per domestic text with no plan
</td>
    <td>Any 200 domestic texts for $40 per month
with an aditional cost of $0.15 per text over 200.</td>
  </tr>
  <tr>
    
  </tr>
</table><br>For what number of texts do the two plans cost the same per month?</p>`,
            correct: { answers: ["160"], numeric: 160, tolerance: 0 }
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Question 19 and 20 refer to the following information.<br>
A T-Mobile telephone company offers domestic texting plans as follows.<br><table>
  <tr>
    <th>Plan A</th>
    <th>Plan B</th>
  </tr>
  <tr>
    <td>$0.25 per domestic text with no plan
</td>
    <td>Any 200 domestic texts for $40 per month
with an aditional cost of $0.15 per text over 200.</td>
  </tr>
  <tr>
    
  </tr>
</table><br>If Angela uses 400 texts per month, how much money, in dollars, will she save per month by using the less
expensive plan? (Disregard the $ sign when gridding your answer.)</p>`,
            correct: { answers: ["30"], numeric: 160, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>At a local video store, Angel rented two movies and
three games for a total of $20. The next day, she
rented three movies and 2 games for a total of $15.
How much money, in dollars, is needed to rent a
combination of one movie and one game?
</p>`,
            options: [`7`, `10`, `12`, `16`],
            correct: 0
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>CLASSES STUDENTS ARE TAKING<br><img src="../data-sat/4/2.2.png"><br>The circle graph above shows the percent of which
200 students are taking each subject. How many
more students are taking Algebra than Geometry?</p>`,
            options: [`30`, `34`, `36`, `38`],
            correct: 3
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>x</th>
    <th>-1</th>
    <th>0</th>
    <th>1</th>
    <th>2</th>
  </tr>
  <tr>
    <td>f(x)</td>
    <td>a</td>
    <td>5</td>
    <td>k</td>
    <td>b</td>
  </tr>
  <tr>
    
  </tr>
</table><br>The table above shows some values of a linear
function f. If b-a=9, what is the value of k?</p>`,
            options: [`7`, `8`, `9`, `12`],
            correct: 1
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
    <th>For</th>
    <th>Against</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Boys</td>
    <td>35</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Girls</td>
    <td></td>
    <td>23</td>
    <td>55</td>
  </tr>
  <tr>
    <td>Total</td>
    <td></td>
    <td></td>
    <td>100</td>
  </tr>
  <tr>
    
  </tr>
</table><br>Ted surveyed a random sample of 100 students in his
high school to see if they were for or against
purchasing an additional grand piano for the school
music concert. The incomplete table above shows the
results of his survey. Based on this information,
about how many of the 800 students in the school
would be expected to be against the purchasing the piano ?</p>`,
            options: [`200`, `264`, `320`, `350`],
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
information.<br><img src="../data-sat/4/2.5.png"><br>The graph above shows the average height for boys
ages 0 to 7 in a certain state of the last year.<br>What is the annual average growth, in inches,
between ages 2 and 7?
</p>`,
            options: [`2`, `5`, `10`, `12`],
            correct: 0
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following
information.<br><img src="../data-sat/4/2.5.png"><br>The graph above shows the average height for boys
ages 0 to 7 in a certain state of the last year.<br>By what percent does the average height increase
from age 1 to age 7? </p>`,
            options: [`60`, `50`, `40`, `30`],
            correct: 1
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/2.7.png"><br>Note: Figure not drawn to scale.<br>In the xy-plane above, line f is parallel to line m.
What is the value of b?
</p>`,
            options: [`-<math>
  <mfrac>
    <mn>7</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `-14`, `-21`, `-28`],
            correct: 2
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-8x+y²=0<br>The equation of a circle in the xy-plane is shown
above. What is the area of the circle?</p>`,
            options: [`2π`, `4π`, `8π`, `16π`],
            correct: 3
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If f(x-5)=3x-10 for all values of x, what is
the value of f(-2)?</p>`,
            options: [`-16`, `-10`, `-5`, `-1`],
            correct: 3
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Lee's family starts a trip with a supply of 20
pounds of coffee. When they arrive at their
destination, 8 days later, they have found only 4
pounds left. They consume coffee at a constant rate
per day. If T is amount of coffee remaining as a
function of days d,which of the following
represents the function T(d)?
</p>`,
            options: [`T(d)=8d`, `T(d)=2d+20`, `T(d)=20-8d`, `T(d)=20-2d`],
            correct: 3
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>8x+y=300<br>The elevator in a trade center is moving down from a
height of 300 feet. The equation above can be used to
model the height of the elevator, y, above the lobby,
where x is the time in seconds. If the ordered pair
(x, y) satisfies the equation, what does (37.5, 0)
mean?
</p>`,
            options: [`The elevator stops at a height of 37.5 feet.
`, `The elevator is moving down at a constant speed
of 37.5 feet per second.`, `The elevator moves 37.5 feet from the lobby.`, `The elevator takes 37.5 seconds to move down to
the lobby.`],
            correct: 3
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>
per day. If T is amount of coffee remaining as a
function of days d,which of the following
represents the function T(d)?
A) T(d) =8d
B) T(d) =2d+20
C) T(d) =20-8d
D) T(d)=20-2d
12
Thompson invested $10,000 in stocks for two years.
During the first year he suffered a 30 percent loss,
but during the second year the remaining investment
showed a 30 percent gain. Over the two-year period,
how did Thompson's investment change?
</p>`,
            options: [`His investment did not change.
`, `His investment increased by 10 percent.
`, `His investment decreased by 10 percent.`, `His investment decreased by 9 percent.`],
            correct: 3
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>The graph of ax+by = 5 in the xy-plane contains
points from each of Quadrants I, II, and III, but no
points from Quadrant IV. Which ofthe following
must be true?
</p>`,
            options: [`a>0 and b>0`, `a>0 and b<0`, `a<0 and b>0
`, `a<0 and b<0
`],
            correct: 2
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/2.14.png"><br>A water tank is built from two right circular cones
with a radius 5 feet. If the volume of the tank is
200 cubic feet, what is the length h, in feet, from
the bottom to the top of the tank?</p>`,
            options: [`6`, `12`, `18`, `24`],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>The town library is planning to order student desks
for the next school year. The costs to purchase student
desks are as follows.
<br><table>
  <tr>
    <th>Two desks for $50, four desks for $80, six desks for
$110, eight desks for $140, and so on.
</th>
   </tr>
  </tr>
</table><br>If the town library wants to purchase 200 student
desks, what would be the total cost in dollars?
</p>`,
            options: [`5000`, `3020`, `2860`, `2500`],
            correct: 1
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Cathy can do a job in 8 hours while Danny can do
the same job in 6 hours. If Cathy and Danny work
together for three hours, what fraction of the job is
left to be finished?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>1</mn>
    <mn>12</mn>
  </mfrac>
</math>
`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>8</mn>
  </mfrac>
</math>
`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>6</mn>
  </mfrac>
</math>
`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>4</mn>
  </mfrac>
</math>
`],
            correct: 1
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>In a plane, the distance between points X and Y is
10, the distance between points X and P is 3, and
the distance between points Y and Q is 4. Which of
the following CANNOT be the length of PQ?</p>`,
            options: [`2`, `3`, `15`, `17`],
            correct: 0
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If 4m+5n is equal to 250 percent of 4n, what is the value of <math>
  <mfrac>
    <mn>m+n</mn>
    <mn>m-n</mn>
  </mfrac>
</math></p>`,
            correct: { answers: ["9"], numeric: 9, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>P(x)=23,500-250x<br>The population of a certain town has been declining
since the year 2,000. Scientists chose a linear decay
model for the decline and arrived at the function
above, where x is the number of years since 2,000.
In how many years, will the population be decreased
by 2,000?
</p>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/2.20.png"><br>The length of a side of equilateral triangle ABC
above is 10. In the figure, ED|| BC and
DF AB. If the ratio of DE to DF is 1:3, what is
the perimeter of triangle CDF?</p>`,
            correct: { answers: ["45/2", "22.5"], numeric: 22.5, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>3x²-8x+4=0<br>If a and b are two solutions of the equation
above, what is the value of <math>
  <mfrac>
    <mn>1</mn>
    <mn>a</mn>
  </mfrac>
</math>+<math>
  <mfrac>
    <mn>1</mn>
    <mn>b</mn>
  </mfrac>
</math> ?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/4/2.22.png"><br>The xy-plane above shows two points of intersection
of the graphs of a linear function and a quadratic
function. The vertex of the graph of the quadratic
function is at (3,-4) and (r, s) is one of points of
intersection ofthe graphs.What is the value of r?</p>`,
            correct: { answers: ["9/4", "2.25"], numeric: 2.25, tolerance: 0 }
        },
        
    ]
};