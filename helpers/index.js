
export function money(amount){
    if(isNaN(amount)){
        return 'Invalid Amount';
    }

    return `$${(amount/100).toFixed(2)}`;
}
