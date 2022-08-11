var arr= ['salam','malam','alam','kulam','malam','cilam','malam','salam'];
var uniquearr=[];
for(i=0;i<arr.length;i++)
{
    if(uniquearr.indexOf(arr[i])==-1)
    {
        uniquearr.push(arr[i]);
    }
}
console.log(uniquearr);