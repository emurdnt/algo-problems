const reverse = (x) => {
  //set a limit
  const limit = 2147483648;
  //to check if it's a negative num vs positive
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split("").reverse().join(""));
  //love this part
  return n > limit ? 0 : n * k;
};

console.log(reverse(1534236469));
