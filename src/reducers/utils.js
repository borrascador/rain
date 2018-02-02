export function removeItem(array, action) {
  return array.filter( (item, index) => index !== action.index);
}
