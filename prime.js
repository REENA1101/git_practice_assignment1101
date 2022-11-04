
let number=20
let factor=0

for(i=1;i<=number;i++){
  if(number%i==0){
   factor++
  }
}
if (factor==2){
  console.log("Number is a Prime")

}else{
  console.log("Number is Not a Prime")
}