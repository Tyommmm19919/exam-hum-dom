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
            skill: "Algebra",
            prompt: `<p>If $a^{2}b - 4ab + 42 = 0$ and $2a + 8 = 14$, what is the value of $b$?</p>`,
            options: ["14", "12", "10", "8"],
            correct: 0
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Algebra (systems & expressions)",
            prompt: `<p>If $a + 2b = \\tfrac{1}{2}$ and $a - 2b = \\tfrac{1}{3}$, what is the value of $6a^{2} - 24b^{2}$?</p>`,
            options: ["$\\tfrac{1}{3}$", "$\\tfrac{1}{2}$", "1", "2"],
            correct: 2
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Complex numbers",
            prompt: `<p>If $a = 3 + 2i$ and $b = 3 - 2i$, what is the value of $a^{2} - 2ab + b^{2}$? (Note: $i = \\sqrt{-1}$)</p>`,
            options: ["-16", "-4", "9", "36"],
            correct: 0
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Radicals & systems",
            prompt: `
<p>
\\[
\\begin{aligned}
& \\frac{\\sqrt{x}}{2} + \\sqrt{y} = 5 \\\\
& \\sqrt{x} - \\frac{\\sqrt{y}}{2} = -\\frac{1}{2}
\\end{aligned}
\\]
If $(a, b)$ is a solution to the system above, what is the value of $a$?
</p>
`,
            options: ["$\\tfrac{8}{5}$", "$\\tfrac{9}{5}$", "$\\tfrac{64}{25}$", "$\\tfrac{81}{25}$"],
            correct: 2
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear functions from graph",
            prompt: `<p>Total Cost of Renting a Car by Days</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-407.jpg?height=604&width=792&top_left_y=599&top_left_x=137" alt="rental cost graph"/><p>The graph above displays the total cost $C$, in dollars, of renting a car for $d$ days. If Nigel rents a car for 21 days for his summer trip, what is the total rental cost?</p>`,
            options: ["$600", "$650", "$700", "$750"],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Geometry (areas & ratios)",
            prompt: `<p>In the figure above, the area of square $AFIE$ is 9 times the area of square $HIGC$. What percent of square $ABCD$ is shaded?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-407.jpg?height=341&width=350&top_left_y=1821&top_left_x=242" alt="squares shaded"/>`,
            options: ["56.25%", "62.5%", "67.5%", "70.5%"],
            correct: 1
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Probability from table",
            prompt: `<p>A survey of 700 randomly selected people aged 15–20 in a town was conducted. The data are shown in the table.</p>
      <table>
        <tr><th></th><th>DVD</th><th>TV<br>provider</th><th>Smart<br>phone<br>downloads</th><th>Total</th></tr>
        <tr><td>Ages 15–16</td><td>60</td><td>80</td><td>100</td><td>240</td></tr>
        <tr><td>Ages 17–18</td><td>40</td><td>50</td><td>120</td><td>210</td></tr>
        <tr><td>Ages 19–20</td><td>10</td><td>40</td><td>200</td><td>250</td></tr>
        <tr><td>Total</td><td>110</td><td>170</td><td>420</td><td>700</td></tr>
      </table>
      <p>If a person is chosen at random from those under 18 years old, which is closest to the probability that the person preferred smartphone downloads?</p>`,
            options: ["0.49", "0.52", "0.54", "0.56"],
            correct: 0
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Counting / sets",
            prompt: `<p>Using the same table as in the previous question: How many people prefer smartphone downloads <em>or</em> are aged between 15 and 16 years old?</p>`,
            options: ["100", "560", "660", "665"],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratics parameter",
            prompt: `<p>For $f(x) = 2x^{2} + kx - 10$, $k$ is a constant. If $f(-2) = f(8)$, what is the value of $k$?</p>`,
            options: ["-12", "-6", "6", "12"],
            correct: 0
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Transformations of functions",
            prompt: `<p>If the graph of $y = x^{2}$ is translated up 3 units and right 5 units, what is the equation of the new graph?</p>`,
            options: ["$y = x^{2} - 3x + 5$", "$y = x^{2} - 6x + 14$", "$y = x^{2} + 10x + 5$", "$y = x^{2} - 10x + 28$"],
            correct: 3
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle area ratio",
            prompt: `<p>Triangle $ABC$ (not to scale) is isosceles with $AB = BC$, and the ratio of $DE$ to $DF$ is $3:2$. If the area of triangle $ABC$ is 78, what is the area of triangle $ABD$?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-408.jpg?height=349&width=301&top_left_y=511&top_left_x=1399" alt="triangle ABD"/>`,
            options: ["46.8", "54", "60", "60.25"],
            correct: 0
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomials & factor theorem",
            prompt: `<p>$P(x) = (x^{2} + ax + 2) - 2(x - b)$. If $P(x)$ is divisible by $(x - 1)$ and $(x - 3)$, what is the value of $a$?</p>`,
            options: ["-4", "-2", "2", "4"],
            correct: 1
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems (intersection conditions)",
            prompt: `<p>\\[\\begin{aligned} & y = x^{2} - 2x \\\\ & y = x + k \\end{aligned}\\]<br/>In the system above, $k$ is a constant. If the system has no solution, which could be the value of $k$?</p>`,
            options: ["1", "0", "-2", "-3"],
            correct: 3
        },
        {
            id: "M1-14",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Means & weighted averages",
            prompt: `<p>The mean score of 10 students in algebra was 85. When two new students enrolled, the mean increased to 86. What was the average of the two new students?</p>`,
            correct: { answers: ["91"], numeric: 91, tolerance: 0 }

        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Distance between parallel lines",
            prompt: `<p>The distance between two parallel lines is the length of the perpendicular segment between them. What is the distance between $y = x$ and $y = x - 4$?</p>`,
            options: ["$\\sqrt{2}$", "2", "$2\\sqrt{2}$", "4"],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Lines through points on a parabola",
            prompt: `<p>In the $xy$-plane, the graph of a quadratic function $y = f(x)$ intersects the $x$-axis at points $O$ and $Q$, and has a vertex at point $P$. If line $\\ell$ passes through $P$ and $Q$, what is the $y$-intercept of line $\\ell$?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-409.jpg?height=604&width=652&top_left_y=502&top_left_x=1105" alt="quadratic and line"/>`,
            options: ["8", "10", "12", "15"],
            correct: 1
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Regular polygons & angles",
            prompt: `<p>In the figure of a regular pentagon, $\\overline{CD}$ is parallel to $\\overline{AB}$. If $x^{\\circ}$ is the measure of $\\angle DCE$, what is $x$?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-410.jpg?height=441&width=623&top_left_y=553&top_left_x=274" alt="regular pentagon"/>`,
            options: ["$x$ = ? (integer) A", "$x$ = ? (integer) B", "$x$ = ? (integer) C", "$x$ = ? (integer) D"],
            correct: { answers: ["36"], numeric: 36, tolerance: 0 }

        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Radicals & equations",
            prompt: `<p>If $x > 0$, solve $\\dfrac{\\sqrt{x^{2}} + 2\\sqrt{x}}{6} = 8$.</p>`,
            options: ["$x = $ ? A", "$x = $ ? B", "$x = $ ? C", "$x = $ ? D"],
            correct: { answers: ["36"], numeric: 36, tolerance: 0 }

        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Triangle area & sine",
            prompt: `<p>In triangle $ABC$, $\\sin(\\angle BAC) = 0.6$ and the area of triangle $ABC$ is $216$. What is the length of $\\overline{BC}$?</p>`,
            options: ["A", "B", "C", "D"],
            correct: { answers: ["18"], numeric: 18, tolerance: 0 }

        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Similar triangles / surveying",
            prompt: `<p>A surveyor drew the diagram above to find the distance across a pond. If $AB = 150$ meters and $AD = 90$ meters, what is the distance, in meters, from point $B$ to point $C$?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-410.jpg?height=561&width=723&top_left_y=485&top_left_x=1125" alt="survey diagram"/>`,
            options: ["A", "B", "C", "D"],
            correct: { answers: ["200"], numeric: 200, tolerance: 0 }

        },
        {
            id: "M1-21",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems of inequalities (optimization)",
            prompt: `<p>\\[\\begin{aligned}& x^{2} + y^{2} \\le 100 \\\\ & y \\le x + 2\\end{aligned}\\] In the $xy$-plane, if $(a,b)$ lies in the solution set of the system above, what is the maximum possible value of $b$?</p>`,
            options: ["A", "B", "C", "D"],
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }

        },
        {
            id: "M1-22",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic combination",
            prompt: `<p>Graphs of quadratic functions $f$ and $g$ are shown below. For which $x$ does $f(x) + 2g(x) = 0$?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-415.jpg?height=752&width=850&top_left_y=513&top_left_x=1067" alt="graphs f and g"/>`,
            options: ["1", "3", "3.5", "5"],
            correct: 3
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear functions (cost model)",
            prompt: `<p>Janet subscribes to an online movie service that charges a monthly fee of $5.00 and $0.75 per movie. Which function gives Janet's cost, in dollars, for a month in which she saw $x$ movies?</p>`,
            options: ["C(x) = 5.75x", "C(x) = 5x + 0.75", "C(x) = 5 + 0.75x", "C(x) = 5(x+0.75)"],
            correct: 2
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Two-way table (probability)",
            prompt: `<p>The incomplete table shows the distribution of grades and gender for 64 students who entered an essay contest.</p>
      <table>
        <tr><th></th><th>Boys</th><th>Girls</th><th>Total</th></tr>
        <tr><td>Junior</td><td>20</td><td></td><td></td></tr>
        <tr><td>Senior</td><td></td><td>17</td><td></td></tr>
        <tr><td>Total</td><td>40</td><td></td><td>64</td></tr>
      </table>
      <p>If the contest winner is selected at random, what is the probability that the winner will be a senior?</p>`,
            options: ["29/64", "32/64", "37/64", "47/64"],
            correct: 2
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Two-way table (counts)",
            prompt: `<p>How many girls <em>or</em> juniors are entered in the essay contest?</p>`,
            options: ["7", "17", "44", "53"],
            correct: 3
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Average rate of change",
            prompt: `<p>Monthly Rainfall in City K</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-412.jpg?height=903&width=749&top_left_y=1096&top_left_x=1182" alt="rainfall graph"/><p>What is the average rate of change of rainfall, in inches per month, from May to September?</p>`,
            options: ["1.5", "2", "2.5", "3"],
            correct: 0
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Solve for variable",
            prompt: `<p>Given $k = \\sqrt{\\dfrac{ab}{a + b}}$, which of the following represents $b$ in terms of $a$ and $k$?</p>`,
            options: ["$b = \\dfrac{ak}{a-k}$", "$b = \\dfrac{ak}{a+k}$", "$b = \\dfrac{ak^{2}}{a-k}$", "$b = \\dfrac{ak^{2}}{a-k^{2}}$"],
            correct: 3
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic optimization (profit)",
            prompt: `<p>\\[\\begin{aligned}& C(x) = 200x + 150 \\\\ & R(x) = -0.5x^{2} + 600x + 100\\end{aligned}\\]<br/>A company produces $x$ units per month, where $C(x)$ is cost and $R(x)$ is revenue. Profit $P(x) = R(x) - C(x)$. For what value of $x$ is profit maximized?</p>`,
            options: ["200", "400", "600", "1200"],
            correct: 1
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial identity (constant)",
            prompt: `<p>$x^{3} - 3x + k = (x - 1)(ax^{2} + bx + c)$. If true for all $x$, what is $c$?</p>`,
            options: ["4", "2", "-2", "-4"],
            correct: 2
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate/units",
            prompt: `<p>A car traveled at an average speed of $p$ mph for $h$ hours and consumed fuel at $m$ miles per gallon. How many gallons of fuel were used?</p>`,
            options: ["$\\dfrac{p}{hm}$", "$phm$", "$\\dfrac{ph}{m}$", "$\\dfrac{m}{ph}$"],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic roots (sum/product)",
            prompt: `<p>$f(x) = (x + a)^{2} - 36$. If the sum of the zeros is $-10$, which is the product of the zeros?</p>`,
            options: ["-36", "-26", "-11", "26"],
            correct: 2
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Cylinders (volume vs. surface area)",
            prompt: `<p>In the cylinder below, $r$ is the radius and $h$ is the height. If the volume equals the surface area, which is true?</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-414.jpg?height=287&width=312&top_left_y=1521&top_left_x=434" alt="cylinder"/>`,
            options: ["$r = \\tfrac{h}{2}$", "$r = \\tfrac{2h}{h-2}$", "$r = \\tfrac{h+2}{h}$", "$r = \\tfrac{h-2}{h}$"],
            correct: 1
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Kinematics (free fall)",
            prompt: `<p>Near Earth's surface, $v(t) = gt$ and $s(t) = \\tfrac{1}{2}gt^{2}$ with $g=9.8\\,\\text{m/s}^{2}$. What distance is traveled from $t=1$ s to $t=2$ s?</p>`,
            options: ["19.6 meters", "18.2 meters", "14.7 meters", "12.6 meters"],
            correct: 2
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Kinematics (average speed)",
            prompt: `<p>Using the same model, what is the average speed (m/s) from $t=2$ s to $t=4$ s?</p>`,
            options: ["9.8", "19.6", "29.4", "39.2"],
            correct: 2
        },
        {
            id: "M2-13",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Function composition (input scaling)",
            prompt: `<p>If $f\\!\\left(\\dfrac{x}{5}\\right) = x^{2} - 3x + 1$, find $f(-1)$.</p>`,
            correct: { answers: ["41"], numeric: 41, tolerance: 0 }

        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic given two points",
            prompt: `<p>For $f(x) = x^{2} + bx + c$ with $f(2) = f(6) = 4$, what is $c$?</p>`,
            options: ["4", "8", "12", "16"],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Parabola & horizontal line (distance)",
            prompt: `<p>\\[\\begin{aligned}& y = (x-5)^{2} \\\\ & y = k \\end{aligned}\\] If the system has two intersection points and the distance between them is 10, what is $k$?</p>`,
            options: ["20", "25", "30", "35"],
            correct: 1
        },
        {
            id: "M2-16",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic roots expression",
            prompt: `<p>Given $x^{2} - 6x + 2 = 0$ with roots $a$ and $b$, what is $(a+1)(b+1)$?</p>`,
            options: ["9", "10.5", "11", "12"],
            correct: 0
        },
        {
            id: "M2-17",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Remainder theorem (combined)",
            prompt: `<p>For polynomial $p(x)$, the remainder on division by $(x-1)$ is 2, and by $(x+1)$ is -4. If $p(x)$ is divided by $(x^{2}-1)$, what is the remainder?</p>`,
            options: ["$2x+1$", "$3x-1$", "$4x+1$", "-8"],
            correct: 1
        },
        {
            id: "M2-18",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Trig identities",
            prompt: `<p>If $\\cos(3x+20)^{\\circ} = \\sin(x+10)^{\\circ}$, what is $\\sin(2x)^{\\circ}$?</p>`,
            options: ["$\\tfrac{1}{\\sqrt{2}}$", "$\\tfrac{1}{2}$", "$\\tfrac{\\sqrt{3}}{2}$", "$\\sqrt{3}$"],
            correct: 1
        },
        {
            id: "M2-19",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function shift",
            prompt: `<p>If $f$ is defined by $f(x-1) = x^{2} - 1$, which represents $f(x)$?</p>`,
            options: ["$f(x) = x^{2}$", "$f(x) = x^{2} + 1$", "$f(x) = x^{2} + 2x$", "$f(x) = x^{2} + 2x - 1$"],
            correct: 2
        },

        // Grid-in / numeric (31–38)
        {
            id: "M2-20",
            module: 2,
            type: "spr", // open response / numeric entry
            domain: "MATH",
            skill: "Exponential decay (time units)",
            prompt: `<p>$P = 245,000(1 - 0.002)^{t/2}$. The equation models population $t$ years after 1800. The population decreases by 0.2% every $k$ months. Find $k$.</p>`,
            correct: { answers: ["24"], numeric: 24, tolerance: 0 }

        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Slope of line through a point",
            prompt: `<p>In the $xy$-plane shown, if line $\\ell$ passes through point $P$, find $k$.</p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-420.jpg?height=435&width=572&top_left_y=519&top_left_x=1182" alt="point-slope figure"/>`,
            correct: { answers: ["14/3", "4.(6)"], numeric: 14/3, tolerance: 0.00001 }

        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Complex numbers (matching real & imag)",
            prompt: `<p>For $i = \\sqrt{-1}$, if $a + b + (ab)i = 4 + 2i$ with real $a$ and $b$, find $a^{2} + b^{2}$.</p>`,
            correct: { answers: ["12"], numeric: 12, tolerance: 0 }

        },
    ]
};
