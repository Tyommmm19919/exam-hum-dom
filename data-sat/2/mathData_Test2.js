
   
window.satMathData = {    testId: "1",
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
                `<p>If x-2y=10, y= z+1, and z = 2, what is the value
of x?
</p>`,
            options: ["12", "14", "16", "18"],
            correct: 2
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>2x+6y=5<br>
ax +by=7<br>If the system of equations above has only one
solution, which of the following could be the values
of a and b?
</p>`,
            options: ["a=1 and b=3", "a=2 and b=6"
, "a=3 and b=8"
, "a=4 and b=12"],
            correct: 2
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>A smart phone company plans to produce and sell p smart phones. The cost of producing p phones is
given by 265,000 + 150p in dollars. The company
receives $400 on the sale of each phone, so the
revenue for selling p phones is given by 400 p. For
what value of p is the revenue equal to the cost?</p>`,
            options: ["500", "840", "1060", "1200"],
            correct: 2
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(a+<math>
  <mfrac>
    <mn>1</mn>
    <mn>a</mn>
  </mfrac>
</math>)<br><br>Which of the following is equivalent to the expression
above?
</p>`,
            options: [`a<sup>2</sup>+<math>
  <mfrac>
    <mn>1</mn>
    <mn>a²</mn>
  </mfrac>
</math>
`, `a<sup>2</sup>+<math>
  <mfrac>
    <mn>1</mn>
    <mn>a²</mn>
  </mfrac>
</math>-2`, `a<sup>2</sup>-2a+<math>
  <mfrac>
    <mn>1</mn>
    <mn>a²</mn>
  </mfrac>
</math>`, `a<sup>2</sup>+2+<math>
  <mfrac>
    <mn>1</mn>
    <mn>a²</mn>
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
                `<p> <msqrt>
    <mi>a²-a+4 </mi>
  </msqrt>
</math>=2<br>If a is a positive number in the equation above, what
is the value of a?</p>`,
            options: ["10", "8", "10", "1"],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/1.6.png"><br>In the xy-plane above, line l is perpendicular to
line m. What is the value of k?
</p>`,
        options: ["-1", "-2", "-3", "-4.5"],
            correct: 3
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If 4a=2b=c, what is the average (arithmetic
mean) of a, b, and c in terms of a?
</p>`,
            options: [`<math>
  <mfrac>
    <mn>4a</mn>
    <mn>3</mn>
  </mfrac>
</math>`, "2a", `<math>
  <mfrac>
    <mn>7a</mn>
    <mn>3</mn>
  </mfrac>
</math>`, "3a"],
            correct: 2
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/1.8.png"><br>The figure above shows a regular hexagon. If the
length of AB is 4, what is the area of the hexagon?
</p>`,

          options: ["24"
, `24<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`, "32", `32<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/1.9.png"><br>In the xy-plane above, two graphs intersect at two
points. What is the value of b?

</p>`,
            options: ["1", "2", "3", "4"],
            correct: 3
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>(<math>
  <mfrac>
    <mn>1</mn>
    <mn>x-1</mn>
  </mfrac>
</math>-<math>
  <mfrac>
    <mn>1</mn>
    <mn>x+1</mn>
  </mfrac>
</math>)</p><br>Which of the following is equivalent to the
expression above?
</br>`,
            options: [`<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>(<math>
  <mfrac>
    <mn>1</mn>
    <mn>x²-1</mn>
  </mfrac>
</math>)`, `<math>
  <mfrac>
    <mn>1</mn>
    <mn>x²-1
</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>-2</mn>
    <mn>x²-1 </mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>-2x</mn>
    <mn>x2-1
</mn>
  </mfrac>
</math>`],
            correct: 1
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>The surface area S of a cylinder with radius r and
height h is S=2πr² +2rh. If the surface area
of the cylinder is 207 and the height is 3, what is
the value of r?
</p>`,
            options: ["1", "2", "4", "5"],
            correct: 1
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>R=<math>
  <mfrac>
    <mn>(m1+m2)</mn>
    <mn>m1</mn>
  </mfrac>
</math><br>The ratio for the kinetic energy between two objects
of mass m1 and m2 before and after the collision is
given above. Which of the following is equivalent to
the expression for m1?</br></p>`,
            options: [`<math>
  <mfrac>
    <mn>m2</mn>
    <mn>R</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>R-1</mn>
    <mn>m2</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>m2</mn>
    <mn>R-1</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>m2-R</mn>
    <mn>R</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>f(x)=x²+ax-10
<br>If f(2)=0 in the quadratic function above, which of
the following must be true?
</br></p>`,
            options: [`f(-5)=0
`, `f(-2)=0`, `f(-1)=0`, `f(0)=0
`],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>2a+(4a+2)i=b-10i<br>If i=<math>
  <msqrt>
    <mi>-1</mi>
  </msqrt>
</math> in the equation above, where a and b
are constants, what is the value of b?
</br></p>`,
            options: ["6", "4", "-3", "-6"],
            correct: 3
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Esposito tried to compute the average of his 10 math
scores. He mistakenly divided the correct total S of
his scores by 8. The result was 5 more than what it
should have been. Which of the following would
determine the value of S?
</p>`,
            options: [`10S=7S+5
`, `<math>
  <mfrac>
    <mn>S</mn>
    <mn>10</mn>
  </mfrac>
</math>=<ath>
  <mfrac>
    <mn>S</mn>
    <mn>10</mn>
  </mfrac>
</math>+5`, `<math>
  <mfrac>
    <mn>S</mn>
    <mn>8</mn>
  </mfrac>
</math>-<math>
  <mfrac>
    <mn>S</mn>
    <mn>10</mn>
  </mfrac>
</math>=5`, `<math>
  <mfrac>
    <mn>S+5</mn>
    <mn>10</mn>
  </mfrac>
</math>=<math>
  <mfrac>
    <mn>S</mn>
    <mn>8</mn>
  </mfrac>
</math>`],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>2<sup>3k-3</sup>=64<br>In the equation above, what is the value of 2<sup>k</sup>?</p>`,
            options: [`4`, `8`, `16`, `32`],
            correct: 1
        },
        {
            id: "M1-17",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>x²-2x+y²=10<br>The equation of a circle in the xy-plane is shown
above. What is the center of the circle?
</p>`,
            options: [`(1,-1)
`, `(1, 1)`, `(1, 0)`, `(2, 0)
`],
            correct: 2
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/1.16.png"><br>If the slope of line m in the xy-plane above is <math>
  <mfrac>
    <mn>1</mn>
    <mn>3</mn>
  </mfrac>
</math> what is the area of quadrilateral OECD?</br></p>`,
            correct: { answers: ["84"], numeric: 84, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Claire and Peter both want to buy new smart
phones. Claire has already saved 100 dollars and
plans to save 5 dollars per week until she can buy
the phone. Peter has 25 dollars and plans to save 8
dollars per week. In how many weeks will Claire
and Peter have saved the same amount of money?
</p>`,
            correct: { answers: ["25"], numeric: 25, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>(a-8)x<sup>2</sup>+(b-5)x+c+2=0<br>In the equation above, a, b, and c are constants. If
the equation is true for all values of x, what is the
value of a+b+c ?</br>
</p>`,
            correct: { answers: ["11"], numeric: 11, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/1.19.png"><br>In the figure above, O is the center of the circle with
radius r, and the measure of θ is <math>
  <mfrac>
    <mn>π</mn>
    <mn>5</mn>
  </mfrac>
</math>
radians. If the 
length of minor arc AB is 3π, what is the value of
r?</br></p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>In a certain class of 70 students,<math>
  <mfrac>
    <mn>4</mn>
    <mn>7</mn>
  </mfrac>
</math> of the students are boys, and the ratio of students 10 years or older to students less than 10 years is 2:3. If <math>
  <mfrac>
    <mn>2</mn>
    <mn>3</mn>
  </mfrac>
</math> of the girls are less than 10 years old, how many boys are 10
years old or older?
</p>`, 
           correct: { answers: ["18"], numeric: 18, tolerance: 0 }
            
        },
       {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>During its Labor Day sale, a store advertises that $40
will be deducted from every purchase over $200. In
addition, after the deduction is taken, the store offers
an early-bird discount of 40% to any person who
makes a purchase before 9 a.m. If Claire makes a
purchase of k dollars, k >200, at 8 a.m., which of
the following expressions represents the cost of her
purchase?</p>`,
            options: [`0.4k-16`, `0.4k-24`, `0.6k-24`, `0.6k-40`],
            correct: 2
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>On a map, 3 centimeters represents k kilometers.
How many kilometers are represented by
p centimeters?
</p>`,
            options: [`3pk`, `<math>
  <mfrac>
    <mn>k</mn>
    <mn>3p</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>3k</mn>
    <mn>p</mn>
  </mfrac>
</math>`, `<math>
  <mfrac>
    <mn>pk</mn>
    <mn>3</mn>
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
                `<p><img src="../data-sat/2/2.4.png"><br>In the figure above, lines and m are parallel.
If the measure of ∠1 is 20° more than the measure
of ∠2, what is the measure of ∠1?</p>`,
            options: [`35°`, `45°
`, `55°
`, `75°
`],
            correct: 2
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>T=150+20w<br>
Cassy plans to buy a new computer, and plans to
save $20 each week for the next w weeks. The total
amount of money she saved is represented by the
equation above, where Tis the total amount. Which
of the following is the best interpretation of the
number 150 in the equation?
</p>`,
            options: [`The new computer costs $150.
`, `She saved $150 each week.

`, `She wants to buy a computer when she saves
$150.

`, `She has already saved $150 toward the cost of a
new computer.

`],
            correct: 3
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following
information.<br><table>
  <tr>
    <th>Dog age(D)</th>
    <th>0</th>
    <th>2</th>
    <th>4</th>
    <th>8</th>
    <th>10</th>
    <th>...</th>
    <th>15</th>
  </tr>
  <tr>
    <td>Human age (H)</td>
    <td>a</td>
    <td>10</td>
    <td>20</td>
    <td>30</td>
    <td>40</td>
    <td>...</td>
    <td>b</td>
  </tr>
  <tr>
    
  </tr>
</table><br>The chart above shows equivalent ages for dogs and
humans. Human age is directly proportional to dog
age.<br>What is the value of a+b?</p>`,
            options: [`60`, `75`, `80`, `85`],
            correct: 1
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 5 and 6 refer to the following
information.<br><table>
  <tr>
    <th>Dog age(D)</th>
    <th>0</th>
    <th>2</th>
    <th>4</th>
    <th>8</th>
    <th>10</th>
    <th>...</th>
    <th>15</th>
  </tr>
  <tr>
    <td>Human age (H)</td>
    <td>a</td>
    <td>10</td>
    <td>20</td>
    <td>30</td>
    <td>40</td>
    <td>...</td>
    <td>b</td>
  </tr>
  <tr>
    
  </tr>
</table><br>The chart above shows equivalent ages for dogs and
humans.Human age is directly proportional to dog
age.<br>Which of the following graphs best represents the
relationship between dog and human ages?<br><img src="../data-sat/2/2.6.png"></p>`,
            options: [`A`, `B`, `C`, `D`],
            correct: 1
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>In the fraction<math>
  <mfrac>
    <mn>a-5</mn>
    <mn>2b</mn>
  </mfrac>
</math>, a is 5 less than two times b. If the fraction is equal to<math>
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>, what is the value of a?</p>`,
            options: [`15`, `20`, `25`, `30`],
            correct: 0
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Tyler spent 60 dollars at an amusement park for
admission and rides. If he paid $10 for admission, and
rides cost $3 each, what is the maximum number of
rides that he went on?
</p>`,
            options: [`16`, `17`, `18`, `20`],
            correct: 0
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>y=-<math>
  <mfrac>
    <mn>1</mn>
    <mn>10</mn>
  </mfrac>
</math>x²+k<br>y=5<br>In the system of equations above, k is a constant.
For which of the following values of k does the
system of equations have no real solution?</p>`,
            options: [`10`, `8.5`, `5`, `-0.05`],
            correct: 3
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>If a linear function ƒ satisfies f(3) =10 and
f(7)=18, what is the value of f(5)?
</p>`,
            options: [`12`, `14`, `15`, `16`],
            correct: 1
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 11 and 12 refer to the following
information.<br><img src="../data-sat/2/2.11.png"><br>A rancher has 100 feet of fencing to enclose
rectangular region as shown above. The length and
width are represented by x and y respectively.<br>Which ofthe following expressions represents the
area of the rectangular region as a function of x?

     
</p>`,
            options: [`100x-x²`, `50x-x²`, `50x+x²`, `50x²
`],
            correct: 1
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 11 and 12 refer to the following
information.<br>
<img src="../data-sat/2/2.11.png"><br>A rancher has 100 feet of fencing to enclose
rectangular region as shown above. The length and
width are represented by x and y respectively.<br>If the value of y is 25, what is the area of the
rectangular region in square feet?</p>`,
            options: [`325
`, `625`, `1250`, `2500`],
            correct: 1
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><table>
  <tr>
    <th>
      <th colspan>="3">Factory Workers over 60</th>
  </tr>
  <tr>
    <td>Year</td>
    <td>Percent of Men</td>
    <td>Percent of Women</td>
  </tr>
  <tr>
  <td>1990</td>
    <td>19.6</td>
    <td>13.5</td>
  </tr>
  <tr>
  <td>2000</td>
    <td>23.6</td>
    <td>10.8</td>
  </tr>
  <tr>
    
  </tr>
</table><br>The table above shows the percent of men and
women 60 years and older who were working in a
certain factory in the U.S. in the given years. If the
rate of increase or decrease every year is constant,
which of the following represents the percent of
men over 60 who were working in the factory in
the year 2015?</p>`,
            options: [`26.6`, `27.2`, `29.6`, `30.5`],
            correct: 2
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Mary is making a rectangle whose perimeter is less
than 100 inches. If the dimensions of the rectangle
are integers,what is the largest possible area for the
rectangle in square inches?</p>`,
            options: [`600`, `625`, `650`, `800`],
            correct: 0
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/2.15.png"><br>In the figure above, AD =<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math> and CD=1. What is
the length of AB?

</p>`,
            options: [`2`, `3`, `2<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`, `3<math>
  <msqrt>
    <mi>3</mi>
  </msqrt>
</math>
`],
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
information.<br>The number of bacteria in a controlled laboratory
environment is defined by the function
f(x)=1000xb<sup>x</sup>, where x is the time in hours.
The graph of f is shown in the xy-plane below.<br><img src="../data-sat/2/2.16.png"><br>What is the value of b?
</p>`,
            options: [`1`, `2`, `3`, `4`],
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
information.<br>The number of bacteria in a controlled laboratory
environment is defined by the function
f(x)=1000xb<sup>x</sup>, where x is the time in hours.
The graph of f is shown in the xy-plane below.<br><img src="../data-sat/2/2.16.png"><br>What is the number of bacteria in 5 hours?</p>`,
            options: [`27,000`, `32,000`, `40,000`, `64,000`],
            correct: 1
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Jackie goes on a 30-mile bike ride every Sunday.
He rides the distance in 3 hours. At this rate, how
many miles can he ride in 5 hour and 30 minutes?
</p>`,
            correct: { answers: ["55"], numeric: 55, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p><img src="../data-sat/2/2.19.png"><br>The graphs of a linear function f and a quadratic
function g are shown in the xy-plane above. If
f(g(k))=-3, what is the value of |k|?</p>`,
            correct: { answers: ["1"], numeric: 1, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Twenty grams of solution P is 10% alcohol and 30
grams of solution is 20% alcohol by mass. If
these two solutions are mixed together, what is the
percent ofalcohol in the mixture? (Disregard the %
sign when gridding your answer.)
</p>`,
            correct: { answers: ["16"], numeric: 16, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 37 and 38 refer to the following
information.<br>The total cost of an internet phone-call is the sum of<br>(1) a basic fixed charge for using the internet
and<br>(2) an additional charge for each minute that is
used.<br>The total cost of a 20 minute-call is $24 and the total
cost of a 35 minute-call is $31.50.
(Disregard the $ sign when gridding your answer.)<br>
What is the basic fixed charge, in dollars, for using
the internet?


</p>`,
            correct: { answers: ["14"], numeric: 14, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems (dependence)",
            prompt:
                `<p>Questions 37 and 38 refer to the following
information.<br>The total cost of an internet phone-call is the sum of<br>(1) a basic fixed charge for using the internet
and<br>(2) an additional charge for each minute that is
used.<br>The total cost of a 20 minute-call is $24 and the total
cost of a 35 minute-call is $31.50.
(Disregard the $ sign when gridding your answer.)<br>What is the total cost, in dollars, of a 40 minute-call?</p>`,
            correct: { answers: ["34"], numeric: 34, tolerance: 0 }
        },
        
    ]
};