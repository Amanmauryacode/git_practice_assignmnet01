function isPrime(num){
    for(let i= 2; i*i< num; i++){
        if(num%i == 0){
            return "Prime";
        }
    }
    return "Not Prime";
}

console.log(isPrime(14));
