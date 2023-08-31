const prompt = require("prompt-sync")();

function calculate(qty) {
      price = 10 * qty;
      if(qty<5){
            newp = price;
      }
      else if(qty>=5 && qty<=10){
            newp = price - (0.1*price);
      }
      else{
            newp = price - (0.2*price);
      }

return newp;
}
let qty = prompt("Enter the quantity of coffee bags ordered");
console.log("Your total bill is: "+calculate(qty));