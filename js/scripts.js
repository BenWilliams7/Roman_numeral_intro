// business logic

  // if number is between 1 and 3999 proceed/pass as input, else dont.
var goodNum = function(input) {
  if ((input >= 1) && (input <= 3999)) {
    return isThousMore(input);
  } else {
    alert("enter whole number between 1 and 3999");
  }
}

  // take input and see if its one of the base roman values else proceed
var isBaseRoman = function(input) {
  if (input === 1) {
  input = "I";
  // alert(input);
  return input;
  }
  if (input === 5) {
  input = "V";
  // alert(input);
  return input;
  }
  if (input === 10) {
  input = "X";
  // alert(input);
  return input;
  }
  if (input === 50) {
  input = "L";
  // alert(input);
  return input;
  }
  if (input === 100) {
  input = "C";
  // alert(input);
  return input;
  }
  if (input === 500) {
  input = "D";
  // alert(input);
  return input;
  }
  if (input === 1000) {
  input = "M";
  // alert(input);
  return input;
  }
}

var isThousMore = function(input) {
  var Ms = ((input - (input % 1000)) / 1000);
  var remainderM = input % 1000;
  input = Ms;
    if (input === 1) {
      input = "M"
    } else if (input === 2){
        input = "MM"
    } else if (input ===3){
        input = "MMM"
    } else if (input === 0){
      input = ""
    }
    return isOneHundMore(input, remainderM);
}

var isOneHundMore = function(input, remainderC) {
  var Cs = ((remainderC - (remainderC % 100)) / 100);
  var remainderC = remainderC % 100;
  if (Cs === 1) {
    input = input + "C"
  } else if (Cs === 2) {
    input = input + "CC"
  } else if (Cs === 3) {
    input = input + "CCC"
  } else if (Cs === 4) {
    input = input + "CD"
  } else if (Cs === 5) {
    input = input + "D"
  } else if (Cs === 6) {
    input = input + "DC"
  } else if (Cs === 7) {
    input = input + "DCC"
  } else if (Cs === 8) {
    input = input + "DCCC"
  } else if (Cs === 9) {
    input = input + "CM"
  }
  return isTenMore(input, remainderC);
}

var isTenMore = function(input, remainderX) {
  var Xs = ((remainderX - (remainderX % 10)) / 10);
  var remainderX = remainderX % 10;
  if (Xs === 1) {
    input = input + "X"
  } else if (Xs === 2) {
    input = input + "XX"
  } else if (Xs === 3) {
    input = input + "XXX"
  } else if (Xs === 4) {
    input = input + "XL"
  } else if (Xs === 5) {
    input = input + "L"
  } else if (Xs === 6) {
    input = input + "LX"
  } else if (Xs === 7) {
    input = input + "LXX"
  } else if (Xs === 8) {
    input = input + "LXXX"
  } else if (Xs === 9) {
    input = input + "XL"
  }
  return isOneMore(input, remainderX);
}

var isOneMore = function(input, remainderI) {
  var Is = ((remainderI - (remainderI % 1)) / 1);
  var remainderI = remainderI % 1;
  if (Is === 1) {
    input = input + "I"
  } else if (Is === 2) {
    input = input + "II"
  } else if (Is === 3) {
    input = input + "III"
  } else if (Is === 4) {
    input = input + "IV"
  } else if (Is === 5) {
    input = input + "V"
  } else if (Is === 6) {
    input = input + "VI"
  } else if (Is === 7) {
    input = input + "VII"
  } else if (Is === 8) {
    input = input + "VIII"
  } else if (Is === 9) {
    input = input + "IX"
  }
  return input;
}

// ui logic
$(document).ready(function(){

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    var result = goodNum(userInput);
    $("#romResult").append(result);
    $("form").hide();
    $(".result").show();
  });

  $("#reload").click(function(){
    location.reload();
  });
});
