let string="abccba"
let new_string=""

for(let i=string.length-1;i>=0;i--){
  new_string+=string[i];
  if(new_string==string){
    print="Yes"
  }else{
    print="No"
  }
  }
console.log(print);

