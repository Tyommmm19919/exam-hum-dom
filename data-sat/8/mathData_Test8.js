window.satMathData = {
    testId: "8",
    section: "math",
    meta: {
        calculatorAllowed: true,
        modules: [
            { id: 1, timeSeconds: 35 * 60 },
            { id: 2, timeSeconds: 35 * 60 }
        ],
        domains: ["MATH"]
    },
    items: [
        {
            id: "M1-01",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational equations",
            prompt: `<p>If $\\frac{3}{x-1}=x+1$ and $x \\neq 1$, what is the value of $x^{2}$?</p>`,
            options: ["1", "2", "4", "8"],
            correct: 2
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential equations",
            prompt: `<p>If $16=\\left(\\frac{1}{4}\\right)^{\\frac{-1}{m}}$, what is the value of $m$?</p>`,
            options: ["$-\\frac{1}{4}$", "$-\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$"],
            correct: 3
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-299.jpg?height=335&width=567&top_left_y=1593&top_left_x=296"/></p><p>In the figure above, the diameter of the semicircle is 10 and the length of $\\overline{CD}$ of rectangle $ABCD$ is 3. What is the length of $\\overline{BC}$?</p>`,
            options: ["4", "6", "7", "8"],
            correct: 3
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Unit rates",
            prompt: `<p>Alex spends $$2.25$ per gallon on gasoline. If Alex uses one gallon of gasoline to travel 30 miles, how many dollars will he spend to travel 240 miles?</p>`,
            options: ["18", "20", "24", "28"],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-300.jpg?height=392&width=704&top_left_y=479&top_left_x=139"/></p><p>In the triangle above, the length of $\\overline{DB}$ is 4 and the length of $\\overline{CD}$ is 6. What is the area of triangle $ACD$?</p>`,
            options: ["24", "27", "30", "39"],
            correct: 1
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage relationships",
            prompt: `<p>If $a$ and $b$ are positive numbers, and 125 percent of $a^{2}$ is equal to 5 percent of $b^{2}$, what is the value of $\\frac{a}{b}$?</p>`,
            options: ["$\\frac{1}{5}$", "$\\frac{2}{5}$", "2", "5"],
            correct: 0
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>$C(t)=15+0.15(t-K)$</p><p>The cost of using a smart phone is $15$ dollars for the first 200 minutes and $0.15$ dollars for additional minute. The cost $C$ is modeled by the equation above, where $t$ is the length of time in minutes and $K$ is a constant.</p><p>Based on the information above, what is the value of $K$?</p>`,
            options: ["0.15", "1", "100", "200"],
            correct: 3
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>$C(t)=15+0.15(t-K)$</p><p>If a customer paid $$36$ for using his phone, how many minutes did he use?</p>`,
            options: ["210", "340", "450", "500"],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial factors",
            prompt: `<p>If $x+1$ is a factor of $x^{4}-3x^{3}-ax+a$, where $a$ is a constant, what is the value of $a$?</p>`,
            options: ["-4", "-2", "2", "4"],
            correct: 1
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-301.jpg?height=329&width=687&top_left_y=1319&top_left_x=199"/></p><p>In the right triangle above, the value of $\\sin C$ is 0.6 and the length of $\\overline{BC}$ is 20. What is the length of $\\overline{AD}$?</p>`,
            options: ["7.2", "8.0", "9.6", "10"],
            correct: 2
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial identities",
            prompt: `<p>If $a(x+b)=3x-15$ for all real values of $x$, what is the value of $b$?</p>`,
            options: ["-5", "-3", "3", "5"],
            correct: 0
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-301.jpg?height=533&width=752&top_left_y=1304&top_left_x=1136"/></p><p>A semicircle is shown in the $xy$-plane above. If the semicircle intersects the $y$-axis at point $R$, what is the value of $b$?</p>`,
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Complex numbers",
            prompt: `<p>$\\frac{3+i}{3-i}=a+bi$</p><p>In the equation above, $a$ and $b$ are real numbers. If $i=\\sqrt{-1}$, what is the value of $a$?</p>`,
            options: ["0.2", "0.4", "0.6", "0.8"],
            correct: 3
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Probability",
            prompt: `<p>
            <table>
  <tr>
    <th>Gender</th>
    <th>Algebra</th>
    <th>Geometry</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Male</td>
    <td>80</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Female</td>
    <td>-</td>
    <td>-</td>
    <td>90</td>
  </tr>
    <tr>
    <td>Total</td>
    <td>120</td>
    <td>-</td>
    <td>200</td>
  </tr>
</table></p>
            <p>The incomplete table above shows the results of a survey about elective subject preferences given to 200 students.</p><p>What is the probability that a randomly selected student is a female who prefers geometry?</p>`,
            options: ["0.2", "0.25", "0.3", "0.4"],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Probability",
            prompt: `<p>
            <table>
  <tr>
    <th>Gender</th>
    <th>Algebra</th>
    <th>Geometry</th>
    <th>Total</th>
  </tr>
  <tr>
    <td>Male</td>
    <td>80</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Female</td>
    <td>-</td>
    <td>-</td>
    <td>90</td>
  </tr>
    <tr>
    <td>Total</td>
    <td>120</td>
    <td>-</td>
    <td>200</td>
  </tr>
</table></p><p>The incomplete table above shows the results of a survey about elective subject preferences given to 200 students.</p><p>What fraction of male students prefer geometry?</p>`,
            options: ["$\\frac{3}{20}$", "$\\frac{3}{11}$", "$\\frac{8}{11}$", "$\\frac{3}{8}$"],
            correct: 1
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Similar triangles",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-303.jpg?height=438&width=712&top_left_y=519&top_left_x=228"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, line $\\ell$, $m$, and $n$ are parallel. If $AB=8$, $BC=12$, and $PQ=10$, what is the length of $\\overline{QR}$?</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Distance problems",
            prompt: `<p>Nigel drove from city $A$ to city $B$ at the speed of 60 miles per hour, and returned along the same route at the speed of 40 miles per hour. If it took $4\\frac{1}{2}$ hours for the round trip, what is the distance, in miles, between city $A$ and city $B$?</p>`,
            correct: { answers: ["108"], numeric: 108, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Polynomial equations",
            prompt: `<p>$x^{3}-3x^{2}+5x=15$</p><p>For what real value of $x$ is the equation above true?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Polynomial identities",
            prompt: `<p>$x^{2}+(k+1)x+16=(x+h)^{2}$</p><p>In the equation above, $k$ and $h$ are positive constants. If the equation is true for all real numbers of $x$, what is the value of $k$?</p>`,
            correct: { answers: ["7"], numeric: 7, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-303.jpg?height=581&width=641&top_left_y=1167&top_left_x=1156"/></p><p>Squares $ABCD$ and $DEFG$ with integer-length sides of $b$ and $a$ respectively are shown in the figure above. If the area of the shaded region is 28, what is the area of square $ABCD$?</p>`,
            correct: { answers: ["64"], numeric: 64, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>Peter sets up a lemonade stand. He paid a set-up cost of $120$ dollars and each cup of lemonade costs him $0.30$ dollars to make. He sells each cup of lemonade for $0.75$ dollars. Which of the following represents the profit $P$ as a function of the number of cups $n$ of lemonade sold?</p>`,
            options: ["$P(n)=0.75n-120$", "$P(n)=0.75n+120$", "$P(n)=0.45n-120$", "$P(n)=0.45n+120$"],
            correct: 2
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Circle area",
            prompt: `<p>$x^{2}-4x+y^{2}+4y=0$</p><p>The equation of a circle in the $xy$-plane is shown above. To the nearest tenth, what is the area of the circle?</p>`,
            correct: { answers: ["25.1"], numeric: 25.1, tolerance: 0.1 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>An audio recording studio's fee consists of a setup charge of $100$ dollars plus a charge for session time at an hourly rate. The total fee for a session of 8 hours is $480$ dollars.</p><p>Which of the following functions $f$ gives the total fee, in dollars, for a session of $t$ hours in the studio?</p>`,
            options: ["$100+60t$", "$480+100t$", "$100+48t$", "$100+47.5t$"],
            correct: 0
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>An audio recording studio's fee consists of a setup charge of $100$ dollars plus a charge for session time at an hourly rate. The total fee for a session of 8 hours is $480$ dollars.</p><p>Jackson spent 10 hours recording his favorite pop songs in the studio. How much did he pay for his recording, in dollars?</p>`,
            options: ["525.5", "565", "575", "600"],
            correct: 1
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-309.jpg?height=592&width=663&top_left_y=468&top_left_x=1242"/></p><p>The graphs of $f(x)=(x-2)^{2}$ and $g(x)$ are shown in the $xy$-plane above. If the graphs intersect at point $(5,9)$, which of the following is the equation of $g(x)$?</p>`,
            options: ["$y=\\frac{1}{2}x+\\frac{13}{2}$", "$y=\\frac{2}{5}x+7$", "$y=\\frac{3}{5}x+6$", "$y=x+4$"],
            correct: 3
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>If $x^{2}+y^{2}=85$ and $xy=5$, what is the value of $\\left(\\frac{1}{x}-\\frac{1}{y}\\right)^{2}$?</p>`,
            options: ["3", "5", "75", "80"],
            correct: 0
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Partial fractions",
            prompt: `<p>$\\frac{1}{x(x+1)}=\\frac{a}{x}-\\frac{b}{x+1}$</p><p>In the equation above, $a$ and $b$ are constants. If the equation is true for all positive values of $x$, what is the value of $b$?</p>`,
            options: ["-1", "1", "2", "4"],
            correct: 1
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p>The linear function $2x+y=-5$ in the $xy$-plane is to be reflected about the $y$-axis. Which of the following ordered pairs CANNOT be the coordinates of the resulting graph?</p>`,
            options: ["$(0,-5)$", "$(2,-1)$", "$(3,1)$", "$(4,0)$"],
            correct: 3
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-310.jpg?height=452&width=674&top_left_y=482&top_left_x=1165"/></p><p>In the $xy$-plane above, the point $Q$ is on the line $y=\\frac{2}{3}x$. If the area of rectangle $OPQR$ is 54, what is the value of $b$?</p>`,
            options: ["3", "6", "9", "12"],
            correct: 1
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Averages",
            prompt: `<p>Harry bought a 10 pound bag of flour for $80$ dollars, a 25 pound bag of flour for $150$ dollars, and a 50 pound bag of flour. If the average (arithmetic mean) cost per pound of all three bags is $6.00$ dollars, what was the price of the 50 pound bag of flour?</p>`,
            options: ["$$200$", "$$240$", "$$280$", "$$320$"],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage increase",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=158&width=303&top_left_y=536&top_left_x=765"/></p><p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=703&width=951&top_left_y=685&top_left_x=137"/></p><p>The bar graph shows the scores on the algebra tests for five students in Mrs. Lee's class.</p><p>Of the following, who has the greatest percent of increase in scores from test 1 to test 2?</p>`,
            options: ["Abraham", "Benjamin", "Catherina", "Edward"],
            correct: 3
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=703&width=951&top_left_y=685&top_left_x=137"/></p><p>Which of the following scatterplots represents the data on the bar graph?</p>
            A)<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=458&width=487&top_left_y=668&top_left_x=1247"/></p>
            B)<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=458&width=490&top_left_y=1182&top_left_x=1244"/></p>
            C)<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=469&width=492&top_left_y=1693&top_left_x=1242"/></p>
            D)<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-311.jpg?height=464&width=495&top_left_y=2198&top_left_x=1244"/></p>
            
            `,
            options: ["A", "B", "C", "D"],
            correct: 2
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Standard deviation",
            prompt: `<p>The table above gives high temperatures in degrees Celsius ($C^{\\circ}$) for Amber City and Buner City over the four seasons. Which of the following is true about the data shown for the four seasons?</p>`,
            options: [
                "The standard deviation of high temperatures in Amber City is larger than Buner City.",
                "The standard deviation of high temperatures in Buner City is larger than Amber City.",
                "The standard deviation of high temperatures in Amber City is the same as that of Buner City.",
                "Based on the data above, the standard deviation of high temperatures in these cities cannot be determined."
            ],
            correct: 1
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-312.jpg?height=409&width=569&top_left_y=491&top_left_x=1210"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, $\\overline{PR}$ is tangent to circle $O$ at point $P$ and the length of $\\overline{PR}$ is 12. If the value of $\\sin \\angle R$ is 0.8, what is the radius of the circle?</p>`,
            options: ["8", "12", "16", "20"],
            correct: 2
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential systems",
            prompt: `<p>$\\begin{aligned}& 2^{(x+2y)}=16 \\\\& 3^{(2x+y)}=81\\end{aligned}$</p><p>In the system of equations, what is the value of $x$?</p>`,
            options: ["4", "3", "$\\frac{4}{3}$", "$\\frac{3}{4}$"],
            correct: 2
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>$(x+y)^{2}-(x-y)^{2}=72$</p><p>In the equation above, $x$ and $y$ are positive integers. Which of the following CANNOT be the value of $x+y$?</p>`,
            options: ["9", "11", "19", "24"],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Averages",
            prompt: `<p>$P=$ The average of $a$ and $b$</p><p>$Q=$ The average of $b$ and $c$</p><p>$R=$ The average of $c$ and $a$</p><p>The various averages (arithmetic mean) of two of the three numbers $a$, $b$, and $c$ are calculated and arranged as shown above. If $P>Q>R$, which of the following is true?</p>`,
            options: ["$a=b=c$", "$a>b>c$", "$c>b>a$", "$b>a>c$"],
            correct: 3
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>The cost $C$, in dollars, of producing $x$ units of a certain product can be modeled by the equation $C=\\frac{198.4x+1097}{16}$. According to the model, for every increase of 1 unit, by how many dollars will the cost increase? (Disregard the $$ sign when gridding your answer.)</p>`,
            correct: { answers: ["12.4"], numeric: 12.4, tolerance: 0.1 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Linear functions",
            prompt: `<p>If $f$ is a linear function for which $f(10)-f(5)=10$, what is the value of $f(20)-f(8)$?</p>`,
            correct: { answers: ["24"], numeric: 24, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-314.jpg?height=578&width=695&top_left_y=1130&top_left_x=1239"/></p><p>The graph of $y=ax^{2}+10$ is shown in the $xy$-plane above. If the area of square $ABCD$ is 400, what is the value of $a$?</p>`,
            correct: { answers: ["0.1"], numeric: 0.1, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-315.jpg?height=415&width=695&top_left_y=516&top_left_x=222"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, if the measure of $\\angle ABC$ is $30^{\\circ}$, what is the value of $k$?</p>`,
            correct: { answers: ["80"], numeric: 80, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-315.jpg?height=423&width=444&top_left_y=1422&top_left_x=336"/></p><p>In the figure above, four congruent rectangles and a square are put together to form a larger square. The perimeter of each rectangle is 24, and the area of the smaller square is 36. If the dimensions of each rectangle are $a$ and $b$ as shown above, what is the value of $b$?</p>`,
            correct: { answers: ["9"], numeric: 9, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Circle area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-315.jpg?height=472&width=541&top_left_y=548&top_left_x=1193"/></p><p>In the figure above, two congruent circles are tangent to each other and are internally tangent to the larger circle. Line segment $AB$ is the diameter of the larger circle. If the area of each smaller circle is 10, what is the area of the shaded region?</p>`,
            correct: { answers: ["20"], numeric: 20, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic optimization",
            prompt: `<p>$\\begin{aligned}& f(x)=x^{2}-6x+12 \\\\& g(x)=k\\end{aligned}$</p><p>In the equations above, $f(x) \\geq g(x)$ for all real numbers $x$. If $k$ is a constant, what is the maximum value of $k$?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        }
    ]
};