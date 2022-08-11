var arr=[ 24,57,40,48,58,90,23];
var max=0;
for(var i=0; i<arr.length;i++)
{
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);