//bai1

// function tinh(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum === 1000) {
//       break;
//     }
//   }
//   //   console.log(arr.pop());
//   console.log(sum);
//   //   document.getElementById("txtNum").innerHTML = arr[i]
// }
// tinh(mang);

function tinh() {
  var tong = 0;
  var n = 0;
  //   var sum = 0;
  while (tong < 1000) {
    n++;
    tong = tong + n;
  }
  console.log(n, tong);
  document.getElementById("txtNum").innerHTML = n;

  //   for (var i = 0; i <= 45; i++) {
  //     sum += i;
  //   }
  //   console.log(sum);
}

//bai2
function sum() {
  var txtText1 = +document.getElementById("txtText1").value;
  var txtText2 = +document.getElementById("txtText2").value;
  var sum1 = 0;
  for (var i = 1; i <= txtText2; i++) {
    sum1 += Math.pow(txtText1, i); //sum1 = sum1 +math.pow(txtText1,i)
  }
  console.log(sum1);
}

//bai3

function total() {
  var txtText3 = +document.getElementById("txtText3").value;
  var sum2 = 1;
  for (var i = 1; i <= txtText3; i++) {
    sum2 *= i;
  }
  document.getElementById("txtNum2").innerHTML = sum2;
}

//bai4

function color() {
  var out = "";
  //   var out1 = "";
  var div = '<div style="background-color: green">lONG</div>';

  var div1 = '<div style="background-color: red">lONG</div>';
  //   document.getElementById("txtNum3").innerHTML = "out1";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      out += div;
    } else {
      out += div1;
    }
  }
  document.getElementById("txtNum3").innerHTML = "out";
}

//bai5

function songuyento(x) {
  var dem = 0;
  for (var i = 1; i <= x; i++) {
    if (x % i === 0) {
      dem += 1;
    }
  }
  if (dem !== 2) {
    return "";
  } else if (dem === 2) {
    return x;
  }
}

function insonguyento() {
  var nguyento = "";
  var txtText4 = +document.getElementById("txtText4").value;
  for (var i = 2; i < txtText4; i++) {
    nguyento += songuyento(i);
  }
  document.getElementById("txtNum4").innerHTML = nguyento;
}
