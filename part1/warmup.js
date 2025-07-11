const cacheLineSize = 128; // Size of a cache line in bytes. TODO: Adjust based on your system
const runs = 10;  // Number of runs for each measurement

function measureOneLine() {
  const LINE_SIZE = cacheLineSize / Float64Array.BYTES_PER_ELEMENT; // 128/sizeof(double)
  let result = [];

  // Fill with -1 to ensure allocation
  const M = new Array(runs * LINE_SIZE).fill(-1);

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    let val = M[i * LINE_SIZE];
    const end = performance.now();

    result.push(end - start);
  }

  return result;
}

function measureNLines() {
  let result = [];

  // TODO: Exercise 1-1

  return result;
}

document.getElementById(
  "exercise1-values"
).innerText = `1 Cache Line: [${measureOneLine().join(", ")}]`;

document.getElementById(
  "exercise2-values"
).innerText = `N Cache Lines: [${measureNLines().join(", ")}]`;
