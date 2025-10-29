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
                `<p><img src="../data-sat/3/1.1.png"><br>A total of 40 students in Mr. Lee's class voted for
their favorite subject. The results are shown in the
pie chart above. How many students voted for
math?</p>`,
            options: [`12`, `14`, `16`, `18`],
            correct: 2
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If 3r+5=10, what is the value of 6r +5?</p>`,
            options: [`10`, `15`, `20`, `21`],
            correct: 1
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If a<sup>-2</sup>=<math>
  <mfrac>
    <mn>1</mn>
    <mn>5</mn>
  </mfrac>
</math>, what is the value of 5a²?</p>`,
            options: [`1`, `5`, `10`, `25`],
            correct: 3
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>When a certain number p is divided by 10, the
quotient is k and the remainder is r. Which of the
following expressions represents r?</p>`,
            options: [`r=p-10k`, `r=10p-k`, `r=10(k- p)`, `r=10k-p`],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If <math>
  <mfrac>
    <mn>5</mn>
    <mn>12</mn>
  </mfrac>
</math>=<math>
  <mfrac>
    <mn>1</mn>
    <mn>a</mn>
  </mfrac>
</math>+<math>
  <mfrac>
    <mn>1</mn>
    <mn>b</mn>
  </mfrac>
</math> and ab = 24, what is the value of a+b?</p>`,
            options: [`25`, `13`, `11`, `10`],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/1.6.png"><br>The graph offunction f is shown in the xy-plane
above. If length of MA of the rectangle MATH is
5, what is the length of AT?</p>`,
            options: [`2`, `2.5`, `3`, `4`],
            correct: 3
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/1.7.png"><br>Two rectangles are shown in the figure above. If
AB=4, AD =2, and BC =8, what is the area of the
shaded region?
</p>`,
            options: [`32`, `36`, `48`, `64`],
            correct: 0
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>ax-by=9<br>3x+y=3<br>If the system of linear equations above has infinitely
many solutions, what is the value of a+b?
</p>`,
            options: [`-3`, `6`, `9`, `12`],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>x</th>
    <th>g(x)</th>
  </tr>
  <tr>
    <td>-3</td>
    <td>6</td>
  </tr>
  <tr>
    <td>-2</td>
    <td>0</td>
      </tr>
  <tr>
    <td>0</td>
    <td>-6</td>
      </tr>
  <tr>
    <td>2</td>
    <td>-2</td>
      </tr>
  <tr>
    <td>3</td>
    <td>0</td>
      </tr>
  <tr>
    <td>4</td>
    <td>6</td>
    
  </tr>
</table><br>The function g is defined by a polynomial. Some
selected values of x and g(x) are shown in the
table above. Which of the following is true?<br>I. (x-3) is a factor of g(x).<br>II. (x-2) is a factor of g(x).<br>III. (x+2) is a factor of g(x).

</p>`,
            options: [`I and II only`, `I and III only`, `II and III only`, `I, II, and III`],
            correct: 1
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If y is inversely proportional to x², and y=10
when x=2, what is the value of y when x=10?</p>`,
            options: [`<math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math>`, `2`, `50`, `250`],
            correct: 0
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>y=k(x-4)(x+2)<br>The graph of the quadratic equation above, where k
is a constant, has a vertex at point (a, b) in the
xy-plane. Which of the following is equal to а?</p>`,
            options: [`-1`, `0`, `1`, `2`],
            correct: 2
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/1.12.png"><br>The figure PQR in the xy-plane is an isosceles right
triangle. Which of the following is equal to k?
</p>`,
            options: [`6`, `7`, `8`, `9`],
            correct: 0
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
    <mn>2i</mn>
    <mn>1-i</mn>
  </mfrac>
</math>=a+bi<br>If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math> in the equation above,where a and b
are constants, what is the value of a?
</p>`,
            options: [`-1`, `1`, `2`, `3`],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>1</mn>
    <mn>x</mn>
  </mfrac>
</math>=<math>
  <mfrac>
    <mn>x</mn>
    <mn>2x+1</mn>
  </mfrac>
</math><br>What are the solutions to the equation above?</p>`,
            options: [`x=-1±<math>
  <msqrt>
    <mi>2</mi>
  </msqrt>
</math>`, `x=1±<math>
  <msqrt>
    <mi>2</mi>
  </msqrt>
</math>`, `x=1±<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>`, `<math>
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mn>1</mn>
      <mo>±</mo>
      <msqrt><mn>2</mn></msqrt>
    </mrow>
    <mn>2</mn>
  </mfrac>
</math>`],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>P=<math>
  <mfrac>
    <mn>9</mn>
    <mn>2</mn>
  </mfrac>
</math>K+40<br>The equation above shows how the value of P
relates to the value of K. Based on the equation,
which of the following must be true?<br>I. When the value of K increases by 1, the value
of P increases by 40.<br>II. When the value of K increases by 2, the value
of Pincreases by 9.<br>III. When the value of K increases by 4, the value
of Pincreases by 18.

</p>`,
            options: [`I and II only`, `I and III only`, `I and III only`, `I, II, and III`],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>D(t) =30-at²<br>An apple falls from the branch of a tree to the ground
30 feet below. The distance, D, the apple is from the
ground is represented by the equation above, where a
is a constant and is time in seconds.
If D(0.1)-D(0.2) =6, what is the value of a?</p>`,
            options: [`160`, `180`, `200`, `240`],
            correct: 2
        },
        {
            id: "M1-17",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>k=x²-5x<br>In the equation above, for how many integers x is the
number k negative?
</p>`,
            options: [`2`, `3`, `4`, `5`],
            correct: 2
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-ax=-10<br>The quadratic equation above has two real
solutions. If one of the solutions is 5 and a is a
constant, what is the other solution?</p>`,
correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>15</mn>
    <mn>x-1</mn>
  </mfrac>
</math>-7=3-<math>
  <mfrac>
    <mn>5</mn>
    <mn>x-1</mn>
  </mfrac>
</math><br>If x>1, what is the solution to the equation above?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/1.20.png"><br>In the figure above, line f is parallel to line т.
What is the value of b?
</p>`,
            correct: { answers: ["130"], numeric: 130, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>At a certain party, an executive committee provided
one soda for 8 people, one large bag of chips for 4
people, and one cheese cake for 6 people. If the total
number of sodas, large bag of chips, and cheese
cakes was 78, how many people were at the party?</p>`,
            correct: { answers: ["144"], numeric: 144, tolerance: 0 }
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/1.22.png"><br>The figure above shows trapezoid ABCD. If M is
the midpoint of AD and AD=3⋅BC, what fraction
of the area of the trapezoid is shaded?</p>`,
            correct: { answers: ["1/4", "0.25"], numeric: 0.25, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/2.1.png"><br>Bernard began to ride a bicycle to the town library, and
then rode to the book store to buy a novel. After 10
minutes, he began to ride home again. If the graph
above shows his trip, how long did he stay in the
library?
</p>`,
            options: [`10minutes`, `20minutes`, `30minutes`, `40minutes`],
            correct: 3
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If <math>
  <mfrac>
    <mn>2</mn>
    <mn>k</mn>
  </mfrac>
</math>=9 and 9k+h = 20, what is the value of h?</p>`,
            options: [`9.5`, `12`, `15.5`, `18`],
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
    <th>n</th>
    <th>-1</th>
    <th>0</th>
    <th>1</th>
    <th>2</th>
    <th>a</th>
  </tr>
  <tr>
    <td>f(n)</td>
    <td>0</td>
    <td>3</td>
    <td>6</td>
    <td>9</td>
    <td>b</td>
  </tr>
  <tr>
    
  </tr>
</table><br>The table above shows some values of the linear
function f. Which of the following defines Ь?</p>`,
            options: [`b=a+3`, `b=a+5`, `b=2a +4`, `b=3a +3
`],
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
      <th rowspan="2">Gender</th>
      <th colspan="2">Subject</th>
      <th rowspan="2">Total</th>
    </tr>
    <tr>
      <th>Art</th>
      <th>Music</th>
    </tr>
    <tr>
      <td>Males</td>
      <td>30</td>
      <td></td>
      <td>65</td>
    </tr>
    <tr>
      <td>Females</td>
      <td></td>
      <td>20</td>
      <td></td>
    </tr>
    <tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td>100</td>
    </tr>
  </table>

</body>
</html><br>The incomplete table above shows the results of a
survey about subject preference given to 100 students.
What is the probability of art students being females?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>7</mn>
    <mn>25</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math>`],
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
information.<br><img src="../data-sat/3/2.5.png"><br>The scatterplot above relates two sets of data on a
graph and shows the results of a class of students' last
two algebra tests. Both the vertical and horizontal axes
show the scores.<br>What is the average (arithmetic mean) score for Test
12</p>`,
            options: [`68.35`, `70.50`, `71.25
`, `74.75`],
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
information.<br><img src="../data-sat/3/2.5.png"><br>The scatterplot above relates two sets of data on a
graph and shows the results of a class of students' last
two algebra tests. Both the vertical and horizontal axes
show the scores.<br>Which of the following is the greatest change in
scores between test 1 and test 2?
</p>`,
            options: [`60`, `50`, `40`, `op30t4`],
            correct: 1
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>L=0.2(t-2010)+10<br>The lifespan of a certain bird has been tracked from the
year 2010, and the average lifespan is modeled by the
equation above. In 2010 the lifespan of the bird was 10
years. What is the meaning of the number 0.2 in the
equation?</p>`,
            options: [`The lifespan in the year 2010`, `The life span increase each year from 2010`, `The lifespan increase every 10 year`, `The life span decrease each year from 2010`],
            correct: 1
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-2x+y²+2y-3=0<br>The equation of a circle in the xy-plane is shown
above. What is the diameter of the circle?

</p>`,
            options: [`<math>
  <msqrt>
    <mi>5</mi>
  </msqrt>
</math>`, `2<math>
  <msqrt>
    <mi>5</mi>
  </msqrt>
</math>`, `5`, `10`],
            correct: 1
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x-4y=-3<br>4x-y=12<br>In the system of equations above, what is the value
of x+y?

</p>`,
            options: [`5`, `6`, `8`, `9`],
            correct: 0
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(a<sup>k</sup>)<sup><math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math></sup>=<math>
  <mfrac>
    <mn>1</mn>
    <mn>a²
</mn>
  </mfrac>
</math><br>In the equation above, if a>0, what is the value of
k?</p>`,
            options: [`-3`, `-1`, `1`, `3`],
            correct: 0
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/2.11.png"><br>Jackson wants to measure the length AB of a lake. In
the figure above, AB is parallel to CD, DE =6 feet,
CD =10 feet, and BE =300 feet. What is the length of
the lake?</p>`,
            options: [`250 feet
`, `275 feet
`, `375 feet
`, `500 feet
`],
            correct: 2
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>2x²y-3xy²-xy(3x+5y-2)<br>Which of the following is equivalent to the expression
above?

</p>`,
            options: [`xy(x-8y-2)
`, `xy(x+8y-2)
`, `-xy(x-8y+2)
`, `-xy(x+8y-2)
`],
            correct: 3
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/2.13.png"><br>In the figure above, point O is the center of the
circle. If the length of TP is 10<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>, what is the
length of minor arc TM?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>5π</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>7π</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>8π</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>10π</mn>
    <mn>3</mn>
  </mfrac>
</math>`],
            correct: 3
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>A certain number is proportional to another number
in the ratio 3:7. If 12 is subtracted from the sum of
the numbers, the result is 38. What is the average
(arithmetic mean) of the numbers?
</p>`,
            options: [`10`, `12`, `25`, `40`],
            correct: 2
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/2.15.png"><br>The function f, defined by f(x) =mx-m, is
graphed in the xy-plane above. Which of the following
expressions represents the area of triangle OPR?</p>`,
            options: [`<math>
  <mfrac>
    <mn>m</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `m`, `<math>
  <mfrac>
    <mn>m²</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `m²`],
            correct: 0
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If pipe S can fill a certain water tank in 3 hours and
pipe U can empty it in 4 hours, how long, in hours,
would it take to fill the empty tank when both pipes are
open?</p>`,
            options: [`6`, `8`, `10`, `12`],
            correct: 3
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>1</mn>
    <mn>R</mn>
  </mfrac>
</math>+<math>
  <mfrac>
    <mn>1</mn>
    <mn>S</mn>
  </mfrac>
</math>=<math>
  <mfrac>
    <mn>1</mn>
    <mn>T</mn>
  </mfrac>
</math><br>When electrical circuits are connected in parallel, the
reciprocal of the total resistance is found by adding the
reciprocals of each resistance as shown above. Which
of the following gives S in terms of R and Т?</p>`,
            options: [`S=<math>
  <mfrac>
    <mn>R-T</mn>
    <mn>RT</mn>
  </mfrac>
</math>`, `S=<math>
  <mfrac>
    <mn>T-R</mn>
    <mn>RT</mn>
  </mfrac>
</math>`, `S=<math>
  <mfrac>
    <mn>RT</mn>
    <mn>R-T</mn>
  </mfrac>
</math>`, `S=<math>
  <mfrac>
    <mn>RT</mn>
    <mn>T-R</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/3/2.18.png"><br>In the figure above, central angle AOB has a
measure of <math>
  <mfrac>
    <mn>π</mn>
    <mn>3</mn>
  </mfrac>
</math> radians. Ifthe length of minor arc AB is 10, what is the area of the shaded sector?
(Round your answer to the nearest tenth.)
</p>`,
            correct: { answers: ["47.7"], numeric: 47.7, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>P(x)=x²+4x-k<br>In the quadratic function above, if P(0) = 5, what is
the minimum value of P?
</p>`,
            correct: { answers: ["1"], numeric: 1, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Mr. Benjamin has brought grammar work books to
distribute to the students in his reading class. If he
gives each student 5 books, he will have 10 books
left over, and if he gives each student 7 books, he
will need an additional 20 books. How many
students are in the class?
</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 21 and 22 refer to the following information.<br>R =100x<br>C=85x+2000<br>A smartphone production company expressed a
relationship between revenue (R) and cost (C) for selling
x units of a product as shown above.
<br>For what value of x will the product start to return a
profit?
</p>`,
            correct: { answers: ["134"], numeric: 134, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following information.<br>R =100x<br>C=85x+2000<br>A smartphone production company expressed a
relationship between revenue (R) and cost (C) for selling
x units of a product as shown above.
<br>For what value of x, will the company achieve a profit
of $100,000?
</p>`,
            correct: { answers: ["6800"], numeric: 6800, tolerance: 0 }
        },
        
    ]
};