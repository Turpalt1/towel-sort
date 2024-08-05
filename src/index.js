
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) return [];
  let score = 1;
  let result = [];
  matrix.forEach(e => {
    if(score % 2 == 0){
      for (let j = e.length - 1; j >= 0; j--) {
        result.push(e[j])
      }
    }else{
      for (let i = 0; i < e.length; i++) {
        result.push(e[i])
      }
    }
    score++;
  })
  return result;
}
