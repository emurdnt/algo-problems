var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  let prev = 0;
  for (let i = 0; i < s.length; i++) {
    let value = symbols[s[i]];
    prev = symbols[s[i - 1]];
    if (prev < value) {
      value = symbols[s[i]] - symbols[s[i - 1]];
      sum -= prev;
      sum += value;
      //console.log(value);
    } else {
      console.log("added", symbols[s[i]]);
      sum += value;
    }
    //console.log(value);
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
