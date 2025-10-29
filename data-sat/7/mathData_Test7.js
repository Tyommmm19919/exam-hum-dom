window.satMathData = {
    testId: "7",
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
            skill: "Absolute value intervals",
            prompt: `<p>$2 \\leq x \\leq 10$</p><p>Which of the following is equivalent to the expression above?</p>`,
            options: ["$|x+6| \\geq 4$", "$|x+6| \\leq 4$", "$|x-6| \\geq 4$", "$|x-6| \\leq 4$"],
            correct: 3
        },
        {
            id: "M1-02",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Correlation coefficients",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-273.jpg?height=553&width=669&top_left_y=1364&top_left_x=345"/></p><p>In the scatter plot above, what correlation coefficient best fits the data?</p>`,
            options: ["-1", "-0.95", "0.95", "1"],
            correct: 1
        },
        {
            id: "M1-03",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear functions",
            prompt: `<p>$f(x)=-\\frac{5}{3}x+b$</p><p>In the function above, $b$ is a constant. If $f(9)=5$, what is the value of $f(3)$?</p>`,
            options: ["15", "10", "-15", "-25"],
            correct: 0
        },
        {
            id: "M1-04",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponent rules",
            prompt: `<p>$x^{-2}\\left(\\frac{1}{\\sqrt{x}}\\right)$</p><p>Which of the following is equivalent to the expression shown above?</p>`,
            options: ["$\\frac{1}{\\sqrt{x^{5}}}$", "$\\frac{\\sqrt{x^{5}}}{2}$", "$\\frac{1}{\\sqrt{x^{3}}}$", "$\\frac{1}{x^{3}}$"],
            correct: 0
        },
        {
            id: "M1-05",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Trigonometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-274.jpg?height=272&width=566&top_left_y=519&top_left_x=251"/></p><p>In the rectangle above, $E$ and $F$ are the midpoints of $\\overline{BC}$ and $\\overline{CD}$ respectively. If the value of $\\sin \\angle BAE$ is 0.6, what is the value of $\\tan \\angle EFC$?</p>`,
            options: ["$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{3}{5}$", "$\\frac{3}{2}$"],
            correct: 3
        },
        {
            id: "M1-06",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Function transformation",
            prompt: `<p>If $f(2x)=3x+1$, which of the following represents $f(x)$?</p>`,
            options: ["$\\frac{1}{2}(3x+1)$", "$\\frac{1}{2}x+1$", "$\\frac{3}{2}x+1$", "$\\frac{3}{2}x+2$"],
            correct: 2
        },
        {
            id: "M1-07",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Algebraic manipulation",
            prompt: `<p>$\\left(a-\\frac{1}{a}\\right)^{2}$</p><p>Which of the following is equivalent to the expression above?</p>`,
            options: ["$a^{2}-\\frac{1}{a^{2}}$", "$a^{2}+\\frac{1}{a^{2}}$", "$a^{2}+\\frac{1}{a^{2}}+2$", "$a^{2}+\\frac{1}{a^{2}}-2$"],
            correct: 3
        },
        {
            id: "M1-08",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>The price of a smart phone in 2015 is 300 dollars. The product will decrease in value at a rate of 20 dollars per year. $P$ is the dollar value of the smart phone and $t (0 \\leq t \\leq 10)$ is the number of years from 2015.</p><p>Based on the information above, which of the following represents the price, in dollars, in terms of $t$?</p>`,
            options: ["$P=300(1+0.15)^{t}$", "$P=300-20t$", "$P=300+20t$", "$P=300(1-0.15)^{t}$"],
            correct: 1
        },
        {
            id: "M1-09",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Linear models",
            prompt: `<p>The price of a smart phone in 2015 is 300 dollars. The product will decrease in value at a rate of 20 dollars per year. $P$ is the dollar value of the smart phone and $t (0 \\leq t \\leq 10)$ is the number of years from 2015.</p><p>In how many years will the value of the smart phone be 200 dollars?</p>`,
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            id: "M1-10",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Parallel lines",
            prompt: `<p>$\\frac{1}{3}x-\\frac{1}{6}y=10$</p><p>Which of the following equations represents a line that is parallel to the graph of the equation above?</p>`,
            options: ["$4x+y=5$", "$2x+4y=9$", "$5x-10y=9$", "$10x-5y=11$"],
            correct: 3
        },
        {
            id: "M1-11",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Radical equations",
            prompt: `<p>$\\sqrt{\\frac{x-2}{x}}=2$</p><p>Which of the following is the solution to the equation above?</p>`,
            options: ["$\\frac{2}{3}$", "$\\frac{3}{2}$", "$-\\frac{2}{3}$", "Undefined"],
            correct: 2
        },
        {
            id: "M1-12",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& y=k \\\\& y=(x+5)(x-5)\\end{aligned}$</p><p>In the system of equations above, $k$ is a constant. If the system has no solution, which of the following could be the value of $k$?</p>`,
            options: ["50", "25", "-25", "-50"],
            correct: 3
        },
        {
            id: "M1-13",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p>$f(x)=2(x-a)^{2}+b$</p><p>In the function above, $a$ and $b$ are constants. If $f(x)=2x^{2}-4x+27$ is equivalent to the expression above, what is the value of $b$?</p>`,
            options: ["25", "26", "28", "32"],
            correct: 0
        },
        {
            id: "M1-14",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Rational expressions",
            prompt: `<p>If $a>1$, which of the following is equivalent to $\\frac{1-\\frac{2}{3a}}{a-\\frac{4}{9a}}$?</p>`,
            options: ["$\\frac{3a-2}{3a+2}$", "$\\frac{3}{3a-2}$", "$\\frac{3}{3a+2}$", "$\\frac{3a-2}{3}$"],
            correct: 2
        },
        {
            id: "M1-15",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential equations",
            prompt: `<p>If $4x-y=\\frac{2}{3}$, what is the value of $\\frac{81^{3x}}{27^{y}}$?</p>`,
            options: ["3", "9", "27", "81"],
            correct: 1
        },
        {
            id: "M1-16",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Inverse variation",
            prompt: `<p>For the function $f$, $y=f(x)$ is inversely proportional to $x$. If $f(5)=24$, what is the value of $f(10)$?</p>`,
            correct: { answers: ["12"], numeric: 12, tolerance: 0 }
        },
        {
            id: "M1-17",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-277.jpg?height=307&width=655&top_left_y=936&top_left_x=222"/></p><p>In the rectangle above, the length of $\\overline{AE}$ is $\\frac{2}{5}$ of the length of $\\overline{AC}$. If the area of $\\triangle AED$ is 18, what is the area of $\\triangle CED$?</p>`,
            correct: { answers: ["27"], numeric: 27, tolerance: 0 }
        },
        {
            id: "M1-18",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Triangle area",
            prompt: `<p><img src="../data-sat/7/image.png"/>In the figure above, the value of $\\sin x$ is 0.6 and the length of $\\overline{AB}$ is 12. What is the area of $\\triangle ABC$?</p>`,
            correct: { answers: ["54"], numeric: 54, tolerance: 0 }
        },
        {
            id: "M1-19",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Function area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-277.jpg?height=686&width=641&top_left_y=542&top_left_x=1136"/></p><p>The graphs of $f(x)=ax^{3}$ and $g(x)=x$ are shown in the $xy$-plane above, where $a$ is a constant. If the area of $\\triangle AOB$ is $\\frac{1}{8}$, what is the value of $a$?</p>`,
            correct: { answers: ["4"], numeric: 4, tolerance: 0 }
        },
        {
            id: "M1-20",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Partial fractions",
            prompt: `<p>$\\frac{14}{x^{2}-3x-10}=\\frac{a}{x-5}+\\frac{b}{x+2}$</p><p>In the equation above, $a$ and $b$ are constants. If the equation is true for all values of $x$ except 5 and -2, what is the value of $a$?</p>`,
            correct: { answers: ["2"], numeric: 2, tolerance: 0 }
        },
        {
            id: "M1-21",
            module: 1,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-286.jpg?height=715&width=683&top_left_y=488&top_left_x=1142"/></p><p>The graph of $y=|ax(x-6)|$ is shown in the $xy$-plane above. Which of the following could be the value of $a$?</p>`,
            options: ["$-\\frac{1}{2}$", "$-\\frac{1}{3}$", "2", "3"],
            correct: 1
        },
        {
            id: "M1-22",
            module: 1,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-287.jpg?height=595&width=664&top_left_y=585&top_left_x=225"/></p><p>The lines with equations $y=\\frac{2}{3}x$ and $y=2x-8$ are shown in the $xy$-plane above. What is the area of triangle $OPR$?</p>`,
            correct: { answers: ["8"], numeric: 8, tolerance: 0 }
        },
        {
            id: "M2-01",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Quadratic functions",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-282.jpg?height=452&width=535&top_left_y=511&top_left_x=1113"/></p><p>The graph of a quadratic function $f(x)=ax^{2}+bx+c$ is shown in the $xy$-plane above. Which of the following must be true?</p><p>I. $a>0$</p><p>II. $b>0$</p><p>III. $c>0$</p>`,
            options: ["I only", "I and II only", "II and III only", "I, II, and III"],
            correct: 2
        },
        {
            id: "M2-02",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Systems of equations",
            prompt: `<p>$\\begin{aligned}& \\frac{1}{12}x-\\frac{1}{24}y=\\frac{1}{8} \\\\& 5x+3y=2\\end{aligned}$</p><p>If $(a, b)$ is the solution to the system of equations above, what is the value of $a$?</p>`,
            options: ["-2", "-1", "1", "2"],
            correct: 2
        },
        {
            id: "M2-03",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p>A statistician chose 100 families at random from each of two towns and asked how many pets they own. The results are shown in the table above. There is a total of 10,000 families in East village and 15,000 families in West village.</p><p>What is the median number of pets for all families surveyed?</p>`,
            options: ["1", "1.5", "2", "3"],
            correct: 2
        },
        {
            id: "M2-04",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Data analysis",
            prompt: `<p>A statistician chose 100 families at random from each of two towns and asked how many pets they own. The results are shown in the table above. There is a total of 10,000 families in East village and 15,000 families in West village.</p><p>What is the expected total number of families, who own 3 pets in the two villages?</p>`,
            options: ["25", "1000", "2000", "3250"],
            correct: 3
        },
        {
            id: "M2-05",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle area",
            prompt: `<p>$x^{2}+y^{2}-6x-8y=0$</p><p>The equation of a circle in the $xy$-plane is shown above. What is the area of the circle?</p>`,
            options: ["15.7", "31.4", "62.8", "78.5"],
            correct: 3
        },
        {
            id: "M2-06",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Area relationships",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-283.jpg?height=455&width=752&top_left_y=1307&top_left_x=1196"/></p><p>Note: Figure not drawn to scale.</p><p>In the figure above, $AB:BC:CD=3:5:2$. If the sum of the areas of the shaded regions is 13, what is the area of $\\triangle EBC$?</p>`,
            options: ["13", "17", "20", "25"],
            correct: 0
        },
        {
            id: "M2-07",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Absolute value inequalities",
            prompt: `<p>$K \\leq -6$ or $K \\geq 14$</p><p>Which of the following is equivalent to the expression of inequalities above?</p>`,
            options: ["$|K+4| \\leq 10$", "$|K+4| \\geq 10$", "$|K-4| \\leq 10$", "$|K-4| \\geq 10$"],
            correct: 3
        },
        {
            id: "M2-08",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Volume scaling",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-284.jpg?height=469&width=780&top_left_y=1373&top_left_x=208"/></p><p>In the figures above, both of the water tanks are in the shape of a right circular cone. If the larger tank can hold 125 gallons of water, how many gallons of water can the smaller tank hold?</p>`,
            options: ["5", "25", "31.25", "62.5"],
            correct: 2
        },
        {
            id: "M2-09",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Circle geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-284.jpg?height=655&width=655&top_left_y=496&top_left_x=1153"/></p><p>In the figure above, right triangle $RST$ bordered by three semicircles on each side. If the area of semicircle I is 8 and the area of semicircle II is 24, what is the length of $\\overline{ST}$?</p>`,
            options: ["$\\frac{16}{\\sqrt{\\pi}}$", "$\\frac{16}{\\pi}$", "$\\frac{8}{\\sqrt{\\pi}}$", "$\\frac{8}{\\pi}$"],
            correct: 0
        },
        {
            id: "M2-10",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Rate of change",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-285.jpg?height=569&width=806&top_left_y=485&top_left_x=262"/></p><p>The graph of $g$ is shown in the $xy$-plane above. If $f(x)=2g(x)-5$, what is the average rate of change of $f(x)$ between -2 and 4?</p>`,
            options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$-\\frac{1}{4}$", "$-\\frac{1}{3}$"],
            correct: 3
        },
        {
            id: "M2-11",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Exponential equations",
            prompt: `<p>If the value of $k^{-5}$ is twice the value of $4k^{-2}$, what is the value of $k$?</p>`,
            options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "2", "4"],
            correct: 1
        },
        {
            id: "M2-12",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Volume",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-285.jpg?height=546&width=546&top_left_y=542&top_left_x=1279"/></p><p>In the figure above, a right cylinder is inscribed in a sphere with radius 10. If the radius of the circular base of the cylinder is 6, what is the volume of the cylinder?</p>`,
            options: ["$144\\pi$", "$288\\pi$", "$576\\pi$", "$720\\pi$"],
            correct: 2
        },
        {
            id: "M2-13",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Unit rates",
            prompt: `<p>A carton contains $k$ boxes of paper cups and each box contains 100 paper cups. If the carton cost $d$ dollars, what is the cost per paper cup in cents?</p>`,
            options: ["$kd$", "$\\frac{d}{k}$", "$\\frac{d}{100k}$", "$\\frac{100k}{d}$"],
            correct: 1
        },
        {
            id: "M2-14",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-286.jpg?height=424&width=546&top_left_y=479&top_left_x=274"/></p><p>In the $xy$-plane above, lines $\\ell$ and $m$ are parallel and intersect the $x$-axis at $x=a$ and $x=b$ respectively. If $a+b=8$, what is the value of $a$?</p>`,
            options: ["1.5", "2", "2.5", "3"],
            correct: 1
        },
        {
            id: "M2-15",
            module: 2,
            type: "mcq",
            domain: "MATH",
            skill: "Linear equations",
            prompt: `<p>$(k-2a)x+k-11=5$</p><p>In the equation above, $a$ and $k$ are constants. If the equation has infinitely many solutions, what is the value of $a$?</p>`,
            options: ["8", "16", "20", "24"],
            correct: 0
        },
        {
            id: "M2-16",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Slope",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-287.jpg?height=432&width=621&top_left_y=1699&top_left_x=268"/></p><p>In the $xy$-plane above, the slope of $\\overline{PQ}$ is -1 and the slope of $\\overline{QR}$ is $\\frac{1}{2}$. What is the slope of $\\overline{PR}$?</p>`,
            correct: { answers: ["5/4", "1.25"], numeric: 1.25, tolerance: 0 }
        },
        {
            id: "M2-17",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-287.jpg?height=470&width=685&top_left_y=639&top_left_x=1118"/></p><p>In the figure above, $O$ is the center of the circle. If the area of the circle is $100\\pi$ and measure of angle $POR$ is $\\frac{\\pi}{6}$ radians, what is the area of parallelogram $OPQR$?</p>`,
            correct: { answers: ["50"], numeric: 50, tolerance: 0 }
        },
        {
            id: "M2-18",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Systems of inequalities",
            prompt: `<p>$\\begin{aligned}& y \\geq -3x+1200 \\\\& y \\geq 15x+300\\end{aligned}$</p><p>In the $xy$-plane above, a point with coordinates $(r, s)$ lies in the solution set of the system of inequalities above. What is the minimum possible value of $s$?</p>`,
            correct: { answers: ["1050"], numeric: 1050, tolerance: 0 }
        },
        {
            id: "M2-19",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Coordinate geometry",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-288.jpg?height=518&width=763&top_left_y=482&top_left_x=228"/></p><p>In the $xy$-plane above, what is the area of triangle $ABC$?</p>`,
            correct: { answers: ["40"], numeric: 40, tolerance: 0 }
        },
        {
            id: "M2-20",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Area",
            prompt: `<p><img src="https://cdn.mathpix.com/cropped/2025_10_25_94f1b47c3164bfdb7548g-288.jpg?height=555&width=689&top_left_y=1493&top_left_x=265"/></p><p>The graph of $y=-(x-2)(x+5)$ is shown in the $xy$-plane above. What is the area of triangle $STR$?</p>`,
            correct: { answers: ["35"], numeric: 35, tolerance: 0 }
        },
        {
            id: "M2-21",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Exponential decay",
            prompt: `<p>A consumer analyst believes that a new car will lose 18 percent of its value every year. After $n$ years, the value of a new car that costs 20,000 dollars is modeled by $V(t)=20,000 \\cdot C^{n}$, where $V$ is the value of the car after $n$ years.</p><p>Based on the information above, what is the value of $C$?</p>`,
            correct: { answers: ["0.82"], numeric: 0.82, tolerance: 0.01 }
        },
        {
            id: "M2-22",
            module: 2,
            type: "spr",
            domain: "MATH",
            skill: "Exponential decay",
            prompt: `<p>A consumer analyst believes that a new car will lose 18 percent of its value every year. After $n$ years, the value of a new car that costs 20,000 dollars is modeled by $V(t)=20,000 \\cdot C^{n}$, where $V$ is the value of the car after $n$ years.</p><p>To the nearest dollar, what is the value of the car 5 years after it was purchased? (Note: Disregard the dollar sign when gridding your answer.)</p>`,
            correct: { answers: ["7415"], numeric: 7415, tolerance: 1 }
        }
    ]
};