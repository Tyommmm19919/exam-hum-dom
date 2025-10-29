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
                `<p>If 10x-5 = a, what is the value of 2x-1?</p>`,
            options: [`<math>
  <mfrac>
    <mn>a</mn>
    <mn>5</mn>
  </mfrac>
</math>-1`, `<math>
  <mfrac>
    <mn>a</mn>
    <mn>5</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>a</mn>
    <mn>5</mn>
  </mfrac>
</math>+1`, `<math>
  <mfrac>
    <mn>a</mn>
    <mn>5</mn>
  </mfrac>
</math>+5`],
            correct: 1
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Claire is trying to get in shape for a town summer
walking tour. She starts her exercise by walking on
the treadmill for 20 minutes on the first day. She
adds 5 minutes each day be fore the tour. At this rate
how many minutes will she be walking on the
treadmill on the 20th day?
</p>`,
            options: [`80`, `100`, `115`, `120`],
            correct: 2
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>|a-1|<3<br>In the absolute value inequality above, how many
integers a satisfy the inequality?</p>`,
            options: [`2`, `3`, `4`, `5`],
            correct: 3
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.4.png"><br>The graph of the line 𝓁 is shown in the xy-plane
above. Which of the following could represent the
graph of line 𝓁?
</p>`,
            options: [`x-y+2=0`, `x+y-2=0`, `x+y+2=0`, `x-y-2=0`],
            correct: 1
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.5.png"><br>The complete graph of the function f is shown
above. Which of the following are equal to 2?<br>I. 𝒇(-2)<br>II. |𝒇(1)|<br>III. 𝒇(4.7)
</p>`,
            options: [`I only`, `I and III only`, `II and III only`, `I, II, and III`],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(<math>
  <mroot>
    <msup>
      <mi>x</mi>
      <mn>15</mn>
    </msup>
    <mn>3</mn>
  </mroot>
</math>
)(<math>
  <mroot>
    <msup>
      <mi>x</mi>
      <mn>8</mn>
    </msup>
    <mn>2</mn>
  </mroot>
</math>
)<br>If x is positive, which of the following is
equivalent to the expression above?
</p>`,
            options: [`<math>
  <mroot>
    <msup>
      <mi>x</mi>
      <mn>23</mn>
    </msup>
    <mn>6</mn>
  </mroot>
</math>`, `<math>
  <mroot>
    <msup>
      <mi>x</mi>
      <mn>23</mn>
    </msup>
    <mn>5</mn>
  </mroot>
</math>`, `x<sup>20</sup>`, `x<sup>9</sup>`],
            correct: 3
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 7 and 8 refer to the following information.<br><table>
  <tr>
    <th></th>
    <th>Juniors</th>
    <th>Seniors</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Physics</td>
    <td>80</td>
    <td></td>
    <td>180</td>
  </tr>
  <tr>
    <td>Statistics</td>
    <td></td>
    <td>100</td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td></td>
    <td></td>
    <td>300</td>
</table><br>The partially completed table gives the enrollment for
Physics and Statistics at Jade High School. Only
juniors and seniors take these classes.
<br><br>According to the table, what is the number of juniors
who take Statistics?</p>`,
            options: [`20`, `40`, `60`, `80`],
            correct: 0
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 7 and 8 refer to the following information.<br><table>
  <tr>
    <th></th>
    <th>Juniors</th>
    <th>Seniors</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Physics</td>
    <td>80</td>
    <td></td>
    <td>180</td>
  </tr>
  <tr>
    <td>Statistics</td>
    <td></td>
    <td>100</td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td></td>
    <td></td>
    <td>300</td>
</table><br>The partially completed table gives the enrollment for
Physics and Statistics at Jade High School. Only
juniors and seniors take these classes.
<br><br>What percent of juniors is taking Statistics?</p>`,
            options: [`6.7`, `10`, `20`, `25`],
            correct: 2
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Which of the following data sets appears to have
the smallest standard deviation?<br><img src="../data-sat/6/1.9.png"></p>`,
            options: [`A`, `B`, `C`, `D`],
            correct: 2
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <msqrt>
    <mi>x+10</mi>
  </msqrt>
</math>=x-2<br>What is the solution set for the equation above?</p>`,
            options: [`{-1}`, `{6}`, `{-1, 6}`, `No solution`],
            correct: 1
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-4x+5=(x-1)(x-2)+ax+b  In the equation above, a and b are constants. If the
equation is true for all values of x, what are the
values of a and b?
</p>`,
            options: [`a=-3,b=-1`, `a=3,b=-1`, `a=-1,b=3`, `a=3,b=1`],
            correct: 2
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x<sup>4</sup>-<math>
  <mfrac>
    <mn>1</mn>
    <mn>81</mn>
  </mfrac>
</math><br>hich ofthe following is equivalent to the
expression above?
</p>`,
            options: [`(x²-<math>
  <mfrac>
    <mn>1</mn>
    <mn>9</mn>
  </mfrac>
</math>)²`, `(x-<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>)<sup>4</sup>`, `(x²+x+<math>
  <mfrac>
    <mn>1</mn>
    <mn>9</mn>
  </mfrac>
</math>)²`, `(x²+<math>
  <mfrac>
    <mn>1</mn>
    <mn>9</mn>
  </mfrac>
</math>)(x+<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>)(x-<math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>)`],
            correct: 3
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>4(x²-5x)16  What is the sum of the solutions of the equation
above?</p>`,
            options: [`5`, `10`, `10+<math>
  <msqrt>
    <mi>41</mi>
  </msqrt>
</math>`, `10-<math>
  <msqrt>
    <mi>41</mi>
  </msqrt>
</math>`],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.14,15.png"><br>The scatterplot above shows the salary and hours
worked by 12 students in the library after school,
along with the line of best fit.
<br>According to the line of best fit in the scatterplot,
which ofthe following best approximates the
average salary, in dollars per hour, of the 12 students?</p>`,
            options: [`15`, `16.2`, `17.4`, `20`],
            correct: 2
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.14,15.png"><br>The scatterplot above shows the salary and hours
worked by 12 students in the library after school,
along with the line of best fit.
<br>Based on the information above, if a student works
20 hours, approximately how much will he be paid
for the work?
</p>`,
            options: [`200`, `300`, `350`, `500`],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>a<sup>-2</sup>+3a<sup>-1</sup>-10=0<br>In the equation above, a>0. What is the value of
a?</p>`,
            options: [`<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `2`, `3`, `4`],
            correct: 0
        },
        {
            id: "M1-17",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>g(x)=𝒇(x-3)-10<br>If the slope of the linear function 𝒇 is <math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math>, what is 
the slope of the function g shown above? </p>`,
            options: [`-<math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math>`, `-<math>
  <mfrac>
    <mn>5</mn>
    <mn>2</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>2</mn>
    <mn>5</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>5</mn>
    <mn>2</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.18.png"><br>The function 𝒇(x)=x<sup>4</sup>-6x²-4 is graphed in the
xy-plane as shown above. If the equation y=-3 is
graphed in the plane, how many points of
intersection with the function 𝒇 are there?</p>`,
            correct: { answers: ["2", "2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>𝒇(x)=g(x)-k<br>g(x)=<math>
  <msqrt>
    <mi>3x</mi>
  </msqrt>
</math>-2<br>In the system of equations above, k is a constant.
If 𝒇(2)=-3, what is the value of k?</p>`,
            correct: { answers: ["5", "5"], numeric: 5, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.20.png"><br>A water pipe is in the shape of a circular tube. The
figure above shows the pipe with a portion cut out.
The dimensions of the pipe above are height 10 inches
with thickness 4 inches. If the volume of the figure
above is 800π cubic inches, what is the radius r of
the inner circle in inches?</p>`,
            correct: { answers: ["8", "8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>𝒇(x)=g²(x)-7g(x)+15<br>In the equation above, if 𝒇(2)=3, what is one
possible value of g(2)?
</p>`,
            correct: { answers: ["17/5", "3.4"], numeric: 3.4, tolerance: 0 }
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/1.22.png"><br>Figure not drawn to scale.<br>The graph of y=x²-8x+16 is shown in the
xy-plane above. If point P is the y-intercept of the
graph, what is the area of rectangle OPQR?</p>`,
            correct: { answers: ["128", "128"], numeric: 128, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If (x+3)y=x²-x+12, what is the value of y
when x=3?
</p>`,
            options: [`3`, `4`, `6`, `8`],
            correct: 0
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>The total cost of 10 equally priced notebooks is k
dollars. If the cost per book is reduced by $1, how
much will 2 of these notebooks cost at new rate?
</p>`,
            options: [`k-1`, `2x-2`, `<math>
  <mfrac>
    <mn>k</mn>
    <mn>5</mn>
  </mfrac>
</math>-2`, `<math>
  <mfrac>
    <mn>k</mn>
    <mn>10</mn>
  </mfrac>
</math>-2`],
            correct: 2
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 3 and 4 refer to the following
information.<br>The cost C for maintenance on a heating system
increases each year by 2.8%. If Mark paid $250 this
year for maintenance, the cost t years from now can be
given by the function C(t) = 250P<sup>t</sup>.<br>What is the value of P?</p>`,
            options: [`0.28`, `0.028`, `1.028`, `1.28`],
            correct: 2
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 3 and 4 refer to the following
information.<br>The cost C for maintenance on a heating system
increases each year by 2.8%. If Mark paid $250 this
year for maintenance, the cost t years from now can be
given by the function C(t) = 250P<sup>t</sup>.<br>What is the approximate cost in 4 years?</p>`,
            options: [`$265`, `$279`, `$310`, `$320`],
            correct: 1
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>x</mn>
    <mn>4</mn>
  </mfrac>
</math>-<math>
  <mfrac>
    <mn>y</mn>
    <mn>4</mn>
  </mfrac>
</math>=1<br>In the xy-plane, which of the following could be
the graph of the function above?<br><img src="../data-sat/6/2.5.png"></p>`,
            options: [`A`, `B`, `C`, `D`],
            correct: 2
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>ax+5=0.8x+b<br>n the equation above, a and b are constants. For
which of the following values of a and b does the
equation have no solution?</p>`,
            options: [`a=10, b=5`, `a=5, b=0.8`, `a=0.8, b=5`, `a =0.8, b=0.8`],
            correct: 3
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/2.7.png"><br>The graph of y=<math>
  <msqrt>
    <mi>3x</mi>
  </msqrt>
</math> is shown in the xy-plane
above.What is the measure, in radians, of angle
POR?</p>`,
            options: [`<math>
  <mfrac>
    <mn>π</mn>
    <mn>6</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>π</mn>
    <mn>4</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>π</mn>
    <mn>3</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>π</mn>
    <mn>2</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math>, which of the following is equal to <math>
  <mfrac>
    <mn>1-i²</mn>
    <mn>i</mn>
  </mfrac>
</math></p>`,
            options: [`-i`, `i+2`, `-2i`, `i+1`],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>What is the remainder when x²-3x+5 is divided
by x-1?</p>`,
            options: [`2`, `3`, `4`, `5`],
            correct: 1
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(<math>
  <mroot>
    <mi>16</mi>
    <mn>k</mn>
  </mroot>
</math>)(<math>
  <mroot>
    <mi>8</mi>
    <mn>k</mn>
  </mroot>
</math>)=2<br>In the equation above, what is the value of k?</p>`,
            options: [`4`, `5`, `6`, `7`],
            correct: 3
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>ax-y=1<br>x+2y=3<br>If the lines represented above are perpendicular,
which of the following is the value of a?
</p>`,
            options: [`3`, `2`, `-2`, `-3`],
            correct: 1
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Claire works one week and earns a dollars. If she
had worked 5 more hours, she would have earned b
dollars. If the hourly rate is constant, what is the
hourly rate?</p>`,
            options: [`<math>
  <mfrac>
    <mn>b</mn>
    <mn>5</mn>
  </mfrac>
</math>dollars`, `<math>
  <mfrac>
    <mn>a</mn>
    <mn>5</mn>
  </mfrac>
</math>dollars`, `<math>
  <mfrac>
    <mn>a-b</mn>
    <mn>5</mn>
  </mfrac>
</math>dollars`, `<math>
  <mfrac>
    <mn>b-a</mn>
    <mn>5</mn>
  </mfrac>
</math>dollars`],
            correct: 3
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 13 and 14 refer to the following information.<br><table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th rowspan="2">Gender</th>
    <th colspan="4">Holiday</th>
  </tr>
  <tr>
    <th>Thanksgiving</th>
    <th>Memorial Day</th>
    <th>Labor Day</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Males</td>
    <td>40</td>
    <td></td>
    <td>35</td>
    <td>125</td>
  </tr>
  <tr>
    <td>Females</td>
    <td>63</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td></td>
    <td>140</td>
    <td>109</td>
    <td>352</td>
  </tr>
</table><br>A community group responded to a survey that asked which holiday is their favorite. The incomplete survey data
are shown in the table above.<br>How many females responded to the survey that Memorial Day is their favorite holiday?</p>`,
            options: [`50`, `75`, `90`, `105`],
            correct: 2
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 13 and 14 refer to the following information.<br><table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th rowspan="2">Gender</th>
    <th colspan="4">Holiday</th>
  </tr>
  <tr>
    <th>Thanksgiving</th>
    <th>Memorial Day</th>
    <th>Labor Day</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Males</td>
    <td>40</td>
    <td></td>
    <td>35</td>
    <td>125</td>
  </tr>
  <tr>
    <td>Females</td>
    <td>63</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Total</td>
    <td></td>
    <td>140</td>
    <td>109</td>
    <td>352</td>
  </tr>
</table><br>A community group responded to a survey that asked which holiday is their favorite. The incomplete survey data
are shown in the table above.<br>Which ofthe following categories accounts for approximately 21 percent of all the survey respondents?</p>`,
            options: [`Females choosing Memorial Day`, `Males choosing Labor Day`, `Females choosing Thanksgiving`, `Females choosing Labor Day`],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>C=-1.5K+300<br>The linear equation above shows the cost, C, of
producing K toys. Based on the information,
which of the following must be true?
<br>I. There is a positive correlation between
Cand K.<br>II. When the company produces 20 toys, the
cost is $270.<br>II. As K increases by 10, C decreases by $15.</p>`,
            options: [`II only`, `I and II only`, `I and III only`, `II and III only`],
            correct: 3
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If x²+kx+k+1= (x+p)(x+2) for all values of radians, of angle AOB?
x and k and p are constants, what is the value of
k?</p>`,
            options: [`5`, `4`, `3`, `2`],
            correct: 0
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>𝒇(x)=2x²-3<br>In the equation above, if <math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math>𝒇(<math>
  <msqrt>
    <mi>k</mi>
  </msqrt>
</math>)=3, what is the
value of k?</p>`,
            options: [`3`, `4`, `5`, `6`],
            correct: 3
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Kinetic energy=<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>mv²<br>In the equation above, kinetic energy is the energy of
motion, where m is the mass and v is the speed of
an object. If a k-kg roller coaster car is moving 16
meters per second and the other 2k-kg roller coaster
is moving 8 meters per second, what is the ratio of
the kinetic energy of the k-kg roller coaster to the
kinetic energy of the 2k-kg roller coaster?
</p>`,
            correct: { answers: ["2", "2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>h=3t(18-t)<br>An arrow is shot upward on the moon with an initial
velocity of 54 meters per second and returns to the
surface. Ifthe height is given by the equation above,
what is the maximum height, in meters, that the
arrow can reach?
</p>`,
            correct: { answers: ["243", "243"], numeric: 243, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/2.20.png"><br>In the xy-plane above, the graphs of line 𝓁 and
line m intersect at point P. If line 𝓁 is
perpendicular to line m, what is the length of OP?</p>`,
            correct: { answers: ["12/16", "2.4"], numeric: 2.4, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>15x+9y=b<br>ax+by=1<br>In the system of equations above, a and b are
constants, where b > 0. If the system has infinitely
many solutions, what is the value of a?
</p>`,
            correct: { answers: ["5", "5"], numeric: 5, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/6/2.22.png"><br>In the xy-plane above, the graphs of functions f
and g intersect at points B and C. What is the area
of quadrilateral ABCD?</p>`,
            correct: { answers: ["15/2", "7.5"], numeric: 7.5, tolerance: 0 }
        },
        
    ]
};