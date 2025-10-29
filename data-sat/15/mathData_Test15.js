window.satMathData = {
    testId: "1",
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
        // SECTION 3 - Module 1 (No Calculator)
        {
            id: "M1-01",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>What are the solutions to the equation $\\frac{1}{10} x^{2}-\\frac{1}{5} x=\\frac{4}{5}$ ?</p>`,
            options: [
                "-2 and -4",
                "-2 and 4", 
                "4 and 6",
                "4 and 8"
            ],
            correct: 1 // B
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq", 
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>If $\\frac{a}{2 b}=5$, what is the value of $\\frac{15 b}{2 a}$ ?</p>`,
            options: [
                "$\\frac{2}{3}$",
                "$\\frac{3}{4}$",
                "$\\frac{7}{2}$", 
                "$\\frac{15}{2}$"
            ],
            correct: 1 // B
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH", 
            skill: "Exponent rules",
            prompt: `<p>Which of the following is equal to $\\frac{a^{\\frac{1}{2}}}{a^{-\\frac{1}{3}}}$ ?</p>`,
            options: [
                "$\\sqrt[6]{a}$",
                "$\\sqrt{6^{5}}$",
                "$\\sqrt[6]{a^{5}}$",
                "$\\sqrt[5]{a^{6}}$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change from graph",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-483.jpg?height=740&width=743&top_left_y=1239&top_left_x=1182" alt="distance graph"/></p><p>The graph above shows Peter's distance from his campsite in $h$ hours. Which hourly interval had the greatest rate of change?</p>`,
            options: [
                "hour 0 to hour 1",
                "hour 1 to hour 2", 
                "hour 4 to hour 5",
                "hour 5 to hour 6"
            ],
            correct: 1 // B
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational equations",
            prompt: `<p>If $\\frac{8}{x}-\\frac{12}{x+10}=0$, what is the value of $\\frac{x}{4}$ ?</p>`,
            options: ["20", "10", "5", "2"],
            correct: 2 // C
        },
        {
            id: "M1-06", 
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$$\\begin{aligned}& 2x-5y=-9 \\\\& 5x-2y=-5\\end{aligned}$$</p><p>If $(a, b)$ is a solution to the system of equations above, what is the value of $a-b$ ?</p>`,
            options: ["-14", "-4", "-2", "2"],
            correct: 2 // C
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH", 
            skill: "Linear equations",
            prompt: `<p>The line $y=mx-5$, where $m$ is a constant, is graphed in the $xy$-plane. If the line passes through the points $(a, 0)$, where $a \\neq 0$, what is the slope of the line in terms of $a$ ?</p>`,
            options: [
                "$-\\frac{a}{5}$",
                "$-\\frac{5}{a}$", 
                "$\\frac{a}{5}$",
                "$\\frac{5}{a}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Parabola geometry",
            prompt: `<p>In the $xy$-plane, a line with equation $y=-26$ intersects a parabola with the equation $y=-(x-10)^{2}+10$ at points $P$ and $Q$. What is the length of $\\overline{PQ}$ ?</p>`,
            options: ["6", "8", "12", "20"],
            correct: 2 // C
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial division",
            prompt: `<p>The equation $3x^{3}-5x+5=(3x^{2}+3x-2)(x-1)+a$ is true for all values of $x$, where $a$ is a constant. What is the value of $a$ ?</p>`,
            options: ["3", "5", "7", "8"],
            correct: 0 // A
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Percent applications",
            prompt: `<p>A pharmaceutical salesperson receives a monthly salary of $3000$ plus a commission of $k$ percent of his sales. If the salesperson's monthly wage is $7200$, what are his sales in terms of $k$ ?</p>`,
            options: [
                "$7200k$",
                "$4200k$", 
                "$\\frac{4200}{k}$",
                "$\\frac{420000}{k}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rate problems",
            prompt: `<p>On a trip downtown, Peter drove his car at an average rate of 50 miles per hour. On the return trip due to bad weather, he drove his car at an average rate of 30 miles per hour and the return trip took 1 hour longer. How much time did he spend on the returning trip?</p>`,
            options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
            correct: 2 // C
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>What are the zeros of $f(x)=2(x-4)^{2}-10$ ?</p>`,
            options: [
                "$x=-4 \\pm \\sqrt{5}$",
                "$x=\\frac{-4 \\pm \\sqrt{5}}{2}$", 
                "$x=4 \\pm \\sqrt{5}$",
                "$x=\\frac{4 \\pm \\sqrt{5}}{2}$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Piecewise functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-486.jpg?height=606&width=752&top_left_y=525&top_left_x=131" alt="texting plan graph"/></p><p>The domestic texting plan of a mobile telephone company is modeled by the graph in the $xy$-plane above.</p><p>If Jackson uses 280 texts this month, what is his cost in dollars?</p>`,
            options: ["42", "44", "46", "48"],
            correct: 2 // C
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear equations from graphs",
            prompt: `<p>If $x>100$, which of the following equations represents the cost?</p>`,
            options: [
                "$y=\\frac{1}{10} x$",
                "$y=\\frac{1}{10} x+30$", 
                "$y=\\frac{1}{10}(x-100)+30$",
                "$y=\\frac{1}{10}(x-200)+30$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Probability",
            prompt: `<p>The data in the table above show a public opinion poll exploring the relationship between age and support for a candidate in an election in a town. If a person is chosen at random from those who are over 30 years old, what is the probability that the person belongs to the 31-40 age group and does not support the candidate?</p><table><tr><th>Age</th><th>For</th><th>Against</th><th>No opinion</th></tr><tr><td>21-30</td><td>80</td><td>90</td><td>10</td></tr><tr><td>31-40</td><td>80</td><td>100</td><td>20</td></tr><tr><td>Over 40</td><td>40</td><td>70</td><td>10</td></tr></table>`,
            options: [
                "$\\frac{1}{5}$",
                "$\\frac{5}{16}$", 
                "$\\frac{2}{5}$",
                "$\\frac{9}{24}$"
            ],
            correct: 1 // B
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>If one of the zeros of $f(x)=2x^{2}-8x+k$ is -1, what is the other zero of the function?</p>`,
            correct: { answers: ["5"], numeric: 5, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Function evaluation",
            prompt: `<p>If $f(x+1)=5x+k$ and $f(3)=8$, what is the value of $f(5)$ ?</p>`,
            correct: { answers: ["18"], numeric: 18, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Geometry area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-487.jpg?height=495&width=586&top_left_y=1319&top_left_x=245" alt="rectangle triangle"/></p><p>In rectangle $ABCD$ above, $AD=12, AB=6$, and $EG=4$. What is the area of $\\triangle EFG$ ?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$$\\begin{aligned}& 3x-ay=3 \\\\& ax-by=4\\end{aligned}$$</p><p>In the system of equations above, $a$ and $b$ are nonzero constants. If the system has infinitely many solutions, what is the value of $b$ ?</p>`,
            correct: { answers: ["16/3", "5.33"], numeric: 16/3, tolerance: 0.01 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-487.jpg?height=404&width=718&top_left_y=1330&top_left_x=1159" alt="triangle"/></p><p>In the figure above, $AD=4$ and $BD=3$. What is the value of $\\sin C$ ?</p>`,
            correct: { answers: ["3/5", "0.6"], numeric: 0.6, tolerance: 0.01 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function intersection",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-496.jpg?height=557&width=746&top_left_y=491&top_left_x=1085" alt="function intersection"/></p><p>Note: Figure not drawn to scale.</p><p>The graphs of functions $f$ and $g$ intersect at points $P$ and $Q$ in the $xy$-plane above. What is the $x$-coordinate of point $P$ ?</p>`,
            options: [
                "$\\frac{1}{4}$",
                "$\\frac{1}{2}$", 
                "1",
                "2"
            ],
            correct: 1 // B
        },

        // Grid-in questions for Section 4
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Exponential equations",
            prompt: `<p>If $9^{x-1}=\\sqrt{27}$, what is the value of $x$ ?</p>`,
            correct: { answers: ["7/4", "1.75"], numeric: 1.75, tolerance: 0.01 }
        },

        // SECTION 4 - Module 2 (Calculator)
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear equations",
            prompt: `<p>If $\\frac{3}{2}\\left(x+\\frac{3}{4}\\right)=3$, what is the value of $x$ ?</p>`,
            options: [
                "$\\frac{5}{3}$",
                "$\\frac{5}{4}$", 
                "$\\frac{4}{3}$",
                "$\\frac{3}{2}$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Work problems",
            prompt: `<p>Mina can do a job in 2 hours, and Ruth can do the same job in 4 hours. If they work together, how long will it take them to do the job?</p>`,
            options: ["50 minutes", "60 minutes", "80 minutes", "100 minutes"],
            correct: 2 // C
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>Which of the following equations has the same solution as $2x^{2}-8x-90=0$ ?</p>`,
            options: [
                "$(x-2)^{2}=98$",
                "$(x-2)^{2}=49$", 
                "$(x-2)^{2}=45$",
                "$(x-4)^{2}=45$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Parabola geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-489.jpg?height=423&width=587&top_left_y=1316&top_left_x=1210" alt="parabola graph"/></p><p>The graph of $y=2x^{2}-9x+4$ shown in the $xy$-plane above intersects the $x$-axis at points $P$ and $Q$. What is the length of $\\overline{PQ}$ ?</p>`,
            options: ["1.5", "2.5", "3.5", "4.5"],
            correct: 2 // C
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function composition",
            prompt: `<p>For function $f, f(-1)=5$ and $f(3)=10$. For function $g, g(-1)=3$ and $g(3)=-1$. What is the value of $f(g(-1))$ ?</p>`,
            options: ["3", "5", "8", "10"],
            correct: 3 // D
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Statistics",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-490.jpg?height=321&width=649&top_left_y=1304&top_left_x=228" alt="dot plot"/></p><p>The dot plot shown above represents the number of pets owned by students in a class. What is the median number of pets?</p>`,
            options: ["1", "1.5", "2", "2.5"],
            correct: 2 // C
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Complex numbers",
            prompt: `<p>$(3-4i)^{2}=a+bi$</p><p>In the equation above, $a$ and $b$ are constants. What is the value of $a$ ? (Note: $i=\\sqrt{-1}$)</p>`,
            options: ["-10", "-7", "16", "25"],
            correct: 1 // B
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic identities",
            prompt: `<p>$\\left(x+\\frac{1}{x}\\right)^{2}$</p><p>Which of the following is equivalent to the expression above?</p>`,
            options: [
                "$x^{2}+\\frac{1}{x^{2}}$",
                "$\\left(x-\\frac{1}{x}\\right)^{2}+2$", 
                "$\\left(x-\\frac{1}{x}\\right)^{2}+4$",
                "$x^{2}-\\frac{1}{x^{2}}$"
            ],
            correct: 2 // C
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function properties",
            prompt: `<p>Which of the following equations has a graph in the $xy$-plane for which $y$ is always greater than 0 ?</p>`,
            options: [
                "$y=x+5$",
                "$y=x^{2}-2$", 
                "$y=(x-1)(x-3)$",
                "$y=|x-10|+1$"
            ],
            correct: 3 // D
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-491.jpg?height=455&width=632&top_left_y=1416&top_left_x=177" alt="hexagon"/></p><p>In the $xy$-plane above, $ABCDEF$ is a regular hexagon with a side of 2. What is the $x$-coordinate of $E$ ?</p>`,
            options: ["5", "6", "7", "8"],
            correct: 1 // B
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>If $k^{2}-16=16-k^{2}$, what are all values of $k$ ?</p>`,
            options: [
                "0 only",
                "4 only", 
                "-4 and 4 only",
                "$-4,0$, and 4"
            ],
            correct: 2 // C
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p>$\\sin\\left(2x-\\frac{\\pi}{12}\\right)=\\cos\\left(x+\\frac{\\pi}{12}\\right)$</p><p>In the equation above, the angle measures are in radians. Which of the following could be the value of $x$ ?</p>`,
            options: [
                "$\\frac{\\pi}{12}$",
                "$\\frac{\\pi}{8}$", 
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{4}$"
            ],
            correct: 2 // C
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-492.jpg?height=621&width=847&top_left_y=579&top_left_x=102" alt="sales graph"/></p><p>The graph above shows the sales for a smartphone company in the years 2011 through 2016.</p><p>Which interval has the greatest rate of change?</p>`,
            options: [
                "year 2012 to 2013",
                "year 2013 to 2014", 
                "year 2014 to 2015",
                "year 2015 to 2016"
            ],
            correct: 2 // C
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Average rate of change",
            prompt: `<p>What is the average rate of change, in dollars per year, from year 2011 to 2016?</p>`,
            options: ["1", "5", "$1,000,000$", "$5,000,000$"],
            correct: 2 // C
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial factors",
            prompt: `<p>For a polynomial $p(x)$, the value of $p(2)$ and $p(-1)$ is 0. Which of the following could not be true about $p(x)$ ?</p>`,
            options: [
                "$x-2$ is a factor of $p(x)$.",
                "$x+1$ is a factor of $p(x)$.", 
                "$x^{2}-x-2$ is a factor of $p(x)$.",
                "$(x-2)+(x+1)$ is a factor of $p(x)$."
            ],
            correct: 3 // D
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Linear functions",
            prompt: `<p>Let $f$ be a linear function such that $f(-1)=-3$ and $f(3)=12$. What is the value of $f(0)$ ?</p>`,
            correct: { answers: ["3/4", "0.75"], numeric: 0.75, tolerance: 0.01 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Radical equations",
            prompt: `<p>$x-\\sqrt{x+11}=1$</p><p>What is the solution to the equation above?</p>`,
            correct: { answers: ["5"], numeric: 5, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Linear systems",
            prompt: `<p>Annie currently has $200$ in her bank account and deposits $8$ each week. Becky has $440$ in her account and withdraws $4$ each week. After how many weeks will they have the same balance in their accounts?</p>`,
            correct: { answers: ["20"], numeric: 20, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Rational functions",
            prompt: `<p>$f(x)=\\frac{x-10}{(x-10)^{2}+6(x-10)+9}$</p><p>For what value of $x$ is the function $f$ above undefined?</p>`,
            correct: { answers: ["7"], numeric: 7, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Compound interest",
            prompt: `<p>Lee opened a bank account that earns 2 percent interest compounded quarterly. His initial deposit was $2000$, and the value of the account after $t$ years is given by the expression $2000(1+c)^{4t}$.</p><p>What is the value of $c$ in the expression?</p>`,
            correct: { answers: [".005", "0.005"], numeric: 0.005, tolerance: 0.001 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Compound interest calculation",
            prompt: `<p>After 10 years, how much money will Lee have in his account? (Round your answer to the nearest dollar and ignore the dollar sign when gridding your answer.)</p>`,
            correct: { answers: ["2442"], numeric: 2442, tolerance: 1 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Geometry volume",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-498.jpg?height=581&width=540&top_left_y=513&top_left_x=1205" alt="cone cylinder"/></p><p>In the figure above, a cone has a height 16 and radius 8. A cylinder whose base has a radius of 5 is inscribed in the cone. What is the height of the cylinder?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        }
    ]
};