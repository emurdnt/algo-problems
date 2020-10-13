const isPalindrome = (x) => {
  let str = x.toString().split("");
  const newInt = parseInt(str.reverse().join(""));
  if (x === newInt) return x < 0 ? false : true;
  return false;
};

console.log(isPalindrome(101));
