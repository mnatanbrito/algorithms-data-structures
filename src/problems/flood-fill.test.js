function floodFill(image, sr, sc, color) {
  const visited = [];

  floodFillRecursively(image, sr, sc, color, visited);

  image[sr][sc] = color;

  return image;
}

function floodFillRecursively(image, sr, sc, color, visited) {
  const points = findConnectedPoints(image, sr, sc);

  visited.push(`${sr}-${sc}`);

  points.forEach((point) => {
    const [row, column] = point;

    if (!visited.includes(`${row}-${column}`)) {
      floodFillRecursively(image, row, column, color, visited);
    }

    image[row][column] = color;
  });
}

function findConnectedPoints(image, row, column) {
  const left = column > 0 ? [row, column - 1] : null;
  const right = column < image[row].length - 1 ? [row, column + 1] : null;
  const top = row > 0 ? [row - 1, column] : null;
  const bottom = row < image.length - 1 ? [row + 1, column] : null;

  const baseColor = image[row][column];
  const points = [top, right, bottom, left].filter((p) => !!p);
  const connectedPoints = [];

  for (const p of points) {
    const [r, c] = p;

    if (image[r][c] === baseColor) {
      connectedPoints.push([r, c]);
    }
  }

  return connectedPoints;
}

describe("Flood Fill", () => {
  test("Should flood fill correctly", () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);

    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0
      )
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);

    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        1,
        0,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ]);

    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 1, 0],
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [0, 0, 0],
      [0, 2, 0],
    ]);
  });
});
