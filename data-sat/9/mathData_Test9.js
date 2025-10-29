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
        {
            id: "M1-01",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value inequalities",
            prompt: `<p>If $|k-5| \\leq 8$, which of the following CANNOT be the value of $k$?</p>`,
            options: ["8", "2", "-3", "-4"],
            correct: 3
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-326.jpg?height=343&width=604&top_left_y=1342&top_left_x=319"/></p><p>In the $xy$-plane above, $\\overline{PR}$ is the diagonal of rectangle $OPQR$. If the length of $\\overline{PR}$ is 17, what is the value of $k$?</p>`,
            options: ["12", "15", "16", "20"],
            correct: 1
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Area of triangles",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-326.jpg?height=581&width=746&top_left_y=525&top_left_x=1236"/></p><p>In the $xy$-plane above, the area of triangle $RST$ is 30. What is the value of $k$?</p>`,
            options: ["-2", "2", "3.5", "4"],
            correct: 1
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p>In the triangle above, $\\cos a = \\sin b$. If the length of $\\overline{AB}$ is 20 and the measure of angle $b$ is $\\frac{\\pi}{3}$ radians, what is the area of the triangle?</p>`,
            options: ["$40\\sqrt{2}$", "$40\\sqrt{3}$", "$50\\sqrt{3}$", "$100\\sqrt{3}$"],
            correct: 2
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function evaluation",
            prompt: `<p>$f(x)=x-p$</p><p>In the function above, $p$ is a constant. If $f(2)=5$, what is the value of $f(2p)$?</p>`,
            options: ["-3", "-1", "3", "6"],
            correct: 0
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Angle relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-327.jpg?height=275&width=486&top_left_y=1487&top_left_x=268"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, what is the value of $|a-b|$?</p>`,
            options: ["20", "22", "24", "26"],
            correct: 1
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-327.jpg?height=686&width=721&top_left_y=625&top_left_x=1090"/></p><p>The scatterplot above shows the reading levels by grade for 15 students in the J.H book-reading club.</p><p>Based on the data above, what is the median reading level for the 15 students?</p>`,
            options: ["4", "5", "5.5", "6"],
            correct: 1
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-327.jpg?height=686&width=721&top_left_y=625&top_left_x=1090"/></p><p>What is the average reading level of $7^{\\text{th}}$ and $8^{\\text{th}}$ grade students?</p>`,
            options: ["4", "5", "6", "6.5"],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function analysis",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-328.jpg?height=555&width=695&top_left_y=585&top_left_x=319"/></p><p>In the $xy$-plane above, the graph of $f$ is shown in $-4 \\leq x \\leq 4$. If $f(k)=3$, how many values of $k$ are there in the interval?</p>`,
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>$P=\\frac{50n-200}{n}+k$</p><p>The profit $P$ from a car wash is modeled by the equation above, where $n$ is the number of cars and $k$ is a constant. Which of the following expressions represents $n$?</p>`,
            options: ["$n=\\frac{200+k}{50-p}$", "$n=\\frac{200-k}{50+p}$", "$n=\\frac{200}{50+k-p}$", "$n=\\frac{200}{k+p-50}$"],
            correct: 2
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial functions",
            prompt: `<p>$P(x)=3x^{3}+ax-2$</p><p>In the function above, $a$ is a constant. If the remainder when $P(x)$ is divided by $x+1$ is 2, what is the value of $a$?</p>`,
            options: ["-7", "-5", "5", "7"],
            correct: 0
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear equations",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-329.jpg?height=455&width=603&top_left_y=536&top_left_x=234"/></p><p>The graph of $ax+by=5$ is shown in the $xy$-plane above. Which of the following must be true?</p>`,
            options: ["$a<0$ and $b<0$", "$a>0$ and $b<0$", "$a<0$ and $b>0$", "$a>0$ and $b>0$"],
            correct: 3
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-329.jpg?height=272&width=278&top_left_y=1690&top_left_x=388"/></p><p>In the figure above, the center of the circle is $O$. The area of the shaded region is $80\\pi$ and the measure of $x$ is $\\frac{2\\pi}{5}$ radians. What is the radius of the circle?</p>`,
            options: ["6", "8", "9", "10"],
            correct: 3
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-329.jpg?height=489&width=620&top_left_y=531&top_left_x=1142"/></p><p>Note: Figure not drawn to scale.</p><p>Lines $\\ell$ and $m$ are perpendicular and intersect at point $T(1,3)$ as shown in the $xy$-plane above. If the slope of line $\\ell$ is 1, what is the area of $\\triangle RST$?</p>`,
            options: ["1", "1.5", "2", "2.5"],
            correct: 0
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational expressions",
            prompt: `<p>$\\frac{x^{2}+3}{x-1}$</p><p>Which of the following is equivalent to the expression above?</p>`,
            options: ["$x+1$", "$x(x+1)+3$", "$x+1+\\frac{4}{x-1}$", "$\\frac{x}{x-1}+x$"],
            correct: 2
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Rational equations",
            prompt: `<p>If $\\frac{1}{x-1}+\\frac{1}{2x-2}=\\frac{1}{4}$, what is the value of $x-1$?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-330.jpg?height=552&width=421&top_left_y=1233&top_left_x=328"/></p><p>The figure above shows triangle $ABC$. The length of $\\overline{AC}$ is 10 and the altitude of the triangle is 20. If $M$ and $N$ are the midpoints of $\\overline{AB}$ and $\\overline{BC}$ respectively, what is the area of the shaded region?</p>`,
            correct: { answers: ["75"], numeric: 75, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Polynomial identities",
            prompt: `<p>$(a-1)x^{2}+(b-2)x+ab=4x^{2}+5x+k$</p><p>In the equation above, $a$, $b$, and $k$ are constants. If the equation is true for all values of $x$, what is the value of $k$?</p>`,
            correct: { answers: ["35"], numeric: 35, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Function optimization",
            prompt: `<p>If $P(x)=2\\sqrt{x-5}+3x$, what is the minimum value of $P$?</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& x^{2}+y^{2}=8 \\\\& y=\\sqrt{2x}\\end{aligned}$</p><p>In the system of equations above, what is the value of $y$?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-339.jpg?height=695&width=632&top_left_y=525&top_left_x=1187"/></p><p>Note: Figure not drawn to scale.</p><p>In the $xy$-plane above, the graph of $y=a(x-3)^{2}-2$, where $a$ is a constant, intersects line $\\ell$ at points $P(0,16)$ and $Q$. What is the equation of line $\\ell$?</p>`,
            options: [
                "$y=-8x+16$",
                "$y=-4x+16$",
                "$y=-3x+16$",
                "$y=-2x+16$"
            ],
            correct: 1
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Rational functions",
            prompt: `<p>$h(x)=\\frac{x-3}{x^{3}-3x^{2}+x-3}$</p><p>For what value of $x$ is the function $h$ above undefined?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-335.jpg?height=672&width=580&top_left_y=479&top_left_x=1142"/> City $B$</p><p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-335.jpg?height=615&width=572&top_left_y=1227&top_left_x=1145"/></p><p>The bar graphs above show the average temperatures in degrees Celsius for City $A$ and City $B$ over the four seasons. Based on the graphs above, which of the following is true?</p>`,
            options: [
                "The standard deviation of the average temperatures in City $A$ is larger than City $B$.",
                "The standard deviation of the average temperatures in City $B$ is larger than City $A$.",
                "The standard deviation of the average temperatures in City $B$ is the same as that of City $A$.",
                "Based on graphs above, the standard deviation of the average temperatures in these cities cannot be determined."
            ],
            correct: 1
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function intersections",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-336.jpg?height=487&width=732&top_left_y=493&top_left_x=276"/></p><p>$g(x)=-\\frac{1}{4}(x-4)^{2}+4$</p><p>The graphs of the functions $f$ and $g$ are shown in the $xy$-plane above. For which of the following values of $x$ does $f(x)-g(x)=0$?</p>`,
            options: ["1", "3", "6", "8"],
            correct: 2
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle equations",
            prompt: `<p>$x^{2}+y^{2}-4x+4y=k$</p><p>The equation of a circle in the $xy$-plane, where $k$ is a constant, is shown above. If the radius of the circle is 6, what is the value of $k$?</p>`,
            options: ["-28", "-2", "14", "28"],
            correct: 3
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-336.jpg?height=621&width=763&top_left_y=565&top_left_x=1136"/></p><p>The graph above shows the earnings per share of stock for Milly Electronics for the first 8 days in March this year.</p><p>What is the average rate of change between days 1 and 8?</p>`,
            options: [
                "$\\frac{3}{4}$ dollars per day",
                "$\\frac{7}{8}$ dollars per day",
                "$\\frac{8}{7}$ dollars per day",
                "It cannot be determined based on the information given."
            ],
            correct: 2
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-336.jpg?height=621&width=763&top_left_y=565&top_left_x=1136"/></p><p>What is the equation of the line between day 2 and day 7?</p>`,
            options: [
                "$y=x+3$",
                "$y=1.6x+1.8$",
                "$y=2.4x+0.2$",
                "$y=3x-1$"
            ],
            correct: 1
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential functions",
            prompt: `<p>$f(x)=2^{x+2}$</p><p>In the function above, which of the following is equivalent to $f(a+b)$?</p>`,
            options: [
                "$2(2^{a}+2^{b})$",
                "$4(2^{a}+2^{b})$",
                "$4(2^{a} \\times 2^{b})$",
                "$4+(2^{a} \\times 2^{b})$"
            ],
            correct: 2
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage problems",
            prompt: `<p>The sum of four numbers is 783. One of the numbers, $a$, is $25\\%$ more than the sum of the other three numbers. What is the value of $a$?</p>`,
            options: ["348", "435", "520", "585"],
            correct: 1
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Word problems",
            prompt: `<p>Mr. Lee brought reading books to his class. If each student takes 5 books, there will be 15 books left. If 5 students do not take a book and the rest of the students take 7 books each, there will be no books left. How many books were brought to the class?</p>`,
            options: ["140", "125", "120", "104"],
            correct: 0
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-337.jpg?height=418&width=669&top_left_y=1519&top_left_x=1085"/></p><p>In the $xy$-plane above, if line $\\ell$ has a slope of $-\\frac{1}{3}$, what is the area of triangle $OPQ$?</p>`,
            options: ["37.5", "60", "62.5", "75"],
            correct: 0
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-338.jpg?height=364&width=638&top_left_y=462&top_left_x=239"/></p><p>In the figure above, $BE:ED=3:2$. The area of $\\triangle BEC$ is 15 and the area of $\\triangle BEA$ is 12. What is the area of $\\triangle AEC$?</p>`,
            options: ["15", "18", "20", "24"],
            correct: 1
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>$f(x)=a(x-b)^{2}+k$</p><p>In the function above, $a$, $b$, and $k$ are constants. If $a$ and $k$ are negative numbers, which of the following CANNOT be true?</p>`,
            options: ["$f(5)=-1$", "$f(1)=k$", "$f(2)=b$", "$f(3)=1$"],
            correct: 3
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& (a-2)x+(b+2)y=8 \\\\& bx+ay=4\\end{aligned}$</p><p>In the system of equations above, $a$ and $b$ are constants. If the system has infinitely many solutions, what is the value of $a$?</p>`,
            options: ["$-\\frac{4}{3}$", "$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$\\frac{4}{3}$"],
            correct: 2
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Volume scaling",
            prompt: `<p>A cylinder was altered by increasing the radius of its circular base by 10 percent and decreasing its height by $k$ percent. If the volume of the resulting cylinder is $8.9\\%$ greater than the volume of the original cylinder, what is the value of $k$?</p>`,
            options: ["8.9", "10", "12", "15"],
            correct: 1
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate problems",
            prompt: `<p>When Albert starts walking, Kimberly is 60 yards ahead of him. They are moving in the same direction on the same straight path. Albert walks 8 yards for every 4 yards that Kimberly walks. Albert walks 3 yards per second.</p><p>At these relative rates, in how many seconds will Albert catch up with Kimberly?</p>`,
            options: ["20", "25", "30", "40"],
            correct: 3
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate problems",
            prompt: `<p>When Albert starts walking, Kimberly is 60 yards ahead of him. They are moving in the same direction on the same straight path. Albert walks 8 yards for every 4 yards that Kimberly walks. Albert walks 3 yards per second.</p><p>How many yards will Albert have to walk in order to catch up with Kimberly?</p>`,
            options: ["100", "120", "240", "320"],
            correct: 1
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Percentage problems",
            prompt: `<p>The state income tax where Alison lives is levied at the rate of $k\\%$ of the first $30,000$ dollars of annual income plus $(k+4)\\%$ of any amount above $30,000$ dollars. This year Alison's income was $65,000$ dollars and she paid $9,850$ dollars for the income tax. What is the value of $k$?</p>`,
            correct: { answers: ["13"], numeric: 13, tolerance: 0 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Complex numbers",
            prompt: `<p>$b-3+(a-5)i=a+8i$</p><p>In the equation above, $a$ and $b$ are real numbers. If $i=\\sqrt{-1}$, what is the value of $b$?</p>`,
            correct: { answers: ["16"], numeric: 16, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-340.jpg?height=538&width=777&top_left_y=485&top_left_x=1082"/></p><p>In the figure above, $AB=12$, $AC=15$, and $CD=6$. Both $\\overline{AB}$ and $\\overline{CD}$ are perpendicular to $\\overline{AC}$. If the area of $\\triangle ABE$ is $p$ and the area of $\\triangle CDE$ is $q$, then what is the value of $p-q$?</p>`,
            correct: { answers: ["45"], numeric: 45, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>$h=-16t^{2}+at$</p><p>A football game begins with a kickoff. The formula for the kickoff is modeled by the equation above, where $h$ is the height in feet of the football at $t$ seconds and $a$ is a constant. If the kickoff is in the air for 5 seconds, what is the value of $a$?</p>`,
            correct: { answers: ["80"], numeric: 80, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-341.jpg?height=524&width=572&top_left_y=542&top_left_x=314"/></p><p>In the figure above, each of two circles has the same center $O$. If $OP:OQ=3:5$ and the area of the shaded region is 40, what is the area of the larger circle?</p>`,
            correct: { answers: ["62.5"], numeric: 62.5, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>$f(x)=ax^{2}+bx+c$</p><p>In the function $f$ above, $f(0)=10$ and $f(-1)=18$. What is the value of $a-b$?</p>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p>In the $xy$-plane, the graphs of $y=-x^{2}+12$ and line $\\ell$ intersect at points $P(p,3)$ and $Q(q,-4)$. What is the greatest possible value of the slope of line $\\ell$?</p>`,
            correct: { answers: ["7"], numeric: 7, tolerance: 0 }
        }
    ]
};