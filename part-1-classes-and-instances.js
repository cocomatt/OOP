class Pizza {
  constructor(size, crust, glutenFree) {
    this.size = size;
    this.crust = crust;
    this.glutenFree = glutenFree;
    this.toppings = ['cheese'];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

let pizza1 = new Pizza('medium', 'regular', 'false');
console.log(pizza1.toppings); // [ "cheese" ]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // [ "cheese", "mushrooms", "peppers" ]
console.log(pizza1);

let pizza2 = new Pizza('large', 'thin', 'true');
console.log(pizza2.toppings); // [ "cheese" ]
pizza2.addTopping("pepperoni");
console.log(pizza2.toppings); // [ "cheese", "pepperoni" ];
pizza2.addTopping("pineapple");
console.log(pizza2.toppings); // [ 'cheese', 'pepperoni', 'pineapple' ]
console.log(pizza2);
