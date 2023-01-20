

let primes=[]

function  isPrime (number) {


    if (number === 2 || number === 3) return true;
    if (number <= 1 || number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    } return true;
}


function * allPrime(max){
    let i=0;


    while(i<=max){

        isPrime(i)
        if (isPrime(i)){
            primes.push(i)
            i++
        }else {
            i++
        }

    } yield primes

}


// const p=allPrime(20)
//  console.log(p.next().value)
export {allPrime}







