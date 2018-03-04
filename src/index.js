module.exports = function getZerosCount(number) {
  // your implementation
  let count=0;
  let n = 1;
  for (let i=5; i<=number; i=i+5){
    //if (i % 5 == 0){
      count++;
      n = i / 5;
      while (n%5==0){
        count++;
        n = n / 5;
      }
    }
  //}
  return count;

}
