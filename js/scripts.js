// Utility Logic
function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic
function countBy(num) {
  if(Number(num) && num>0) {
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
    return false;
  }
}

// UI Logic
function msgWithName(num) {
  // if (noInputtedWord(num)) {
  //   return "";
  // }
  let htmlStr = "<p>";
  let msgArray = countBy(num).split(" ");
  msgArray.forEach(function(element) {
    if (element === "Won't you be my neighbor?") {
      htmlStr = htmlStr.concat("Won't you be my neighbor, XX?");
    } else {
      htmlStr = htmlStr.concat(element);
    }
  });
  return htmlStr + "</p>"
}

$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const numInput = parseInt($("input#numInput").val());
    const nameInput = $("input#name").val();
    // let numCount = countBy(numInput);
    $("#msgWithName").html(countBy(numInput)).show();
    // $("#neighborName").html(nameInput).show();
    $("#clearResult").show();
  });
  $("#clearResult").click(function() {
    $("#clearResult, #msgWithName").hide();
  });
});