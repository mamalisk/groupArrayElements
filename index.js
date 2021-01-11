/**
 * It defines the error messages the function throws
 */
export const ERROR_MESSAGES = {
    NotAnArray: 'Not an array',
    IncorrectDenominator: 'Incorrect Denominator',
    EmptyArray: 'Empty Array',
}

/**
 * It should divide a non-empty array of elements into an array of 'N' sub-arrays.
 * @param {Array} array
 * @param {number} N
 */
export const groupArrayElements = (array, N) => {
    // Error cases
    if(!Array.isArray(array) || !array) throw new Error(ERROR_MESSAGES.NotAnArray);
    if(array.length === 0) throw new Error(ERROR_MESSAGES.EmptyArray);
    if(isNaN(N) || N <= 0 || N % 1 !== 0) throw new Error(ERROR_MESSAGES.IncorrectDenominator);

    // N is greater than the length of the array
    if(N > array.length) return [array];

    // All other cases:
    const result = [];
    const quotient = Math.floor(array.length) / N;
    while(array.length > 0) {
        const toAdd = [];
        for(let i=0; i<quotient; i++){
            if(array.length > 0) {
                const firstElement = array.shift();
                toAdd.push(firstElement);
            }
        }
        result.push(toAdd);
    }

    return result;
}



