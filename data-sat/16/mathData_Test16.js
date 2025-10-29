window.satMathData = {
    testId: "2",
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
            skill: "Linear equations from graphs",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-507.jpg?height=584&width=678&top_left_y=596&top_left_x=342" alt="line graph"/></p><p>Which of the following is an equation of line $\\ell$ in the $xy$-plane above?</p>`,
            options: [
                "$y=3x-1$",
                "$y=\\frac{1}{3}x-1$",
                "$y=-\\frac{1}{3}x-1$",
                "$y=-\\frac{2}{3}x-1$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-507.jpg?height=300&width=312&top_left_y=1856&top_left_x=382" alt="circle"/></p><p>The circle above with center $O$ has an area of $36\\pi$. What is the length of major arc $\\overparen{ABC}$?</p>`,
            options: ["$3\\pi$", "9", "$9\\pi$", "27"],
            correct: 2 // C
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>What are the solutions of the quadratic equation $\\frac{1}{10}x^{2}-\\frac{1}{2}x+\\frac{3}{5}=0$?</p>`,
            options: [
                "$x=-2$ and $x=-3$",
                "$x=-2$ and $x=3$",
                "$x=2$ and $x=-3$",
                "$x=2$ and $x=3$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function intercepts",
            prompt: `<p>Which of the following is a function whose graph in the $xy$-plane has no $x$-intercepts?</p>`,
            options: [
                "$y=2x-1$",
                "$y=x^{2}-3x-10$",
                "$y=-x^{2}-4$",
                "$y=x^{3}-1$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Radical equations",
            prompt: `<p>$\\sqrt{k+11}+2=x+k$</p><p>In the equation above, $k$ is a constant. If $x=1$, what is the value of $k$?</p>`,
            options: ["-2", "2", "5", "14"],
            correct: 2 // C
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Polynomial operations",
            prompt: `<p>Which of the following is equivalent to the sum of $a^{3}-2a$ and $a^{2}-2$?</p>`,
            options: [
                "$a^{3}-2$",
                "$a^{2}(a+1)$",
                "$(a^{2}-2)(a+1)$",
                "$a(a+1)(a-1)$"
            ],
            correct: 2 // C
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of inequalities",
            prompt: `<p>Peter has two weekly jobs. He works in a town library, which pays $12$ dollars per hour, and he works as a cashier at a grocery mart, which pays $10.5$ dollars per hour. He can work no more than 15 hours per week, but he want to earn at least $120$ dollars per week. Which of the following systems of inequalities represents this situation in terms of $x$ and $y$, where $x$ is the number of hours he works in the town library and $y$ is the number of hours he works as a cashier at the grocery mart?</p>`,
            options: [
                "$\\begin{cases}12x+10.5y \\geq 120 \\\\ x+y \\geq 15\\end{cases}$",
                "$\\begin{cases}12x+10.5y \\leq 120 \\\\ x+y \\geq 15\\end{cases}$",
                "$\\begin{cases}12x+10.5y \\leq 120 \\\\ x+y \\leq 15\\end{cases}$",
                "$\\begin{cases}12x+10.5y \\geq 120 \\\\ x+y \\leq 15\\end{cases}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models interpretation",
            prompt: `<p>A kitchen appliance manufacturing company determines that the total cost $C$, in dollars, of producing $n$ units of a blender is given by $C(n)=30n+2500$. Which of the following statements is the best interpretation of the number 2500 in this context?</p>`,
            options: [
                "The cost of producing each unit.",
                "The total cost of producing $n$ units",
                "The cost that must be paid regardless of the number of units produced.",
                "The cost of producing 30 units"
            ],
            correct: 2 // C
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}2x+12 & =2(y-6) \\\\ x^{2} & =y\\end{aligned}$</p><p>If $(x, y)$ is a solution of the system of equations above. If $x>0$, what is the value of $x+y$?</p>`,
            options: ["20", "16", "15", "9"],
            correct: 0 // A
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic identities",
            prompt: `<p>If $a^{2}-b^{2}=x$ and $y=2ab$, which of the following is equivalent to $x^{2}+y^{2}$?</p>`,
            options: [
                "$(a^{2}+b^{2})^{2}$",
                "$(a^{2}-b^{2})^{2}$",
                "$a^{4}-b^{4}$",
                "$a^{4}+b^{4}$"
            ],
            correct: 0 // A
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Volume scaling",
            prompt: `<p>The volume of a right circular cone is 33 cubic feet. What is the volume, in cubic feet, of a right circular cone with half the radius and twice the height of the cone?</p>`,
            options: ["16.5", "33", "49.6", "66"],
            correct: 0 // A
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Radical expressions",
            prompt: `<p>Which of the following is equivalent to $2(\\sqrt[3]{16})$?</p>`,
            options: [
                "$4\\sqrt{2}$",
                "$2\\sqrt[3]{4}$",
                "$2\\sqrt[3]{2}$",
                "$4\\sqrt[3]{2}$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>At a coffee shop, the coffee urn has a certain amount of coffee in it at the start of the afternoon rush. It is filled by adding $k$ coffee bags to hot water. If $a$ cups of coffee are made by $k$ coffee bags is given by the equation $a=10k+5$, how many additional coffee bags are needed to make each additional 20 cups of coffee?</p>`,
            options: ["One", "Two", "Three", "Four"],
            correct: 1 // B
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rate problems",
            prompt: `<p>Jackson drives an average of 300 miles each week. His car can travel an average of 25 miles per gallon of gasoline. Jackson would like to reduce his weekly expenditure on gasoline by $8$ dollars. If gasoline costs $2.50$ dollars per gallon, how many average miles should he drive each week?</p>`,
            options: ["200 miles", "220 miles", "240 miles", "250 miles"],
            correct: 1 // B
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p>$f(x)=\\sqrt{x-1}$</p><p>The function $f$ is defined by the function above. Which of the following is the graph of $y=f(-x)$ in the $xy$-plane?</p><p>A)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-510.jpg?height=326&width=446&top_left_y=845&top_left_x=1219" alt="graph A"/></p><p>B)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-510.jpg?height=318&width=455&top_left_y=1222&top_left_x=1216" alt="graph B"/></p><p>C)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-510.jpg?height=327&width=460&top_left_y=1581&top_left_x=1205" alt="graph C"/></p><p>D)<br><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-510.jpg?height=324&width=443&top_left_y=1981&top_left_x=1222" alt="graph D"/></p>`,
            options: ["A", "B", "C", "D"],
            correct: 2 // C
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Linear inequalities",
            prompt: `<p>Claire plans to go to an amusement park. The entrance fee costs $8$ dollars and each ride costs $4$ dollars. Claire wants to spend no more than $35$ dollars in the park. What is the maximum number of rides that Claire can take in the park?</p>`,
            correct: { answers: ["6"], numeric: 6, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic equations",
            prompt: `<p>$8(p-1)=5(p^{2}-1)-6(p-1)$</p><p>If $p>1$, what is the solution of the equation above?</p>`,
            correct: { answers: ["1.8", "9/5"], numeric: 1.8, tolerance: 0.01 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}\\frac{1}{4}(3x+y) & =\\frac{15}{8} \\\\ \\frac{1}{3}y & =9x\\end{aligned}$</p><p>The system of equations above has solution $(a, b)$. What is the value of $b$?</p>`,
            correct: { answers: ["6.75", "27/4"], numeric: 6.75, tolerance: 0.01 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Partial fractions",
            prompt: `<p>$\\frac{a}{x+2}-\\frac{b}{(x+2)^{2}}$</p><p>The expression above is equivalent to $\\frac{3x+2}{(x+2)^{2}}$, where $a$ and $b$ are constants and $x \\neq 2$. What is the value of $b$?</p>`,
            correct: { answers: ["4"], numeric: 4, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Parallel lines angles",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-511.jpg?height=227&width=503&top_left_y=1393&top_left_x=1199" alt="parallel lines"/></p><p>In the figure above, line $\\ell$ is parallel to line $m$. What is the value of $k$?</p>`,
            correct: { answers: ["39"], numeric: 39, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational equations",
            prompt: `<p>A high school library spends $2000$ dollars a year on algebra workbooks for the students. The average price for algebra workbooks bought this year was 2 dollars more than the average price last year. Because of the price increase, the school was forced to buy 50 fewer math workbooks. Which of the following equations best describes the value of $p$, the number of algebra workbooks that the school bought last year?</p>`,
            options: [
                "$\\frac{2000}{p}=\\frac{2000}{p-2}-50$",
                "$\\frac{2000}{p}=\\frac{2000}{p+2}-50$",
                "$\\frac{2000}{p-2}=\\frac{2000}{p}-50$",
                "$\\frac{2000}{p+2}=\\frac{2000}{p}-50$"
            ],
            correct: 3 // D
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Direct variation",
            prompt: `<p>The elastic potential energy in joules is the energy stored in a spring when it is stretched. The elastic potential energy is directly proportional to the square of the distance that the spring has been stretched from its original length. When a spring is stretched a distance of 0.5 meter, the elastic potential energy is 12 joules. If the spring is stretched 0.25 meter, what is the elastic potential energy, in joules, stored in the spring?</p>`,
            correct: { answers: ["3"], numeric: 3, tolerance: 0 }
        },

        // SECTION 4 - Module 2 (Calculator)
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Statistical reasoning",
            prompt: `<p>A polling agency recently surveyed 300 students who were selected at random from a certain high school to see if they are for or against purchasing a water filtration system for the school water fountains. Of these surveyed, 80 percent responded that they favor the water filtration system and 20 percent responded that they oppose the system. Based on the results of the survey, which of the following statements must be true?</p><p>I. Eighty percent of all students in the school favor the water filtration system.</p><p>II. If 300 students selected at random from a different high school were surveyed, 20 percent of them would oppose the water filtration system.</p><p>III. If another 300 students selected at random from the school were surveyed, 80 percent of them would favor the water filtration system</p>`,
            options: [
                "I only",
                "I and III only",
                "I and III only",
                "None"
            ],
            correct: 3 // D
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Physics applications",
            prompt: `<p>According to the information in the table, what is the approximate weight of an object with a mass of 85 kilograms on the Mercury?</p><table><tr><th>Planets</th><th>Gravity $(\\mathrm{m}/\\mathrm{s}^{2})$</th></tr><tr><td>Earth</td><td>9.8</td></tr><tr><td>Mercury</td><td>3.7</td></tr><tr><td>Venus</td><td>9.1</td></tr><tr><td>Mars</td><td>3.8</td></tr><tr><td>Jupiter</td><td>2.4</td></tr><tr><td>Pluto</td><td>0.7</td></tr></table>`,
            options: ["314.5 newton", "256.4 newton", "215.5 newton", "200.4 newton"],
            correct: 0 // A
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Scatterplot interpretation",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-517.jpg?height=652&width=732&top_left_y=571&top_left_x=1122" alt="scatterplot"/></p><p>The scatter plot gives the mass of an object plotted against the weight of the object. The gravity of a planet is closest to that of which of the following planets?</p>`,
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 3 // D
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Triangle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-518.jpg?height=375&width=575&top_left_y=502&top_left_x=302" alt="triangle"/></p><p>Note: Figure not drawn to scale</p><p>In $\\triangle ABC$ above, what is the length of $\\overline{AB}$?</p>`,
            options: [
                "$6\\sqrt{2}$",
                "$6\\sqrt{3}$",
                "$12\\sqrt{2}$",
                "$12\\sqrt{3}$"
            ],
            correct: 2 // C
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Periodic functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-518.jpg?height=337&width=798&top_left_y=1619&top_left_x=119" alt="ferris wheel"/></p><p>The figure on the left above shows a Ferris wheel with the mark of a passenger car above the ground. The Ferris wheel rotates counterclockwise at a constant rate. The graph of $y=f(t)$ on the right could represent which of the following as a function of time when the Ferris wheel starts immediately afterward.</p>`,
            options: [
                "The length of the radius of the Ferris wheel",
                "The distance of the Ferris wheel from the passenger car",
                "The distance of the passenger car from point $P$ on the ground",
                "The height the passenger car from the ground"
            ],
            correct: 3 // D
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic inequalities",
            prompt: `<p>$k=\\frac{a^{2}-b}{a}$</p><p>In the equation above, if $a$ is positive and $b$ is negative, which of the following must be true?</p>`,
            options: [
                "$k>1$",
                "$k>a$",
                "$k<b$",
                "$k<1$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage estimation",
            prompt: `<p>In City Spring Lake, Mr. Lee's tenth-grade class, consisting of 30 students, was surveyed and 25.6 percent of the students reported that they spent at least two hours on their school homework. The average class size in the state is 30. If there are 800 tenth-grade classes in the state, which of the following best estimates the number of tenth-grade students in the state who spend fewer than two hours for their school homework?</p>`,
            options: ["6,100", "10,000", "18,000", "25,000"],
            correct: 2 // C
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear regression",
            prompt: `<p>The relationship between the monthly lease price $m$, in dollars, and the purchase price $p$, in thousands of dollars, can be represented by a linear function. Which of the following functions represents the relationship?</p><table><tr><th>Styles</th><th>Purchase price</th><th>Monthly lease price</th></tr><tr><td>Model 3</td><td>$43,000</td><td>$375</td></tr><tr><td>Model B</td><td>$84,000</td><td>$990</td></tr><tr><td>Model S</td><td>$64,000</td><td>$690</td></tr><tr><td>Model E</td><td>$92,000</td><td>$1,110</td></tr><tr><td>Model 5</td><td>$88,000</td><td>$1,050</td></tr></table>`,
            options: [
                "$m(p)=40p-1345$",
                "$m(p)=15p-270$",
                "$m(p)=12.5p-20$",
                "$m(p)=10.5p-76.5$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage discounts",
            prompt: `<p>In the New Year, the company will offer an $18\\%$ discount off the original price for purchasing the all models with an additional $8\\%$ off the discounted price. What is the total percent of discount of the cars?</p>`,
            options: ["$21.35\\%$", "$24.56\\%$", "$26\\%$", "$26.5\\%$"],
            correct: 1 // B
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Percentage problems",
            prompt: `<p>A teacher set up a survey to study the tendency of a student to select a favorite subject when presented with five subjects. In the survey, 100 students were selected and each student was asked to choose a favorite subject. Of the first 80 students, 15 students choice mathematics as their favorite subject. Among the remaining 20 students, $k$ students chose mathematics. If more than $25\\%$ of all participants chose mathematics, which of the following could be the value of $k$?</p>`,
            options: ["$k=5$", "$k=10$", "$k=15$", "$k=25$"],
            correct: 2 // C
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Volume and surface area",
            prompt: `<p>If the volume of a cube is $27\\left(\\frac{a^{3}}{8}\\right)$, where $a$ is a positive constant, which of the following gives the surface area of the cube?</p>`,
            options: [
                "$27\\left(\\frac{a^{2}}{4}\\right)$",
                "$27\\left(\\frac{a^{2}}{2}\\right)$",
                "$9\\left(\\frac{a^{2}}{4}\\right)$",
                "$3\\left(\\frac{a^{2}}{2}\\right)$"
            ],
            correct: 1 // B
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformations",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-520.jpg?height=780&width=764&top_left_y=488&top_left_x=182" alt="linear function"/></p><p>The graph of the linear function $f$ is shown in the $xy$-plane above. If the graph of $g$, defined by $g(x)=4f(x-2)+k$, where $k$ is a constant, passes through the point $(1,-4)$, what is the value of $g(3)$?</p>`,
            options: ["-20", "-17", "12", "17"],
            correct: 0 // A
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Right triangle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-520.jpg?height=335&width=698&top_left_y=536&top_left_x=1087" alt="right triangle"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, an altitude of a right triangle from the right angle splits the hypotenuse into segments of lengths $AD$ and $DC$. Which of the following is closest to the value of $AD$?</p>`,
            options: ["7.5", "8.5", "10", "12"],
            correct: 0 // A
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle equations",
            prompt: `<p>$x^{2}+y^{2}+10x-16y=p$</p><p>The equation above defines a circle in the $xy$-plane and $p$ is a constant. If the area of the circle is $81\\pi$, what is the value of $p$?</p>`,
            options: ["11", "8", "-8", "-11"],
            correct: 2 // C
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic vertex form",
            prompt: `<p>$y=2x^{2}-ax+b$</p><p>In the equation above, $a$ and $b$ are constants and the graph of the equation has a vertex at point $(3,-6)$. What is the value of $b$?</p>`,
            options: ["3", "9", "12", "15"],
            correct: 2 // C
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Segment lengths",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-522.jpg?height=215&width=840&top_left_y=1330&top_left_x=194" alt="line segment"/></p><p>Note: Figure not drawn to scale.</p><p>On $\\overline{AD}$ above, $AC=x+6, BD=3x-10$, and $AD=20$. If $AC=BD$, what is the length of $\\overline{BC}$?</p>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>In the $xy$-plane, the point $(1,3)$ is the vertex of the graph of the function $f$. If $f(x)=x^{2}+ax+b$, where $a$ and $b$ are constants, what is the value of $b$?</p>`,
            correct: { answers: ["4"], numeric: 4, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Regular hexagon geometry",
            prompt: `<p>A landscaper is designing a regular hexagonal garden. If the area of the garden will be $150\\sqrt{3}$ square feet, what will be the perimeter, in feet, of the garden?</p>`,
            correct: { answers: ["60"], numeric: 60, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-522.jpg?height=587&width=569&top_left_y=1290&top_left_x=1262" alt="circle"/></p><p>Note: Figure not drawn to scale.</p><p>Point $O$ is the center of the circle in the figure above.</p><p>What is the value of $x$?</p>`,
            correct: { answers: ["52"], numeric: 52, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Distance problems",
            prompt: `<p>Lidia lives on a street that runs west and east. Her office is to the east and the town library is to the west of her house. Both are on the same street as her house. At 9:00 a.m., she left her home and drove at an average speed of 30 mph for 6 minutes to her office. When she arrived at the office, she realized she has forgotten to pick up a book at the library. Immediately, she drove to the library at an average speed of 36 mph for 8 minutes. After 3 minutes at the library, she drove directly to her office.</p><p>What is the distance, in miles, from her house to the town library?</p>`,
            correct: { answers: ["1.8"], numeric: 1.8, tolerance: 0.01 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Average speed",
            prompt: `<p>If she arrived at the office at 9:27 a.m., what was her average speed, in miles per hour, from the town library to her office?</p>`,
            correct: { answers: ["28.8"], numeric: 28.8, tolerance: 0.1 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-523.jpg?height=538&width=612&top_left_y=542&top_left_x=1133" alt="circle geometry"/></p><p>The circle in the figure above has center $O$ and radius 10. If $\\overline{BC}$ is perpendicular to $\\overline{AD}$, what is the length of $\\overline{AC}$?</p>`,
            correct: { answers: ["15"], numeric: 15, tolerance: 0 }
        }
    ]
};