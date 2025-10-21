// /sat/data/1/mathData_Test1.js
// Digital SAT Math — FULL SAMPLE (44 items; 2 modules)

window.satMathData = {
  testId: "1",
  section: "math",
  meta: {
    calculatorAllowed: true, // entire digital SAT Math allows calculator
    modules: [
      { id: 1, timeSeconds: 35 * 60 },
      { id: 2, timeSeconds: 35 * 60 }
    ],
    // Optional: your UI can color by skill/domain if you want
    domains: [
      "Algebra",
      "Advanced Math",
      "Problem Solving & Data Analysis",
      "Geometry & Trigonometry"
    ]
  },
  /**
   * Item schema:
   * {
   *   id: "M1-01",
   *   module: 1|2,
   *   type: "mcq" | "spr",
   *   domain: "Algebra" | "Advanced Math" | "Problem Solving & Data Analysis" | "Geometry & Trigonometry",
   *   skill: "short label",
   *   prompt: "<p>HTML ok (keep simple: x^2 for powers)</p>",
   *   options?: ["A","B","C","D"],          // for mcq
   *   correct: number | { answers:[...], numeric?:number, tolerance?:number } // mcq index OR free-response key(s)
   * }
   *
   * SPR grading notes:
   *  - answers: list of accepted strings (e.g., "3/4", "0.75", "75/100" if you want)
   *  - numeric: optional numeric value; if present, accept any input within "tolerance"
   *  - tolerance: numeric absolute tolerance for "numeric" comparison (e.g., 0.001)
   */

  items: [
    // =========================
    // ======== MODULE 1 =======
    // =========================

    {
      id: "M1-01",
      module: 1,
      type: "mcq",
      domain: "Algebra",
      skill: "q",
      prompt: `
<p><math> 
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math></p>`,
      options: ["op1", "op2", "op3", "p["],
      correct: 2
    },
    {
      id: "M1-02",
      module: 1,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Rate interpretation",
      prompt: `
<p><math>
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math></p>`,
      options: [
        "A fixed start-up fee",
        "The cost per hour",
        "The number of hours included for free",
        "The total cost for four hours"
      ],
      correct: 1
    },
{
  id: "M1-03",
  module: 1,
  type: "mcq",
  domain: "Algebra",
  skill: "Solving literal equations",
  prompt: `
<p>
  <math>
    <mi>R</mi><mo>=</mo>
    <mfrac>
      <mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow>
      <msub><mi>m</mi><mn>1</mn></msub>
    </mfrac>
  </math>
</p>
<p>The ratio for the kinetic energy between two objects of mass
<math><msub><mi>m</mi><mn>1</mn></msub></math> and
<math><msub><mi>m</mi><mn>2</mn></msub></math> before and after the collision is given above.
Which of the following is equivalent to the expression for
<math><msub><mi>m</mi><mn>1</mn></msub></math>?</p>
`,
  options: [
    `<math><mfrac><msub><mi>m</mi><mn>2</mn></msub><mi>R</mi></mfrac></math>`,
    `<math><mfrac><mrow><mi>R</mi><mo>-</mo><mn>1</mn></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac></math>`,
    `<math><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mi>R</mi><mo>-</mo><mn>1</mn></mrow></mfrac></math>`,
    `<math><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>-</mo><mi>R</mi></mrow><mi>R</mi></mfrac></math>`
  ],
  correct: 2
},

    {
      id: "M1-05",
      module: 1,
      type: "spr",
      domain: "Problem Solving & Data Analysis",
      skill: "Percent increase",
      prompt:
        "<p>A price increases from $80 to $92. What is the percent increase? (Enter just the number.)</p>",
      correct: { answers: ["15", "15%"], numeric: 15, tolerance: 1e-9 }
    },
    {
      id: "M1-06",
      module: 1,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Quadratic — vertex",
      prompt:
        "<p>For y = (x − 3)(x + 1), what is the x-coordinate of the vertex?</p>",
      options: ["−2", "1", "2", "4"],
      correct: 1
    },
    {
      id: "M1-07",
      module: 1,
      type: "mcq",
      domain: "Geometry & Trigonometry",
      skill: "Triangle area",
      prompt:
        "<p>A triangle has base 10 and height 7. What is its area?</p>",
      options: ["17", "70", "35", "140"],
      correct: 2
    },
    {
      id: "M1-08",
      module: 1,
      type: "spr",
      domain: "Problem Solving & Data Analysis",
      skill: "Median",
      prompt:
        "<p>Find the median of the numbers 3, 8, 9, 4, 7.</p>",
      correct: { answers: ["7"], numeric: 7, tolerance: 0 }
    },
    {
      id: "M1-09",
      module: 1,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Function transformations",
      prompt:
        "<p>Let f(x) = x^2 and g(x) = (x − 2)^2 + 5. Which transformation describes g relative to f?</p>",
      options: [
        "Left 2, down 5",
        "Right 2, up 5",
        "Right 5, up 2",
        "Left 5, up 2"
      ],
      correct: 1
    },
    {
      id: "M1-10",
      module: 1,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Proportions",
      prompt:
        "<p>A recipe uses 2 cups of flour for every 3 cups of sugar. If 12 cups of sugar are used, how many cups of flour are needed?</p>",
      options: ["6", "8", "10", "18"],
      correct: 1
    },
    {
      id: "M1-11",
      module: 1,
      type: "spr",
      domain: "Problem Solving & Data Analysis",
      skill: "Probability",
      prompt:
        "<p>If a fair six-sided die is rolled, what is the probability of <em>not</em> rolling a 1 or 2? Enter a fraction or decimal.</p>",
      correct: { answers: ["2/3", "0.6667", "0.6666667"], numeric: 2/3, tolerance: 1e-4 }
    },
    {
      id: "M1-12",
      module: 1,
      type: "mcq",
      domain: "Algebra",
      skill: "Inequalities",
      prompt:
        "<p>Solve: 3x − 5 ≥ 16.</p>",
      options: ["x &gt; 7", "x ≥ 7", "x ≤ 7", "x &lt; 7"],
      correct: 1
    },
    {
      id: "M1-13",
      module: 1,
      type: "spr",
      domain: "Advanced Math",
      skill: "Quadratic roots",
      prompt:
        "<p>Solve x^2 − 5x + 6 = 0. Enter the smaller solution.</p>",
      correct: { answers: ["2"], numeric: 2, tolerance: 0 }
    },
    {
      id: "M1-14",
      module: 1,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Exponential models",
      prompt:
        "<p>A population is modeled by P(t) = 100(1.08)^t. What does 1.08 represent?</p>",
      options: [
        "An 8% decrease each period",
        "An 8% increase each period",
        "The initial population",
        "Eight individuals added per period"
      ],
      correct: 1
    },
    {
      id: "M1-15",
      module: 1,
      type: "mcq",
      domain: "Geometry & Trigonometry",
      skill: "Circle area → radius",
      prompt:
        "<p>If the area of a circle is 144π, what is the radius?</p>",
      options: ["6", "8", "12", "24"],
      correct: 2
    },
    {
      id: "M1-16",
      module: 1,
      type: "spr",
      domain: "Advanced Math",
      skill: "Average rate of change",
      prompt:
        "<p>For f(x) = 3x^2, find the average rate of change from x = 2 to x = 5.</p>",
      correct: { answers: ["21"], numeric: 21, tolerance: 0 }
    },
    {
      id: "M1-17",
      module: 1,
      type: "mcq",
      domain: "Algebra",
      skill: "Equation of a line",
      prompt:
        "<p>What is the equation of the line through (1, −2) and (5, 6)?</p>",
      options: ["y = 2x − 4", "y = 2x + 4", "y = −2x + 4", "y = −2x − 4"],
      correct: 0
    },
    {
      id: "M1-18",
      module: 1,
      type: "spr",
      domain: "Algebra",
      skill: "Solve linear equation",
      prompt: "<p>Solve for t: 5t + 2 = 3t + 14.</p>",
      correct: { answers: ["6"], numeric: 6, tolerance: 0 }
    },
    {
      id: "M1-19",
      module: 1,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Statistics — mean & SD",
      prompt:
        "<p>Adding 5 to every value in a data set affects the mean and standard deviation how?</p>",
      options: [
        "Both increase by 5",
        "Mean increases by 5; SD unchanged",
        "Mean unchanged; SD increases by 5",
        "Both unchanged"
      ],
      correct: 1
    },
    {
      id: "M1-20",
      module: 1,
      type: "spr",
      domain: "Algebra",
      skill: "Solve system (sum/diff)",
      prompt:
        "<p>If x + y = 17 and x − y = 5, what is the value of x?</p>",
      correct: { answers: ["11"], numeric: 11, tolerance: 0 }
    },
    {
      id: "M1-21",
      module: 1,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Factoring",
      prompt:
        "<p>Which expression is equivalent to x^2 − 9x + 20 ?</p>",
      options: [
        "(x − 2)(x − 10)",
        "(x − 4)(x − 5)",
        "(x − 5)(x − 5)",
        "(x + 4)(x + 5)"
      ],
      correct: 1
    },
    {
      id: "M1-22",
      module: 1,
      type: "spr",
      domain: "Algebra",
      skill: "Counting integer solutions",
      prompt:
        "<p>How many integers x satisfy 2 &lt; x ≤ 7 ?</p>",
      correct: { answers: ["5"], numeric: 5, tolerance: 0 }
    },

    // =========================
    // ======== MODULE 2 =======
    // =========================

    {
      id: "M2-01",
      module: 2,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Proportions",
      prompt:
        "<p>If a/b = 3/5 and b = 20, what is a?</p>",
      options: ["10", "12", "15", "30"],
      correct: 2
    },
    {
      id: "M2-02",
      module: 2,
      type: "mcq",
      domain: "Algebra",
      skill: "Slope from standard form",
      prompt:
        "<p>What is the slope of the line 3x − 2y = 8 ?</p>",
      options: ["−3/2", "3/2", "−2/3", "2/3"],
      correct: 1
    },
    {
      id: "M2-03",
      module: 2,
      type: "spr",
      domain: "Advanced Math",
      skill: "Absolute value",
      prompt:
        "<p>Evaluate |−7 + 3|.</p>",
      correct: { answers: ["4"], numeric: 4, tolerance: 0 }
    },
    {
      id: "M2-04",
      module: 2,
      type: "mcq",
      domain: "Algebra",
      skill: "Systems of inequalities",
      prompt:
        "<p>Which point satisfies both x &gt; 1 and y ≤ 2x + 1 ?</p>",
      options: ["(1, 3)", "(2, 5)", "(0, 0)", "(−2, 5)"],
      correct: 1
    },
    {
      id: "M2-05",
      module: 2,
      type: "spr",
      domain: "Problem Solving & Data Analysis",
      skill: "Mean",
      prompt:
        "<p>Find the mean of 4, 5, 9, and 12.</p>",
      correct: { answers: ["7.5", "15/2"], numeric: 7.5, tolerance: 1e-9 }
    },
    {
      id: "M2-06",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Exponent rules",
      prompt:
        "<p>Solve 3^x = 27.</p>",
      options: ["2", "3", "4", "9"],
      correct: 1
    },
    {
      id: "M2-07",
      module: 2,
      type: "mcq",
      domain: "Geometry & Trigonometry",
      skill: "Right triangle area",
      prompt:
        "<p>A triangle has side lengths 5, 12, and 13. What is its area?</p>",
      options: ["24", "30", "36", "60"],
      correct: 1
    },
    {
      id: "M2-08",
      module: 2,
      type: "spr",
      domain: "Advanced Math",
      skill: "Vertex/minimum",
      prompt:
        "<p>For y = (x + 3)^2 − 10, what is the minimum value of y?</p>",
      correct: { answers: ["-10", "−10"], numeric: -10, tolerance: 0 }
    },
    {
      id: "M2-09",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Domain of rational",
      prompt:
        "<p>What is the domain of f(x) = 1/(x − 4)?</p>",
      options: [
        "All real x",
        "x ≠ 4",
        "x ≥ 4",
        "x ≤ 4"
      ],
      correct: 1
    },
    {
      id: "M2-10",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Arithmetic sequence",
      prompt:
        "<p>In an arithmetic sequence with first term 7 and common difference −3, what is the 5th term?</p>",
      options: ["−2", "−5", "1", "10"],
      correct: 1
    },
    {
      id: "M2-11",
      module: 2,
      type: "spr",
      domain: "Problem Solving & Data Analysis",
      skill: "Percent of a number",
      prompt:
        "<p>What is 20% of 150?</p>",
      correct: { answers: ["30"], numeric: 30, tolerance: 0 }
    },
    {
      id: "M2-12",
      module: 2,
      type: "mcq",
      domain: "Geometry & Trigonometry",
      skill: "Circumference",
      prompt:
        "<p>A circle has diameter 14. What is its circumference?</p>",
      options: ["7π", "14π", "28π", "49π"],
      correct: 1
    },
    {
      id: "M2-13",
      module: 2,
      type: "spr",
      domain: "Algebra",
      skill: "Solve linear function value",
      prompt:
        "<p>Let f(x) = 2x − 3. Find x if f(x) = 11.</p>",
      correct: { answers: ["7"], numeric: 7, tolerance: 0 }
    },
    {
      id: "M2-14",
      module: 2,
      type: "mcq",
      domain: "Problem Solving & Data Analysis",
      skill: "Basic probability",
      prompt:
        "<p>A bag contains 5 red marbles and 7 blue marbles. What is the probability of drawing a red marble?</p>",
      options: ["5/7", "5/12", "7/12", "12/5"],
      correct: 1
    },
    {
      id: "M2-15",
      module: 2,
      type: "mcq",
      domain: "Algebra",
      skill: "Solve system",
      prompt:
        "<p>Solve the system: 2x + y = 11 and x − y = 1. What is x?</p>",
      options: ["3", "4", "5", "6"],
      correct: 1
    },
    {
      id: "M2-16",
      module: 2,
      type: "spr",
      domain: "Algebra",
      skill: "Slope from two points",
      prompt:
        "<p>Find the slope of the line through (3, 4) and (9, 10).</p>",
      correct: { answers: ["1", "1.0"], numeric: 1, tolerance: 0 }
    },
    {
      id: "M2-17",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Exponent rules",
      prompt:
        "<p>What is (2^3)(2^5)?</p>",
      options: ["2^15", "2^8", "2^2", "256^2"],
      correct: 1
    },
    {
      id: "M2-18",
      module: 2,
      type: "mcq",
      domain: "Geometry & Trigonometry",
      skill: "Volume of cylinder",
      prompt:
        "<p>A cylinder has radius 3 and height 5. What is its volume?</p>",
      options: ["15π", "30π", "45π", "90π"],
      correct: 2
    },
    {
      id: "M2-19",
      module: 2,
      type: "spr",
      domain: "Algebra",
      skill: "Compound inequalities",
      prompt:
        "<p>Find the smallest integer x that satisfies x ≥ −3 and 5 − 2x &gt; 1.</p>",
      correct: { answers: ["-3", "−3"], numeric: -3, tolerance: 0 }
    },
    {
      id: "M2-20",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Quadratic vertex (axis of symmetry)",
      prompt:
        "<p>For y = −x^2 + 6x − 5, what is the x-coordinate of the vertex?</p>",
      options: ["−3", "0", "3", "5"],
      correct: 2
    },
    {
      id: "M2-21",
      module: 2,
      type: "spr",
      domain: "Algebra",
      skill: "Solve system (substitution)",
      prompt:
        "<p>Solve the system 4x − y = 9 and x + y = 5. Enter the value of y.</p>",
      correct: { answers: ["11/5", "2.2"], numeric: 11/5, tolerance: 1e-6 }
    },
    {
      id: "M2-22",
      module: 2,
      type: "mcq",
      domain: "Advanced Math",
      skill: "Multiply monomials",
      prompt:
        "<p>Simplify (3x^2y)(2xy^3).</p>",
      options: ["6x^3y^4", "5x^2y^3", "6x^2y^4", "6x^4y^5"],
      correct: 0
    }
  ]
};
