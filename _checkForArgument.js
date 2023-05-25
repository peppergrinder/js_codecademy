const icanhaz = (argument) => {
    if (argument === undefined) {
      return 'i can haz cheezburger?';
    } else {
      return 'i can haz ' + argument + '?';
    }
  };
console.log(icanhaz('pizza'));