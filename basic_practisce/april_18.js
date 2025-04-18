function IsReverseString(str) {
  let output = "";
  let len = str.length         
  console.log(len)
  for (let i = len - 1; i >= 0; i--) { 
    //let tempOutput = output
    //console.log(output)
    output += str[i]



  }
  //console.log(tempOutput, "+", str[i], "=", output)

  return output;
}
console.log(IsReverseString("Aditya1234"))
console.log(IsReverseString("123arya"))   // output will be ayra321
// 4
// 4 + 3="43"
// "43" + "2"= "432"     
// "432" + "1" = "4321"
// "4321" + "a" = "4321a"
// "4321a" + "y" = "4321ay"
// "4321ay" + "t" = "4321ayt"
// "4321ayt" + "i" = "4321ayti"
// "4321ayti" + "d" = "4321ayitd"
// "4321aytid" + "A " = "4321ayitdA"
                                                              