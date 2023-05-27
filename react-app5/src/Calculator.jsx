function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    return (a-b);
}

function multiply(a,b){
    return (a*b);
}

function divide(a,b){
    let div=a/b;
    // div=div.toFixed(4);
    div=div.toFixed(2);
    return div;
}

export default add;
export {sub,multiply,divide};