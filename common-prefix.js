var longestCommonPrefix = function (strs) {
  //loop through arr of strings
  //loop through each word until it's different
  let str = "";
  let common = true;
  let idx = 0;
  let letter = strs[idx][idx];
  for (let el of strs) {
    if (el[0] === letter) {
      common = true;
    } else {
      idx++;
      common = false;
    }
  }

  if (common) {
    str += letter;
  }

  return str;
};

console.log(longestCommonPrefix(["flower", "flow", "light"]));
