//question 1 
function check(num)
{
    if(num>0)
    console.log("number is positive")
    else
    console.log("number is not positive")
}
check(3)
check(-3)

//question 2 
largestNum = (para)=>{
   largest = para[0]
   for(i=0;i<para.length;i++){
    if(largest<para[i]){
        largest=para[i]
    }
   }
  console.log(largest)
}
 let arr=[13,27,34,12,32]
   largestNum(arr)

   //question 3 
   var obj={
    
    area:function(radius,height){
        return (3.14*radius*radius*height)
    }

   };
   console.log(obj.area(2,3))