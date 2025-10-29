window.satMathData = {
    testId: "3",
    section: "math",
    meta: {
        calculatorAllowed: true,
        modules: [
            { id: 1, timeSeconds: 25 * 60 },
            { id: 2, timeSeconds: 55 * 60 }
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
            skill: "Linear equations",
            prompt: `<p>$\\frac{3}{4}(x-2)+7=12-\\frac{1}{2}(x-2)$</p><p>What is the value of $x$ in the equation above?</p>`,
            options: ["4", "5", "6", "8"],
            correct: 2 // C
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>$5(x^{2}-6)=x^{2}+34$</p><p>What are the solutions to the equation above?</p>`,
            options: [
                "$-\\sqrt{34}$ and $\\sqrt{34}$",
                "$-2\\sqrt{6}$ and $2\\sqrt{6}$",
                "-6 and 6",
                "-4 and 4"
            ],
            correct: 3 // D
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Distance-rate-time problems",
            prompt: `<p>Albert and Bunny are 100 feet apart. Each person walks at a steady pace toward the other. If Albert walks at a constant rate of 3 feet per second and Bunny walks at a constant rate of 4 feet per second, how far will Albert walk, in feet, when they meet?</p>`,
            options: ["$\\frac{100}{7}$", "$\\frac{300}{7}$", "$\\frac{400}{7}$", "70"],
            correct: 1 // B
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial factoring",
            prompt: `<p>Which of the following is equivalent to the expression $x^{3}+x^{2}y-x-y$?</p>`,
            options: [
                "$(x+y)(x^{2}+1)$",
                "$(x+y)(x^{2}-2y)$",
                "$(xy+1)(x^{2}+1)$",
                "$(x+y)(x+1)(x-1)$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Inequalities",
            prompt: `<p>Which of the following values is a solution of $\\frac{1}{5}(x-5)(x-3)<0$?</p>`,
            options: ["-4", "3", "4", "5"],
            correct: 2 // C
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic expressions",
            prompt: `<p>$(x-5)(x+3)+10$</p><p>Which of the following is equivalent to the expression above?</p>`,
            options: [
                "$(x+1)^{2}+6$",
                "$(x+1)^{2}-6$",
                "$(x-1)^{2}+6$",
                "$(x-1)^{2}-6$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-381.jpg?height=410&width=664&top_left_y=513&top_left_x=1190" alt="triangle"/></p><p>In the figure above, the area of triangle $ABC$ is 96. If $AD=9$ and $BD=15$, what is the length of $\\overline{CD}$?</p>`,
            options: ["7", "8", "9", "14"],
            correct: 0 // A
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial graphs",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-381.jpg?height=466&width=495&top_left_y=1570&top_left_x=1244" alt="polynomial graph"/></p><p>Which of the following could be the equation for the graph shown in the $xy$-plane above?</p>`,
            options: [
                "$y=(x+1)(x-1)^{2}(x-2)$",
                "$y=(x-1)^{2}(x+1)(x+2)$",
                "$y=(x+1)^{2}(x-1)(x-2)$",
                "$y=-(x+1)^{2}(x-1)(x-2)$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Perpendicular lines",
            prompt: `<p>$3x+4y=12$</p><p>The graph of the equation above in the $xy$-plane is a line, $\\ell$. Line $m$ is perpendicular to line $\\ell$ at point $(a, b)$ and passes through the origin. Which of the following is the value of $a$?</p>`,
            options: ["1.44", "4.8", "5", "5.4"],
            correct: 0 // A
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value functions",
            prompt: `<p>The function $f$ is defined by $f(x)=|x+5|-4$. If $f(0)=f(k)$, what is the value of $k$?</p>`,
            options: ["-10", "-5", "4", "10"],
            correct: 0 // A
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p>If the graph of function $y=f(x)$ has a vertex at point $(-2,5)$, which of the following is the vertex of the graph of function $y=f(x+3)-8$?</p>`,
            options: [
                "$(-5,-8)$",
                "$(-5,-3)$",
                "$(1,-8)$",
                "$(1,-3)$"
            ],
            correct: 1 // B
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational expressions",
            prompt: `<p>For $x>0$, which of the following is equivalent to $\\frac{\\frac{x}{x+3}-\\frac{4}{x}}{1-\\frac{1}{x+3}}$?</p>`,
            options: [
                "$\\frac{x^{2}-4x-3}{x^{2}+2x}$",
                "$\\frac{x^{2}-6x-12}{x^{2}+2x}$",
                "$\\frac{x+6}{x}$",
                "$\\frac{x-6}{x}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponent rules",
            prompt: `<p>If $\\frac{\\sqrt[5]{a^{6}} \\cdot \\sqrt[5]{a^{4}}}{\\sqrt[3]{a^{2}}}=a^{n}$ for all values of $a$, what is the value of $n$?</p>`,
            options: [
                "$\\frac{3}{4}$",
                "$\\frac{4}{3}$",
                "$\\frac{12}{7}$",
                "$\\frac{12}{5}$"
            ],
            correct: 1 // B
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Compound interest",
            prompt: `<p>Olivia got 2,000 dollars from her parents to start her college fund. She is opening a new savings account and the bank offers a 2.4 percent annual interest rate, compounded quarterly. Which of the following functions best represents the amount of money, in dollars, in Olivia's account in 15 years?</p>`,
            options: [
                "2,000 (1.024)<sup>15</sup>",
                "2,000 (1.024)<sup>60</sup>",
                "2,000 (1.006)<sup>15</sup>",
                "2,000 (1.006)<sup>60</sup>"
            ],
            correct: 3 // D
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function notation",
            prompt: `<p>If a function is defined by $f(x+1)=x^{2}-1$, which of the following represents $f(x-3)$?</p>`,
            options: [
                "$f(x-3)=(x-3)^{2}-1$",
                "$f(x-3)=(x-3)^{2}-(x-3)$",
                "$f(x-3)=(x+4)^{2}-1$",
                "$f(x-3)=(x-4)^{2}-1$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-384.jpg?height=352&width=729&top_left_y=531&top_left_x=177" alt="rectangle with diagonal"/></p><p>In the figure above, point $E$ is on diagonal $\\overline{BD}$ and $DE=3BE$. If the area of the shaded region is 18, what is the area of the rectangle $ABCD$?</p>`,
            correct: { answers: ["144"], numeric: 144, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic roots",
            prompt: `<p>$\\frac{x^{2}}{2}-(k^{2}-1)x+k=0$</p><p>In the equation above, $k$ is a constant. If the product of the roots is 10, what is the sum of the roots?</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Triangle geometry",
            prompt: `<p>In the figure above, measure of $\\angle ADB=60^{\\circ}$, measure of $\\angle ACD=30^{\\circ}$, and $CD=10\\sqrt{3}$. What is the length of $\\overline{AB}$?</p>`,
            correct: { answers: ["48"], numeric: 48, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{array}{r}2x+y=5 \\\\ 5x-2y=8\\end{array}$</p><p>If $(a, b)$ is a solution to the system of equations above, what is the value of $\\frac{a+b}{a}$?</p>`,
            correct: { answers: ["3/2", "1.5"], numeric: 1.5, tolerance: 0.01 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Polynomial factors",
            prompt: `<p>$f(x)=x^{5}+k^{2}x^{3}+3kx-11$</p><p>In the function $f$ above, $k$ is a positive constant. If $x-1$ is a factor of $f(x)$, what is the value of $k$?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>For the quadratic function $f(x), f(4)=8$. If $0 \\leq x \\leq 3$ is the solution to the inequality $f(x) \\leq 0$, what is the value of $f(5)$?</p>`,
            options: ["10", "12", "16", "20"],
            correct: 3 // D
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Polynomial division",
            prompt: `<p>$x^{3}-3x^{2}+8x-a=(x-2)(x^{2}-x+b)$</p><p>In the equation above, $a$ and $b$ are constants. If the equation is true for all real values of $x$, what is the value of $b$?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& y=ax+b \\\\& 5x-3y=a\\end{aligned}$</p><p>In the system of equations above, $a$ and $b$ are constants. If the system has infinitely many solutions, what is the value of $b$?</p>`,
            options: ["-3", "$-\\frac{9}{5}$", "$-\\frac{5}{9}$", "$\\frac{9}{5}$"],
            correct: 1 // B
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Physics applications",
            prompt: `<p>$K=\\frac{1}{2}mv^{2}$</p><p>The kinetic energy of an object in motion is given by the equation above, where $K$ is the kinetic energy of the object in joules, $m$ is the mass of the object in kilograms, and $v$ the speed of the object in meters per second. When the object is moving at $a$ meters per second with a mass of $b$ kilograms, the kinetic energy is 98 joules. What is the kinetic energy in joules, when the object is moving at $3a$ meters per second with a mass of $2b$ kilograms?</p>`,
            options: ["1764", "1560", "882", "441"],
            correct: 0 // A
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Inequalities",
            prompt: `<p>If $rs^{2}t^{3}u^{3}>0$ and $u<0$, which of the following must be true?</p>`,
            options: [
                "$rt<0$",
                "$urt<0$",
                "$r>0$",
                "$t>0$"
            ],
            correct: 0 // A
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>The Maxim Telephone Company charges $k$ cents for the first $t$ minutes of a call and charges for any additional time at the rate of $r$ cents per minute. If a certain customer pays 10 dollars, which of the following could be the length of that phone call in minutes?</p>`,
            options: [
                "$\\frac{1000+rk}{r}$",
                "$\\frac{1000+rtk}{r}$",
                "$\\frac{1000-k-t}{r}$",
                "$\\frac{1000-k+rt}{r}$"
            ],
            correct: 3 // D
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle graphs",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-391.jpg?height=343&width=661&top_left_y=551&top_left_x=199" alt="circle graph"/></p><p>The circle graph above shows the distribution of the subjects in a certain high school. If there are 136 more students taking algebra than geometry, how many more students are taking geometry than calculus?</p>`,
            options: ["36", "40", "42", "84"],
            correct: 1 // B
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Work problems",
            prompt: `<p>A farmer can plow a field in $k$ days. How many days will it take two farmers working at the same rate to plow a field two times larger?</p>`,
            options: ["$2k$", "$k$", "$\\frac{k}{2}$", "$\\frac{k}{4}$"],
            correct: 1 // B
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Area of shaded regions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-391.jpg?height=364&width=381&top_left_y=502&top_left_x=1284" alt="rectangle in circle"/></p><p>In the figure above, a rectangle is inscribed in a part of a circle. If the length of $\\overline{AD}$ is 4 and the length of $\\overline{DC}$ is 3, what is the area of the shaded region?</p>`,
            options: [
                "$25\\pi-12$",
                "$\\frac{25\\pi-12}{2}$",
                "$\\frac{25\\pi-24}{2}$",
                "$\\frac{25\\pi-48}{4}$"
            ],
            correct: 3 // D
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p>How does the graph of $f(x)=(x+2)(x-4)$ compare with the graph of $g(x)=x^{2}$?</p>`,
            options: [
                "The graph of $g(x)$ is moved to the left 1 unit and up 9 units.",
                "The graph of $g(x)$ is moved to the right 1 unit and down 8 units.",
                "The graph of $g(x)$ is moved to the left 1 unit and down 9 units.",
                "The graph of $g(x)$ is moved to the right 1 unit and down 9 units."
            ],
            correct: 3 // D
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Pyramid geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-392.jpg?height=449&width=421&top_left_y=528&top_left_x=365" alt="pyramid"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, the right regular pyramid has a square base and all four triangular faces are congruent. If $AB=4$ and the total surface area of the pyramid is 56, what is the length of $\\overline{DE}$?</p>`,
            options: ["4", "5", "$5\\sqrt{2}$", "6"],
            correct: 1 // B
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value expressions",
            prompt: `<p>If $2a+b=4$ and $ab=-3$, what is the value of $|2a-b|$?</p>`,
            options: ["4", "$2\\sqrt{10}$", "$6\\sqrt{3}$", "8"],
            correct: 1 // B
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Data interpretation",
            prompt: `<p>Which of the following graphs best represents the information in the table above?<br><table><tr><th>Age (in years)</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr><tr><th>Height (in meters)</th><th>6</th><th>7</th><th>7.6</th><th>8.1</th><th>8.2</th></tr></table><br>
            A)<img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-392.jpg?height=292&width=458&top_left_y=959&top_left_x=1307" alt="first option"/><br><br>
            B)<img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-392.jpg?height=293&width=458&top_left_y=1364&top_left_x=1310" alt="second option"/><br><br>
            C)<img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-392.jpg?height=295&width=458&top_left_y=1764&top_left_x=1310" alt="third option"/><br><br>
            D)<img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-392.jpg?height=295&width=461&top_left_y=2181&top_left_x=1307" alt="fourth option"/><br><br>
            `,
            options: ["A", "B", "C", "D"],
            correct: 3 // D
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-393.jpg?height=320&width=598&top_left_y=531&top_left_x=239" alt="right triangle"/></p><p>Note: Figure not drawn to scale.</p><p>In the right triangle $ABC$ above, $AB=9$, and $BC=12$. If $D$ is the midpoint of $\\overline{BC}$, what is the area of triangle $CDE$?</p>`,
            options: ["27", "13.5", "9", "8.64"],
            correct: 3 // D
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-393.jpg?height=421&width=606&top_left_y=1587&top_left_x=211" alt="triangle on line"/></p><p>Note: Figure not drawn to scale.</p><p>In the $xy$-plane above, the equation of line $\\ell$ is $y=\\frac{1}{2}x+10$ and the area of $\\triangle ABC$ is 36. What is the length of $\\overline{AB}$?</p>`,
            options: ["6", "12", "15", "16"],
            correct: 1 // B
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p>Which of the following is true about the graph of $f(x)=3(\\sqrt{8x-4}+2)$ compared with the graph of $g(x)=3\\sqrt{8x}$?</p>`,
            options: [
                "The graph of $g(x)$ is moved to the left by 4 units and up 2 units.",
                "The graph of $g(x)$ is moved to the right by 4 units and up 2 units.",
                "The graph of $g(x)$ is moved to the right by 0.5 unit and up 2 units.",
                "The graph of $g(x)$ is moved to the right by 0.5 unit and up 6 units."
            ],
            correct: 3 // D
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& xy=\\sqrt[3]{32} \\\\& \\frac{x}{y}=\\left(\\frac{1}{2}\\right)^{\\frac{1}{3}}\\end{aligned}$</p><p>In the system of equations, which of the following could be the value of $y$?</p>`,
            options: ["1", "1.5", "2", "4"],
            correct: 2 // C
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic roots",
            prompt: `<p>$x^{2}-kx+k-6=0$</p><p>In the equation above, $k$ is a constant and $a$ and $b$ are the solutions to the equation. If $a+b=12$, what is the value of $ab$?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Distance between points",
            prompt: `<p>What is the distance between the points of intersection of the curves $y=x(x-4)$ and $y=x+6$? (Round your answer to the nearest tenth.)</p>`,
            correct: { answers: ["9.9"], numeric: 9.9, tolerance: 0.1 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Parabola geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-395.jpg?height=603&width=660&top_left_y=508&top_left_x=1205" alt="parabola triangle"/></p><p>Note:Figure not drawn to scale.</p><p>In the $xy$-plane above, the parabola $y=-kx^{2}+1$ intersects the $x$-and $y$-axes at the points $A, B$, and $C$. If $\\triangle ABC$ is an equilateral triangle, what is the value of $k$?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems of inequalities",
            prompt: `<p>$\\begin{aligned}& y \\leq -x^{2}+4x+5 \\\\& y \\geq -x+5\\end{aligned}$</p><p>In the $xy$-plane, if a point with coordinates $(a, b)$ lies in the solution set of the system of inequalities above, what is the maximum possible value of $b$?</p>`,
            correct: { answers: ["9"], numeric: 9, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-396.jpg?height=529&width=727&top_left_y=531&top_left_x=159" alt="circle tangent"/></p><p>In the $xy$-plane above, line $\\ell$ is tangent to the graph of circle $O$ and the value of $\\sin \\angle ORP$ is 0.6. If the area of $\\triangle OPR$ is 54, what is the radius of the circle?</p>`,
            correct: { answers: ["7.2"], numeric: 7.2, tolerance: 0.1 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-396.jpg?height=547&width=515&top_left_y=536&top_left_x=1150" alt="triangle on parabola"/></p><p>In the $xy$-plane above, points $O, P$, and $Q$ lie on the graph of $y=2x^{2}$. If the area of triangle $OPQ$ is 54, what is the length of $\\overline{PQ}$?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Triangle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-396.jpg?height=292&width=655&top_left_y=1567&top_left_x=1119" alt="isosceles triangles"/></p><p>Note:Figure not drawn to scale.</p><p>The figure above shows three isosceles right triangles with sides of length $4, a$, and 25, respectively. If points $A, B$, and $C$ lie on line $\\ell$, what is the value of $a$?</p>`,
            correct: { answers: ["10"], numeric: 10, tolerance: 0 }
        }
    ]
};