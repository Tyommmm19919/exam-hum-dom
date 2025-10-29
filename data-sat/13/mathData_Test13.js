window.satMathData = {
    testId: "1",
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
        // -----------------------------
        // MODULE 1 (Questions 1–20)
        // -----------------------------
        {
            id: "M1-01",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value & zero condition",
            prompt: `<p>Which of the following expressions is equal to 0 for some value of $x$ ?</p>`,
            options: [
                "$\\dfrac{|x-2|}{2}+1$",
                "$\\dfrac{|x-1|}{2}+2$",
                "$\\dfrac{|x+2|}{2}+3$",
                "$\\dfrac{|x-1|}{2}-4$"
            ],
            correct: 3
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratics (vertex/minimum)",
            prompt: `
<p>
\\[
f(x)=x^{2}+2x+k
\\]
In the function above, $k$ is a constant. If the minimum value of $f(x)$ is 8, what is the value of $k$?
</p>
`,
            options: ["4", "6", "8", "9"],
            correct: 3
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Intersections with horizontal line",
            prompt: `
<p>
\\[
\\begin{aligned}
& y=(x-2)(x+2) \\\\
& y=-3
\\end{aligned}
\\]
How many ordered pairs $(x, y)$ satisfy the system of equations shown above?
</p>
`,
            options: ["0", "1", "2", "Infinitely many"],
            correct: 2
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function input shift",
            prompt: `<p>If $f(x-1)=-5x+2$, what is $f(x+2)$ equal to?</p>`,
            options: ["$-5x-2$", "$-5x-13$", "$-5x-14$", "$-5x^{2}-10x+2$"],
            correct: 1
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Completing the square / factoring",
            prompt: `
<p>
\\[
2x^{2}+8x+10
\\]
Which of the following is equivalent to the expression above?
</p>
`,
            options: [
                "$(2x+2)(x+5)$",
                "$(2x-2)(x-5)$",
                "$2(x+2)^{2}+10$",
                "$2(x+2)^{2}+2$"
            ],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Radicals & proportions",
            prompt: `<p>If $\\dfrac{2\\sqrt{a}-\\sqrt{b}}{2\\sqrt{b}}=\\dfrac{1}{4}$, what is the value of $\\dfrac{a}{b}$ ?</p>`,
            options: ["$\\dfrac{2}{3}$", "$\\dfrac{3}{4}$", "$\\dfrac{4}{9}$", "$\\dfrac{9}{16}$"],
            correct: 3
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic–quadratic intersection (graph)",
            prompt: `<p>The functions $f$ and $g$ are defined by $f(x)=x^{2}-9$ and $g(x)=-\\dfrac{1}{8}x^{2}+k$, where $k$ is a constant. In the $xy$-plane above, the graphs of $f$ and $g$ intersect at the points $P$ and $Q$. What is the value of $k$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-432.jpg?height=692&width=749&top_left_y=531&top_left_x=1133" alt="two parabolas"/>`,
            options: ["1", "$\\dfrac{8}{9}$", "$\\dfrac{9}{8}$", "$\\dfrac{3}{2}$"],
            correct: 2
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic roots by discriminant",
            prompt: `
<p>
\\[
\\frac{x^{2}}{4}-x=\\frac{k}{2}
\\]
In the quadratic equation above, $k$ is a constant. For which of the following values of $k$ does the equation have two unequal real roots?
</p>
`,
            options: ["-6", "-4", "-2", "-1"],
            correct: 3
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Complex arithmetic",
            prompt: `
<p>
\\[
(2-i)(3+2i)-5i=a+bi
\\]
In the expression above, $a$ and $b$ are real numbers. What is the value of $b$ ? (Note: $i=\\sqrt{-1}$ )
</p>
`,
            options: ["-4", "-2", "4", "8"],
            correct: 0
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Geometry with tangent parallels",
            prompt: `<p>In the figure above, three identical circles with radius of 5 are tangent to one another. If lines $\\ell$ and $m$ are parallel and tangent to the circles, what is the value of $h$, the distance between the two lines?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-433.jpg?height=383&width=603&top_left_y=588&top_left_x=1199" alt="three tangent circles and two parallel tangents"/>`,
            options: [
                "$5\\sqrt{2}+10$",
                "$10\\sqrt{3}+5$",
                "$5\\sqrt{3}+10$",
                "$10\\sqrt{3}+10$"
            ],
            correct: 2
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential decay (decadal)",
            prompt: `<p>The population of a nation decreases by $2.5\\%$ every 10 years. If the population was $10,000,000$ people in 2000, which of the following expressions estimates the population of the nation in the year 2040?</p>`,
            options: [
                "10,000,000(0.025)^{40}",
                "10,000,000(0.025)^{4}",
                "10,000,000(0.975)^{40}",
                "10,000,000(0.975)^{4}"
            ],
            correct: 3
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial identity match (infinitely many solutions)",
            prompt: `
<p>
\\[
x^{2}-5x-11=a(x^{2}-1)+b(x+1)+c
\\]
In the equation above, $a, b$, and $c$ are constants. If the equation has infinitely many solutions, what is the value of $c$ ?
</p>
`,
            options: ["-7", "-5", "2", "7"],
            correct: 1
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rates (speed/time)",
            prompt: `<p>Friday, Peter drives from home to his office in 24 minutes. Saturday, there is no traffic, so he can drive to his office 15 miles per hour faster and gets to the office in 15 minutes. How far, in miles, is it from home to his office?</p>`,
            options: ["10", "12", "20", "25"],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Parabola geometry (area of triangle with vertex)",
            prompt: `<p>In the $xy$-plane above, the graph of the equation $y=a(x+4)(x-2)$ has a vertex at point $P$. If the graph intersects the $x$-axis at points $R$ and $S$, what is the area of $\\triangle RPS$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-434.jpg?height=427&width=632&top_left_y=513&top_left_x=1130" alt="parabola and triangle RPS"/>`,
            options: ["$-54a$", "$-27a$", "$27a$", "$54a$"],
            correct: 1
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Remainder on division by quadratic (linear remainder)",
            prompt: `<p>When $2x^{2}-5x+4$ is divided by $(x-1)(x+1)$, the resulting remainder is $ax+b$, where $a$ and $b$ are constants. What is the value of $a$ ?</p>`,
            options: ["6", "5", "-5", "-6"],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Circle theorems (inscribed angles/diameter)",
            prompt: `<p>In the figure above, $\\angle XAB$ and $\\angle XYA$ are inscribed in the circle. If $\\overline{AB}$ is the diameter of the circle, and the measure of $\\angle XAB$ is $65^{\\circ}$, what is the value of $x$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-435.jpg?height=415&width=421&top_left_y=485&top_left_x=296" alt="circle X, A, B, Y"/>`,
            correct: { answers: ["25"], numeric: 25, tolerance: 0 }

        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Circle completing square (radius given)",
            prompt: `
<p>
\\[
x^{2}-8x-3 + y^{2}-6y = k^{2}
\\]
The graph of the equation above in the $xy$-plane is a circle, where $k$ is a positive real number. If the radius of the circle is 8, what is the value of $k$ ?
</p>
`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }

        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Identity for all x (matching coefficients)",
            prompt: `
<p>
\\[
(2x-2)(x-7)=2(x-a)^{2}-b
\\]
In the equation above, $a$ and $b$ are constants. If the equation is true for all real values of $x$, what is the value of $b$ ?
</p>
`,
            correct: { answers: ["18"], numeric: 18, tolerance: 0 }

        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Cubic with given zeros",
            prompt: `<p>The function $f$ is defined by $f(x)=x^{3}-ax^{2}+bx-4$ where $a$ and $b$ are constants. In the $xy$-plane, the graph of $f$ intersects the $x$-axis at the three points $(-1,0),(-2,0)$, and $(k,0)$. What is the value of $k$ ?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }

        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Tangent line to parabola",
            prompt: `<p>The graphs of $y=x^{2}$ and $y=mx-1$ are shown in the $xy$-plane above, where $m$ is the slope of the line. If the graph of $y=mx-1$ is tangent to the graph of $y=x^{2}$, what is the value of $m$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-435.jpg?height=581&width=615&top_left_y=1250&top_left_x=1182" alt="parabola and tangent line"/>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }

        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Area to slope (triangle in coordinate plane)",
            prompt: `<p>In the $xy$-plane above, the area of $\\triangle OPR$ is 24. What is the slope of $\\overline{OP}$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-442.jpg?height=427&width=629&top_left_y=459&top_left_x=242" alt="triangle OPR"/>`,
            options: ["$\\dfrac{4}{3}$", "$\\dfrac{3}{4}$", "$\\dfrac{2}{3}$", "$\\dfrac{1}{2}$"],
            correct: 1
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "System with aligned format",
            prompt: `
<p>
\\[
\\begin{aligned}
& (x-1)^{2}-3(x-1)=y \\\\
& 6x-y=6
\\end{aligned}
\\]
If $(x, y)$ is a solution of the system of equations above and $y\\neq 0$, what is the value of $x$ ?
</p>
`,
            correct: { answers: ["10"], numeric: 10, tolerance: 0 }

        },

        // -----------------------------
        // MODULE 2 (Questions 1–30 MCQ, 31–38 Grid)
        // -----------------------------
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Arithmetic sequence (nth term)",
            prompt: `<p>Peter did push-ups every day. Each day after the first day, he did $m$ more push-ups than the day before. If he did $k$ push-ups on the first day, which of the following was the number of push-ups on the 7th day?</p>`,
            options: ["$7(m+k)$", "$k+7(m-1)$", "$k+7m$", "$k+6m$"],
            correct: 3
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems from costs",
            prompt: `<p>One soccer ball and two soccer shirts together cost $P$ dollars. Three soccer balls and four soccer shirts together cost $Q$ dollars. What is the cost, in dollars, of one soccer ball and one soccer shirt?</p>`,
            options: ["$Q+P$", "$Q-2P$", "$Q-P$", "$\\dfrac{Q-P}{2}$"],
            correct: 3
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Compound inequality to absolute value",
            prompt: `
<p>
x+16 < 2x+1 < x+46 <br>
Which of the following is equivalent to the inequality above?
</p>
`,
            options: [
                "$|x-15|<45$",
                "$|x-29| \\le 15$",
                "$|x-30|<15$",
                "$|x+15|<30$"
            ],
            correct: 2
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Similar triangles & area parts",
            prompt: `<p>In the figure above, $\\triangle ABC$ and $\\triangle DBE$ are similar and $\\dfrac{AD}{AB}=\\dfrac{1}{3}$. If the area of $\\triangle ABC$ is 45, what is the area of the shaded region?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-437.jpg?height=395&width=672&top_left_y=1373&top_left_x=1170" alt="similar triangles shaded region"/>`,
            options: ["15", "17.5", "25", "30"],
            correct: 2
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic zeros (scaling)",
            prompt: `<p>Which of the following are the zeros of the function $f(x)=\\dfrac{1}{10}x^{2}+\\dfrac{1}{5}x+\\dfrac{1}{20}$ ?</p>`,
            options: [
                "$x=\\dfrac{-5\\pm\\sqrt{2}}{5}$",
                "$x=\\dfrac{-4\\pm 2\\sqrt{2}}{5}$",
                "$x=\\dfrac{-4\\pm 2\\sqrt{2}}{5}$",
                "$x=\\dfrac{-2\\pm\\sqrt{2}}{2}$"
            ],
            correct: 3
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "No real solutions (recognition)",
            prompt: `<p>Which of the following equations has no real solution?</p>`,
            options: [
                "$0=-(x-5)^{2}+\\sqrt{3}$",
                "$0=-3(x-5)(x+9)$",
                "$0=2(x-5)^{2}-\\dfrac{1}{9}$",
                "$0=(x-1)(x-7)+10$"
            ],
            correct: 3
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential decay model from table",
            prompt: `
<p>The table shows radioactive decay where the amount is halved every fixed period.</p>
<table>
<tr><th>$t$ (years)</th><td>100</td><td>200</td><td>300</td><td>400</td></tr>
<tr><th>$y$ (radioactive grams)</th><td>400</td><td>200</td><td>100</td><td>50</td></tr>
</table>
<p>Which of the following functions represents the exponential decay shown in the table?</p>
`,
            options: [
                "$f(x)=400\\left(\\dfrac{1}{2}\\right)^{T}$",
                "$f(x)=400\\left(\\dfrac{1}{2}\\right)^{\\tfrac{t}{100}}$",
                "$f(x)=800\\left(\\dfrac{1}{2}\\right)^{\\prime}$",
                "$f(x)=800\\left(\\dfrac{1}{2}\\right)^{\\tfrac{t}{100}}$"
            ],
            correct: 3
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential decay (prediction)",
            prompt: `<p>How much of this material, in grams, would remain radioactive after 1000 years?</p>`,
            options: ["0.78125", "0.90254", "1.5625", "3.125"],
            correct: 0
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic transformation by completing square",
            prompt: `<p>Which of the following describes the transformation of the quadratic function $f(x)=x^{2}$ that results in the function $g(x)=x^{2}+12x+20$ ?</p>`,
            options: [
                "The graph of $f$ has been translated 12 units to the right and moved up 20 units.",
                "The graph of $f$ has been translated 6 units to the right and moved down 20 units.",
                "The graph of $f$ has been translated 6 units to the left and moved up 16 units.",
                "The graph of $f$ has been translated 6 units to the left and moved down 16 units."
            ],
            correct: 3
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Area of isosceles trapezoid",
            prompt: `<p>Isosceles trapezoid $ABCD$ is shown above. $AB=2a$, $BC=a$, and $\\angle BAD=60^{\\circ}$. What is the area of the isosceles trapezoid?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-439.jpg?height=275&width=626&top_left_y=1570&top_left_x=217" alt="isosceles trapezoid"/>`,
            options: [
                "$\\dfrac{a^{2}\\sqrt{2}}{2}$",
                "$2a^{2}\\sqrt{3}$",
                "$\\dfrac{a^{2}\\sqrt{3}}{2}$",
                "$a^{2}\\sqrt{3}$"
            ],
            correct: 1
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Reflection g(x)=f(-x)",
            prompt: `<p>The graph of $y=f(x)$ is shown in the $xy$-plane above. If $g(x)=f(-x)$, which of the following graphs best represents the graph of $y=g(x)$ ?</p>
<p>A)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-439.jpg?height=389&width=586&top_left_y=1085&top_left_x=1199" alt="choice A"/></p>
<p>B)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-439.jpg?height=367&width=586&top_left_y=1447&top_left_x=1199" alt="choice B"/></p>
<p>C)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-439.jpg?height=346&width=589&top_left_y=1816&top_left_x=1199" alt="choice C"/></p>
<p>D)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-439.jpg?height=372&width=586&top_left_y=2181&top_left_x=1199" alt="choice D"/></p>`,
            options: ["A", "B", "C", "D"],
            correct: 2
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponents with radicals",
            prompt: `
<p>
\\[
\\sqrt[3]{a^{2x+3}}=\\sqrt{a^{x-2}}
\\]
In the equation above, $a$ is a positive number. What is the value of $x$ ?
</p>
`,
            options: ["12", "10", "-10", "-12"],
            correct: 3
        },
        {
            id: "M2-13",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Vertical asymptotes (rational function)",
            prompt: `<p>The graph of $y=\\dfrac{x^{2}-4}{(x-3)(x-2)}$ has a vertical asymptote at $x=a$. What is the value of $a$ ?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }

        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Complex equation solve for a",
            prompt: `<p>If $z=a+bi$ and $\\dfrac{z-i}{z+1}=3$, where $a$ and $b$ are real numbers, which of the following is the value of $a$ ?</p>`,
            options: ["-0.5", "-1.5", "-2", "-2.5"],
            correct: 1
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Two-way table with ratios",
            prompt: `
<p>The incomplete table shows the number of juniors and seniors in a certain reading group.</p>
<table>
<tr><th>Gender</th><th>Junior</th><th>Senior</th></tr>
<tr><td>Female</td><td></td><td></td></tr>
<tr><td>Male</td><td></td><td></td></tr>
<tr><td>Total</td><td>66</td><td>18</td></tr>
</table>
<p>There are three times as many female-juniors as there are female-seniors, and there are five times as many male-juniors as there are male-seniors. How many male-juniors are there in the reading group?</p>
`,
            options: ["6", "20", "30", "40"],
            correct: 2
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Cylinder volume percent change",
            prompt: `<p>The cylinder above was altered by increasing its radius of the base by 10 percent and decreasing its height by $k$ percent. If these alterations decreased the volume of the cylinder by 8 percent, which of the following is the closest to the value of $k$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-442.jpg?height=269&width=324&top_left_y=1630&top_left_x=1313" alt="cylinder altered dimensions"/>`,
            options: ["10", "12", "24", "32"],
            correct: 2
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Parabola vertex height (river depth)",
            prompt: `<p>How high, in meters, is it from the bottom of the river to the bridge?</p>`,
            options: ["112.5", "125", "127.5", "130"],
            correct: 0
        },
        {
            id: "M2-18",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle area from trig relations",
            prompt: `<p><em>Note: Figure not drawn to scale.</em> In the figure above, $\\sin(a^{\\circ})=\\cos(b^{\\circ})$ and $BC=10$. If $a=2x-15$ and $b=5x-21$, which of the following is closest to the area of triangle $ABC$ ?</p>`,
            options: ["17", "20", "24", "48"],
            correct: 0
        },
        {
            id: "M2-19",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function shift (solve for input)",
            prompt: `<p>If the function $f$ is defined by $f\\!\\left(\\dfrac{x-1}{2}\\right)=x^{2}+1$, what is the value of $f(-3)$ ?</p>`,
            options: ["32", "26", "10", "-10"],
            correct: 1
        },

        // Grid-in / numeric (31–38)
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Area of isosceles trapezoid (solve for a)",
            prompt: `<p><em>Note: Figure not drawn to scale.</em> In the $xy$-plane above, the area of isosceles trapezoid $OPQR$ is 128. What is the value of $a$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-446.jpg?height=398&width=695&top_left_y=462&top_left_x=251" alt="isosceles trapezoid OPQR with a"/>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }

        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Sine in triangles (length ratio)",
            prompt: `<p>In the figure above, $\\sin\\angle BAD=0.4$ and $\\sin\\angle BCD=0.5$. If the length of $\\overline{AB}$ is 10, what is the length of $\\overline{CD}$ ?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-446.jpg?height=318&width=740&top_left_y=496&top_left_x=1182" alt="angles BAD and BCD with sines"/>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }

        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Vertical asymptotes (rational function)",
            prompt: `<p>The graph of $y=\\dfrac{x^{2}-4}{(x-3)(x-2)}$ has a vertical asymptote at $x=a$. What is the value of $a$ ?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }

        },
    ]
};
