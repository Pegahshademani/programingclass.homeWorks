



let prices=[100.00,100.00,100.00,200.00,200.00,200.00,250.00,250.00,400.00,400.00,400.00,320.00,320.00,320.00,320.00,360.00,360.00,360.00,300.00,300.00,300.00,300.00,150.00,-10.000]


let x=0

function compareCost(k) {
     let costs = [];
    let timePeriod = 24 - k

    if (k>24 || k<0) {
    throw 'k must be between 0 and 24'
}

   for ( let x=0;x <= timePeriod;x=x+k ) {

       let slicedPrice = prices.slice(x, x + k);
       const sum = slicedPrice.reduce((a, b) => a + b, 0);
       costs.push(sum);
    }

    // get the index for the minimum cost
   let minIndex = 0;
    let value = costs[0];
    for (let i = 1; i < costs.length; i++) {
        if (costs[i] < value) {
            value = costs[i];
            minIndex = i;
        }


    }


    return minIndex * k;


    }





// const output = ;
console.log(compareCost(2));

export {compareCost}



