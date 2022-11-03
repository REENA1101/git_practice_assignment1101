let num=12
let factor=0

for(i=1;i<=num;i++){
  if(num%i==0){
   factor++
  }
}
if (factor==2){
  console.log("Given Number is a Prime")
}else{
  console.log("Given Number is Not a Prime")
}