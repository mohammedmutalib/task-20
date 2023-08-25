function minimumPathSumInTriangle(triangle) {
    const n = triangle.length;
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(triangle[i].length);
    }
    for (let i = 0; i < triangle[n - 1].length; i++) {
      dp[n - 1][i] = triangle[n - 1][i];
    }
    for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
    return dp[0][0];
  }
  const triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
  ];
  console.log(minimumPathSumInTriangle(triangle));
  