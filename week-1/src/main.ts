// Rotate an array to the right by a given number of steps

const A: number[] = [3,8,9,7,6];
const K: number = 3;

function solution(A: number[], K: number): number[] {
  var result: number[] = [];
  for(var number of A){
    result.includes(A[number]);
  }
  return result;
};

console.log(solution(A, K));
