
import {allPrime} from "./Prime.js";




test(`prime numbers between 20 are...`,()=>{

        expect(allPrime(20).next().value).toContain(17,7,11,3,5,2,19)
    }
)

// p=allPrime(150000)
test(` 3 prime numbers greater than  100000 are...`,()=>{

        expect(allPrime(150000).next().value).toContain(100003,100019,100043)
    }
)