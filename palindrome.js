let str="naman"
let reverse=""

for(let i=str.length-1;i>=0;i--)
{
  reverse+=str[i];
}
if(reverse==str){
    print="String is palindrome"
}else{
    print="String is not a palindrome"
}
console.log(print)
