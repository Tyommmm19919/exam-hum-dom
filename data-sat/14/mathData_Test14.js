window.satMathData = {
    testId: "14",
    section: "math",
    meta: {
        calculatorAllowed: true, // Digital SAT: calculator allowed throughout
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
            skill: "Exponents (fractional, negative)",
            prompt: `<p>Which of the following is equal to $10^{-\\frac{2}{3}}$ ?</p>`,
            options: [
                "$\\sqrt{100}$",
                "$\\sqrt[3]{100}$",
                "$\\sqrt[3]{\\tfrac{1}{100}}$",
                "$\\dfrac{1}{\\sqrt[3]{100^{2}}}$"
            ],
            correct: 2
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (sum/difference)",
            prompt: `<p>If $a+2b=2$ and $a-2b=10$, what is the value of $2a^{2}-8b^{2}$ ?</p>`,
            options: ["40", "30", "20", "10"],
            correct: 0
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Even/odd functions (graph symmetry)",
            prompt: `<p>Which of the following is the graph of an even function?</p>
<p>A)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-457.jpg?height=358&width=415&top_left_y=565&top_left_x=1290" alt="graph A"/></p>
<p>B)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-457.jpg?height=349&width=421&top_left_y=968&top_left_x=1287" alt="graph B"/></p>
<p>C)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-457.jpg?height=364&width=421&top_left_y=1393&top_left_x=1290" alt="graph C"/></p>
<p>D)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-457.jpg?height=369&width=421&top_left_y=1833&top_left_x=1290" alt="graph D"/></p>`,
            options: ["A", "B", "C", "D"],
            correct: 2
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Domains (rational & radical terms)",
            prompt: `<p>Which of the following numbers is contained in the domain of the function $f(x)=\\dfrac{1}{x-5}-\\dfrac{1}{\\sqrt{x-5}}$ ?</p>`,
            options: ["6", "5", "-5", "-6"],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear identity (infinitely many solutions)",
            prompt: `
<p>
\\[
10x-4x(k-2)=4x
\\]
In the equation above, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$ ?
</p>
`,
            options: ["2", "$\\tfrac{7}{2}$", "$\\tfrac{9}{2}$", "$\\tfrac{11}{2}$"],
            correct: 1
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear model interpretation",
            prompt: `
<p>
\\[
1{,}500-50k=200
\\]
In 1968, the population of an insect species was 1,500. The population $k$ years after 1968 was 200, and $k$ satisfies the equation above. Which of the following is the best interpretation of the number 50 in the context?
</p>
`,
            options: [
                "The population in 1968.",
                "The value of $k$ when the population is 200",
                "The average decrease in the population per year",
                "The population $k$ years after 1968"
            ],
            correct: 2
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Geometry (cube: surface area from volume)",
            prompt: `<p>If the volume of a cube is $a$ cubic meters, which of the following is the expression for the surface area of this cube?</p>`,
            options: [
                "$\\sqrt{6a^{3}}$",
                "$6\\sqrt[3]{a^{2}}$",
                "$6a\\sqrt{a}$",
                "$6a^{2}$"
            ],
            correct: 1
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic roots identity",
            prompt: `
<p>
\\[
x^{2}-4x+2=0
\\]
If $a$ and $b$ are the roots of the equation above, what is the value of $(a+1)(b+1)$ ?
</p>
`,
            options: ["5", "6", "7", "10"],
            correct: 2
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Solve 2×2 system (linear combo)",
            prompt: `
<p>
\\[
\\begin{aligned}
& 3x-5y=5 \\\\
& 5x-3y=35
\\end{aligned}
\\]
If $(x, y)$ is a solution to the system of equations above, what is the value of $x-y$ ?
</p>
`,
            options: ["5", "10", "20", "40"],
            correct: 0
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic from table (zeros & leading factor)",
            prompt: `
<p>Some values of $x$ and $f(x)$ are shown in the table below. If the function $f$ is defined by a quadratic polynomial, which of the following defines $f$ ?</p>
<table>
<tr><th>$x$</th><th>$f(x)$</th></tr>
<tr><td>0</td><td>6</td></tr>
<tr><td>1</td><td>0</td></tr>
<tr><td>2</td><td>-2</td></tr>
<tr><td>3</td><td>0</td></tr>
<tr><td>4</td><td>6</td></tr>
</table>
`,
            options: [
                "$f(x)=(x-1)(x-3)$",
                "$f(x)=3x(x-6)$",
                "$f(x)=2(x-1)(x-3)$",
                "$f(x)=2(x+1)(x+4)$"
            ],
            correct: 2
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponents (solve for parameter)",
            prompt: `<p>If $a^{5}=10$ and $a^{7}=\\dfrac{2}{p}$, which of the following is an expression for $p$ ?</p>`,
            options: ["$2a^{2}$", "$\\dfrac{5}{a^{2}}$", "$\\dfrac{1}{5a^{2}}$", "$\\dfrac{a^{2}}{100}$"],
            correct: 2
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Ticket revenue decomposition (expressions)",
            prompt: `<p>A movie theater sold $n$ tickets today. Some of these were adult tickets and the rest were child tickets. An adult ticket costs twelve dollars and a child ticket costs eight dollars. If the theater sold $\\$\\,2000$ worth of tickets, and the number of child tickets sold is $c$, which of the following could be the value of $n$ ?</p>`,
            options: [
                "$n=\\dfrac{2000}{c}$",
                "$n=\\dfrac{500-4c}{3}$",
                "$n=\\dfrac{500-c}{3}$",
                "$n=\\dfrac{500+c}{3}$"
            ],
            correct: 3
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Cubic graph properties",
            prompt: `
<p>
\\[
f(x)=x(x+2)(x-3)
\\]
In the function $f(x)$ above, which of the following about the graph of $f$ in the $xy$-plane could <em>not</em> be true?
</p>
`,
            options: [
                "The graph of $f$ rises to the right as $x$ approaches positive infinity.",
                "The function $f$ falls to the left as $x$ approaches negative infinity.",
                "The function $f$ has three distinct real zeros.",
                "The graph of $f$ has a negative $y$-intercept."
            ],
            correct: 3
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry (tangent lengths / sector area)",
            prompt: `<p>In the figure above, $\\overline{PA}$ and $\\overline{PB}$ are tangent to circle $O$ with radius $AO=6$. If the measure of $\\angle APB$ is $60^{\\circ}$, which of the following is closest to the area of the shaded region?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-471.jpg?height=375&width=558&top_left_y=508&top_left_x=1236" alt="two tangents to circle forming sector/triangle shaded"/>`,
            options: ["20", "25", "28", "30"],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Positive-definite quadratic (discriminant)",
            prompt: `
<p>
\\[
f(x)=x^{2}+mx+4
\\]
In the function above, $f(x)>0$ for all values of $x$. Which of the following could be the value of $m$ ?
</p>
`,
            options: ["8", "6", "4", "2"],
            correct: 3
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Binomial identities",
            prompt: `<p>If $(x+y)^{2}=10$ and $(x-y)^{2}=4$, what is the value of $xy$ ?</p>`,

            correct: { answers: ["3/2", "1.5"], numeric: 1.5, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Function input scaling",
            prompt: `
<p>
\\[
f\\!\\left(\\tfrac{x}{3}\\right)=x^{2}-2x+k
\\]
In the equation above, $k$ is a constant. If $f(2)=20$, what is the value of $f(-2)$ ?
</p>
`,

            correct: { answers: ["44"], numeric: 44, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Geometry (square, midpoint, triangle area)",
            prompt: `<p>In the figure above, the area of square $ABCD$ is 36 and $M$ is the midpoint of $\\overline{AD}$. What is the area of $\\triangle ABE$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-462.jpg?height=404&width=432&top_left_y=1564&top_left_x=319" alt="square and triangle ABE"/>`,

            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry (triangle from intersecting lines)",
            prompt: `<p>In the $xy$-plane above, the slope of line $\\ell$ is 2 and the slope of line $m$ is 1. Lines $\\ell$ and $m$ intersect at point $P$. What is the area of $\\triangle PQR$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-462.jpg?height=546&width=661&top_left_y=485&top_left_x=1224" alt="lines l and m, triangle PQR"/>`,

            correct: { answers: ["9"], numeric: 9, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Absolute value & line intersection",
            prompt: `
<p>
\\[
\\begin{aligned}
& y=|x-3| \\\\
& y=x
\\end{aligned}
\\]
If $(a, b)$ is a solution to the system of equations above, what is the value of $a$ ?
</p>
`,

            correct: { answers: ["1.5", "3/2"], numeric: 1.5, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Odd/even function recognition",
            prompt: `<p>Which of the following functions is an odd function?</p>`,
            options: ["$f(x)=x+5$", "$f(x)=x^{2}$", "$f(x)=x^{3}$", "$f(x)=x^{3}+5$"],
            correct: 2
        },

        // Grid-in / numeric (31–38)
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Linear equation (solve & scale)",
            prompt: `<p>If $\\dfrac{1}{10}x+\\dfrac{1}{20}y=5$, what is the value of $4x+2y$?</p>`,
            correct: { answers: ["200"], numeric: 200, tolerance: 0 }
        },

        // -----------------------------
        // MODULE 2 (Questions 1–30 MCQ, 31–38 Grid)
        // -----------------------------
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear cost model (units)",
            prompt: `<p>Hillary's new car costs $m$ dollars per month for car payment and insurance. She estimates that gas and maintenance cost $k$ cents per mile. What is her total monthly cost, in dollars, as a function of the miles, $x$, driven during the month?</p>`,
            options: ["$(m+k)x$", "$mx+\\dfrac{kx}{100}$", "$m+\\dfrac{kx}{100}$", "$100m+kx$"],
            correct: 2
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percent change",
            prompt: `<p>If $x$ is greater than $y$, $x$ is how much, in percent, greater than $y$ ?</p>`,
            options: ["$\\dfrac{x}{y}$", "$\\dfrac{x-y}{y}$", "$\\dfrac{100x}{y}$", "$\\dfrac{100(x-y)}{y}$"],
            correct: 3
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Isosceles triangle on coordinate grid",
            prompt: `<p><em>Note: Figure not drawn to scale.</em> In the $xy$-plane above, $BC=AC$ and $AB=3\\sqrt{2}$. If the coordinates of point $A$ are $(1,2)$, what are the coordinates of point $B$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-464.jpg?height=438&width=644&top_left_y=488&top_left_x=1187" alt="triangle ABC on grid"/>`,
            options: ["$(3,3)$", "$(3,4)$", "$(4,5)$", "$(5,6)$"],
            correct: 2
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Trig cofunction (sec=csc)",
            prompt: `<p>If $\\sec(3x+10)^{\\circ}=\\csc(x-20)^{\\circ}$, which of the following could be the value of $x$ ?</p>`,
            options: ["20", "25", "30", "35"],
            correct: 1
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial end behavior / y-intercept (graph)",
            prompt: `<p>Which of the following could be the graph of a fifth degree equation with a leading coefficient of five and a constant of three?</p>
<p>A)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-465.jpg?height=386&width=478&top_left_y=651&top_left_x=205" alt="poly graph A"/></p>
<p>B)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-465.jpg?height=389&width=478&top_left_y=1113&top_left_x=205" alt="poly graph B"/></p>
<p>C)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-465.jpg?height=380&width=475&top_left_y=1599&top_left_x=208" alt="poly graph C"/></p>
<p>D)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-465.jpg?height=387&width=484&top_left_y=2044&top_left_x=205" alt="poly graph D"/></p>`,
            options: ["A", "B", "C", "D"],
            correct: 2
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic range (vertex form)",
            prompt: `<p>What is the range of the function $y=2x^{2}-8x-3$ ?</p>`,
            options: [
                "All real numbers greater than or equal to -13.",
                "All real numbers less than or equal to -13.",
                "All real numbers greater than or equal to -11.",
                "All real numbers less than or equal to -11."
            ],
            correct: 2
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential decay interpretation",
            prompt: `<p>The equation $P=20{,}000(0.93)^{10}$ is being used to calculate the cost of money of an automobile. What does $0.93$ represent in this equation?</p>`,
            options: ["$0.93\\%$ decay", "$0.93\\%$ growth", "$7\\%$ decay", "$7\\%$ growth"],
            correct: 2
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change from graph",
            prompt: `<p>The graph below shows the variation in the average temperature of a certain area from 1995 to 2015. During which year interval did the temperature variation change the most per year?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-466.jpg?height=658&width=746&top_left_y=542&top_left_x=177" alt="variation of average temperature"/>`,
            options: ["1995–2000", "2000–2005", "2005–2010", "2010–2015"],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value inequality (OR to | |)",
            prompt: `<p>If $x \\le -10$ or $x \\ge 16$, which of the following represents the values of $x$ ?</p>`,
            options: [
                "$|x+3| \\le 13$",
                "$|x+3| \\ge 13$",
                "$|x-3| \\ge 13$",
                "$|x-3| \\le 13$"
            ],
            correct: 2
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Vertex to standard form (intercept)",
            prompt: `<p>If the vertex of $y=x^{2}-ax+b$ has coordinates $(2,-5)$, what is the $y$-intercept of this graph in the $xy$-plane?</p>`,
            options: ["$(0,2)$", "$(0,1)$", "$(0,-1)$", "$(0,-2)$"],
            correct: 2
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic vs absolute value (no solution condition)",
            prompt: `
<p>
\\[
\\begin{aligned}
& y=-|x-2|+3 \\\\
& y=(x-2)^{2}+k
\\end{aligned}
\\]
In the system of equations above, for which of the following values of $k$ does the system have no solution?
</p>
`,
            options: ["-2", "0", "3", "4"],
            correct: 3
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Intercepts to vertex form (solve a)",
            prompt: `
<p>
\\[
f(x)=a(x-b)^{2}+10
\\]
In the $xy$-plane, the graph of the function $f$ above has $x$-intercepts at $-2$ and $6$. What is the value of $a$ ?
</p>
`,
            options: ["-5", "$-\\tfrac{5}{8}$", "$\\tfrac{5}{8}$", "5"],
            correct: 1
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear systems (unique solution criterion)",
            prompt: `
<p>
\\[
\\begin{aligned}
& 2x-3y=1 \\\\
& ax+by=c
\\end{aligned}
\\]
In the system of equations above, $a, b$, and $c$ are constants. For which of the following values of $a, b$, and $c$ does the system have only one solution?
</p>
`,
            options: [
                "$a=2,\\ b=-3,\\ c=1$",
                "$a=4,\\ b=-6,\\ c=5$",
                "$a=6,\\ b=-9,\\ c=5$",
                "$a=10,\\ b=10,\\ c=1$"
            ],
            correct: 3
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Two-way table completion and percentage",
            prompt: `
<p>The incomplete table below summarizes a survey of students' favorite ice cream flavors in a math club. What percent of students who prefer strawberry ice cream are male?</p>
<table>
<tr><th>Gender</th><th>Chocolate</th><th>Strawberry</th><th>Total</th></tr>
<tr><td>Male</td><td>20</td><td></td><td></td></tr>
<tr><td>Female</td><td></td><td>15</td><td>25</td></tr>
<tr><td>Total</td><td>30</td><td></td><td>70</td></tr>
</table>
`,
            options: ["$34\\%$", "$40\\%$", "$60\\%$", "$62.5\\%$"],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Partial fractions (solve for a)",
            prompt: `
<p>
\\[
\\frac{x+1}{x^{2}-3x+2}=\\frac{a}{x-1}+\\frac{b}{x-2}
\\]
The equation above is true for all values of $x$ except 1 and 2, where $a$ and $b$ are constants. What is the value of $a$ ?
</p>
`,
            options: ["-4", "-2", "3", "4"],
            correct: 1
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Perpendicular slope / distance relation",
            prompt: `<p><em>Note: Figure not drawn to scale.</em> In the $xy$-plane above, $\\overline{OP}$ is perpendicular to $\\overline{PR}$. What is the value of $k$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-469.jpg?height=421&width=564&top_left_y=468&top_left_x=239" alt="perpendicular segments with k"/>`,
            options: ["5", "$2\\sqrt{10}$", "8", "$3\\sqrt{5}$"],
            correct: 1
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Distance from origin to a line",
            prompt: `<p>In the $xy$-plane above, line $\\ell$ is defined by the equation $3x+4y=12$ and $\\overline{OP}$ is perpendicular to line $\\ell$. What is the length of $\\overline{OP}$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-470.jpg?height=415&width=529&top_left_y=1359&top_left_x=1193" alt="distance from origin to line 3x+4y=12"/>`,
            options: ["1.6", "2.4", "3.2", "3.6"],
            correct: 1
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Solve radical equation",
            prompt: `
<p>
\\[
2\\sqrt{x}+8=x
\\]
What is the solution to the equation above?
</p>
`,
            correct: { answers: ["16"], numeric: 16, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Complex numbers (match real/imag)",
            prompt: `<p>If $x^{2}-y^{2}+(x+y)i=12+5i$, what is the value of $x-y$ ? (Note: $i=\\sqrt{-1}$)</p>`,
            correct: { answers: ["12/5", "2.4"], numeric: 2.4, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Parabolic arch clearance (modeling)",
            prompt: `<p><em>Note: Figure not drawn to scale.</em> In the $xy$-plane above, the cross-section view of a tunnel under a bridge with an opening in the shape of a parabolic arch is shown. A large rectangular house trailer can be moved along a highway that passes through the tunnel. If the trailer is 8 meters wide and 6 meters tall, what is the height, $h$ in meters, of the tunnel in the center?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-473.jpg?height=610&width=763&top_left_y=456&top_left_x=1165" alt="parabolic arch cross-section"/>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Parabola-line intersections (distance)",
            prompt: `<p>In the $xy$-plane, a parabola with equation $y=(x-5)^{2}-10$ intersects a line with equation $y=6$ at two points, $A$ and $B$. What is the length of $\\overline{AB}$ ?</p>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Common external tangent segment length",
            prompt: `<p>In the figure above, line $\\ell$ is tangent to both circles at points $A$ and $B$ respectively. The radius of circle $A$ is 4 and the radius of circle $B$ is 9. What is the length of $\\overline{PS}$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-474.jpg?height=313&width=512&top_left_y=513&top_left_x=194" alt="two circles with a common tangent and points P,S"/>`,
            correct: { answers: ["12"], numeric: 12, tolerance: 0 }
        },
    ]
};

