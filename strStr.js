var strStr = function(haystack, needle) {
  let match = [];
  
  if(!haystack||!needle) return 0;
  for(let hay in haystack){
      for(let el in needle){
          if(hay === el){
              match.push(hay);
          }
      }
  }
  
  return match.length;
};