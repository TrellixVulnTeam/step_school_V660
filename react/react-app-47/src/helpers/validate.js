export const validate = str => {
    let num = parseInt(str);
    if(isNaN(num)) return 10;
    num = num < 0 ? -num : num > 100 ? 100 : num;
    return num;
}