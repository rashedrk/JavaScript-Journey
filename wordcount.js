var speech="Checking the network cables, modem and router Reconnecting to Wi-Fi Running Windows Network Diagnostics"
var count=0;
for(var i=0;i<speech.length;i++)
{
    if(speech[i]==' ' && speech[i-1]!=' ')
    {
        count++;
    }
}
count++;
console.log(count);