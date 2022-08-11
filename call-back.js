function Details(name,age,task)
{
    console.log('Hello There ',name);
    console.log('You are at',age);
    task();
}
function goright() {
    console.log('You need to go right');
}

function goleft() {
    console.log('You need to go Left');
}

Details('kuddus',20,goright);
Details('abbas',22,goleft);