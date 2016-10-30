console.log("Hey this works!");
var clickNo = 0;
console.log("clickNo = " + clickNo);

function clicked () {

  if (clickNo%2 == 1){
    console.log("User has unclecked the box");
  } else {
    console.log("User has checked the box");
  }

  clickNo++;
  console.log("clickNo = " + clickNo);
  return;
}
