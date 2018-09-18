/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let traingles = 0 ;

  for (let i = 0; i < preferences.length; i++) {
    let a = i + 1;
    let b = preferences[a - 1];
    let c = preferences[b - 1];

    if (preferences[c - 1] == a && a != b && b != c && c != a ){
      traingles++ 
    }
  }
  return traingles / 3;
};
