function countBy(num) {
  if(Number(num) && num>=0) {
    let countArray = [];
    for (let i = 0; i<=num; i++) {
      countArray.push(i);
    }
    return countArray;
  } else {
    return -1;
  }
}
