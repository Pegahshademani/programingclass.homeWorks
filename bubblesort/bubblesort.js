


/*function swapElements(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}*/


function bubbleSort (arr){

    let len=arr.length
    let isSwapped=false;

    for (let i=0;i < len ; i++){
        isSwapped=false;
        for(let a=0; a < len-1; a++){
            if (arr[a]>arr[a+1]){
               // swapElements(arr,[a],[a+1])
                let temp= arr[a]
                arr[a]=arr[a+1]
              arr[a+1]=temp
                isSwapped=true;
            }

        }

    }
}

export {bubbleSort}