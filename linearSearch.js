function linearSearch(searchTerm, arr) {
  for ([index, value] of arr.entries()){
    if (value === searchTerm){
      return index
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  result = []
  for ([index, value] of arr.entries()){
    if (value === searchTerm){
      result.push(index)
    }
  }
  return result
  return [];
}

module.exports = { linearSearch, globalLinearSearch };
