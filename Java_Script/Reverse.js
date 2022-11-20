let name = 'Ritika Agarwal';
let splitName =name.split(" ");
console.log(splitName);
function reverseStr(splitName){
  var empty =[];
  for(let i =0; i<splitName.length;i++){
var reverseStr =splitName[i].split("").reverse().join("");
    empty.push(reverseStr);
   
  }
  var a= empty.join(" ");
   console.log(a );
}
reverseStr(splitName);
