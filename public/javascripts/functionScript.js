function openFuntion(functionName,evt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active border-l border-t border-r rounded-t bg-yellow-lightest", "");
  }
  document.getElementById(functionName).style.display = "block";
  evt.currentTarget.className += " active border-l border-t border-r rounded-t bg-yellow-lightest"
}

function validasiFibo() {
  var testElem = document.getElementById('test');
  var btnFibo = document.getElementById('btnFibo');
  document.getElementById('numberFibo').addEventListener("keyup", function (e) {
    if (isNaN(e.target.value)) {
      testElem.innerHTML = 'Invalid input';
      testElem.classList.add('text-red');
      btnFibo.classList.add('cursor-not-allowed');
    } else if (e.target.value === "") {
      testElem.innerHTML = 'Please just input a number ';
      testElem.setAttribute('class','text-grey-dark text-xs italic');
      btnFibo.classList.remove('cursor-not-allowed');
    }
  }, false);
}

function validasiPrime() {
  var test2Elem = document.getElementById('test2');
  var btnPrime = document.getElementById('btnPrime');
  document.getElementById('numberPrime').addEventListener("keyup", function (e) {
    if (isNaN(e.target.value)) {
      test2Elem.innerHTML = 'Invalid input';
      test2Elem.classList.add('text-red');
      btnPrime.classList.add('cursor-not-allowed');
    } else if (e.target.value === "") {
      test2Elem.innerHTML = 'Please just input a number ';
      test2Elem.setAttribute('class','text-grey-dark text-xs italic');
      btnPrime.classList.remove('cursor-not-allowed');
    }
  }, false);
}

function isPrime(num) {
  var prime = true;
  if (num >= 2){
    if (num == 2 || num == 3){
      prime = true;
    } else if (num % 2 == 0) {
      prime = false;
    } else {
      var sq = Math.ceil(Math.sqrt(num));
      for (var i = 3; i <= sq; i+=2) {
        if (num % i === 0) {
          prime = false;
        }
      }
    }
  } else {
    prime = false;
  }
  return prime;
}


function largestPrimeFactors() {
  var num = document.getElementById("numberPrime").value;
  var arrayPrime =[],
     loopPrime;

  for(i = 1; i <= num; i++){
    if (num % i === 0) {
      loopPrime = isPrime(i);

      if (loopPrime === true) {
        arrayPrime.push(i);
        num = num / i;
      }
    }  
  }
  var maxNumPrime = Math.max.apply(null, arrayPrime);
  document.getElementById("answerPrime").setAttribute('value', maxNumPrime);
}

function evenFibonacci() {
  var num = document.getElementById("numberFibo").value;
  var i = 0, fib = [], evenfib = [], bilFibonacci = 0;

  while(bilFibonacci < num) {
    if (i === 0) {
      fib[i] = 1;
    } else if (i === 1) {
      fib[i] = 2;
    } else {
      fib[i] = fib[i-2] + fib[i-1];
    }

    bilFibonacci = fib[i];

    if (bilFibonacci > num) {
      break;
    }

    if (bilFibonacci % 2 === 0){
      evenfib.push(bilFibonacci);
    }

    i++;
  }
  document.getElementById("answerFibo").setAttribute('value', evenfib);
}

