export const compareTwoArrayOfString = (a , b)=>{

    if (a.length!==b.length){
        return false
    } else  {
        let result = false;

        // comparing each element of array
        for (let i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return false;
            } else {
                result = true;
            }
        }
        return result;
    }



}