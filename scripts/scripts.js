var previousStance = [];
var returnCounter = 1;
var enterPushedForResult = 0;

document.getElementById("delete").onclick = (e) => {
    previousStance = [];
    returnCounter = 1;
    document.getElementById("input-field").innerHTML = "";
}

document.getElementById("number-nine").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "9";
    }
    else {
      document.getElementById("input-field").innerHTML += "9";
    }
}
    
document.getElementById("number-eight").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "8";
    }
    else {
      document.getElementById("input-field").innerHTML += "8";
    }
}

document.getElementById("number-seven").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "7";
    }
    else {
      document.getElementById("input-field").innerHTML += "7";
    }
}

document.getElementById("number-six").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "6";
    }
    else {
      document.getElementById("input-field").innerHTML += "6";
    }
}

document.getElementById("number-five").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "5";
    }
    else {
      document.getElementById("input-field").innerHTML += "5";
    }
}

document.getElementById("number-four").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "4";
    }
    else {
      document.getElementById("input-field").innerHTML += "4";
    }
}

document.getElementById("number-three").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "3";
    }
    else {
      document.getElementById("input-field").innerHTML += "3";
    }
}

document.getElementById("number-two").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "2";
    }
    else {
      document.getElementById("input-field").innerHTML += "2";
    }
}

document.getElementById("number-one").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "1";
    }
    else {
      document.getElementById("input-field").innerHTML += "1";
    }
}

document.getElementById("number-zero").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "0";
    }
    else {
      document.getElementById("input-field").innerHTML += "0";
    }
}

document.getElementById("dot").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = ".";
    }
    else {
      document.getElementById("input-field").innerHTML += ".";
    }
}

document.getElementById("modulo").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "%";
}

document.getElementById("divide").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "/";
}

document.getElementById("multiply").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "*";
}

document.getElementById("add").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "+";
}

document.getElementById("subtract").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "-";
}

document.getElementById("left-bracket").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = "(";
    }
    else {
      document.getElementById("input-field").innerHTML += "(";
    }
}

document.getElementById("right-bracket").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    if (enterPushedForResult == 1) {
      enterPushedForResult = 0;
      document.getElementById("input-field").innerHTML = ")";
    }
    else {
      document.getElementById("input-field").innerHTML += ")";
    }
}

document.getElementById("square").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "²";
}

document.getElementById("square-root").onclick = (e) => {
    previousStance.push(document.getElementById("input-field").innerHTML);
    returnCounter = 1;
    enterPushedForResult = 0;
    document.getElementById("input-field").innerHTML += "√";
}

document.getElementById("return").onclick = (e) => {
    enterPushedForResult = 0;
    if ( (previousStance.length - returnCounter) < 1 ) {
      document.getElementById("input-field").innerHTML = "";
    }
    else {
    document.getElementById("input-field").innerHTML = previousStance[previousStance.length - returnCounter];
    returnCounter++;
    }
}

// CALCULATE
const calculate = (e) => {
    
  previousStance.push(document.getElementById("input-field").innerHTML);
  enterPushedForResult = 1;
  
  let input = document.getElementById("input-field").innerHTML.toString();
  var modifiedInput = input;
  
  // Detecting malformed expressions and illegal sign combinations
  if ( /[*|%][-|+]/g.test(modifiedInput) || /[-|+][*|%]/g.test(modifiedInput) || /[/|+][-|%]/g.test(modifiedInput) || /[-|%][/|+]/g.test(modifiedInput) || /[-][-]/g.test(modifiedInput) 
  	|| /[*|/][/|+]/g.test(modifiedInput) || /[/|+][*|+]/g.test(modifiedInput) || /[%|*][*|%]/g.test(modifiedInput) || /[+|*][/|²]/g.test(modifiedInput) || /[/|-][²]/g.test(modifiedInput) 
  	|| /[(|%][²]/g.test(modifiedInput) || /[(][+|*]/g.test(modifiedInput) || /[(][-|/]/g.test(modifiedInput) || /[/|*][)]/g.test(modifiedInput) || /[+|-][)]/g.test(modifiedInput) 
  	|| /[%|√][)|.]/g.test(modifiedInput) || /[.][\D]/g.test(modifiedInput) || /[\D][.]/g.test(modifiedInput) || /[\d][√]/g.test(modifiedInput) || /[(][)]/g.test(modifiedInput) 
  	|| /[)][\d]/g.test(modifiedInput) || /[\d|)][(]/g.test(modifiedInput) )   {
    return document.getElementById("input-field").innerHTML = "<p style=\"font-size: 1.8vw;\">" + "malformed expression" + "</p>";
  }
  
  // Counting all square root values
  while (/\√\d/.test(modifiedInput)) {
    if (/\√\d+\.\d+/.test(modifiedInput)) {
      modifiedInput = modifiedInput.replace( /\√\d+\.\d+/, Math.sqrt(modifiedInput.match(/(?<=√)\d+\.\d+/)) );
    }
    else {
      modifiedInput = modifiedInput.replace( /\√\d+/, Math.sqrt(modifiedInput.match(/(?<=√)\d+/).toString()) );
    }
  }
  
  // Counting all power of two values
  while (/\d+(?=\²)/.test(modifiedInput)) {
    if (/\d+\.\d+\²/.test(modifiedInput)) {
      modifiedInput = modifiedInput.replace( /\d+\.\d+\²/, Math.pow(modifiedInput.match(/\d+\.\d+(?=\²)/), 2) );
    }
    else {
      console.log(modifiedInput);
      modifiedInput = modifiedInput.replace( /\d+\²/, Math.pow(modifiedInput.match(/\d+(?=\²)/), 2) );
      console.log(modifiedInput);
    }
  }
  
  // Counting all parentheses' values
  while (/\)/.test(modifiedInput)) {
    let regExp = /\(([^)]+)\)/;
    let matches = regExp.exec(modifiedInput);
    for (let i = 0; i < matches.length; i++) {
      
      console.log(matches[i]);
      
      modifiedInput = modifiedInput.replace(matches[i], eval(matches[i]) );
      
    }
  }
 
  // Counting all left power values
  while (/\²/.test(modifiedInput)) {
    if (/\d+\.\d+\²/.test(modifiedInput)) {
      modifiedInput = modifiedInput.replace( /\d+\.\d+\²/, Math.pow(modifiedInput.match(/\d+\.\d+(?=\²)/), 2) );
    }
    else {
      modifiedInput = modifiedInput.replace( /\d+\²/, Math.pow(modifiedInput.match(/\d+(?=\²)/), 2) );
    }
  }
  
  // Counting all left square root values
  while (/\√\d/.test(modifiedInput)) {
    if (/\√\d+\.\d+/.test(modifiedInput)) {
      modifiedInput = modifiedInput.replace( /\√\d+\.\d+/, Math.sqrt(modifiedInput.match(/(?<=√)\d+\.\d+/)) );
    }
    else {
      modifiedInput = modifiedInput.replace( /\√\d+/, Math.sqrt(modifiedInput.match(/(?<=√)\d+/).toString()) );
    }
  }
  
  // Not so evil eval here
  let result = Math.round(eval(modifiedInput.valueOf())*10000)/10000;
  document.getElementById("input-field").innerHTML = result;
  
}

document.getElementById("enter").onclick = calculate;