window.satMathData = {
    testId: "4",
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
            skill: "Rational equations",
            prompt: `<p>If $\\frac{5}{2x-3}=\\frac{5}{x}$, what is the value of $2x-3$?</p>`,
            options: ["0", "1", "3", "5"],
            correct: 2 // C
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of inequalities",
            prompt: `<p>$\\begin{aligned}& 2x+y \\leq 3 \\\\& x-y<-3\\end{aligned}$</p><p>Which of the following ordered pairs $(x, y)$ satisfies the system of inequalities above?</p>`,
            options: [
                "$(-1,0)$",
                "$(-1,-1)$",
                "$(-2,4)$",
                "$(-3,0)$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage applications",
            prompt: `<p>A salesman's commission is $k$ percent of the selling price of a car. This week Peter, a salesman, sold 10 cars for 20,000 dollars each. Which of the following represents the commission this week?</p>`,
            options: [
                "200k",
                "2,000k",
                "$\\frac{20,000}{k}$",
                "$\\frac{20,000k}{100+k}$"
            ],
            correct: 1 // B
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage problems",
            prompt: `<p>Emily is walking a trail. After walking $k$ percent of the length of the trail, she has 10 km left to go. Which of the following represents the length of the trail?</p>`,
            options: [
                "10(100-k)",
                "$\\frac{100-k}{10}$",
                "$\\frac{10k}{100-k}$",
                "$\\frac{1000}{100-k}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models interpretation",
            prompt: `<p>$C(x)=140,000+85x$</p><p>A company that produces smart phones pays a start-up cost and a certain amount of money to produce each smart phone. The cost of producing $x$ smart phones is given by the function above. What is the meaning of the value 85 in the function?</p>`,
            options: [
                "the start-up cost",
                "the selling price of one smart phone",
                "the amount spent to produce each smart phone",
                "the profit earned from the sale of one smart phone"
            ],
            correct: 2 // C
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>Which of the following equations has the same solution as $2x^{2}+12x-32=0$?</p>`,
            options: [
                "2(x+3)<sup>2</sup>=32",
                "2(x-3)<sup>2</sup>=25",
                "(x+3)<sup>2</sup>=25",
                "(x+3)<sup>2</sup>=32"
            ],
            correct: 2 // C
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>The marketing department of a company estimates the price $P$, in dollars, of a smart phone by the equation $P=500-25x$ over 10 years, where $x$ is the number of years. What is the estimated decrease, in dollars, each year?</p>`,
            options: ["20", "25", "100", "500"],
            correct: 1 // B
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Correlation coefficients",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-353.jpg?height=480&width=627&top_left_y=1422&top_left_x=1150" alt="scatter plot"/></p><p>Which of the following best represents the correlation coefficient of the linear fit of the data shown above?</p>`,
            options: ["0.95", "-0.95", "-1.00", "-1.05"],
            correct: 1 // B
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& 2x-3y=6 \\\\& y=x-4\\end{aligned}$</p><p>What is the solution $(x, y)$ to the system of equations above?</p>`,
            options: [
                "$(3,-1)$",
                "$(4,0)$",
                "$(5,1)$",
                "$(6,2)$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function properties",
            prompt: `<p>Which of the following equations has a graph in the $xy$-plane for which $y$ is always greater than 0?</p>`,
            options: [
                "$y=x+2$",
                "$y=(x-2)^{2}$",
                "$y=x^{3}+2$",
                "$y=|x|+2$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-354.jpg?height=520&width=695&top_left_y=488&top_left_x=1242" alt="parabola"/></p><p>Note: Figure not drawn to scale.</p><p>The graph of $y=a(x+1)(x-5)$ is shown in the $xy$-plane above, where $a$ is a constant. If the graph with vertex $(h, k)$ intersects the $y$-axis at point $(0,5)$, which of the following is equal to $k$?</p>`,
            options: ["7", "8", "9", "10"],
            correct: 2 // C
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>If $k=\\frac{(x+1)(x-1)}{3}$ and $k \\neq 0$, what does $3x^{2}$ equal in terms of $k$?</p>`,
            options: [
                "3k",
                "9k",
                "3k+1",
                "9k+3"
            ],
            correct: 3 // D
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Averages",
            prompt: `<p>The average (arithmetic mean) of three positive numbers, $a, b$, and $c$ is 15. When the greatest of these numbers is subtracted from the sum of the other two, the result is 5. If $a<b<c$, what is the value of $a+b$?</p>`,
            options: ["20", "25", "30", "40"],
            correct: 1 // A
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Partial fractions",
            prompt: `<p>$\\frac{a(x+1)+b(x-1)}{x-2}=2+\\frac{1}{x-2}$</p><p>The equation above is true for all values of $x \\neq 2$, where $a$ and $b$ are constants. What is the value of $a$?</p>`,
            options: [
                "$-\\frac{1}{2}$",
                "2",
                "3",
                "4"
            ],
            correct: 0 // B
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>What are the solutions to $3(x-3)^{2}-6=14$?</p>`,
            options: [
                "$x=3 \\pm \\sqrt{20}$",
                "$x=\\frac{3 \\pm \\sqrt{20}}{3}$",
                "$x=3 \\pm \\frac{\\sqrt{20}}{3}$",
                "$x=3 \\pm \\frac{\\sqrt{60}}{3}$"
            ],
            correct: 3 // A
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Absolute value inequalities",
            prompt: `<p>$|x-5| \\leq \\frac{1}{2}$</p><p>What is the least value of $x$ that satisfies the inequality above?</p>`,
            correct: { answers: ["4.5", "9/2"], numeric: 4.5, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Volume scaling",
            prompt: `<p>If the diameter of a cylindrical jar is increased by 100 percent without altering the volume, by what percent must the height be decreased? (Note: Disregard the % sign when gridding your answer.)</p>`,
            correct: { answers: ["75"], numeric: 75, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>$f(x)=\\frac{x^{2}}{2}-20x+k$</p><p>In the function $f$ above, $k$ is a constant. In the $xy$-plane, for what value of $x$ does $f(x)$ have the same value of $f(10)$?</p>`,
            correct: { answers: ["30"], numeric: 30, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Area of shaded regions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-356.jpg?height=472&width=797&top_left_y=536&top_left_x=1085" alt="isosceles triangle"/></p><p>In the isosceles right triangle above, $AB=BC=10\\sqrt{2}$. Points $D$ and $E$ are the midpoints of $\\overline{AB}$ and $\\overline{BC}$ respectively. What is the area of the shaded region?</p>`,
            correct: { answers: ["50"], numeric: 50, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-356.jpg?height=575&width=792&top_left_y=1553&top_left_x=1102" alt="square and triangle"/></p><p>In the $xy$-plane above, the area of square $ABCD$ is equal to the area of triangle $CDP$. What is the value of $a$?</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Piecewise function evaluation",
            prompt: `<p>If Jennifer uses 550 texts this month, what is her amount of money, in dollars, does she have to pay?</p>`,
            options: ["20.00", "25.00", "32.50", "37.50"],
            correct: 3 // C
        },
        {
            id: "M1-22",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value expressions",
            prompt: `<p>If $2a+b=4$ and $ab=-3$, what is the value of $|2a-b|$?</p>`,
            options: ["4", "$2\\sqrt{10}$", "$6\\sqrt{3}$", "8"],
            correct: 1 // B
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change",
            prompt: `<p>What is the average rate of change, in feet per week, of the plant from weeks 1 to 7?</p><table><tr><th>Week</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr><tr><th>Height (feet)</th><th>1.5</th><th>1.7</th><th>1.8</th><th>2.2</th><th>2.9</th><th>3.7</th><th>4.8</th></tr></table>`,
            options: ["0.42", "0.47", "0.55", "0.58"],
            correct: 2 // C
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>Ashley and Bernard work at an electronic appliance store. Ashley is paid 200 dollars per week plus 5% of her total sales. Bernard is paid 325 dollars per week plus 2.5% of his total sales. If their weekly pay is the same, what is the dollar amount of their sales?</p>`,
            options: ["5,000", "6,200", "7,500", "8,400"],
            correct: 0 // A
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p>How does the graph of $f(x)=x^{2}-4x+5$ compare with the graph of $g(x)=x^{2}$?</p>`,
            options: [
                "The graph of $g(x)$ is moved to the left 4 units and up 5 units.",
                "The graph of $g(x)$ is moved to the right 4 units and up 5 units.",
                "The graph of $g(x)$ is moved to the left 2 units and up 5 units.",
                "The graph of $g(x)$ is moved to the right 2 units and up 1 unit."
            ],
            correct: 3 // D
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-363.jpg?height=415&width=709&top_left_y=1513&top_left_x=185" alt="tangent circles"/></p><p>In the figure above, the circles are tangent each other and the radii are in a ratio of $1:2$. If the sum of their areas is $80\\pi$, what is the length of $\\overline{AB}$?</p>`,
            options: ["12", "16", "18", "24"],
            correct: 3 // C
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle trigonometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-363.jpg?height=455&width=772&top_left_y=485&top_left_x=1099" alt="right triangle"/></p><p>In right triangle $ABC$ above, $AD=10$ and $BC=25$. If the value of $\\sin \\angle BCD$ is 0.6, what is the area of triangle $BCD$?</p>`,
            options: ["50", "75", "100", "150"],
            correct: 1 // B
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic optimization",
            prompt: `<p>If $p=a^{2}-4a+8$, what is the least possible value of $p+6$?</p>`,
            options: ["2", "4", "8", "10"],
            correct: 3 // D
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value intervals",
            prompt: `<p>$\\begin{aligned}& 80 \\leq x \\leq 100 \\\\& 40 \\leq y \\leq 60\\end{aligned}$</p><p>The intervals of $x$ and $y$ are shown above. If $z=x-y$, which of the following represents all possible values of $z$?</p>`,
            options: [
                "$|z-40| \\leq 20$",
                "$|z-40| \\geq 20$",
                "$|z-20| \\leq 40$",
                "$|z-20| \\geq 40$"
            ],
            correct: 0 // A
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial graphs",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-364.jpg?height=826&width=758&top_left_y=474&top_left_x=1187" alt="polynomial graph"/></p><p>Which of the following functions could represent the graph of $f(x)$ shown in the $xy$-plane above?</p>`,
            options: [
                "$f(x)=\\frac{1}{3}(x-3)(x^{2}-4x+3)$",
                "$f(x)=-\\frac{1}{3}(x-3)(x^{2}-2x-3)$",
                "$f(x)=-\\frac{1}{3}(x+3)(x^{2}-4x+3)$",
                "$f(x)=-\\frac{1}{3}(x+3)(x^{2}+4x+3)$"
            ],
            correct: 2 // B
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic factoring",
            prompt: `<p>$f(x)=(x-4)^{2}-64$</p><p>Which of the following is an equivalent form of the function above?</p>`,
            options: [
                "$f(x)=(x+3)(x-11)$",
                "$f(x)=(x+6)(x-14)$",
                "$f(x)=(x+4)(x-12)$",
                "$f(x)=(x+6)(x-8)$"
            ],
            correct: 2 // C
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-365.jpg?height=483&width=581&top_left_y=1376&top_left_x=239" alt="circle tangent to axes"/></p><p>In the $xy$-plane above, a circle is tangent to the $x$-axis at $R$ and the $y$-axis at $P$, and line $\\ell$ passes through the points of tangency. If the area of the circle is $100\\pi$, what is the equation of line $\\ell$?</p>`,
            options: [
                "$y=-x+5$",
                "$y=-x+10$",
                "$y=-x+50$",
                "$y=-x+100$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function intersections",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-365.jpg?height=660&width=849&top_left_y=508&top_left_x=1073" alt="function graph"/></p><p>$\\begin{aligned}& y=f(x) \\\\& y=k\\end{aligned}$</p><p>In the system of equations above, $k$ is a constant. The function $y=f(x)$ is shown in the $xy$-plane above for $-8 \\leq x \\leq 14$. On this closed interval, for how many values of $k$ does the system have exactly 4 solutions?</p>`,
            options: ["1", "2", "3", "4"],
            correct: 2 // B
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function domain",
            prompt: `<p>Let the function $f$ be defined by $f(x)=\\sqrt{50-2x^{2}}$. What are all the values of $x$ for which $f(x)$ is a real number?</p>`,
            options: [
                "$x \\geq 5$",
                "$x \\leq 5$",
                "$-25 \\leq x \\leq 25$",
                "$-5 \\leq x \\leq 5$"
            ],
            correct: 3 // D
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Area of shaded regions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-366.jpg?height=421&width=607&top_left_y=519&top_left_x=319" alt="intersecting circles"/></p><p>In the figure above, $O$ and $P$ are the centers of the circles. If the lengths of radii of the circles are each 10, what is the area of the shaded region?</p>`,
            options: [
                "$50\\sqrt{3}$",
                "$25\\sqrt{3}$",
                "$\\frac{25\\sqrt{3}}{2}$",
                "$\\frac{25\\sqrt{3}}{4}$"
            ],
            correct: 0 // B
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear functions",
            prompt: `<p>In the $xy$-plane, the graph of the function is a line with a slope of 5. If $f(a)=-4$ and $f(b)=32$, what is the value of $b-a$?</p>`,
            options: ["6", "7.2", "8", "8.4"],
            correct: 1 // B
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Piecewise functions",
            prompt: `<p>Which of the following pairs of equations represents the graph of the domestic texting plan?</p>`,
            options: [
                "$\\begin{cases}y=20, & x \\leq 200 \\\\ y=0.05x, & x>200\\end{cases}$",
                "$\\begin{cases}y=20, & x \\leq 200 \\\\ y=20+0.05x, & x>200\\end{cases}$",
                "$\\begin{cases}y=20, & x \\leq 200 \\\\ y=20+0.05(x-200), & x>200\\end{cases}$",
                "$\\begin{cases}y=20, & x \\leq 200 \\\\ y=30, & x>200\\end{cases}$"
            ],
            correct: 2 // C
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Rational numbers",
            prompt: `<p>If $a$ and $b$ are positive integers such that $\\frac{a}{b}=0.48$. If $150<b<200$, what is the value of $a+b$?</p>`,
            correct: { answers: ["259"], numeric: 259, tolerance: 0 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Volume relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-368.jpg?height=355&width=761&top_left_y=1827&top_left_x=162" alt="cylinder and cone"/></p><p>In the figure above, the cylindrical and cone-shaped containers have the same height of 12 inches and the same radius of 5 inches. If the cone-shaped container filled with water and then the water is poured into the empty cylindrical container, what will be the depth, in inches, of the water in the cylindrical container?</p>`,
            correct: { answers: ["4"], numeric: 4, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-368.jpg?height=677&width=695&top_left_y=548&top_left_x=1113" alt="parabola and rectangle"/></p><p>Note: Figure not drawn to scale.</p><p>In the $xy$-plane above, the graph of $y=2x^{2}-19x+9$ intersects the $y$-axis at $P$ and the $x$-axis at $R$. What is the area of rectangle $OPQR$?</p>`,
            correct: { answers: ["81"], numeric: 81, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems of inequalities",
            prompt: `<p>$\\begin{aligned}& y \\geq x^{2}-8x \\\\& y \\leq 2x\\end{aligned}$</p><p>In the $xy$-plane, ordered pair $(a, b)$ is the solution of the system of inequalities above. What is the maximum possible value of $b$?</p>`,
            correct: { answers: ["20"], numeric: 20, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Absolute value intervals",
            prompt: `<p>$-6 \\leq x \\leq 20$</p><p>If the interval above is rewritten in the form $|x-a| \\leq k$, what is the value of $k$?</p>`,
            correct: { answers: ["13"], numeric: 13, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Average speed",
            prompt: `<p>Mr. Trump drove to work in the morning at the average speed of 60 miles per hour. He returned home in the evening along the same route and averaged 45 miles per hour. To the nearest tenth, what is his average speed, in miles per hour, for the entire trip?</p>`,
            correct: { answers: ["51.4"], numeric: 51.4, tolerance: 0.1 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-369.jpg?height=569&width=792&top_left_y=519&top_left_x=1170" alt="parallelogram and triangle"/></p><p>In the figure above, quadrilateral $AFED$ is a parallelogram and $\\frac{BE}{EC}=\\frac{1}{2}$. If the area of the parallelogram is 10, what is the area of triangle $ABC$?</p>`,
            correct: { answers: ["22.5"], numeric: 22.5, tolerance: 0 }
        }
    ]
};