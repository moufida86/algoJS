const input = "15465";
isNumber = true;
for(let character of input) {
    let charCode = input.charCodeAt(index)
    if (charCode < 48 || charCode > 57){
        isNumber = false;
        break;
    }
}
console.log(isNumber);