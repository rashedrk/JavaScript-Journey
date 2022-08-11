function add(num1, num2) {
    sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum=sum+num;
    }
    return sum;
}
var result = add(2,3,4,5,6,8);
console.log(result);