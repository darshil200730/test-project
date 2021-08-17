
function setup() {
  createCanvas(800,800);
var arr=[10,15,20,25,35]

  
    
  
   
api()


}



function draw() {
  background("black");  
 
  
}
function positive() {
  var arr=[-10,10,-20,20,30]
  for(i=0;i<=4;i=i+1){
    if(arr[i]>0)
    console.log(arr[i])
  }
  
}
function negative() {
  var arr=[-10,10,-20,20,30]
  for(i=0;i<=4;i=i+1){
    if(arr[i]<0)
    console.log(arr[i])
  }
}
 function positiveeven() {
   var arr=[-10,10,-20,20,30]
   for(i=0;i<4;i=i+1){
     if(arr[i]%2===0&&arr[i]>0)
     console.log(arr[i])
   }
 }
function deletethevalue()  {
  var arr=[-10,10,-20,20,30]
  var c=1 
  for(i=c;i<4;i=i+1){
 arr[i]=arr[i+1]
  }
  console.log(arr)
}
 function phectorial() {
var a=5
var c=1
for(i=a;i>=1;i--)
{
c=c*i

}
console.log(c)
 }
 function phectorialofeachnumber()
 {
   for(i=1;i<=10;i++){
     c=1
     for(j=1;j<=i;j=j+1)
     {
       c=c*j
     }
     console.log(c)
   }

 }
 async function api()
 {
   var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data=await response.json()
  var time=data.datetime
  console.log(time)
 }