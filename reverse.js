function rev(str)
{
    reverse="";
    for(var i=0; i<str.length; i++)
    {
        reverse= str[i] + reverse;
    }
    return reverse;
}

var speech="Checking the network cables, modem and router Reconnecting to Wi-Fi Running Windows Network Diagnostics"
var revspeech= rev(speech);
console.log(revspeech);
