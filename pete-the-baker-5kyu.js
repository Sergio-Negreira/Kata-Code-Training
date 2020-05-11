function cakes(recipe, available) {
  let ans = 100
  for(const key in recipe){
    if (available[key]){
      if(ans>available[key]/recipe[key]) {
        ans = Math.floor(available[key]/recipe[key])
      }
  } else {
    ans = 0
    break
  }
}
return ans
}