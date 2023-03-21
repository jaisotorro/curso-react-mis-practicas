const ITERATIONS = 100_000_000;

/**
 * Obten un valor aleatorio de manera bastante compleja y con
 * consumo de CPU
 */
const expensiveRandom = (elements) => {
  const randomValues = [];
  const length = elements.length;

  for (let i = 0; i < ITERATIONS; i++) {
    randomValues.push(elements[Math.floor(Math.random() * length)])
  }

  return randomValues[Math.floor(Math.random() * ITERATIONS)];
};

export default expensiveRandom;