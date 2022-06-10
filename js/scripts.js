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
function msgWithName(num, name) {
  // if (noInputtedWord(num)) {
  //   return "";
  // }
  let htmlStr = "<ul>";
  let msgArray = countBy(num).slice();
  msgArray.forEach(function(element) {
    if (element === "Won't you be my neighbor?") {
      htmlStr = htmlStr.concat("<li>" + "Won't you be my neighbor, " + name + "?" + "</li>");
    } else {
      htmlStr = htmlStr.concat("<li>" + element + "</li>");
    }
  });
  return htmlStr + "</ul>"
}

$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const numInput = parseInt($("input#numInput").val());
    const nameInput = $("input#name").val();
    $("#msgWithName").html(msgWithName(numInput,nameInput)).show();
    // $("#neighborName").html(nameInput).show();
    $("#clearResult").show();
  });
  $("#clearResult").click(function() {
    $("#clearResult, #msgWithName").hide();
  });
});