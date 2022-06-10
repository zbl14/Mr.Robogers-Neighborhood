function countBy(num) {
  if(Number(num) && num>=0) {
    let countArray = [];
    for (let i = 0; i<=num; i++) {
      countArray.push(i);
      if (countArray[i].toString().includes("3")) {
        countArray[i]=("Won't you be my neighbor?");
      } else if (countArray[i].toString().includes("2")) {
        countArray[i]=("Boop!");
      } else if (countArray[i].toString().includes("1")) {
        countArray[i]=("Beep!");
      }
    }
    return countArray;
  } else {
    return -1;
  }
}
