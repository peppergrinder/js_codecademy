const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('check your input for: meal');
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('check your input for: price');
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today\'s special is ${this._meal} for ${this._price} Dollars.`
      } else {
        return `Meal or price was not set correctly!`
      }
    }
  };
  
  menu.meal = 'Burger';
  menu.price = 12;
  
  //console.log(`BOTTOM LOG:Today\'s special is ${menu._meal} for ${menu._price} Dollars.`)
  
  console.log(menu.todaysSpecial);